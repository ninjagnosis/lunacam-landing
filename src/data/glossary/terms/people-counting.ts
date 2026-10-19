import type { Term } from "../types";

const term: Term = {
  slug: "people-counting",
  term: "People counting",
  aka: ["People counter", "Foot traffic counting", "Visitor counting", "Footfall counting"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "People counting with CCTV cameras: how it works and its limits",
  description: "People counting uses a camera to count people entering and leaving. How it works, what accuracy to expect and how it differs from line crossing.",
  short: "People counting uses a camera to count how many people enter, leave or are present in an area. Shops, malls and offices use it to measure footfall and occupancy.",
  body: [
    "A counting camera watches a doorway or a floor area, detects each person and adds one to the count when they cross a line. Some systems also report how many people are inside right now, and how long they stay.",
    "The counts come from [video analytics](/glossary/video-analytics) in the camera, the recorder or a separate server. The video itself is not needed once the count is made, which is why many systems store only numbers.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is people counting?",
      p: [
        "It is a measurement, not a security alert. A shop owner wants to know how many people walked in, how many bought something and which hours are busy. A mall or office wants to know occupancy. The result is a table or chart of numbers by hour and day.",
      ],
    },
    {
      id: "how",
      h: "How does people counting work?",
      p: [
        "Most systems use one of two layouts:",
      ],
      list: [
        "Overhead camera over the door: looks straight down, so people rarely hide each other. This gives the best accuracy at an entrance.",
        "Angled camera: covers a wider area but people overlap, so counts are less accurate.",
        "Line-based counting: each person crossing a virtual line is counted in or out. It uses the same idea as [line crossing detection](/glossary/line-crossing-detection), with a counter and two directions.",
        "Area-based counting: counts people visible in a region at once, used for occupancy and queues.",
      ],
    },
    {
      id: "accuracy",
      h: "How accurate is it?",
      p: [
        "Accuracy depends on camera position, lighting, door width and crowding. Claimed figures from vendors are measured in good conditions, so test with a manual count for a few hours before trusting the numbers. Wide doors, groups walking together, shadows, strollers and people carrying large items are common causes of error.",
        "Staff entering and leaving also inflate the count unless the system can exclude them, for example with a separate staff door or a tag.",
      ],
    },
    {
      id: "vs",
      h: "People counting vs line crossing vs motion detection",
      p: [
        "[Motion detection](/glossary/motion-detection) only says something moved. Line crossing raises an event when an object crosses a line. People counting accumulates those crossings into in, out and total numbers, with a focus on accuracy. Use counting for reports and line crossing for alerts.",
      ],
    },
    {
      id: "privacy",
      h: "Privacy",
      p: [
        "Counting people does not require identifying them, so it raises fewer issues than [face recognition](/glossary/face-recognition). It is still video of people, so signage and secure storage matter. See [what the Individual Privacy Act 2075 means for CCTV in Nepal](/blog/privacy-act-2075-cctv-nepal).",
      ],
    },
    {
      id: "mounting",
      h: "Overhead or angled: which mounting works",
      p: [
        "Axis describes the trade-off clearly. A top-down view, usually from a fisheye camera, sees heads and shoulders and is less affected by people hiding behind each other. An angled view shows more of each person, which can make detection easier, but people overlap in a crowd and get missed. Mounting height also matters. Research on large overhead installations found accuracy rises with height up to a point, then falls, so there is a sweet spot rather than a higher-is-better rule.",
        "With a fisheye lens, keep the counting line near the centre of the picture. The edges are stretched and less reliable. See [fisheye camera](/glossary/fisheye-camera) and [field of view](/glossary/field-of-view).",
        "Vendor guides argue that most counting errors come from mounting height, angle, lighting, resolution and skipped calibration rather than from the software. Vendors also publish accuracy figures of about 95 to 99 percent for dedicated counters under normal conditions, which are vendor claims, not independent tests.",
      ],
    },
    {
      id: "setup",
      h: "Setting up a count and checking it",
      p: [
        "Draw the counting line across the doorway, set which direction is in, and make sure the line is wider than the door. Run a manual count for at least an hour at a busy time and an hour at a quiet time. Compare in and out counts. Large gaps point to a placement or lighting problem, not a software fault.",
        "Decide how to treat staff. A shop with three staff who go in and out dozens of times a day will inflate footfall unless they use a separate door or are excluded some other way. Also decide what the number is for: conversion rate needs the count of buyers, and queue management needs wait time, which is a different feature.",
        "Store the numbers, not the video, where you can. A count by hour is enough for most owners and carries less privacy risk.",
      ],
    },
    {
      id: "uses",
      h: "What owners do with the numbers",
      p: [
        "A shop compares footfall by hour with staffing, and finds that two people are idle at the quiet hours and one is overwhelmed at the busy hour. A mall compares tenants. A school or hall tracks occupancy against a safe limit. A bank branch watches queue length to decide when to open another counter. These are decisions the numbers support, which is the test of whether counting is worth setting up.",
      ],
    },
  ],
  faq: [
    { q: "What is a people counter camera?", a: "It is a camera, usually mounted over a door, that detects people and counts how many go in and out." },
    { q: "Can any CCTV camera count people?", a: "No. The camera, recorder or server needs people counting software. Standard cameras only record." },
    { q: "How do I get the best accuracy?", a: "Mount the camera overhead at the entrance, light the area evenly and check the count against a manual count." },
    { q: "Does people counting store video?", a: "Not necessarily. The system can keep only the numbers. Any recording of the same camera follows your normal retention settings." },
    { q: "Can it count people in a queue?", a: "Some analytics systems report queue length and wait time. These are area-based features that need a supported camera or server." },
    { q: "What is a good height for a people counting camera?", a: "It depends on the lens and the doorway width, and the manufacturer's installation guide gives the range. Research shows accuracy first improves then drops as height rises." },
    { q: "Can people counting count staff separately?", a: "Only if the product supports it. Otherwise use a separate staff entrance or subtract an estimate." },
  ],
  related: ["video-analytics", "line-crossing-detection", "face-recognition", "motion-detection"],
  product: "camera-app",
};

export default term;
