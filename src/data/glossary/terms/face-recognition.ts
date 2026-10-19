import type { Term } from "../types";

const term: Term = {
  slug: "face-recognition",
  term: "Face recognition",
  aka: ["Facial recognition", "Face detection vs recognition", "Face matching"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "Face recognition in CCTV: meaning, how it works and privacy",
  description: "Face recognition matches a face in video to a stored list. How it works, how it differs from face detection, accuracy limits and privacy in Nepal.",
  short: "Face recognition is software that matches a face in video against a stored set of known faces. It is different from face detection, which only finds that a face is present.",
  body: [
    "A camera or server finds a face in the picture, turns it into a numeric template and compares that template with a list. If the match score is high enough, it reports a name or a match to a watchlist entry.",
    "Many cameras advertise face detection, which only finds faces and sometimes counts them. Recognition goes further by naming or matching the person, which is why it carries more legal and privacy weight.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Face detection vs face recognition",
      p: [
        "Detection answers: is there a face in this frame? Recognition answers: whose face is it? Detection is used to focus exposure or save a close-up. Recognition needs a stored database of enrolled faces to compare against.",
      ],
    },
    {
      id: "how",
      h: "How does face recognition work?",
      p: [
        "The steps are the same across vendors:",
      ],
      list: [
        "Detect: find faces in the frame.",
        "Align and select: pick the best frame and straighten the face.",
        "Encode: compute a template, a list of numbers describing the face.",
        "Match: compare the template with enrolled templates and produce a score.",
        "Decide: raise a match only above a chosen threshold.",
      ],
    },
    {
      id: "accuracy",
      h: "Accuracy and limits",
      p: [
        "Results depend on image quality. Faces that are small in the frame, turned away, in shadow, under a cap or mask, or captured at a steep downward angle are matched less reliably. Camera height matters: a camera high above a door sees mostly the top of heads. A lower threshold finds more people but gives more wrong matches, and a higher one does the opposite. No system is perfect, so a match should prompt a human check rather than an automatic action against a person.",
        "Accuracy can differ between groups of people, so test with the people who will actually be in front of your cameras.",
      ],
    },
    {
      id: "uses",
      h: "Common uses",
      p: [
        "Attendance in offices and schools, access to restricted rooms, and alerts for people on a banned list. These all depend on enrolled faces and a clear purpose. See [video analytics](/glossary/video-analytics) for the other kinds of analysis cameras can do.",
      ],
    },
    {
      id: "privacy",
      h: "Privacy and the law in Nepal",
      p: [
        "A face is personal and sensitive data, and storing templates of people creates more risk than recording video does. Nepal's Individual Privacy Act 2075 sets rules for personal information and for CCTV in some settings. Read our summary at [Privacy Act 2075 and CCTV in Nepal](/blog/privacy-act-2075-cctv-nepal), and take legal advice before running face recognition on the public or on staff. Basic good practice: have a stated purpose, tell people, enrol only those who agree, secure the database and delete templates when someone leaves.",
      ],
    },
    {
      id: "detection",
      h: "Face detection on cheap cameras",
      p: [
        "Many cameras list face detection among their smart functions. In most of them it means the camera finds faces to adjust exposure or to save a close-up image. It does not mean the camera knows who the person is. When a spec sheet says face recognition, ask whether the matching runs on the camera, on the recorder or on a separate server, how many faces the database can hold and how many people the camera can match at once.",
      ],
    },
    {
      id: "setup",
      h: "What a good setup needs",
      p: [
        "A face needs enough pixels across it to be matched, and vendors give a minimum in their documentation. That limits how far from the camera people can stand. A doorway or turnstile works. A wide car park does not. Light from the front, a camera at about face height and a single entry path improve results. Backlit doors, hats and masks, and cameras high on a wall make results poor.",
        "Plan the enrolment too. Who adds a person, who approves it, how a photo is taken and how a person is removed are as important as the camera. A database of staff photos is personal data and needs the same care as a payroll file.",
      ],
    },
    {
      id: "redact",
      h: "Blurring faces instead of matching them",
      p: [
        "Sometimes the need is the opposite: protecting faces before footage is shared with a customer, an insurer or the public. LunaCam's redaction tool can blur faces, plates and chosen regions in an exported clip. See [CCTV evidence export in Nepal](/blog/cctv-evidence-export-nepal). LunaCam does not offer face recognition today.",
      ],
    },
    {
      id: "alternatives",
      h: "When you do not need face recognition",
      p: [
        "Most small sites want one of three things: to know who came in, to find a person in footage, or to restrict a door. Day-to-day, a good camera at face height, a searchable timeline and a door lock with its own credential answer all three with far less risk. Recognition earns its place when the list of people is large, the volume of video is too big to search by eye and a legal basis is clear.",
      ],
    },
  ],
  faq: [
    { q: "What is the difference between face detection and face recognition?", a: "Detection only finds that a face is present. Recognition identifies or matches the face against a stored list." },
    { q: "Can CCTV cameras recognise faces?", a: "Only cameras or servers with face recognition software, and only when the face is large, clear and facing the camera. Most standard cameras do not." },
    { q: "Is face recognition legal in Nepal?", a: "It depends on purpose, consent and who is recorded. The Individual Privacy Act 2075 covers personal information. Get legal advice for your specific use." },
    { q: "How accurate is face recognition?", a: "It varies a lot with image quality, angle and lighting. Treat a match as a lead to check, not as proof." },
    { q: "Does face recognition work with masks?", a: "Accuracy drops when much of the face is covered. Some newer models handle partial coverage, but results are weaker." },
    { q: "Does face recognition work on old CCTV footage?", a: "Only if the faces are large and clear enough. Low-resolution footage from analog cameras seldom contains enough detail for reliable matching." },
    { q: "Is a match proof of identity?", a: "No. A match is a score. Have a person check the original footage before acting on it." },
  ],
  related: ["video-analytics", "anpr", "people-counting", "camera-resolution"],
  product: "camera-app",
};

export default term;
