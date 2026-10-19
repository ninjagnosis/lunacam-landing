import type { Term } from "../types";

const term: Term = {
  slug: "line-crossing-detection",
  term: "Line crossing detection",
  aka: ["Tripwire detection", "Virtual tripwire", "Cross line detection", "Line detection"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "Line crossing detection (tripwire): meaning and setup",
  description: "Line crossing detection alerts you when a person or vehicle crosses a line drawn on the picture. How it works and how it differs from motion detection.",
  short: "Line crossing detection raises an alert when a person or vehicle crosses a virtual line drawn on the camera picture. You can choose the direction, so only one way counts.",
  body: [
    "You draw a line across a gate, a fence line or a doorway on the camera image. When an object passes over it, the camera sends an event. You can set it to fire for A to B, B to A, or both.",
    "It is one of the smart events built into many IP cameras and recorders. Because it reacts to an object crossing a line rather than any movement, it produces far fewer false alerts than plain [motion detection](/glossary/motion-detection).",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is line crossing detection?",
      p: [
        "It is a rule on the camera: when a tracked object moves from one side of a line to the other, raise an event. Hikvision calls it line crossing detection, Dahua calls it tripwire, and other brands use similar names. The idea is the same.",
      ],
    },
    {
      id: "how",
      h: "How does it work?",
      p: [
        "The camera finds moving objects, follows them from frame to frame and notes which side of the line they are on. When the position flips, the rule fires. Most cameras can limit this to people or vehicles so animals and shadows are ignored.",
      ],
      list: [
        "Draw the line: place it where people must pass, such as across a gate or corridor.",
        "Pick a direction: A to B, B to A or both.",
        "Pick the target: any object, human, vehicle or both.",
        "Set sensitivity: how sure the camera must be before it fires.",
        "Choose actions: notify, record, sound an alarm output or send the event to the recorder.",
      ],
    },
    {
      id: "uses",
      h: "Where line crossing is useful",
      p: [
        "Good uses are a perimeter fence, a shop entrance after closing, a loading bay and a car park exit. It also works for counting if you only care about entries. For proper counts use [people counting](/glossary/people-counting), which is built for accuracy.",
      ],
    },
    {
      id: "vs",
      h: "Line crossing vs intrusion detection",
      p: [
        "Line crossing watches a line and cares about direction. [Intrusion detection](/glossary/intrusion-detection), sometimes called area or region detection, watches a shaded area and fires when something enters it or stays in it. Use a line for a gate or boundary. Use a region for a yard or room that should be empty.",
      ],
    },
    {
      id: "tips",
      h: "Setup tips and limits",
      p: [
        "Place the line where objects cross it cleanly, not where people bunch up. Avoid lines near trees or reflections. Keep the camera angle steep enough that people do not overlap each other. At night, check the infrared picture is clear enough for the camera to find people. See [low light camera](/glossary/low-light-camera).",
        "The feature runs on the camera or recorder, so it needs a model that supports it. Cheap analog and basic IP cameras often do not. Check that the event reaches your viewing app, which depends on the brand and whether it supports [ONVIF](/glossary/onvif) events or its own protocol.",
      ],
    },
    {
      id: "settings",
      h: "Direction, lines and target types in practice",
      p: [
        "On Hikvision, line crossing lets you pick A to B, B to A or both. Smart-series cameras have been documented with up to four lines, and value-series models with one, so check your model. Dahua calls the feature tripwire and has its own direction options. Forum users report the options differ between brands, so test the direction setting by walking through the scene rather than trusting the label.",
        "Set the target type to human or vehicle wherever the camera allows it. Without a target filter the rule fires on any moving object, including animals and blown litter, and you are back to the noise of plain [motion detection](/glossary/motion-detection).",
        "Test by walking across the line at the speed you expect, then by walking slowly, then by running. Mark the result on the event list of the recorder. If slow crossings are missed, lower the sensitivity threshold or move the line to where people do not pause.",
      ],
    },
    {
      id: "examples",
      h: "Where it works well in Nepal",
      p: [
        "A rooftop water tank or a shutter at the back of a shop is a good place for a line, because a person who crosses it has no business there at night. A school boundary wall, a petrol pump forecourt edge and the entrance to a godown are other examples. A line across a busy market lane is not, because someone will cross it every few seconds.",
        "For a house with a front yard, an intrusion region is often better than a line, because people can enter the yard at several points. See [intrusion detection](/glossary/intrusion-detection).",
      ],
    },
    {
      id: "lunacam",
      h: "Line crossing and LunaCam",
      p: [
        "A camera that raises a line crossing event can feed LunaCam's rule engine, where you decide who is told and when. Schedules switch rules on for closing hours, and the alarm queue lets a control room assign, acknowledge and escalate an event. The marker also appears on the playback timeline so the clip is easy to find later. See [alerts](/products/alerts).",
      ],
    },
  ],
  faq: [
    { q: "What is tripwire detection in CCTV?", a: "Tripwire is another name for line crossing detection. The camera raises an alert when an object crosses a line you draw on the image." },
    { q: "Is line crossing better than motion detection?", a: "For gates and boundaries, yes. It reacts to objects crossing a line in a set direction, so it produces fewer false alarms than motion detection." },
    { q: "Does line crossing detection need a special camera?", a: "Yes. The camera or recorder must support smart events. Basic cameras often have motion detection only." },
    { q: "Can it tell the direction of movement?", a: "Yes. You can set A to B, B to A or both directions." },
    { q: "Does it work at night?", a: "It can, if the night picture is clear enough for the camera to detect people or vehicles. Poor lighting and glare reduce accuracy." },
    { q: "How many lines can I draw?", a: "It depends on the camera. Some Hikvision smart-series cameras allow up to four lines, and value models one. Check the model's data sheet." },
    { q: "What is the difference between line crossing and region entrance?", a: "Line crossing fires when an object crosses a line. Region entrance fires when an object enters a drawn area. Intrusion adds a time the object must stay inside." },
  ],
  related: ["motion-detection", "intrusion-detection", "video-analytics", "people-counting"],
  product: "alerts",
};

export default term;
