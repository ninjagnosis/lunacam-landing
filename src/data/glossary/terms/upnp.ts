import type { Term } from "../types";

const term: Term = {
  slug: "upnp",
  term: "UPnP",
  full: "Universal Plug and Play",
  aka: ["Universal Plug and Play", "UPnP port mapping", "IGD", "NAT-PMP"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "What is UPnP? Meaning, risks and why to turn it off on CCTV",
  description: "UPnP lets a device open router ports automatically. How it works with DVRs, why experts advise turning it off and why it fails behind CGNAT.",
  short: "UPnP, or Universal Plug and Play, lets a device on your network ask the router to open ports automatically. DVRs and cameras use it to skip manual port forwarding.",
  body: [
    "Normally you open ports on your router yourself. With UPnP the device does it: a DVR asks the router to forward port 8000 to it, and the router agrees without asking you.",
    "That convenience is also the risk. Any device on your network, including an infected one, can open a door to the internet without your knowledge. UPnP is on by default on many routers.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is UPnP?",
      p: [
        "UPnP is a set of network protocols that let devices find each other and configure the router. The part used for CCTV is the internet gateway device (IGD) function, which handles port mapping. A similar feature in some routers is NAT-PMP.",
      ],
    },
    {
      id: "how",
      h: "How does UPnP work with a DVR or camera?",
      p: [
        "On first start, the DVR sends a request to the router asking for a port mapping. If UPnP is on, the router adds a rule and the DVR is reachable from outside at the router's public address. The recorder's network menu may show the mapped ports as active or failed.",
        "This is the automatic form of [port forwarding](/glossary/port-forwarding). A name service such as [DDNS](/glossary/ddns) is still needed if the address changes.",
      ],
    },
    {
      id: "risks",
      h: "Security risks of UPnP",
      p: [
        "Security agencies and researchers have long advised turning UPnP off on routers unless needed. The main concerns:",
      ],
      list: [
        "Any device or malware inside the network can open ports, with no password.",
        "A recorder with a default password becomes reachable from the internet. See [default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras).",
        "Flaws in some router UPnP software have been abused to open ports from outside.",
        "You do not see which ports are open unless you check the router's mapping list.",
      ],
    },
    {
      id: "off",
      h: "Should you turn UPnP off?",
      p: [
        "For most sites, yes. Turn it off on the router and on the DVR, and forward only the specific ports you need, or avoid forwarding at all. If you leave it on, review the router's UPnP table and remove entries you do not recognise, and make sure every device has a strong password and current firmware.",
      ],
    },
    {
      id: "cgnat",
      h: "UPnP behind CGNAT",
      p: [
        "UPnP only changes your own router. If your provider shares one address among many customers, the router has no public address to open ports on, so UPnP can report success while remote access still fails. This is typical on home fibre in Nepal. See [CGNAT](/glossary/cgnat) and [why CCTV remote viewing fails behind CGNAT](/blog/cctv-remote-viewing-cgnat-nepal).",
        "An approach where the recorder or a box connects outward needs no UPnP. The LunaCam Box works this way.",
      ],
    },
    {
      id: "review",
      h: "How to review and clean up UPnP",
      p: [
        "Open the router's UPnP or NAT table and read the entries. Each one lists a device address, a port and a protocol. Entries for a DVR on ports 80, 554, 8000 or 37777 mean the recorder is open to the internet. Entries you do not recognise, or for devices that should not be reachable, are a reason to turn UPnP off and investigate. The Canadian Centre for Cyber Security advises reviewing port-forwarding rules regularly and keeping firmware updated.",
        "Some security teams also block UDP port 1900 from the outside, because UPnP discovery should be a local function. Researchers have found routers that answer UPnP requests from the internet and leak the list of mappings. After a firmware update, check that UPnP has not been turned back on by default.",
      ],
    },
    {
      id: "alternatives",
      h: "What to use instead",
      p: [
        "If you need remote access, forward only the ports required, with a strong password and updated firmware. Better still, avoid inbound access: use an app or box that connects outward, or a VPN. See [port forwarding](/glossary/port-forwarding) for the manual route.",
        "If the recorder is the only UPnP device in the house, turning UPnP off will break its automatic mapping. Note the ports it was using before you switch it off.",
      ],
    },
    {
      id: "lunacam",
      h: "UPnP and LunaCam",
      p: [
        "The LunaCam Box does not use UPnP. It connects outward over an encrypted tunnel after pairing with a claim code, so nothing on the router needs to be opened. Device passwords are stored encrypted, and the platform flags weak device passwords. See [LunaCam Box](/products/lunacam-box).",
      ],
    },
  ],
  faq: [
    { q: "What is UPnP in a DVR?", a: "It is a setting that lets the DVR ask the router to open the ports it needs for remote viewing, so you do not forward them by hand." },
    { q: "Is UPnP safe?", a: "It carries real risk because devices can open router ports without approval. Turn it off unless you need it and keep devices patched." },
    { q: "Why does UPnP show success but I cannot connect?", a: "Likely CGNAT, a second router in the chain, or a firewall. The mapping exists on your router, but the internet cannot reach it." },
    { q: "UPnP vs port forwarding: which is better?", a: "Manual port forwarding is safer because you choose exactly what is open. UPnP is easier but opens ports automatically." },
    { q: "How do I disable UPnP?", a: "Open the router admin page and find UPnP in the advanced or NAT settings, and turn it off. Also turn it off in the DVR network menu." },
    { q: "Does UPnP affect gaming consoles?", a: "Yes. Consoles and some VoIP apps use UPnP to open ports. If you turn it off, you may need to forward those ports by hand." },
    { q: "Is UPnP enabled by default?", a: "On many routers it is. Check the router settings and the DVR's network menu." },
  ],
  related: ["port-forwarding", "ddns", "cgnat", "static-ip", "p2p-cloud"],
  product: "lunacam-box",
};

export default term;
