import type { Term } from "../types";

const term: Term = {
  slug: "anpr",
  term: "ANPR",
  full: "Automatic number plate recognition",
  aka: ["ALPR", "LPR", "Number plate recognition", "License plate recognition", "Licence plate reader"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "What is ANPR (number plate recognition)? Meaning and how it works",
  description: "ANPR means a camera reads vehicle number plates automatically. How it works, what makes it accurate and why Nepali plates in Devanagari are harder.",
  short: "ANPR, or automatic number plate recognition, is when a camera reads vehicle number plates and turns them into text. It is also called ALPR or LPR.",
  body: [
    "An ANPR system finds the plate in the picture, reads the characters and stores the text with a time and camera name. That text can be searched, checked against a list or used to open a gate.",
    "ANPR is the term used in the UK and much of Asia. ALPR (automatic license plate recognition) is the US term, and LPR is a shorter form. They mean the same technology.",
  ],
  sections: [
    {
      id: "meaning",
      h: "ANPR meaning and full form",
      p: [
        "ANPR stands for automatic number plate recognition. The alternate names are ALPR, LPR and number plate recognition. It belongs to [video analytics](/glossary/video-analytics), because software extracts information from the video.",
      ],
    },
    {
      id: "how",
      h: "How does ANPR work?",
      p: [
        "The process has the same steps in every product:",
      ],
      list: [
        "Capture: a camera sees the vehicle plate. A fast shutter and clear view matter more than high resolution.",
        "Detect: software finds the plate region.",
        "Read: character recognition turns the plate into text.",
        "Store or act: the text, a photo and the time are saved, compared with a list or sent to a barrier.",
      ],
    },
    {
      id: "camera",
      h: "What makes ANPR accurate",
      p: [
        "ANPR fails mostly because of the image, not the software. A plate that is blurred, too small in the frame, overexposed by headlights or at a steep angle will not be read reliably.",
      ],
      list: [
        "Plate size: enough pixels across the plate. See [camera resolution](/glossary/camera-resolution) and [focal length](/glossary/focal-length).",
        "Shutter speed: short enough to freeze a moving vehicle.",
        "Light: infrared helps at night, and [WDR](/glossary/wdr) helps against headlights.",
        "Angle: close to straight on, not from the side.",
        "Speed and distance: gates and checkpoints work better than open roads.",
      ],
    },
    {
      id: "nepal",
      h: "ANPR for Nepali number plates",
      p: [
        "Many Nepali plates use Devanagari script and numerals, and plate formats vary by province, vehicle type and age. Embossed plates, painted plates and older formats look different from each other. Software trained only on Latin plates will often misread them, so ask for a test on real local plates before buying. Dirt, bent plates and non-standard fonts also lower accuracy.",
      ],
    },
    {
      id: "uses",
      h: "Uses and privacy",
      p: [
        "Common uses are gate and parking access, entry logs for factories and banks, and finding a vehicle in recorded footage. Plate lists, called watchlists, can alert when a listed vehicle appears. A plate is personal data once it can be linked to an owner, so keep logs secure and limit who can search them. See [privacy and CCTV in Nepal](/blog/privacy-act-2075-cctv-nepal).",
      ],
    },
    {
      id: "research",
      h: "What research says about Nepali plates",
      p: [
        "Several Nepali groups have published work on reading local plates. One study combined YOLO-based plate and character detection with a character classifier trained on 34 Devanagari characters and reported up to 93 percent accuracy on real-world images. Another reported a Raspberry Pi parking gate system with high character accuracy, at about two to three seconds per read. These are research results on limited datasets, not field-proven products, but they show the problem is solvable with local training data.",
        "The authors of the first study note that embossed plates were scarce in their data, so they supplemented it with foreign plates. Embossed plates have been printed in Roman letters, and news reports have covered discussion of Devanagari on future embossed plates, so plate formats may change. Ask any vendor how often their model is retrained and on what data.",
      ],
    },
    {
      id: "gates",
      h: "ANPR at a gate, a car park or a road",
      p: [
        "A gate or a car park entrance is the easy case. The vehicle slows or stops, comes from a known direction and the camera is close. An open road is harder: speed, angle, lanes, headlights and distance all lower the read rate. For a bank or hospital car park, one camera aimed at the entry lane with an infrared light is usually enough. For a road, expect to need a dedicated ANPR camera with a fast shutter and good placement, not a general dome camera on a pole.",
        "Also measure by reads, not by claims. Count how many vehicles pass in a day, how many plates were read correctly, and how many were missed. Do this for a week at the real site.",
      ],
    },
    {
      id: "lunacam",
      h: "Plate reads and LunaCam",
      p: [
        "The LunaCam platform stores plate reads and supports watchlists and hits, and its redaction tool can blur plates, faces or regions before a clip is shared. Reading accuracy still depends on the camera and its angle. See [evidence](/products/evidence).",
      ],
    },
  ],
  faq: [
    { q: "What is the full form of ANPR?", a: "Automatic number plate recognition." },
    { q: "What is the difference between ANPR and ALPR?", a: "Nothing technical. ANPR is the common term in the UK and Asia. ALPR (automatic license plate recognition) is the US term." },
    { q: "Can a normal CCTV camera do ANPR?", a: "A standard camera may record plates, but reliable ANPR needs the right angle, shutter speed and light, and software to read the text. Dedicated ANPR cameras are tuned for this." },
    { q: "Does ANPR work on Nepali plates?", a: "Only if the software is trained on them. Devanagari characters and varied formats make Nepali plates harder, so test before deploying." },
    { q: "How accurate is ANPR?", a: "It depends on the setup. Controlled gates with good light can be very accurate. Open roads, speed, dirt and glare reduce it. Test on your own site." },
    { q: "How many pixels does a plate need?", a: "Requirements vary by product. A common rule from vendors is a plate that is wide enough in the frame for the characters to be clearly separate. Ask for the vendor's figure and test it." },
    { q: "Can ANPR read two-line plates and Devanagari numerals?", a: "Only if the model is trained on those formats. Test with real plates from your site before buying." },
  ],
  related: ["video-analytics", "camera-resolution", "face-recognition", "wdr"],
  product: "camera-app",
};

export default term;
