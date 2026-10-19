import type { Term } from "../types";

const term: Term = {
  slug: "poe",
  term: "PoE",
  full: "Power over Ethernet",
  aka: ["Power over Ethernet", "802.3af", "802.3at", "PoE+", "802.3bt", "PoE switch"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "What is PoE? Power over Ethernet, af vs at vs bt for cameras",
  description: "PoE sends power and data to IP cameras over one network cable. What PoE means, 802.3af, at and bt wattages, PoE switch vs injector and the 100 metre limit.",
  short: "PoE, or Power over Ethernet, sends electrical power and data to a device over one network cable. It is how most IP cameras are powered without a separate adaptor.",
  body: [
    "A PoE camera needs one cable to the switch or recorder instead of a network cable plus a power lead and a plug nearby. That makes installs faster, tidier and safer on high walls and outdoor poles.",
    "Power comes from a PoE switch, a PoE port on an NVR, or a small injector. The camera must support PoE, and the source must supply enough watts for it.",
  ],
  sections: [
    {
      id: "meaning",
      h: "PoE meaning",
      p: [
        "PoE stands for Power over Ethernet. Inside a standard network cable are four pairs of wires. PoE puts a safe low voltage on some of those pairs while data carries on as usual. The source is called the power sourcing equipment (PSE), and the camera is the powered device (PD).",
        "Before it sends power, a PoE port checks that the device on the other end really wants it, so a normal laptop or printer plugged into the same port is not harmed.",
      ],
    },
    {
      id: "standards",
      h: "PoE standards: 802.3af, 802.3at and 802.3bt",
      p: [
        "The IEEE sets the standards. The figures below are what the switch port supplies, and the camera receives a little less after cable losses.",
      ],
      list: [
        "802.3af (PoE, Type 1): up to 15.4 W per port, about 12.95 W at the device. Enough for most fixed cameras.",
        "802.3at (PoE+, Type 2): up to 30 W per port, about 25.5 W at the device. For [PTZ](/glossary/ptz) cameras and cameras with heaters or strong infrared.",
        "802.3bt (PoE++, Types 3 and 4): up to 60 W or 100 W per port. For large PTZ domes and multi-sensor cameras.",
        "Passive PoE (often 12 V or 24 V on spare pairs) is not a standard. Never mix it with standard PoE gear without checking.",
      ],
    },
    {
      id: "switch-vs-injector",
      h: "PoE switch, NVR ports and injectors",
      p: [
        "There are three ways to power a camera over its network cable.",
      ],
      list: [
        "PoE NVR: many [NVRs](/glossary/nvr) have built-in PoE ports, so cameras plug straight in. Good for small sites.",
        "PoE switch: powers many cameras and connects them to a normal NVR. Check the total power budget, which is lower than ports times watts.",
        "PoE injector: powers a single camera at the far end of a run. Useful for one-off additions.",
      ],
    },
    {
      id: "distance",
      h: "Cable length and cable quality",
      p: [
        "A PoE run is limited to 100 metres, like any Ethernet cable. Use proper copper cable. Cheap copper-clad aluminium cable has higher resistance, loses power over distance and often fails when a camera draws more at night with the infrared on. For longer runs add a switch or extender in the middle.",
      ],
    },
    {
      id: "budget",
      h: "How to work out a PoE power budget",
      p: [
        "Add up the watts each camera needs at its peak, which is usually when the infrared lights are on. The switch’s total PoE budget must exceed that sum with some headroom. A 16-port switch rated 150 W cannot give 30 W to all 16 ports at once. Look for the budget on the datasheet, not the port count.",
      ],
    },
    {
      id: "nepal",
      h: "PoE and power cuts in Nepal",
      p: [
        "A single PoE switch is the one thing that powers every camera, so put it on a UPS. A small UPS keeps cameras and recorder running through load-shedding or short cuts, and it protects the switch from surges. Check the UPS wattage against the switch’s full PoE load.",
        "Keep outdoor cable runs away from lightning-prone spots and use surge protection on long runs between buildings.",
      ],
    },
    {
      id: "classes",
      h: "PoE classes and how a camera asks for power",
      p: [
        "When a camera is plugged in, the switch port runs a short detection step, then assigns a power class. Class 0 to 4 belong to 802.3af and 802.3at, and classes 5 to 8 to 802.3bt. A camera that needs 12 W is given class 3 and a budget is reserved for it. The port then supplies power only up to that reserve.",
        "Switches that reserve power by class, not by what the camera really draws, run out of budget sooner than the sums suggest. A camera whose class says 15.4 W but which draws 6 W still reserves 15.4 W on some switches. Check whether your switch supports dynamic power management.",
      ],
    },
    {
      id: "problems",
      h: "Common PoE problems",
      p: [
        "Most PoE trouble shows as a camera that reboots, drops out at night or never starts.",
      ],
      list: [
        "Over budget: the switch cannot supply all cameras at once. Cameras fail when infrared turns on at dusk.",
        "Long or poor cable: copper-clad aluminium cable and runs near 100 m lose voltage. Cameras restart when heaters or IR LEDs draw more.",
        "Wrong standard: a 24 V passive injector connected to a camera that expects 802.3af can damage it.",
        "Bad crimps: a connector with two broken pairs may pass data but not power.",
        "Surges: long outdoor runs pick up lightning surges. Add protection at both ends.",
      ],
    },
    {
      id: "alternatives",
      h: "When PoE is not the right choice",
      p: [
        "PoE needs network cable to every camera. For a site with existing coaxial cable, an [analogue HD](/glossary/analog-hd-camera) system may be simpler and cheaper. For a camera across a courtyard beyond 100 m, a switch in a weatherproof box in the middle, or a fibre link, works better than trying to stretch one cable. Wi-Fi cameras still need power at the camera, so PoE is often simpler than a socket and adaptor on an outdoor pole.",
        "A mix works too: a PoE NVR or switch for most cameras, and a separate 12 V adaptor for the odd camera that is far away or draws a lot.",
      ],
    },
    {
      id: "lunacam",
      h: "PoE and LunaCam",
      p: [
        "PoE is a power matter, so it does not change how LunaCam works. Cameras on a PoE switch or NVR show up in the same app as any other camera, through the LunaCam Box on the network. The box connects outward only, so no port forwarding is needed.",
      ],
    },
  ],
  faq: [
    { q: "What does PoE mean?", a: "PoE means Power over Ethernet. One network cable carries both data and power to a device such as an IP camera." },
    { q: "What is the difference between PoE and PoE+?", a: "PoE (802.3af) supplies up to 15.4 W per port. PoE+ (802.3at) supplies up to 30 W per port, for power-hungry cameras like PTZ units." },
    { q: "Do I need a PoE switch for IP cameras?", a: "Not always. You can use an NVR with built-in PoE ports, a PoE injector or a separate power adaptor for each camera." },
    { q: "What is the maximum PoE cable length?", a: "100 metres, the same as Ethernet. Use a switch or extender for longer runs." },
    { q: "Can I plug a non-PoE camera into a PoE port?", a: "Yes. Standard PoE ports detect the device and send power only if it asks." },
    { q: "How many cameras can a PoE switch run?", a: "As many as its total power budget allows. Add up each camera’s peak watts, including infrared, and keep some headroom." },
  ],
  related: ["ip-camera", "nvr", "ptz", "ir-night-vision"],
  product: "camera-app",
};

export default term;
