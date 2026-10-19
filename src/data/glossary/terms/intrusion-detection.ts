import type { Term } from "../types";

const term: Term = {
  slug: "intrusion-detection",
  term: "Intrusion detection",
  aka: ["Region intrusion", "Area intrusion detection", "Perimeter intrusion detection", "Field detection"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "Intrusion detection in CCTV: meaning and how it works",
  description: "Intrusion detection alerts you when a person or vehicle enters or stays in an area you mark. How it works and how to avoid false alarms.",
  short: "Intrusion detection raises an alert when a person or vehicle enters, or stays in, an area you mark on the camera picture. It is used to guard yards, rooftops and closed premises.",
  body: [
    "You shade a region of the image, for example the yard behind a shop. If an object enters it, or stays in it longer than a set time, the camera sends an event. The event can start recording, notify your phone or trigger a siren.",
    "Different brands call it intrusion detection, region intrusion, field detection or area detection. The rule is the same, and it is a form of [video analytics](/glossary/video-analytics) running on the camera or recorder.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What does intrusion detection mean in CCTV?",
      p: [
        "It means the camera is guarding an area, not just recording it. Anything in the area when it should be empty is treated as an intruder. Compared with [motion detection](/glossary/motion-detection), it adds object type filtering (human or vehicle) and rules about time spent in the area.",
        "Do not confuse it with an intrusion detection system (IDS) in computer security. In CCTV the word means a person or vehicle entering a physical area.",
      ],
    },
    {
      id: "how",
      h: "How does it work?",
      p: [
        "The camera tracks objects and checks whether they are inside the shaded region. Typical settings:",
      ],
      list: [
        "Region: a polygon with up to four or more points, drawn over the protected area.",
        "Time threshold: how many seconds an object must stay inside before the alert.",
        "Target type: human, vehicle or both. This removes animals and shadows.",
        "Sensitivity: how large and how clear an object must be.",
        "Schedule: for example only from closing time to opening time.",
      ],
    },
    {
      id: "vs",
      h: "Intrusion vs line crossing vs motion detection",
      p: [
        "[Line crossing detection](/glossary/line-crossing-detection) fires once when an object crosses a line, and cares about direction. Intrusion detection fires while an object is inside a region. Motion detection fires on any pixel change. For an empty yard at night, intrusion detection is usually the better rule. For a gate, use a line.",
      ],
    },
    {
      id: "false",
      h: "Avoiding false alarms",
      p: [
        "Keep the region tight to the ground where people would walk. Leave out trees, roads and reflective glass. Turn on the human filter. Add a short time threshold so a person passing the edge does not trigger it. Clean the lens and check infrared glare, because insects close to the lens still confuse some models. See [camera alerts that matter](/blog/camera-alerts-that-matter) for how to tune alerts so you keep trusting them.",
      ],
    },
    {
      id: "response",
      h: "What happens after an alert",
      p: [
        "On a home or shop system the alert goes to a phone with a picture. On a bank or municipal system it may go to a control room, trigger a siren or light through an [alarm output](/glossary/alarm-input-output) and mark the recording. Reading the marked clip later is easier if footage is kept long enough. See [retention](/glossary/retention).",
      ],
    },
    {
      id: "threshold",
      h: "Region entrance, intrusion and the time threshold",
      p: [
        "Hikvision describes two related rules. Region entrance fires when an object enters a drawn region, and the camera can hold up to four regions. Intrusion detection fires when an object enters and stays, using a time threshold. A threshold of zero makes intrusion fire at once on entry, which makes it behave like region entrance. Forum users often prefer intrusion detection for reliable alerts, because it keeps notifying while the object remains.",
        "A threshold of several seconds is a good compromise for most yards. It ignores a delivery person who steps through the edge of the region and leaves, and still catches someone who walks in. For a fence line at night, a shorter time is reasonable.",
      ],
    },
    {
      id: "examples",
      h: "Examples from real sites",
      p: [
        "A closed shop with a back lane: draw the lane, set human only, and arm the rule from closing time to opening time. A school compound after hours: one region over the playground and another over the main building door. A factory yard with trucks: a vehicle filter keeps lorries from triggering a rule meant for people, or the other way round.",
        "Banks and municipal offices usually combine several regions per camera with different schedules. See [municipal CCTV operations](/blog/municipal-cctv-operations) for how a control room handles a flood of events.",
      ],
    },
    {
      id: "lunacam",
      h: "Intrusion events and LunaCam",
      p: [
        "LunaCam turns camera events into alarms that a team can work. The alarm queue supports assignment, acknowledgement reasons and standard operating procedure steps, and escalation moves an unacknowledged alarm to the next person. Schedules for Home, Away and Disarm switch rules on and off. Footage around an alarm can be saved as a clip or added to a case. See [alerts](/products/alerts) and [evidence](/products/evidence).",
      ],
    },
  ],
  faq: [
    { q: "What is intrusion detection in a CCTV camera?", a: "It is a smart event that fires when a person or vehicle enters, or stays in, a region you mark on the image." },
    { q: "Is intrusion detection the same as motion detection?", a: "No. Motion detection reacts to any change in the picture. Intrusion detection checks the type of object and whether it is in a defined region, so it is less noisy." },
    { q: "Does intrusion detection need a special camera?", a: "Yes. The camera or recorder must support it. Look for line crossing and intrusion in the specifications." },
    { q: "Can it trigger an alarm or siren?", a: "Yes, if the camera or recorder has an alarm output or can send the event to another system." },
    { q: "What is the difference between region entrance and region intrusion?", a: "Brands use different names. Generally intrusion means an object is inside the region for a set time, while entrance means the moment it enters." },
    { q: "What is the time threshold in intrusion detection?", a: "It is how many seconds an object must stay inside the region before the camera raises the alert. Zero means the alert fires as soon as the object enters." },
    { q: "Should I use intrusion detection or motion detection for a yard?", a: "Use intrusion detection with a human filter for alerts. Keep plain motion detection for recording, where a missed event costs more than a false one." },
  ],
  related: ["motion-detection", "line-crossing-detection", "video-analytics", "alarm-input-output"],
  product: "alerts",
};

export default term;
