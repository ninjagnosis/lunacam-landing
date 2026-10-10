// CCTV and camera terms, one page each under /glossary. `short` is the
// one-or-two sentence definition that search engines and AI tools quote, so
// it must stand on its own. `body` explains it plainly for a business owner.
export interface Term {
  slug: string;
  term: string;
  /** Full name, when the term is an abbreviation. */
  full?: string;
  short: string;
  body: string[];
  related: string[];
  /** Product page this term leads to. */
  product?: string;
}

export const glossary: Term[] = [
  {
    slug: "dvr",
    term: "DVR",
    full: "Digital Video Recorder",
    short: "A DVR is a box that records video from analogue CCTV cameras onto a hard disk. Most shops and homes in Nepal that have CCTV have one.",
    body: [
      "Analogue cameras send a picture down a cable to a DVR. The DVR turns it into digital video, stores it on its disk and shows it on a monitor. Most also let you view the cameras from a phone through the maker's own app.",
      "The disk is the weak point. When it fills, the DVR either overwrites the oldest video or stops recording. When it fails, you find out when you need the footage. A system that watches disk health warns you before that day.",
      "LunaCam works with the DVR you already have. It does not replace it: the DVR keeps recording, and LunaCam is how you watch and search it from anywhere.",
    ],
    related: ["nvr", "rtsp", "retention"],
    product: "camera-app",
  },
  {
    slug: "nvr",
    term: "NVR",
    full: "Network Video Recorder",
    short: "An NVR is a recorder for IP cameras. The cameras encode video themselves and send it over the network to the NVR, which stores it.",
    body: [
      "IP cameras plug into the network like a computer. Each one compresses its own video and sends it to the NVR, which records it. Many NVRs have power over the cable built in, so one wire carries both power and picture.",
      "An NVR is the IP-camera counterpart of a DVR. Many sites run both: older analogue cameras on a DVR and newer IP cameras on an NVR.",
      "LunaCam connects to NVRs over ONVIF or RTSP, and directly to Hikvision and Dahua models, so one app shows both kinds of recorder.",
    ],
    related: ["dvr", "onvif", "rtsp"],
    product: "camera-app",
  },
  {
    slug: "onvif",
    term: "ONVIF",
    full: "Open Network Video Interface Forum",
    short: "ONVIF is an industry standard that lets IP cameras, recorders and software from different makers work together for discovery, live video, PTZ and events.",
    body: [
      "Without a standard, every camera brand needs its own app. ONVIF defines a common way to discover a camera, ask for its video, move it and receive its events. A camera that supports it can be used by any software that speaks ONVIF.",
      "ONVIF is organised in profiles. Profile S covers live video and PTZ, Profile T adds H.265 and encrypted connections, and Profile G covers searching and playing back recordings stored on a recorder or card.",
      "LunaCam supports ONVIF profiles S, T and G, so cameras from brands it has no special adapter for still connect.",
    ],
    related: ["rtsp", "nvr", "ptz"],
    product: "camera-app",
  },
  {
    slug: "rtsp",
    term: "RTSP",
    full: "Real Time Streaming Protocol",
    short: "RTSP is a protocol for pulling a live video stream from a camera or recorder using a web-style address. Almost every IP camera and DVR offers it.",
    body: [
      "An RTSP address looks like a web address that begins with rtsp://. Give it to a video player or software with the right username and password and it fetches the live picture from the camera.",
      "Most cameras offer two streams: a main stream in full quality and a sub stream in lower quality. Software picks the sub stream for small tiles and the main stream for full screen, which saves a great deal of data.",
      "LunaCam uses RTSP to reach any camera or recorder that has no special adapter, and picks main or sub stream to suit the network and the tile size.",
    ],
    related: ["onvif", "dvr", "nvr"],
    product: "camera-app",
  },
  {
    slug: "port-forwarding",
    term: "Port forwarding",
    short: "Port forwarding is a router setting that sends outside traffic on a chosen port to a device on your network, such as a DVR. It is the old way to watch cameras from outside.",
    body: [
      "To reach a DVR from outside, a router must be told to pass a particular port through to it. That means logging into the router, knowing the DVR's address and exposing the DVR to the internet.",
      "It often cannot be done at all. Many homes and shops share one connection with a building, or sit behind carrier-grade NAT, so there is no address of their own to reach.",
      "The LunaCam Box avoids it. It connects out to LunaCam, so nothing on your router needs to open, and it works behind a shared connection.",
    ],
    related: ["cgnat", "p2p-cloud", "dvr"],
    product: "lunacam-box",
  },
  {
    slug: "cgnat",
    term: "CGNAT",
    full: "Carrier-grade NAT",
    short: "CGNAT means your internet provider shares one public address among many customers. You cannot receive connections from outside, so port forwarding does not work.",
    body: [
      "Public IPv4 addresses are scarce, so many providers put several customers behind one. From the internet your connection has no address of its own, which breaks any setup that depends on reaching your router.",
      "Cameras behind CGNAT can still send video out. That is why a device that connects outward to a server, as the LunaCam Box does, works where port forwarding fails.",
      "If a provider offers a static public address for a fee, that also solves it, but it costs more and exposes the DVR directly.",
    ],
    related: ["port-forwarding", "p2p-cloud"],
    product: "lunacam-box",
  },
  {
    slug: "p2p-cloud",
    term: "P2P cloud",
    short: "A P2P cloud is a vendor service, such as Hik-Connect, that relays your camera's video through the maker's servers so you can watch without port forwarding.",
    body: [
      "The recorder connects out to the maker's servers and the app connects to the same servers, which put the two in touch. It is easy, and that is why most people use it.",
      "The catch is where your video and your DVR password go. They pass through servers you do not control, usually abroad, under the maker's terms rather than Nepal's.",
      "LunaCam gives the same convenience through relays and storage in Nepal, with camera passwords kept on the box.",
    ],
    related: ["port-forwarding", "cgnat", "retention"],
    product: "camera-app",
  },
  {
    slug: "ptz",
    term: "PTZ",
    full: "Pan, tilt and zoom",
    short: "PTZ describes a camera that can turn left and right, tilt up and down and zoom, controlled from software, rather than staying fixed on one view.",
    body: [
      "A fixed camera shows one scene. A PTZ camera can be steered, so one camera can cover a large yard or follow a person. Many can also return to saved positions, called presets, and run a tour between them.",
      "PTZ is controlled over the network, usually through ONVIF or the maker's own interface. The operator needs the right permission, and every move is a thing worth logging.",
      "LunaCam gives PTZ control in live view and records PTZ moves in the audit log.",
    ],
    related: ["onvif", "rtsp"],
    product: "camera-app",
  },
  {
    slug: "retention",
    term: "Retention",
    short: "Retention is how long recorded video is kept before it is deleted. It can be set per camera or per site, from a few days to a year.",
    body: [
      "Disks are finite, so every system overwrites old video eventually. Retention is the rule that says how long. Seven days is common in shops, thirty or more in banks, and some law sets a minimum.",
      "Under Nepal's Privacy Act, 2075, CCTV footage is to be kept for at least three months. A retention floor makes sure nobody shortens it by mistake.",
      "LunaCam sets retention from 7 to 365 days, per camera or per site, and a legal hold stops deletion of footage that matters to a case.",
    ],
    related: ["dvr", "chain-of-custody"],
    product: "playback-clips",
  },
  {
    slug: "chain-of-custody",
    term: "Chain of custody",
    short: "Chain of custody is the record of who handled a piece of evidence, when and why. For CCTV it shows that footage was not changed between the camera and the court.",
    body: [
      "Footage is only worth something as evidence if you can show where it has been. A clip on a pen drive passed from hand to hand has no history, so anyone can say it was edited.",
      "A proper trail records every view, export and share, fixes a hash of each file when it is exported and signs a manifest so changes show up. A visible watermark names the user, time and site.",
      "LunaCam logs each step of a case and gives anyone a verifier tool to check an export against its signed manifest.",
    ],
    related: ["retention", "dvr"],
    product: "evidence",
  },
];

export const termBySlug = (slug: string) => glossary.find((t) => t.slug === slug);
