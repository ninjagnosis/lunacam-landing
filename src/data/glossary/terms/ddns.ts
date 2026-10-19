import type { Term } from "../types";

const term: Term = {
  slug: "ddns",
  term: "DDNS",
  full: "Dynamic DNS",
  aka: ["Dynamic DNS", "Dynamic domain name system", "DynDNS", "No-IP"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "What is DDNS (Dynamic DNS)? Meaning, setup and when it fails",
  description: "DDNS gives a changing home IP address a fixed name so you can reach your DVR or router. How it works, DDNS vs static IP and why it fails behind CGNAT.",
  short: "DDNS, or dynamic DNS, gives a fixed name to an internet connection whose IP address keeps changing. It lets you reach a DVR or router from outside using a name instead of a number.",
  body: [
    "Most home and shop connections have a dynamic public IP address that the provider can change at any time. If you remember the address and it changes, remote access breaks. DDNS keeps a name such as myshop.example.com pointed at the current address.",
    "A small program on your router or DVR tells the DDNS service whenever the address changes. The service updates the name, so the name always leads to you.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is DDNS and what does it do?",
      p: [
        "DNS turns names into numbers. Dynamic DNS lets the number behind a name change quickly. Providers include No-IP, DynDNS, DuckDNS and free name services built into some DVRs. Many routers have a DDNS client built in.",
      ],
    },
    {
      id: "how",
      h: "How does DDNS work?",
      p: [
        "The steps are:",
      ],
      list: [
        "You create a hostname with a DDNS provider.",
        "You enter the hostname and your account details in the router or DVR.",
        "The device checks its public IP address and sends it to the provider whenever it changes.",
        "You type the hostname and a port to reach the device, for example myshop.example.com:8000.",
        "You still need [port forwarding](/glossary/port-forwarding) on the router, because DDNS only gives the name. It does not open any door.",
      ],
    },
    {
      id: "vs",
      h: "DDNS vs static IP",
      p: [
        "A [static IP](/glossary/static-ip) never changes, so no DDNS is needed, but providers often charge for it. DDNS works with a dynamic address and costs little or nothing. The catch is a short gap after each address change, when the name still points to the old address.",
      ],
    },
    {
      id: "cgnat",
      h: "Why DDNS fails behind CGNAT",
      p: [
        "DDNS needs a real public IP address that belongs to you. If your provider shares one address among many customers, you are behind [CGNAT](/glossary/cgnat). The name then points at the shared address, and incoming connections never reach your router. The same goes for [UPnP](/glossary/upnp), which cannot open a port that the provider's equipment blocks.",
        "To check, compare your router's WAN address with what a website shows as your IP. See [why CCTV remote viewing fails behind CGNAT](/blog/cctv-remote-viewing-cgnat-nepal).",
      ],
    },
    {
      id: "security",
      h: "Security cautions",
      p: [
        "A DDNS name plus a forwarded port exposes the recorder's login page to the whole internet. Change default passwords first. See [default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras). Keep firmware updated, avoid forwarding more ports than needed, and prefer an approach where the recorder connects outward instead.",
        "On a LunaCam Box, the connection starts from the box to LunaCam servers, so no DDNS, port forwarding or public IP is needed.",
      ],
    },
    {
      id: "setup",
      h: "Setting up DDNS step by step",
      p: [
        "Check first that you have a public address. Compare the router WAN address with what a website shows. If they match, continue. Create a hostname with a provider, enter it in the router (most routers have a DDNS page) or in the DVR network menu, and confirm that the status reads online. Then forward the ports your DVR uses and test from mobile data, not from your own Wi-Fi, because some routers do not loop back to their own public address.",
        "Free tiers may have limits, such as periodic confirmation of the hostname. If your hostname lapses silently, remote viewing stops without warning. Put a reminder in the calendar or use a paid plan.",
      ],
    },
    {
      id: "alternatives",
      h: "Alternatives that avoid port forwarding",
      p: [
        "If your provider uses CGNAT, DDNS cannot help. The options reported by network guides are: ask the provider for a public address, use a tunnel or mesh VPN product such as Tailscale or ZeroTier, which creates connections without a public address, or use a device that connects outward to a service. A VPN keeps the recorder off the open internet, which is safer than a forwarded port, but each viewer needs the VPN client.",
        "For a family or a shop owner who just wants to watch from a phone, an outward-connecting app is the easier path. See [watch your DVR from your phone in Nepal](/blog/watch-dvr-from-phone-nepal).",
      ],
    },
    {
      id: "lunacam",
      h: "DDNS and LunaCam",
      p: [
        "LunaCam does not need DDNS. The LunaCam Box is claimed with a code or QR and then keeps its own outward connection, so a changing address or CGNAT makes no difference. See [LunaCam Box](/products/lunacam-box).",
      ],
    },
  ],
  faq: [
    { q: "What is the full form of DDNS?", a: "Dynamic domain name system, usually called dynamic DNS." },
    { q: "Do I need DDNS if I have a static IP?", a: "No. A static IP does not change, so you can use it directly or give it a normal DNS name." },
    { q: "Is DDNS free?", a: "Some providers have a free tier with limits, such as a name that must be confirmed every month. Paid plans remove the limits." },
    { q: "Why is my DDNS not working?", a: "Common causes are a wrong port forward, a router firewall, a changed address that has not yet updated, or CGNAT, which makes DDNS useless." },
    { q: "Is DDNS safe?", a: "The name itself is harmless, but it makes your forwarded ports easy to find. Use strong passwords and keep firmware updated." },
    { q: "Is DDNS the same as port forwarding?", a: "No. DDNS gives your changing address a name. Port forwarding opens the router to a device. For remote access you usually need both." },
    { q: "Can I use DDNS on a mobile data connection?", a: "Rarely. Mobile providers almost always use CGNAT, so incoming connections do not reach you." },
  ],
  related: ["static-ip", "port-forwarding", "cgnat", "upnp", "p2p-cloud"],
  product: "lunacam-box",
};

export default term;
