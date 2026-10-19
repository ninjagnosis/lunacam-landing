import type { Term } from "../types";

const term: Term = {
  slug: "onvif",
  term: "ONVIF",
  full: "Open Network Video Interface Forum",
  aka: ["ONVIF Profile S", "ONVIF Profile T", "ONVIF Profile G", "ONVIF camera"],
  updated: "2026-10-19",
  title: "What is ONVIF? Meaning, profiles S, T and G explained",
  description: "ONVIF is an open standard that lets IP cameras and recorders from different brands work together. What it means, its profiles and how to use it.",
  short: "ONVIF is an industry standard that lets IP cameras, recorders and software from different makers work together for discovery, live video, PTZ and events.",
  body: [
    "Without a standard, every camera brand needs its own app. ONVIF defines a common way to discover a camera, ask for its video, move it and receive its events. A camera that supports it can be used by any software that speaks ONVIF.",
    "ONVIF is organised in profiles. Profile S covers live video and PTZ, Profile T adds H.265 and encrypted connections, and Profile G covers searching and playing back recordings stored on a recorder or card. LunaCam reads ONVIF cameras and recorders, so brands without a special adapter can still connect.",
  ],
  sections: [
    {
      id: "meaning",
      h: "ONVIF meaning",
      p: [
        "ONVIF stands for Open Network Video Interface Forum. It is both the name of the group, formed in 2008 by Axis, Bosch and Sony, and the name of the standard it publishes. Many makers belong to it.",
        "The standard is a set of rules for how a camera, an NVR and a viewing program talk over a network. If both sides follow the rules, they work together even when they come from different companies. That is what people mean by an “ONVIF camera” or “ONVIF-compliant NVR”.",
      ],
    },
    {
      id: "what-it-does",
      h: "What ONVIF does",
      p: [
        "ONVIF is mostly about control and information. The video itself usually travels over [RTSP](/glossary/rtsp), and ONVIF tells software where to find it.",
      ],
      list: [
        "Discovery: finds ONVIF devices on the local network without typing addresses.",
        "Stream details: lists the camera’s streams, resolution, codec and the RTSP address for each.",
        "Control: [PTZ](/glossary/ptz) moves, presets, focus and basic settings.",
        "Events: motion, tampering and other alerts sent to the software that subscribed.",
        "Recording access: search and playback of footage kept on a recorder or card.",
        "Device management: time, network settings, users and reboot.",
      ],
    },
    {
      id: "profiles",
      h: "ONVIF profiles S, T, G, M and others",
      p: [
        "Profiles group features so that a buyer can check one letter instead of a long feature list. A device lists the profiles it conforms to.",
      ],
      list: [
        "Profile S: live video and audio streaming, PTZ control. The oldest and most widely supported.",
        "Profile T: newer streaming, with H.265, HTTPS, and extra event and imaging features.",
        "Profile G: recording search, playback and export from a recorder or SD card.",
        "Profile M: analytics metadata and events, such as object detection results.",
        "Profile C, A and D: door control, access control and related devices.",
      ],
    },
    {
      id: "check",
      h: "How to check if a camera or NVR supports ONVIF",
      p: [
        "Look for the ONVIF logo or the profiles on the datasheet. The official product list on the ONVIF website lets you search by brand and model. In the device settings you will usually find an ONVIF page, often under network or integration.",
        "Two traps catch installers. On many recorders ONVIF is off by default, and it needs its own user account, separate from the normal admin login. Turn it on and create the user before you try to connect anything.",
      ],
    },
    {
      id: "limits",
      h: "What ONVIF does not guarantee",
      p: [
        "ONVIF covers a common core. Brand-specific features such as special analytics, deep playback search or configuration screens often sit outside it, and some makers implement parts loosely. A camera can pass for basic video and still lack events or playback.",
        "That is why a platform may use ONVIF for most devices and a brand’s own interface where it adds something. The longer explanation is in [ONVIF and RTSP: one app, many brands](/blog/onvif-rtsp-one-app-many-brands).",
      ],
    },
    {
      id: "vs-rtsp",
      h: "ONVIF vs RTSP",
      p: [
        "They do different jobs and usually work together. RTSP carries the video. ONVIF handles discovery, control and events, and reports the RTSP address to use. A camera with only RTSP can show video but cannot be discovered or controlled in a standard way. A camera with ONVIF can be added by software with little typing.",
      ],
    },
    {
      id: "history",
      h: "Who runs ONVIF and why it exists",
      p: [
        "ONVIF was founded in 2008 by Axis, Bosch and Sony as a way to stop buyers being locked to one camera maker. It is an open industry group, and many camera, recorder and software makers are members. Conformance is tested, and conformant products are listed on the group’s website.",
        "Before ONVIF, a recorder from one brand could only use that brand’s cameras, or needed a special driver for each model. Today a recorder, a viewing program and a camera from three companies can work together if each follows the standard. In practice results vary by product, so a trial before a large purchase is sensible.",
      ],
    },
    {
      id: "setup",
      h: "How to turn on ONVIF on a Hikvision or Dahua device",
      p: [
        "Menu names differ by firmware, but the steps are similar on most recorders and cameras:",
      ],
      list: [
        "Log in to the device’s web page as admin.",
        "Open the network or integration settings and find ONVIF.",
        "Switch ONVIF on. On some firmware it is off by default.",
        "Create an ONVIF user with a strong password. Many devices will not accept the normal admin login for ONVIF.",
        "Check that the date and time are correct on the device. A time difference of a few minutes can make ONVIF logins fail.",
        "Test from software on the same network, using the device address and the ONVIF user.",
      ],
    },
    {
      id: "security",
      h: "Security notes",
      p: [
        "ONVIF uses the same network as the cameras, so the usual rules apply. Do not expose the ONVIF port to the internet. Use a strong password for the ONVIF user and keep camera firmware up to date. Profile T devices can use encrypted HTTPS connections, which is better than sending logins in plain form on the network. See [default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras) for how often factory logins are left in place.",
      ],
    },
    {
      id: "lunacam",
      h: "ONVIF and LunaCam",
      p: [
        "LunaCam includes an ONVIF adapter, alongside adapters for Hikvision, Dahua, Uniview, Axis and a plain [RTSP](/glossary/rtsp) fallback. It also reads ONVIF Profile T metadata from cameras that send it. The LunaCam Box discovers devices on your network and makes only outbound connections, so there is no port forwarding and it works behind [CGNAT](/glossary/cgnat).",
      ],
    },
  ],
  faq: [
    { q: "What is ONVIF in simple words?", a: "ONVIF is a shared language for IP cameras and recorders. Devices that speak it from different brands can be found, viewed and controlled by the same software." },
    { q: "What is the full form of ONVIF?", a: "ONVIF stands for Open Network Video Interface Forum." },
    { q: "What is the difference between ONVIF Profile S and Profile T?", a: "Profile S covers live streaming and PTZ. Profile T is newer and adds H.265, secure HTTPS connections and more event and imaging features." },
    { q: "Does ONVIF work with Hikvision and Dahua?", a: "Yes. Both support ONVIF on most current cameras and recorders, though it may be off by default and need its own user account." },
    { q: "Is ONVIF the same as RTSP?", a: "No. RTSP carries the video stream. ONVIF handles discovery, control and events, and tells software which RTSP address to use." },
    { q: "Is ONVIF safe?", a: "The standard supports passwords and encrypted connections. Risk comes from weak passwords and from exposing devices to the internet. Keep ONVIF on the local network." },
  ],
  related: ["rtsp", "nvr", "ptz", "ip-camera"],
  product: "camera-app",
};

export default term;
