import type { Term } from "../types";

const term: Term = {
  slug: "dvr",
  term: "DVR",
  full: "Digital Video Recorder",
  aka: ["Digital video recorder", "CCTV DVR", "Hybrid DVR", "XVR"],
  updated: "2026-10-19",
  title: "DVR meaning in CCTV: what a DVR is and how it works",
  description: "A DVR (digital video recorder) records video from analogue CCTV cameras onto a hard disk. What it does, how it differs from an NVR and how to watch it remotely.",
  short: "A DVR is a box that records video from analogue CCTV cameras onto a hard disk. Most shops and homes in Nepal that have CCTV have one.",
  body: [
    "Analogue cameras send a picture down a coaxial cable to a DVR. The DVR turns it into digital video, compresses it, stores it on its disk and shows it on a monitor. Most also let you view the cameras from a phone through the maker’s own app.",
    "The disk is the weak point. When it fills, the DVR either overwrites the oldest video or stops recording. When it fails, you find out when you need the footage. A system that watches disk health warns you before that day. LunaCam works with the DVR you already have: the DVR keeps recording, and LunaCam is how you watch and search it from anywhere.",
  ],
  sections: [
    {
      id: "meaning",
      h: "DVR meaning in CCTV",
      p: [
        "DVR stands for digital video recorder. In a CCTV system it is the box that sits between the cameras and the monitor. It takes the video signal from each camera, converts it to digital form, compresses it with a codec such as [H.264 or H.265](/glossary/h265), and writes it to an internal hard disk.",
        "The same word is used for the set-top box that records television. In CCTV it always means the security recorder. People also say “CCTV DVR”, “DVR box” or “DVR machine”. Dealers sell them as 4, 8, 16 or 32 channel units, and a channel is one camera input.",
      ],
    },
    {
      id: "how-it-works",
      h: "How a DVR works",
      p: [
        "A DVR does the heavy work in the box, because analogue cameras do almost none of it themselves. In order:",
      ],
      list: [
        "Each camera sends a raw video signal over coaxial cable (BNC connectors). The same cable or a paired power lead supplies 12 V power.",
        "The DVR converts each signal into digital frames and compresses them.",
        "It writes the compressed video to the hard disk, continuously or only on motion, depending on the schedule.",
        "It shows live pictures on an HDMI or VGA monitor and lets you search and play back by date and time.",
        "It connects to your router so apps and software can fetch live and recorded video over the network.",
      ],
    },
    {
      id: "dvr-vs-nvr",
      h: "DVR vs NVR",
      p: [
        "The difference is where the video is turned into digital form. With a DVR the recorder does it, so cameras are analogue and connect by coaxial cable. With an [NVR](/glossary/nvr) the camera does it, so cameras are [IP cameras](/glossary/ip-camera) that send digital video over a network cable and the NVR only records it.",
      ],
      list: [
        "DVR: analogue or [analogue HD](/glossary/analog-hd-camera) cameras, coaxial cable, power usually a separate adaptor per camera.",
        "NVR: IP cameras, network cable, power can come from the cable using [PoE](/glossary/poe).",
        "Hybrid or XVR: one recorder that accepts both analogue and IP cameras, useful when upgrading an old site step by step.",
        "For a new install an NVR with IP cameras is the usual choice. A DVR still makes sense when good coaxial cable is already in the walls.",
      ],
    },
    {
      id: "storage",
      h: "How long does a DVR keep footage?",
      p: [
        "It depends on the disk size, the number of cameras, the resolution and the compression. A bigger disk or fewer, lower-quality cameras means more days. H.265 stores the same picture in noticeably less space than H.264. Recording only on motion also stretches the disk, but it can miss events if detection is set badly.",
        "Plan retention first, then pick the disk. See [retention](/glossary/retention) and the guide on [how long to keep CCTV footage](/blog/how-long-to-keep-cctv-footage). Use a disk made for recorders, because ordinary desktop disks fail early when written to around the clock.",
      ],
    },
    {
      id: "remote",
      h: "Watching a DVR from your phone",
      p: [
        "Every DVR brand ships an app that works through the maker’s cloud. Others rely on [port forwarding](/glossary/port-forwarding), which needs a public address and fails behind [CGNAT](/glossary/cgnat), now common on home fibre in Nepal.",
        "The full comparison is in [how to watch your DVR from your phone in Nepal](/blog/watch-dvr-from-phone-nepal). A third way is a small box on your network that connects outward, so nothing has to be opened on the router.",
      ],
    },
    {
      id: "nepal",
      h: "Practical points for Nepal",
      p: [
        "Power cuts are the main cause of DVR damage and corrupted recordings. Put the DVR, router and cameras on a UPS, and shut down cleanly before long outages. Dust and heat shorten disk life, so keep the DVR in a ventilated spot off the floor.",
        "Change the default password the day it is installed. Recorders left on factory logins are a common way cameras end up exposed. See [default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras).",
      ],
    },
    {
      id: "channels",
      h: "What do the channel numbers on a DVR mean?",
      p: [
        "A channel is one camera input. A 4 channel DVR takes four cameras, a 16 channel DVR takes sixteen. Buy a few channels more than you need today, because adding cameras later is easy only while there is a free input.",
        "Channels also limit what the recorder can handle at once. A DVR that accepts 16 cameras at 1080p may manage fewer at 4K, or may only record some channels at full quality. The datasheet lists the maximum recording resolution and the total bitrate the box can write to disk. A mismatch is a common reason cameras drop out or footage skips.",
      ],
      list: [
        "4 channel: a small shop or home.",
        "8 channel: a larger shop, a clinic or a small office.",
        "16 channel: a floor of a building, a school block or a warehouse.",
        "32 channel: used for bigger sites, often as several recorders instead.",
      ],
    },
    {
      id: "failures",
      h: "Why DVRs fail and how to avoid it",
      p: [
        "Most DVR problems are not the box. They are the disk, the power and the heat. A disk that is not made for 24-hour recording wears out fast, and the DVR may keep running while recording nothing. Check the recording status of every camera on a schedule, not only when something goes wrong.",
        "Sudden power cuts corrupt files and can damage the disk. A small UPS gives the DVR time to finish writing and shut down cleanly. Also keep the box ventilated: a DVR shut inside a closed cupboard overheats in summer. Finally, set the date and time correctly, since footage with the wrong time stamp is hard to use as evidence. See [chain of custody](/glossary/chain-of-custody) for why that matters.",
      ],
    },
    {
      id: "buying",
      h: "What to check when buying or replacing a DVR",
      p: [
        "Count the cameras you have and the ones you will add. Check which analogue formats the recorder accepts ([AHD, HD-TVI or HD-CVI](/glossary/analog-hd-camera)), the maximum resolution, the number of disk bays, and whether it also accepts IP cameras. A recorder that handles both is called a [hybrid DVR](/glossary/hybrid-dvr).",
        "Look at the codec too. A DVR with [H.265](/glossary/h265) support stores the same video in less space. Confirm that it offers [ONVIF](/glossary/onvif) or [RTSP](/glossary/rtsp), because those are what let other software read it later without being tied to one brand.",
      ],
    },
    {
      id: "lunacam",
      h: "DVR and LunaCam",
      p: [
        "LunaCam does not replace your DVR. The LunaCam Box sits on the same network and reads video from the DVR through a vendor adapter, [ONVIF](/glossary/onvif) or [RTSP](/glossary/rtsp). Live view and playback from the DVR timeline appear in one app. The box makes only outbound connections, so no port forwarding is needed, and the DVR keeps recording as before.",
      ],
    },
  ],
  faq: [
    { q: "What is a DVR in CCTV?", a: "A DVR is the recorder for analogue CCTV cameras. It converts their signal to digital video, stores it on a hard disk and lets you watch live and play back recordings." },
    { q: "What is the full form of DVR?", a: "DVR stands for Digital Video Recorder." },
    { q: "What is the difference between a DVR and an NVR?", a: "A DVR digitises video from analogue cameras itself. An NVR records digital video that IP cameras have already produced. DVRs use coaxial cable, NVRs use network cable." },
    { q: "Can a DVR work without internet?", a: "Yes. Recording and local viewing on a monitor need no internet. Internet is needed only to watch from outside the building." },
    { q: "How do I view my DVR on my phone?", a: "Use the maker’s app, port forwarding, or a service that connects outward from your network. Port forwarding fails behind CGNAT." },
    { q: "Is a DVR better than an NVR?", a: "Neither is better. A DVR suits analogue cameras and existing coaxial cable. An NVR suits IP cameras and gives higher resolution and easier growth." },
  ],
  related: ["nvr", "hybrid-dvr", "retention", "analog-hd-camera", "rtsp"],
  product: "camera-app",
};

export default term;
