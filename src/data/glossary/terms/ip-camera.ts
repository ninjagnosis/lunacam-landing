import type { Term } from "../types";

const term: Term = {
  slug: "ip-camera",
  term: "IP camera",
  full: "Internet Protocol camera",
  aka: ["Network camera", "IP CCTV camera", "Netcam"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "What is an IP camera? Meaning, how it works and IP vs analogue",
  description: "An IP camera digitises video itself and sends it over a network cable. How IP cameras work, IP vs analogue, what resolution and PoE mean, and how to set one up.",
  short: "An IP camera is a CCTV camera that turns the picture into digital video itself and sends it over a network cable. It needs no separate converter and can be reached by any device on the network.",
  body: [
    "Inside an IP camera are a lens, an image sensor and a small computer. The computer compresses the picture and sends it over Ethernet or Wi-Fi to a recorder or to software. The word IP does not mean it is on the internet. It means the camera uses the same network language as a computer.",
    "Because each camera has its own network address, you can add one anywhere a network cable reaches, view it directly in a browser or app, and mix brands. A single cable can also carry power through [PoE](/glossary/poe).",
  ],
  sections: [
    {
      id: "meaning",
      h: "IP camera meaning",
      p: [
        "IP stands for Internet Protocol, the system computers use to address each other. An IP camera is a networked camera: it gets an address such as 192.168.1.64 and answers requests from anything that is allowed to ask. People also call it a network camera.",
        "It is not the same as a Wi-Fi camera, although many Wi-Fi cameras are IP cameras. IP describes how the video is delivered. Wi-Fi describes only the link used to join the network.",
      ],
    },
    {
      id: "how-it-works",
      h: "How an IP camera works",
      p: [
        "Light passes through the lens onto the sensor, which makes a stream of frames. The camera’s processor compresses them with a codec such as [H.264 or H.265](/glossary/h265) and sends the result over the network.",
      ],
      list: [
        "A recorder ([NVR](/glossary/nvr)) pulls the stream and writes it to disk.",
        "Software and apps pull it directly over [RTSP](/glossary/rtsp).",
        "Standards like [ONVIF](/glossary/onvif) let different brands find and control each other.",
        "Many cameras also record to a memory card inside the camera, as a backup.",
      ],
    },
    {
      id: "vs-analogue",
      h: "IP camera vs analogue camera",
      p: [
        "An analogue camera sends a raw signal along a coaxial cable to a [DVR](/glossary/dvr) that does the digital work. An IP camera does that work itself.",
      ],
      list: [
        "Picture: IP cameras reach higher resolutions, and the picture is not degraded by cable length the way analogue can be.",
        "Cable: IP uses a network cable with PoE for power and data. Analogue uses coaxial, often with a separate power lead.",
        "Cable length: Ethernet is limited to 100 metres per run. Analogue HD can run further in some setups, see [analogue HD cameras](/glossary/analog-hd-camera).",
        "Flexibility: IP cameras can be added to any switch and moved without re-cabling to a recorder.",
        "Cost: analogue gear is cheaper per camera, IP costs more but scales better.",
      ],
    },
    {
      id: "choose",
      h: "What to look for when buying",
      p: [
        "Start with what you need to see, then pick the details: [resolution](/glossary/camera-resolution), [lens and view angle](/glossary/field-of-view), night performance, and the weather rating given by an [IP rating](/glossary/ip-rating). Check that it lists ONVIF so you are not locked to one brand. The full checklist is in [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal).",
      ],
    },
    {
      id: "setup",
      h: "Setting one up",
      p: [
        "A typical install: connect the camera to a PoE switch or NVR port, find its address using the maker’s tool, log in, set a strong password, set the time and choose the stream settings. Put cameras on their own network if possible.",
        "Change the factory password first. Cameras left on defaults are the easiest to attack. See [default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras).",
      ],
    },
    {
      id: "internet",
      h: "Do IP cameras need the internet?",
      p: [
        "No. Cameras and recorder work on a local network with no internet. Internet is only for watching from outside. Streaming costs upload speed, which the guide on [CCTV bandwidth in Nepal](/blog/cctv-internet-bandwidth-upload-nepal) explains.",
      ],
    },
    {
      id: "types",
      h: "Types of IP camera",
      p: [
        "IP cameras come in a few forms, grouped by shape and by what they do. The shape decides where it fits. The extra functions decide the price.",
      ],
      list: [
        "[Bullet](/glossary/bullet-camera), [dome](/glossary/dome-camera) and [turret](/glossary/turret-camera): the common fixed shapes.",
        "[PTZ](/glossary/ptz): pan, tilt and zoom by remote control.",
        "[Fisheye](/glossary/fisheye-camera): one camera for a whole room.",
        "Wi-Fi cameras: wireless link, but still need power at the camera.",
        "4G cameras: a SIM instead of a network cable, for remote sites.",
        "Cameras with analytics: some can detect people, vehicles or line crossings on the camera itself.",
      ],
    },
    {
      id: "network",
      h: "Network planning for IP cameras",
      p: [
        "Each camera adds load to the network. A 4 MP camera at its main stream can use 4 to 6 Mbps, so sixteen of them put close to 100 Mbps through the switch. A gigabit switch handles this easily, an old 100 Mbps switch does not. Put cameras and recorder on a separate network or VLAN where you can. It keeps traffic off the office network and keeps strangers off the cameras.",
        "Give every camera a fixed address, or a reservation on the router, so the recorder always finds it. Set the time on every camera from the same source. Cameras that disagree on time make footage hard to line up across views.",
      ],
    },
    {
      id: "security",
      h: "Security of IP cameras",
      p: [
        "A camera on the network is a small computer, so treat it like one. Change the default password at install, turn off services you do not use, and update the firmware. Never open camera ports to the internet. Cameras left on defaults and exposed on the internet are the usual targets. The guide to [default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras) explains why, and [port forwarding](/glossary/port-forwarding) explains why opening ports is risky.",
      ],
    },
    {
      id: "lunacam",
      h: "IP cameras and LunaCam",
      p: [
        "The LunaCam Box lists the devices it discovers on your network, and you adopt the cameras you want. Vendor adapters and ONVIF mean the brand does not matter. The box connects outward over an encrypted tunnel, so there is no port forwarding and it works behind [CGNAT](/glossary/cgnat). LunaCam also flags weak camera passwords it finds.",
      ],
    },
  ],
  faq: [
    { q: "What is an IP camera?", a: "A CCTV camera that creates digital video itself and sends it over a network cable or Wi-Fi to a recorder or software." },
    { q: "Is an IP camera the same as a Wi-Fi camera?", a: "No. IP describes how video is delivered. Wi-Fi is one way to connect. Many IP cameras use a cable." },
    { q: "Is IP camera better than analogue?", a: "IP cameras generally give higher resolution and more flexibility. Analogue HD is cheaper and reuses old cable. The right choice depends on the site." },
    { q: "How far can an IP camera be from the switch?", a: "A standard Ethernet cable run is limited to 100 metres. Longer runs need a switch or extender in between." },
    { q: "Can I watch an IP camera without a recorder?", a: "Yes, directly from its app, browser or software, and many store video on a memory card. A recorder is better for continuous storage." },
    { q: "Do IP cameras record on their own?", a: "Many can record to a memory card in the camera. For continuous storage most sites use an NVR or a server." },
  ],
  related: ["nvr", "poe", "onvif", "camera-resolution", "analog-hd-camera"],
  product: "camera-app",
};

export default term;
