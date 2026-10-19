import type { Term } from "../types";

const term: Term = {
  slug: "focal-length",
  term: "Focal length",
  aka: ["Lens size", "2.8mm lens", "4mm lens", "Camera lens mm"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "Camera focal length: 2.8mm vs 4mm vs 6mm lens explained",
  description: "Focal length, in millimetres, decides how wide a camera sees. 2.8mm, 4mm, 6mm and 12mm lenses compared for doors, shops and yards.",
  short: "Focal length is the lens number in millimetres. A small number like 2.8 mm sees a wide area with small detail, and a large number like 12 mm sees a narrow area with more detail.",
  body: [
    "Focal length trades width for reach. A 2.8 mm lens shows a whole room but makes people in the distance small. A 12 mm lens shows a narrow slice far away, large enough to read a plate.",
    "Most CCTV cameras ship with a 2.8 mm or 4 mm lens, which suits shops and entrances. The right choice depends on how far the subject is and how wide the area is.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Focal length meaning",
      p: [
        "Focal length is the distance from the lens to the sensor when focused at infinity, in millimetres. In practice it is a number that sets the angle of view. Smaller means wider, larger means narrower and more magnified. The view angle also depends on the sensor size, so compare cameras with the same sensor.",
      ],
    },
    {
      id: "chart",
      h: "Common focal lengths and what they see",
      p: [
        "These horizontal angles are approximate for a typical 1/2.7 inch sensor, and differ by model. Check the datasheet.",
      ],
      list: [
        "2.8 mm: about 100 to 110 degrees. Rooms, small shops, close entrances.",
        "4 mm: about 80 degrees. The all-round default for shop interiors and doors.",
        "6 mm: about 55 degrees. Longer corridors, yards and gates.",
        "8 mm: about 40 degrees. Driveways and building faces.",
        "12 mm: about 28 degrees. Long distance, gate at the far end, number plates.",
      ],
    },
    {
      id: "choose",
      h: "How to choose a focal length",
      p: [
        "Start with the distance to the subject and the width of the area you must cover. Then decide how large the subject should appear. For faces at a door, a 4 mm or 6 mm lens placed close often beats a wide lens placed far. The link between width and detail is covered in [camera resolution](/glossary/camera-resolution) and [field of view](/glossary/field-of-view). Choosing in practice is in [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal).",
      ],
    },
    {
      id: "fixed-vs-vari",
      h: "Fixed vs varifocal lenses",
      p: [
        "A fixed lens has one focal length. A [varifocal lens](/glossary/varifocal-lens) lets the installer adjust it, for example from 2.8 to 12 mm, so one camera model suits many positions. That helps when you cannot measure the site beforehand.",
      ],
    },
    {
      id: "tradeoffs",
      h: "Trade-offs",
      p: [
        "A narrow lens makes the picture shake more in wind, since small movement is magnified. It also reaches farther with infrared, because the same [IR](/glossary/ir-night-vision) light covers a smaller area. A very wide lens bends straight lines at the edges. See [fisheye cameras](/glossary/fisheye-camera) for the extreme case.",
      ],
    },
    {
      id: "sensor",
      h: "Sensor size changes the angle",
      p: [
        "Focal length alone does not fix the angle. A 2.8 mm lens on a 1/2.7 inch sensor and on a 1/1.8 inch sensor give different views, because the bigger sensor sees more of what the lens projects. Datasheets state the horizontal angle, which is the number to compare. Quoted angles also vary between makers by 10 degrees or more for wide lenses, so treat them as a guide.",
      ],
    },
    {
      id: "example",
      h: "Worked example: a shop door",
      p: [
        "A camera 3 m from a 1 m wide door needs a narrow view to put many pixels on faces. A 4 mm lens at about 80 degrees sees roughly 5 m across at 3 m, so the door fills only a fifth of the width. A 6 mm lens at about 55 degrees sees about 3 m across, so the door fills a third. Face detail in the second case is much better with the same camera.",
        "A camera in the middle of a small room, aimed at the whole floor, is a different job. Here 2.8 mm shows the entire space. Use both: a wide camera for context and a tight one for faces.",
      ],
    },
    {
      id: "distortion",
      h: "Distortion and other side effects",
      p: [
        "Very wide lenses curve straight lines near the edges, a bit like a fisheye. Objects at the edge look stretched. If the lines of a door frame bend in the picture, that is lens distortion. Cheap lenses are also less sharp at the corners. For long distances, a long lens needs a steady mount, because small wind movement becomes a large shake in the picture.",
      ],
    },
  ],
  faq: [
    { q: "What does 2.8mm mean on a camera?", a: "It is the lens focal length. 2.8 mm is a wide lens that sees about 100 degrees." },
    { q: "Is 2.8mm or 4mm better?", a: "2.8 mm covers more area. 4 mm shows more detail at a distance. Pick by how far the subject is." },
    { q: "What focal length is best for number plates?", a: "A long lens, often 8 to 12 mm or more, aimed along the road at a modest angle." },
    { q: "Does a higher mm mean zoom?", a: "Yes, it narrows the view and enlarges distant subjects, but the camera does not move." },
    { q: "Can I change a camera’s lens?", a: "On cameras with a removable lens yes. Most are fixed or varifocal and not user-changeable." },
  ],
  related: ["field-of-view", "varifocal-lens", "camera-resolution", "fisheye-camera"],
  product: "camera-app",
};

export default term;
