import type { Term } from "../types";

const term: Term = {
  slug: "hybrid-dvr",
  term: "Hybrid DVR",
  aka: ["XVR", "HVR", "Penta-brid DVR", "5-in-1 DVR", "Hybrid video recorder"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "What is a hybrid DVR (XVR)? Meaning and what it records",
  description: "A hybrid DVR records analog, HD analog and IP cameras on one recorder. What XVR and HVR mean, the channel limits and when to choose one.",
  short: "A hybrid DVR is a recorder that accepts both analog and IP cameras in one box. Brands call it XVR, HVR or 5-in-1 DVR.",
  body: [
    "A plain [DVR](/glossary/dvr) takes only analog cameras on coaxial cable. An [NVR](/glossary/nvr) takes only IP cameras on network cable. A hybrid recorder accepts both, which lets you keep old cameras and add new IP ones.",
    "The name differs by brand. Dahua and CP Plus call them XVR, Hikvision sells similar recorders as Turbo HD DVRs with extra IP channels, and generic makers say HVR or hybrid DVR.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is a hybrid DVR?",
      p: [
        "It is a recorder with video inputs for several camera types. A typical 5-in-1 model handles analog CVBS, and the HD analog formats AHD, TVI and CVI, plus network cameras. The recorder detects the type on each input and decodes it.",
        "See [analog HD camera](/glossary/analog-hd-camera) and [IP camera](/glossary/ip-camera) for the difference between those camera types.",
      ],
    },
    {
      id: "xvr",
      h: "XVR vs HVR vs DVR vs NVR",
      p: [
        "The names overlap, so check the specification sheet rather than the label:",
      ],
      list: [
        "DVR: analog and HD analog cameras only.",
        "NVR: IP cameras only.",
        "XVR: Dahua and CP Plus name for a multi-format recorder, usually 5-in-1 with IP channels.",
        "HVR: generic name for a hybrid analog and IP recorder.",
      ],
    },
    {
      id: "channels",
      h: "Channel limits to check",
      p: [
        "A 16-channel hybrid recorder does not always record 16 analog plus extra IP cameras. Many have a total decoding limit. A common design is 16 analog channels, or fewer analog channels with extra IP channels added when you use them. Check the number of analog inputs, the maximum IP channels, the total, the maximum resolution per channel and the supported [codecs](/glossary/h265). Resolution of the analog input also matters. See [camera resolution](/glossary/camera-resolution).",
      ],
    },
    {
      id: "when",
      h: "When to choose a hybrid recorder",
      p: [
        "Good choice when you already have coax cable runs and want to upgrade gradually, or when a site mixes both camera types. For a fresh install with new cabling, an NVR with [PoE](/glossary/poe) cameras is often neater. For a home with four existing analog cameras, a hybrid is the cheapest way to add one IP camera for a driveway.",
      ],
    },
    {
      id: "remote",
      h: "Remote viewing on a hybrid recorder",
      p: [
        "Remote viewing works the same as on any DVR: through the brand's cloud service, or by [port forwarding](/glossary/port-forwarding). Behind [CGNAT](/glossary/cgnat) port forwarding fails. See [watch your DVR from your phone in Nepal](/blog/watch-dvr-from-phone-nepal).",
      ],
    },
    {
      id: "labels",
      h: "Why the label on the box is not enough",
      p: [
        "The names overlap. One source notes that many recorders sold as plain DVRs also take IP cameras, and many sold as hybrid do not take every analog format. Read the data sheet for four things: the analog formats, the number of analog and IP channels, the maximum recording resolution for each type, and the maximum total bandwidth. On some eight-channel models, for example, the channels are split, with four for analog and four for IP, rather than eight of each.",
        "Brands differ too. Dahua sells these recorders as XVR. Hikvision sells similar recorders in its Turbo HD range with extra IP channels. Do not assume a 5-in-1 label means the same thing across brands. Because this wording is marketing rather than a standard, the specification is what counts.",
      ],
    },
    {
      id: "upgrade",
      h: "Upgrading an analog site in stages",
      p: [
        "A typical Nepal case is a shop or school with eight analog cameras on coax. A hybrid recorder lets the owner keep them and add new IP cameras for the blind spots, one at a time. Analog HD cameras on existing coax can often be upgraded to a higher resolution by replacing the camera and the recorder, without re-cabling. See [analog HD camera](/glossary/analog-hd-camera). Power is separate: IP cameras can use [PoE](/glossary/poe) from a switch, while analog cameras need a power supply near each camera.",
      ],
    },
    {
      id: "lunacam",
      h: "Hybrid recorders and LunaCam",
      p: [
        "A hybrid recorder is still a recorder, so remote viewing has the same problem as any DVR. The LunaCam Box sits next to it, talks to it using the Hikvision or Dahua adapters, or ONVIF and RTSP, and connects outward, so remote viewing works without port forwarding. LunaCam can use the DVR or NVR as the recorder and search its footage. See [LunaCam Box](/products/lunacam-box).",
      ],
    },
  ],
  faq: [
    { q: "What is an XVR?", a: "XVR is a brand name for a multi-format recorder that accepts analog, HD analog and IP cameras. It is a type of hybrid DVR." },
    { q: "What does 5-in-1 DVR mean?", a: "It means the recorder accepts five signal types: CVBS analog, AHD, TVI, CVI and IP." },
    { q: "Can I connect IP cameras to a normal DVR?", a: "Not usually. A plain DVR has no IP inputs. A hybrid recorder or an NVR is needed." },
    { q: "Is a hybrid DVR better than an NVR?", a: "It depends. A hybrid recorder is good when keeping analog cameras. An NVR suits a new all-IP system." },
    { q: "Does a hybrid DVR support ONVIF?", a: "Its IP channels usually do, so you can add cameras from other brands. Check the specification." },
    { q: "What does HVR stand for?", a: "Hybrid video recorder. It records analog and IP cameras. Some makers use XVR for the same idea." },
    { q: "Can I mix brands on a hybrid recorder?", a: "Analog cameras of any brand work if the recorder supports the format. IP cameras of other brands need ONVIF or a supported protocol." },
  ],
  related: ["dvr", "nvr", "analog-hd-camera", "ip-camera", "onvif"],
  product: "lunacam-box",
};

export default term;
