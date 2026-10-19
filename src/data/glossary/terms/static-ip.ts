import type { Term } from "../types";

const term: Term = {
  slug: "static-ip",
  term: "Static IP",
  full: "Static IP address",
  aka: ["Static IP address", "Fixed IP", "Public static IP", "Dedicated IP"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "Static IP address: meaning, vs dynamic IP and when CCTV needs one",
  description: "A static IP address never changes. Static vs dynamic IP, public vs private static IP, and when a DVR or camera needs one for remote viewing.",
  short: "A static IP address is an address that never changes. It can be a public address from your internet provider, or a fixed private address inside your network.",
  body: [
    "There are two different uses of the phrase. A public static IP is assigned by your provider and stays the same on the internet. A static private IP is a fixed address you give a device inside your network, such as 192.168.1.50 for a DVR.",
    "People often mix them up. For remote CCTV viewing the public one matters. For keeping cameras reachable on the local network the private one matters.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Static IP vs dynamic IP",
      p: [
        "A dynamic IP can change when the router restarts or after a lease expires. A static IP is set once and stays. Most home plans are dynamic, and many business plans offer static for an extra fee.",
      ],
    },
    {
      id: "public",
      h: "Public static IP and remote viewing",
      p: [
        "If you have a public static IP, you can reach your recorder from outside at that address, with [port forwarding](/glossary/port-forwarding) set on the router. You do not need [DDNS](/glossary/ddns), because the address never changes.",
        "It does not help if you are behind [CGNAT](/glossary/cgnat). In that case, the provider must give you a public address first. Many providers sell this as a static or public IP add-on.",
      ],
    },
    {
      id: "private",
      h: "Static private IP for cameras and recorders",
      p: [
        "Cameras and recorders should have a fixed address on the local network. If the router hands out a new one each time, port forwarding rules and the recorder's links to cameras break. There are two ways:",
      ],
      list: [
        "Set a static address on the device, outside the router's DHCP range.",
        "Or make a DHCP reservation in the router, which always gives that device the same address.",
      ],
    },
    {
      id: "choose",
      h: "Static IP vs DDNS vs a connection that goes outward",
      p: [
        "A static public IP is the cleanest option for port forwarding, but it exposes the recorder to the internet, and costs monthly. DDNS is cheaper but has gaps after changes. A connection that starts from inside, such as the LunaCam Box or a cloud service, works behind CGNAT and needs neither. See [P2P cloud](/glossary/p2p-cloud) and [how to watch your DVR from your phone in Nepal](/blog/watch-dvr-from-phone-nepal).",
      ],
    },
    {
      id: "security",
      h: "Security of a static public IP",
      p: [
        "A fixed address is easy for scanners to find and keep trying. Change default passwords, keep firmware updated, forward only needed ports and consider a VPN. See [default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras).",
      ],
    },
    {
      id: "reservation",
      h: "Fixing private addresses in practice",
      p: [
        "Two cameras with the same address knock each other offline. A DHCP reservation in the router is the cleanest way to avoid it: it ties an address to a device's hardware address, so the router always gives it the same one, and the device itself stays on automatic settings. Write the list on a sheet kept with the recorder: camera name, address, location, and password owner. See [installer site handover guide](/blog/installer-site-handover-guide).",
        "If you set an address on the camera itself, choose one outside the router's DHCP range and use a subnet that matches the recorder. A recorder with its own PoE ports often uses a private subnet for cameras, separate from the home network.",
      ],
    },
    {
      id: "provider",
      h: "Asking your provider for a public address",
      p: [
        "Ask whether the address is public and permanent, whether it is IPv4, whether any ports are blocked, and what it costs per month. Some providers sell a static IP that still sits behind their NAT, which does not help. Test by connecting from mobile data. A static public IP is also not automatically more reliable or more secure than a dynamic one, as DDNS vendors themselves note. Its main benefit is a fixed address for rules, allow-lists and compliance.",
      ],
    },
    {
      id: "lunacam",
      h: "Static IPs and LunaCam",
      p: [
        "With the LunaCam Box, a static public IP is not needed. The box connects outward, so your site works on dynamic and shared addresses. Giving the cameras fixed private addresses is still good practice, because the box finds and adopts them by address. See [LunaCam Box](/products/lunacam-box).",
      ],
    },
    {
      id: "ipv6",
      h: "IPv4, IPv6 and what a static address means",
      p: [
        "Most home plans still give one IPv4 address, shared or not. Some providers also hand out IPv6, where every device can have its own public address. A recorder with an IPv6 address can in principle be reached directly, but the router firewall must allow it, and many recorders and apps handle IPv6 poorly. Do not assume IPv6 solves remote viewing until you have tested it from another network.",
      ],
    },
  ],
  faq: [
    { q: "What is a static IP address?", a: "An address that does not change. It can be public, from your provider, or private, set inside your network." },
    { q: "Do I need a static IP for CCTV?", a: "Not always. A public static IP is one way to reach a recorder remotely. Cloud or outward-connecting boxes work without it." },
    { q: "How do I get a static public IP in Nepal?", a: "Ask your internet provider. Many offer it as a paid add-on. Ask whether the address is public and truly fixed." },
    { q: "Is a static IP faster?", a: "No. It does not change speed. It only keeps the address the same." },
    { q: "How do I check if my IP is static?", a: "Note your public IP from a website, restart the router and check again. A change means dynamic, but only your provider can confirm it is static." },
    { q: "Can a static IP be hacked?", a: "Any internet-facing address can be probed. A static address stays a fixed target, so passwords and firmware matter more." },
    { q: "Is a static IP needed for IP cameras on the local network?", a: "Not strictly, but a fixed or reserved address keeps recorders and apps pointing at the right camera." },
  ],
  related: ["ddns", "port-forwarding", "cgnat", "upnp", "p2p-cloud"],
  product: "lunacam-box",
};

export default term;
