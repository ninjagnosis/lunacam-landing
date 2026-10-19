import type { Term } from "../types";

const term: Term = {
  slug: "motion-detection",
  term: "Motion detection",
  aka: ["Video motion detection", "VMD", "Motion alarm", "Pixel motion detection"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "Motion detection in CCTV: meaning, settings and false alarms",
  description: "Motion detection means a camera or recorder notices the picture changed. How it works, how to set zones and sensitivity, and why it raises false alarms.",
  short: "Motion detection is when a camera or recorder compares frames and flags a change in the picture. It can start recording, send an alert or mark a moment on the timeline.",
  body: [
    "The camera or recorder looks at each frame and compares it with the ones before. If enough pixels change by enough, it decides something moved. That decision can start a recording, send a phone alert or add a marker to the timeline.",
    "Basic motion detection only knows that pixels changed. It cannot tell a person from a shadow, a moth or a branch in the wind. Newer cameras add a person and vehicle filter on top, which cuts most of the noise.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What does motion detection mean on a CCTV camera?",
      p: [
        "It means the device is watching for change rather than recording or alerting all the time. When the scene is still, nothing happens. When something moves through the picture, the device reacts.",
        "Most DVRs, NVRs and IP cameras have it built in. Setting it up usually means drawing the area to watch, choosing a sensitivity and choosing what to do when it triggers.",
      ],
    },
    {
      id: "how",
      h: "How does motion detection work?",
      p: [
        "The simplest method is frame comparison. The device keeps a reference picture, compares each new frame to it and counts how many blocks of pixels differ. If the count passes a threshold, motion is declared.",
      ],
      list: [
        "Zones: you draw one or more areas. Movement outside them is ignored.",
        "Sensitivity: how small a change counts. High catches small movement and also more noise.",
        "Threshold or size: how large the moving area must be before it triggers.",
        "Schedule: the hours when detection is active.",
        "Action: record, send a push notification, sound a buzzer or trigger an [alarm output](/glossary/alarm-input-output).",
      ],
    },
    {
      id: "false-alarms",
      h: "Why motion detection gives false alarms",
      p: [
        "A frame comparison cannot understand what it sees. Common causes of false alerts:",
      ],
      list: [
        "Trees, flags and curtains moving in wind.",
        "Insects and spiders near the lens at night, lit up by the infrared lights. See [IR night vision](/glossary/ir-night-vision).",
        "Rain, dust and headlight sweeps across a wall.",
        "Sudden light changes when the camera switches between day and night mode.",
        "Sensitivity set too high, or no zones drawn so the whole picture counts.",
      ],
    },
    {
      id: "fixes",
      h: "How to reduce false motion alerts",
      p: [
        "Draw zones over the doorway, gate or counter and leave out trees and the road. Lower sensitivity until normal movement stops triggering. Keep insects away by cleaning the lens area and moving lights. If the camera supports person and vehicle detection, use it instead of plain motion for alerts, and keep plain motion only for recording.",
        "For tuning ideas see [camera alerts that matter](/blog/camera-alerts-that-matter).",
      ],
    },
    {
      id: "vs",
      h: "Motion detection vs line crossing vs intrusion",
      p: [
        "Motion detection reacts to any change in an area. [Line crossing detection](/glossary/line-crossing-detection) fires only when an object crosses a line you draw, in a chosen direction. [Intrusion detection](/glossary/intrusion-detection) fires when an object enters or stays in a region. The last two usually need a camera with built-in [video analytics](/glossary/video-analytics) and are less noisy than plain motion.",
      ],
    },
    {
      id: "recording",
      h: "Motion recording and storage",
      p: [
        "Recording only on motion saves disk space. The recorder usually keeps a few seconds before the trigger (pre-record) and after it. The trade-off is risk: if the motion setting misses an event, there is no footage. Many installs record continuously on the main stream and use motion only for alerts and for searching later. See [retention](/glossary/retention) for how long to keep footage.",
      ],
    },
    {
      id: "examples",
      h: "Motion detection in practice: a shop, a home and a bank branch",
      p: [
        "In a shop, the useful zone is the counter, the till and the door, not the street outside the window. A zone drawn over the whole picture will fire every time a bus passes. Many Nepal shops also run bright signboards and shutters that flicker at night, so a zone that excludes the sign avoids repeated alerts.",
        "At a home, the gate and the front door are the places that matter. Dogs, cats and the neighbour's children cross the yard all day, so most homes do better with person detection for phone alerts and plain motion only for recording.",
        "At a bank branch or ATM kiosk, motion at night inside a closed lobby is rare and meaningful, so a schedule that arms detection after closing is the main control. During opening hours the same zone would fire constantly and be ignored. See [bank branch CCTV management](/blog/bank-branch-cctv-management).",
      ],
    },
    {
      id: "pre-record",
      h: "Pre-record, post-record and cooldown",
      p: [
        "Three timers shape what you get from a motion event. Pre-record keeps a few seconds before the trigger, because a person is already in the picture by the time the system decides there was motion. Post-record keeps recording for a while after the last movement so the clip does not stop as someone walks off. Cooldown or interval stops a flood of alerts: after one notification, further triggers within a set time are folded into the same event.",
        "If you only get footage that starts when the person is already at the door, raise the pre-record time. If clips end too early, raise the post-record time.",
      ],
    },
    {
      id: "lunacam",
      h: "Motion events and LunaCam",
      p: [
        "LunaCam shows camera events as markers on the playback timeline, so you can jump straight to the moments with movement instead of scrubbing a whole day. Smart search lets you draw a region on recorded video and find motion inside it.",
        "Alerts run through the rule engine, where a rule can use a zone, a confidence level and an area, and Home, Away and Disarm schedules decide when a rule is active. Alerts that need follow-up go to an alarm queue with assignment, acknowledgement reasons and escalation. See [alerts](/products/alerts) and [playback and clips](/products/playback-clips).",
      ],
    },
  ],
  faq: [
    { q: "What is motion detection in a DVR?", a: "It is a recorder setting that watches for changes in the picture. It can start recording, send a notification or mark the timeline when something moves in the zones you set." },
    { q: "Does motion detection record all the time?", a: "No. With motion recording, the DVR saves video only when motion is detected, plus a few seconds before and after. Continuous recording saves everything." },
    { q: "Why does my camera detect motion at night?", a: "Insects near the lens, infrared glare, rain and light changes are the usual causes. Lower the sensitivity, draw zones and clean the lens area." },
    { q: "Is motion detection the same as AI detection?", a: "No. Motion detection only sees pixel change. AI detection classifies what moved, such as a person or vehicle, and ignores most other movement." },
    { q: "Can motion detection work without internet?", a: "Yes. It runs on the camera or recorder itself. Internet is needed only to send alerts to your phone." },
    { q: "What is the difference between motion detection and motion recording?", a: "Motion detection is the decision that something moved. Motion recording is one action it can trigger, along with notifications and alarm outputs." },
    { q: "What sensitivity should I use?", a: "Start in the middle and watch alerts for a few days. Lower it if wind, rain or insects trigger it, and raise it only if real events are missed." },
  ],
  related: ["line-crossing-detection", "intrusion-detection", "video-analytics", "alarm-input-output"],
  product: "alerts",
};

export default term;
