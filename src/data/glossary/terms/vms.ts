import type { Term } from "../types";

const term: Term = {
  slug: "vms",
  term: "VMS",
  full: "Video management software",
  aka: ["Video management software", "Video management system", "CCTV software", "NVR software"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "What is a VMS (video management software)? Meaning and uses",
  description: "A VMS is software that connects many cameras and recorders and manages live view, playback and users. How it differs from an NVR and when you need one.",
  short: "A VMS, or video management software, is a program that connects to many cameras and recorders to show live video, play back recordings and manage users and events.",
  body: [
    "A VMS sits above the cameras. It finds them, pulls their streams, records if needed, shows everything on one screen and decides who may do what. Examples are Milestone XProtect, Genetec Security Center, Hikvision iVMS and Dahua DSS.",
    "VMS can mean video management software or video management system. People use both, and a VMS may run on a server, a PC or in the cloud.",
  ],
  sections: [
    {
      id: "meaning",
      h: "VMS meaning in CCTV",
      p: [
        "VMS stands for video management software. Its job is to turn a set of separate cameras and recorders into one system that a person can operate. Without it, each device has its own web page and its own app.",
      ],
    },
    {
      id: "does",
      h: "What does a VMS do?",
      p: [
        "Features vary by product, but most cover these:",
      ],
      list: [
        "Device management: add, group and monitor cameras, recorders and their health.",
        "Live view: multi-camera grids, maps and video walls.",
        "Playback: timeline search across cameras.",
        "Recording: save streams to a server, or read recordings from a [DVR](/glossary/dvr) or [NVR](/glossary/nvr).",
        "Events and alarms: motion, [analytics](/glossary/video-analytics) and device faults in one list.",
        "Users and permissions: who may watch, export or change settings, with an audit log.",
        "Export: clips with proof of integrity. See [chain of custody](/glossary/chain-of-custody).",
      ],
    },
    {
      id: "vs",
      h: "VMS vs NVR vs DVR",
      p: [
        "A DVR or NVR is a recorder: a box with disks that records cameras. A VMS is software. An NVR runs its own small VMS inside. A separate VMS is used when you have many recorders or sites, mixed brands, or need central control. Some VMS products also record on their own server and make the recorder unnecessary.",
      ],
    },
    {
      id: "choose",
      h: "When you need a VMS",
      p: [
        "A home or single shop usually does not. The recorder app is enough. A VMS makes sense for banks with many branches, municipalities, campuses and factories, where one team watches many sites. See [bank branch CCTV management](/blog/bank-branch-cctv-management) and [municipal CCTV operations](/blog/municipal-cctv-operations).",
        "Check which brands it supports. A VMS that uses [ONVIF](/glossary/onvif) and [RTSP](/glossary/rtsp) can work with many cameras. A vendor VMS often works best with that vendor's own devices.",
      ],
    },
    {
      id: "types",
      h: "On-premise, cloud and hybrid VMS",
      p: [
        "On-premise runs on your server and keeps video on site. Cloud VMS runs on a provider's servers and needs upload bandwidth. Hybrid keeps recording local and uses the cloud for access and management. Reaching an on-premise VMS from outside needs [port forwarding](/glossary/port-forwarding) or a tunnel, which does not work behind [CGNAT](/glossary/cgnat).",
      ],
    },
    {
      id: "examples",
      h: "Examples and who they suit",
      p: [
        "Milestone XProtect and Genetec Security Center are large, brand-neutral products used in airports, campuses and city projects. Hikvision's iVMS-4200 and HikCentral and Dahua's DSS are made by camera makers and work best with their own devices. Open-source projects and smaller commercial products exist for small installs. Pricing is usually by camera, and features such as maps and analytics may be extra licences, so ask for the full licence list before you compare.",
        "Match the product to the staff. A VMS with many functions needs trained operators. A bank branch with no IT staff is better off with something simple that the head office can watch remotely.",
      ],
    },
    {
      id: "checklist",
      h: "What to ask before you choose",
      p: [
        "Which of my camera and recorder models are supported, and at which feature level? Does it record, or only view what the recorder records? How are users, roles and audit logs handled? Can an operator export a clip with proof it has not been changed? Is there an API so other systems can use the events? What happens if the VMS server fails? A product that cannot answer the last question has a single point of failure.",
      ],
    },
    {
      id: "lunacam",
      h: "LunaCam as a viewing and operations layer",
      p: [
        "LunaCam connects to Hikvision, Dahua, Uniview, Axis, ONVIF and RTSP devices, and can use a DVR or NVR as its recorder. It provides video walls, a map, floor plans with camera positions, roles with an audit log, and a public REST API with SDKs. Footage can be exported with a signed manifest and a verifier. See [camera app](/products/camera-app) and [developer platform](/products/developer-platform).",
      ],
    },
  ],
  faq: [
    { q: "What is the full form of VMS in CCTV?", a: "Video management software, sometimes called video management system." },
    { q: "Is a VMS the same as an NVR?", a: "No. An NVR is a recorder box. A VMS is software. An NVR contains basic VMS functions." },
    { q: "Do I need a VMS for a few cameras?", a: "Usually no. The recorder's own app is enough for a small system." },
    { q: "Is VMS software free?", a: "Some products have free tiers or free versions for a limited number of cameras. Others are licensed per camera. Check the vendor's terms." },
    { q: "Can a VMS work with different camera brands?", a: "Yes, if it supports ONVIF, RTSP or the brand's own protocol. Support for advanced features varies by brand." },
    { q: "What is the difference between VMS and CMS?", a: "CMS usually means central management software for many recorders and sites. In practice the terms overlap, and some vendors use CMS for a lighter VMS." },
    { q: "Is the free software that comes with a DVR a VMS?", a: "Yes in function. Free viewer software from camera makers does what a small VMS does, but usually only for that maker's own devices." },
  ],
  related: ["nvr", "dvr", "onvif", "video-analytics", "chain-of-custody"],
  product: "developer-platform",
};

export default term;
