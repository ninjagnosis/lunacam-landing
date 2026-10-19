import type { Term } from "../types";

const term: Term = {
  slug: "cgnat",
  term: "CGNAT",
  full: "Carrier-grade NAT",
  aka: ["CG-NAT", "CGN", "Large-scale NAT", "LSN", "NAT444"],
  updated: "2026-10-19",
  title: "What is CGNAT (CG-NAT)? Meaning, how to check and how to get around it",
  description: "CGNAT means your internet provider shares one public IP address among many customers. How CG-NAT works, how to check if you are behind it and what it breaks.",
  short: "CGNAT means your internet provider shares one public address among many customers. You cannot receive connections from outside, so port forwarding does not work.",
  body: [
    "Public IPv4 addresses are scarce, so many providers put several customers behind one. From the internet your connection has no address of its own, which breaks any setup that depends on reaching your router.",
    "CGNAT is also written CG-NAT, CGN or carrier-grade NAT. In technical documents it is sometimes called large-scale NAT (LSN) or NAT444. They all mean the same thing.",
  ],
  sections: [
    {
      id: "meaning",
      h: "CGNAT meaning in simple words",
      p: [
        "Think of a block of flats with one street address. Post addressed to the building arrives, but without a flat number nobody outside can send a letter to you personally. You can still send letters out, and replies to your letters find their way back.",
        "CGNAT does the same to internet connections. Your provider gives one public IP address to a whole group of customers. Everything you start from inside works: browsing, video calls, streaming. What fails is anything that needs someone outside to reach you first.",
      ],
    },
    {
      id: "how-it-works",
      h: "How does CGNAT work?",
      p: [
        "Ordinary NAT happens in your own router: your phone, laptop and DVR get private addresses, and the router shares your one public address among them. CGNAT adds a second layer of NAT inside the provider’s network.",
      ],
      list: [
        "Your devices get private addresses from your router, such as 192.168.1.x.",
        "Your router itself gets an address from the provider’s shared range, usually 100.64.0.0 to 100.127.255.255 (100.64.0.0/10), instead of a public address.",
        "The provider’s CGNAT equipment shares a small pool of public addresses among many routers, tracking which connection belongs to which customer.",
        "Replies to connections you started are sent back to you. Unrequested incoming connections have no customer to go to, so they are dropped.",
      ],
    },
    {
      id: "why",
      h: "Why internet providers use CGNAT",
      p: [
        "The internet ran out of new IPv4 addresses years ago. The global pool was used up in 2011, and buying addresses on the open market is expensive. A provider adding thousands of fibre customers cannot give each one a public address, so it shares them. The shared range 100.64.0.0/10 was set aside for exactly this in 2012 (RFC 6598).",
        "The long-term fix is IPv6, which has enough addresses for every device. Until most networks and services support it, CGNAT remains common, especially on home and small-business fibre plans.",
      ],
    },
    {
      id: "check",
      h: "How to check if you are behind CGNAT",
      p: [
        "You can check in about two minutes:",
      ],
      list: [
        "Open your router’s admin page and find the WAN or internet IP address.",
        "On a phone or computer connected to the same Wi-Fi, search “what is my IP” and note the public address shown.",
        "If the two addresses are different, you are behind CGNAT or another layer of NAT.",
        "If the router’s WAN address starts with 100.64 to 100.127, it is almost certainly CGNAT. Addresses starting with 10. or 172.16 to 172.31 also mean another NAT layer.",
        "If they match, you have your own public address, and port forwarding can work.",
      ],
    },
    {
      id: "breaks",
      h: "What CGNAT breaks, and what still works",
      p: [
        "Anything that starts outbound keeps working. Problems come from anything that waits for someone to connect in:",
      ],
      list: [
        "Port forwarding: does not work, because the incoming connection never reaches your router.",
        "Watching a DVR or NVR from outside by IP address: fails for the same reason. See [why CCTV remote viewing fails behind CGNAT](/blog/cctv-remote-viewing-cgnat-nepal).",
        "Hosting a game server, website or file server at home: not reachable from outside.",
        "Some online games and peer-to-peer apps: may show a strict NAT type or connect more slowly.",
        "Dynamic DNS: points a name at your address, but the shared address is not yours, so it does not help.",
        "Browsing, video calls, streaming and apps that connect outward to their own servers: work normally.",
      ],
    },
    {
      id: "vs",
      h: "CGNAT vs NAT vs public IP",
      p: [
        "These three describe how reachable your connection is:",
      ],
      list: [
        "NAT: your own router sharing one address among your devices. Normal in every home. Port forwarding works if you have a public address.",
        "CGNAT: your provider sharing one address among many customers, on top of your router’s NAT. Port forwarding cannot work.",
        "Public IP (static or dynamic): your router has its own address on the internet. Port forwarding works. A static public IP stays the same; a dynamic one can change.",
      ],
    },
    {
      id: "get-around",
      h: "How to get around CGNAT",
      p: [
        "There are four honest options, each with a cost:",
      ],
      list: [
        "Ask your provider for a public IP. Many offer one for an extra monthly fee. This brings back port forwarding, but anything you forward is then exposed to the whole internet.",
        "Use IPv6, if your provider and devices support it. Each device can get its own address, though firewalls and app support vary.",
        "Use a VPN or tunnel service that gives you a public address and forwards traffic to you.",
        "Use devices that connect outward to a server, so nothing needs to reach your network from outside. This works on any connection, CGNAT or not.",
      ],
    },
    {
      id: "lunacam",
      h: "CGNAT and LunaCam",
      p: [
        "The LunaCam Box sits next to your DVR or NVR and makes only outbound connections to LunaCam servers, over an encrypted tunnel. Because the connection starts from inside, it works behind CGNAT with no port forwarding, no public IP and nothing opened on your router. You watch your cameras from the app as if they were next to you.",
      ],
    },
  ],
  faq: [
    { q: "What is CG-NAT?", a: "CG-NAT, or carrier-grade NAT, is when an internet provider shares one public IP address among many customers. Outgoing connections work, but nobody outside can connect in to your router." },
    { q: "How do I know if I am behind CGNAT?", a: "Compare the WAN IP shown on your router with the IP shown when you search “what is my IP”. If they differ, or the router’s address starts with 100.64 to 100.127, you are behind CGNAT." },
    { q: "Does CGNAT slow down internet?", a: "Usually not for browsing or streaming. It can cause problems for online games, peer-to-peer apps and anything that needs incoming connections, and a busy CGNAT system can add a little delay." },
    { q: "Can I port forward behind CGNAT?", a: "No. Port forwarding needs incoming connections to reach your router, and CGNAT drops them before they arrive. You need a public IP, IPv6 or a device that connects outward instead." },
    { q: "Is CGNAT bad?", a: "It is a trade-off. It lets providers connect more customers with scarce IPv4 addresses, and it hides your network from unrequested connections. It is a problem only when you need to be reached from outside, such as for remote CCTV viewing or hosting a server." },
    { q: "What does 100.64 IP address mean?", a: "Addresses from 100.64.0.0 to 100.127.255.255 are the shared address space set aside for CGNAT. If your router has one of these as its internet address, you are behind CGNAT." },
  ],
  related: ["port-forwarding", "p2p-cloud", "dvr", "nvr"],
  product: "lunacam-box",
};

export default term;
