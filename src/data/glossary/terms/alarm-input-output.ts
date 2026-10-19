import type { Term } from "../types";

const term: Term = {
  slug: "alarm-input-output",
  term: "Alarm input and output",
  aka: ["Alarm in / alarm out", "Alarm I/O", "Dry contact", "Relay output", "Sensor input"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "Alarm input and output on DVRs and cameras: meaning and wiring",
  description: "Alarm input connects a sensor to a DVR or camera, and alarm output switches a siren or light. How dry contacts, NO and NC work, and typical uses.",
  short: "Alarm input is a terminal where a sensor or switch tells a DVR or camera that something happened. Alarm output is a terminal that switches a siren, light or door lock.",
  body: [
    "Many DVRs, NVRs and IP cameras have small screw terminals marked Alarm In and Alarm Out. They let CCTV work with simple outside devices without any network setup.",
    "An input tells the recorder about the outside world, such as a door opened. An output lets the recorder act on the outside world, such as a siren sounding. Both are plain electrical contacts.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is alarm input and output?",
      p: [
        "Alarm in is a pair of terminals that senses open or closed. Alarm out is a relay that closes or opens. Spec sheets write them like 4 in / 1 out. The count is per device, and a recorder may list them for the whole box or per channel.",
      ],
    },
    {
      id: "contacts",
      h: "Dry contacts, NO and NC",
      p: [
        "A dry contact is a switch with no voltage of its own. Each sensor has one of two types:",
      ],
      list: [
        "NO (normally open): the circuit is open at rest and closes on alarm.",
        "NC (normally closed): the circuit is closed at rest and opens on alarm. Cutting the wire also triggers the alarm, so this is safer for security.",
      ],
    },
    {
      id: "uses",
      h: "Typical uses",
      p: [
        "On inputs: a door contact, a PIR motion sensor, a panic button, a smoke or glass-break sensor, or a beam. The recorder can start recording, jump to a camera view and send a notification when the input fires.",
        "On outputs: a siren, a strobe light, a gate or door relay, or an alarm panel. The output can fire when the recorder detects [motion](/glossary/motion-detection), [line crossing](/glossary/line-crossing-detection) or [intrusion](/glossary/intrusion-detection), when a disk fails or a camera goes offline.",
      ],
    },
    {
      id: "wiring",
      h: "Wiring and setup tips",
      p: [
        "Use the right contact type in the device menu. Match NO or NC in the sensor and in the setting. Do not power a siren straight from the terminals. The output is a switch with a current and voltage limit, shown in the manual, so use a relay for large loads. Keep sensor cables away from mains wiring. Test each input by triggering it and checking the event list. Alarm inputs on a camera belong to that camera, while recorder inputs belong to the recorder.",
      ],
    },
    {
      id: "alerts",
      h: "From an input to a phone alert",
      p: [
        "Inputs on their own are local. To get a phone message, the recorder or camera must send the event to an app. Not every app shows I/O events, and brands differ. Decide which events should wake someone. See [camera alerts that matter](/blog/camera-alerts-that-matter) and the [alerts](/products/alerts) product page. A recorder with many I/O points can be an alternative to a separate alarm panel for small sites, though panels have better supervision and backup power.",
      ],
    },
    {
      id: "wiring",
      h: "Wiring in detail",
      p: [
        "For an NC sensor, connect its two wires across the alarm input and its ground terminal, and set the input to NC in the menu. Use supervised wiring where possible: resistors in series and parallel let a panel tell open, closed, cut and shorted apart, but most CCTV inputs only see open or closed. For an output, connect the siren or relay coil to the output's COM and NO terminals, following the voltage and current rating in the manual. A relay between the recorder and a large load protects the recorder.",
        "Label every cable at both ends, and write which input is which in the site record. When the person who wired it leaves, the label is the only documentation.",
      ],
    },
    {
      id: "examples",
      h: "Examples",
      p: [
        "A shop shutter contact connected to input 1 starts recording on the nearest camera and sends a notification. A panic button at the counter raises an alarm and shows the till camera first. A gate relay is opened from the app. Banks wire door contacts, vault sensors and panic buttons to the recorder, and set outputs to flash a strobe. For more complex sites, a dedicated alarm panel stays the primary alarm and the recorder reads its events. See [bank branch CCTV management](/blog/bank-branch-cctv-management).",
      ],
    },
    {
      id: "lunacam",
      h: "Alarm I/O and LunaCam",
      p: [
        "LunaCam adapters can read and set camera outputs, and it picks up AX Pro alarm panel events. Alarms enter a queue with assignment, acknowledgement reasons and escalation, and Home, Away and Disarm schedules switch rules on and off. Webhooks and a real-time event stream let other systems react. See [alerts](/products/alerts).",
      ],
    },
  ],
  faq: [
    { q: "What is alarm input in a DVR?", a: "A terminal that connects an external sensor or switch, so the DVR can record or alert when the sensor triggers." },
    { q: "What is alarm output used for?", a: "To switch an external device such as a siren, light or door relay when the recorder or camera raises an event." },
    { q: "What is the difference between NO and NC?", a: "NO is open at rest and closes on alarm. NC is closed at rest and opens on alarm. NC is better because a cut wire triggers it." },
    { q: "Can alarm output power a siren directly?", a: "Usually not. The output is a dry relay with a limited rating. Use the manual's rating or an external relay and power supply." },
    { q: "Do IP cameras have alarm input and output?", a: "Some do, usually models with extra terminals. Check the specification." },
    { q: "What does COM mean on an alarm terminal?", a: "COM is the common terminal. The output connects COM to NO or NC depending on whether it is wired as normally open or normally closed." },
    { q: "Can I trigger an alarm output from my phone?", a: "Some apps can switch outputs manually if the recorder or camera supports it." },
  ],
  related: ["motion-detection", "intrusion-detection", "dvr", "nvr", "two-way-audio"],
  product: "alerts",
};

export default term;
