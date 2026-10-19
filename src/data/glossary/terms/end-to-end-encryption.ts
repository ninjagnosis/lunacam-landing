import type { Term } from "../types";

const term: Term = {
  slug: "end-to-end-encryption",
  term: "End-to-end encryption",
  full: "End-to-end encryption (E2EE)",
  aka: ["E2EE", "E2E encryption", "Zero-knowledge encryption"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "End-to-end encryption for CCTV: meaning and what it protects",
  description: "End-to-end encryption means only you and your viewer can read the video, not the service between. E2EE vs TLS vs encryption at rest, and the trade-offs.",
  short: "End-to-end encryption, or E2EE, means video is encrypted at the sender and can be decrypted only by the intended viewer. The servers in between cannot read it.",
  body: [
    "Ordinary encryption on the internet protects data only between two points, such as your phone and a server. The server can still read the content. With end-to-end encryption, the keys sit only at the two ends, so even the company running the service cannot watch your cameras.",
    "That is a stronger promise, and it comes with trade-offs for features, recovery and sharing. Many camera services claim encryption without being end-to-end, so ask what exactly is encrypted and who holds the keys.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What does end-to-end encryption mean?",
      p: [
        "The video is encrypted on the camera or box before it leaves, and decrypted only on the viewer's device. Anything in the middle, including the service's servers and your internet provider, sees scrambled data. The test is simple: who holds the decryption keys? In E2EE, only you and the people you authorise.",
      ],
    },
    {
      id: "vs",
      h: "E2EE vs TLS vs encryption at rest",
      p: [
        "Three different protections are often mixed up:",
      ],
      list: [
        "Encryption in transit (TLS or HTTPS): protects data on the wire between two points. The receiving server decrypts it.",
        "Encryption at rest: protects stored files on a disk. The service usually holds the keys, so it protects against stolen disks, not against the service.",
        "End-to-end encryption: only the endpoints hold keys. The service cannot read the content.",
      ],
    },
    {
      id: "trade",
      h: "Trade-offs for CCTV",
      p: [
        "If the service cannot read the video, it also cannot do things that need to see it. Server-side [video analytics](/glossary/video-analytics), thumbnails, motion search in the cloud, and recovery after you lose your key all become harder or impossible. Sharing a clip with police or an insurer needs a way to give them the key. If you lose the key, the footage is gone. Some products offer E2EE as an option for people who accept these limits.",
      ],
    },
    {
      id: "streams",
      h: "How video streams are protected today",
      p: [
        "Many cameras speak plain [RTSP](/glossary/rtsp) inside the local network, with no encryption, and protect only the internet leg. Check that your remote viewing uses encrypted connections end to end between the recorder and the app. Port-forwarded recorders exposed with weak logins are a bigger risk than missing E2EE. See [default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras) and [P2P cloud](/glossary/p2p-cloud).",
      ],
    },
    {
      id: "ask",
      h: "Questions to ask a vendor",
      p: [
        "Who holds the keys? Can your staff view my cameras, and under what rule? What is encrypted in transit, at rest and end to end? What happens if I lose my password? Is the footage stored in Nepal? Where do clips for evidence come from? See also [CCTV evidence export in Nepal](/blog/cctv-evidence-export-nepal).",
      ],
    },
    {
      id: "verify",
      h: "How to tell what is really protected",
      p: [
        "Encryption claims are easy to make and hard to check. Ask for a security or privacy document that names who holds the keys. Phrases like bank-grade or military-grade tell you nothing. A real description says where video is encrypted, with which keys, where the keys are stored, who can reset them and what staff can see. If the vendor can reset your password and still show you your old footage, the vendor holds keys that decrypt it, and it is not end-to-end.",
        "This is not a criticism. Server-side keys make search, thumbnails, sharing and recovery possible. The point is to know which model you are buying.",
      ],
    },
    {
      id: "local",
      h: "Local network traffic",
      p: [
        "Even a service with strong encryption to the app may talk to cameras in plain form on the local network. RTSP without TLS and ONVIF over HTTP send video and credentials in the clear inside the building. That is a smaller risk in a locked network than on the internet, but a shared Wi-Fi, a guest device or an infected laptop on the same network can see it. Where cameras support it, use encrypted streams and HTTPS, and keep cameras on a separate network from guests.",
      ],
    },
    {
      id: "nepal",
      h: "Where the video is stored",
      p: [
        "Where footage is held matters as much as how it is encrypted, especially for banks, government and municipal sites. See [municipal CCTV operations](/blog/municipal-cctv-operations) and [Privacy Act 2075 and CCTV in Nepal](/blog/privacy-act-2075-cctv-nepal). Ask for the data location and the keys in writing.",
      ],
    },
  ],
  faq: [
    { q: "What is end-to-end encryption?", a: "A method where data is encrypted on the sender's side and decrypted only by the recipient, so nothing in between can read it." },
    { q: "Is HTTPS the same as end-to-end encryption?", a: "No. HTTPS protects data between your device and a server, but the server can read it. E2EE keeps even the server out." },
    { q: "Do camera apps use end-to-end encryption?", a: "Some do, many do not. Most encrypt data in transit and at rest but hold the keys themselves. Ask the vendor." },
    { q: "Can E2EE video be searched or analysed in the cloud?", a: "Not by the server, because it cannot read it. Analysis would have to happen on your own devices." },
    { q: "What if I lose my E2EE key?", a: "The footage cannot be recovered by the service. Back up your keys safely." },
    { q: "Is end-to-end encryption better for CCTV?", a: "It gives stronger privacy against the service and its staff, but takes away features that need the server to read video. The right choice depends on the site." },
    { q: "Does Tailscale or a VPN give end-to-end encryption?", a: "A VPN encrypts the path between your devices, so the traffic is private on the internet. It is a different model from an app where the service relays video." },
  ],
  related: ["p2p-cloud", "rtsp", "cloud-recording", "video-analytics"],
  product: "lunacam-box",
};

export default term;
