import { buildBody, submitLead, validateLead, type LeadInput } from '../../lib/lead';
import { CONTACT_PHONE_DISPLAY, CONTACT_EMAIL, LEAD_API_URL } from '../../config/site';

class LeadForm extends HTMLElement {
  connectedCallback() {
    const form = this.querySelector('form')!;
    const kind = form.dataset.kind as 'demo' | 'reseller';
    const btn = form.querySelector<HTMLButtonElement>('.submit')!;
    const status = form.querySelector<HTMLElement>('.status')!;
    const field = (n: string) => form.elements.namedItem(n) as HTMLInputElement | null;
    const utm: Record<string, string> = {};
    new URLSearchParams(location.search).forEach((v, k) => { if (k.startsWith('utm_')) utm[k] = v.slice(0, 100); });

    const read = (): LeadInput => ({
      name: field('name')?.value ?? '',
      phone: field('phone')?.value ?? '',
      business: field('business_name')?.value ?? '',
      consent: !!field('consent')?.checked,
      type: (form.elements.namedItem('business_type') as HTMLSelectElement | null)?.value || undefined,
      city: field('city')?.value,
    });

    const show = (errors: Record<string, string>) => {
      for (const key of ['name', 'phone', 'business', 'consent']) {
        const input = field(key === 'business' ? 'business_name' : key);
        const err = form.querySelector<HTMLElement>(`#${form.id}-${key}-err`);
        const msg = errors[key];
        if (input) {
          input.setAttribute('aria-invalid', String(!!msg));
          if (msg) input.setAttribute('aria-describedby', `${form.id}-${key}-err`); else input.removeAttribute('aria-describedby');
        }
        if (err) { err.textContent = msg ?? ''; err.hidden = !msg; }
      }
      const first = Object.keys(errors)[0];
      if (first) field(first === 'business' ? 'business_name' : first)?.focus();
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (btn.getAttribute('aria-busy') === 'true') return;
      if (field('website')?.value) return; // honeypot
      const input = read();
      const errors = validateLead(input);
      show(errors as Record<string, string>);
      status.textContent = '';
      status.className = 'status';
      if (Object.keys(errors).length) return;

      // No lead endpoint yet: open an email with the details filled in.
      if (!LEAD_API_URL) {
        const b = buildBody(input, kind, utm);
        const text = `Walkthrough request\nName: ${input.name}\nPhone: ${b.phone}\nBusiness: ${b.business_name ?? ''}\nType: ${b.business_type ?? ''}\nCity: ${input.city ?? ''}`;
        location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('LunaCam ' + kind)}&body=${encodeURIComponent(text)}`;
        status.className = 'status ok';
        status.textContent = 'Your email app should open with the details filled in. Send it and we will call you.';
        return;
      }

      btn.setAttribute('aria-busy', 'true');
      btn.disabled = true;
      const result = await submitLead(LEAD_API_URL, buildBody(input, kind, utm));
      btn.removeAttribute('aria-busy');
      btn.disabled = false;

      if (result.ok) {
        form.reset();
        status.className = 'status ok';
        status.textContent = kind === 'reseller'
          ? 'Thanks. Our installer team will call you within one working day.'
          : 'Thanks. We will call you within one working day to set up your walkthrough.';
        return;
      }
      status.className = 'status bad';
      if (result.kind === 'invalid') {
        const mapped: Record<string, string> = {};
        if (result.errors.phone) mapped.phone = 'Check the phone number.';
        if (result.errors.business_name) mapped.business = 'Check the business name.';
        if (result.errors.consent) mapped.consent = 'Tick the box so we can call you.';
        show(mapped);
        status.textContent = 'Some details need fixing.';
      } else if (result.kind === 'rate_limited') {
        status.textContent = `Too many tries. Please wait ${result.retryAfter} seconds and send again.`;
      } else {
        status.textContent = `That did not go through. Check your connection and try again, or call ${CONTACT_PHONE_DISPLAY}.`;
      }
    });
  }
}

if (!customElements.get('lead-form')) customElements.define('lead-form', LeadForm);
