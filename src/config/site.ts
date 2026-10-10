// Build-time site configuration. PUBLIC_* vars are inlined by Vite.

export const SITE_URL = 'https://lunacam.app';
export const SITE_NAME = 'LunaCam';

export const APP_URL = import.meta.env.PUBLIC_APP_URL || 'https://app.lunacam.app';
export const CONSOLE_URL = import.meta.env.PUBLIC_CONSOLE_URL || 'https://console.lunacam.app';
export const DEVELOPERS_URL = import.meta.env.PUBLIC_DEVELOPERS_URL || 'https://developers.lunacam.app';
export const SIGNUP_URL = `${APP_URL}/register`;

// Leads (demo and installer forms). LunaCam has no public lead endpoint yet,
// so the forms post to this URL once it exists; until then they fall back to
// email (see components/forms/lead-form.ts).
export const LEAD_API_URL = import.meta.env.PUBLIC_LEAD_API_URL || '';

export const CONTACT_EMAIL = 'info@ninjainfosys.com';
export const SECURITY_EMAIL = 'security@lunacam.app';
export const CONTACT_PHONE_DISPLAY = '985-1343348';
export const CONTACT_PHONE_TEL = 'tel:+9779851343348';
export const CONTACT_PHONE_JSONLD = '+977-9851343348';
export const LANDLINE_DISPLAY = '01-5922361';

// LunaCam is run by Ninja Infosys Pvt. Ltd., Kathmandu.
export const COMPANY = 'Ninja Infosys Pvt. Ltd.';
export const ADDRESS = { street: 'Bulbule Marga, Anamnagar', locality: 'Kathmandu', region: 'Bagmati', postal: '44600', country: 'NP', countryName: 'Nepal', lat: 27.6932429, lng: 85.3301396 } as const;
export const LEGAL_ADDRESS = { street: ADDRESS.street, locality: ADDRESS.locality, region: ADDRESS.region, postal: ADDRESS.postal, country: ADDRESS.country } as const;
export const LEGAL_ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.locality} ${ADDRESS.postal}, ${ADDRESS.countryName}`;
export const OFFICE_LINE = `${ADDRESS.street}, ${ADDRESS.locality} ${ADDRESS.postal}, ${ADDRESS.countryName}`;
export const OFFICE_MAP_URL = 'https://www.google.com/maps/place/Ninja+Infosys+Pvt.+Ltd./@27.6932429,85.3301396,17z/data=!4m6!3m5!1s0xa8783ce7a30f3c2f:0xfb91b2dfbc0c1f56!8m2!3d27.6932429!4d85.3301396';

/** LunaCam's official profiles, sent as `sameAs`. None yet. */
export const SOCIAL_PROFILES: readonly string[] = [];
