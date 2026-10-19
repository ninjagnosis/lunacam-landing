import type { Term } from "../types";

const term: Term = {
  slug: "field-of-view",
  term: "Field of view",
  aka: ["FOV", "Viewing angle", "Angle of view", "Camera coverage"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "Camera field of view (FOV): angle, coverage and detail",
  description: "Field of view is how wide an area a camera covers, in degrees. How FOV relates to lens size, distance and detail, and how to plan coverage without blind spots.",
  short: "Field of view, or FOV, is how wide an area a camera can see, measured as an angle in degrees. A wide view covers more ground but shows less detail on each object.",
  body: [
    "FOV is set by the lens and sensor. A 100 degree view covers a room corner to corner. A 30 degree view covers a narrow strip far away. You cannot have both width and detail from one camera at one distance.",
    "Good planning starts from the question: what must I see, how big must it appear and how far away is it? The answer sets the angle.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Field of view meaning",
      p: [
        "Field of view, also called viewing angle, is the angle between the left and right edges of the picture. It is usually quoted horizontally, sometimes vertically or diagonally. The three differ, so check which one a spec sheet quotes.",
        "FOV links to [focal length](/glossary/focal-length): a smaller focal length gives a wider field of view.",
      ],
    },
    {
      id: "width",
      h: "How wide an area does a camera cover?",
      p: [
        "Width at a given distance follows the angle. As a guide, a 90 degree camera covers a width about twice the distance, so at 5 m it sees roughly 10 m across. A 60 degree camera covers about 1.15 times the distance. Move away and the covered width grows, while subjects shrink.",
      ],
    },
    {
      id: "detail",
      h: "Field of view and detail",
      p: [
        "A fixed number of pixels is spread over the whole view. Double the width and you halve the pixels per metre on each subject. That is why a wide camera on a shop ceiling can show the room but not a face. Raise [resolution](/glossary/camera-resolution) or narrow the lens when you need identification.",
      ],
      list: [
        "Detect: you can see something is there. Needs the fewest pixels.",
        "Observe: you can see what a person is doing.",
        "Recognise: you can tell a known person.",
        "Identify: you can identify an unknown person beyond doubt. Needs the most pixels.",
      ],
    },
    {
      id: "blind",
      h: "Planning coverage and blind spots",
      p: [
        "Sketch the floor plan and draw each camera’s cone. Overlap cameras slightly so nobody can walk between them. Put identification cameras at entrances, at face height, pointing at where people must pass. Wide cameras then give context. The step by step method is in [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal) and the [site handover guide](/blog/installer-site-handover-guide).",
      ],
    },
    {
      id: "types",
      h: "Which camera shapes give which view",
      p: [
        "Most [bullet](/glossary/bullet-camera) and [dome](/glossary/dome-camera) cameras are 60 to 110 degrees. A [fisheye camera](/glossary/fisheye-camera) covers 180 or 360 degrees. A [varifocal lens](/glossary/varifocal-lens) lets you set the angle at install. A [PTZ](/glossary/ptz) camera can point and zoom, which changes its view on demand.",
      ],
    },
    {
      id: "sizing",
      h: "A quick way to size a view",
      p: [
        "Multiply the distance by the width factor to find the covered width. As rough factors, 100 degrees is about 2.4 times the distance, 80 degrees about 1.7, 55 degrees about 1.0 and 28 degrees about 0.5. At 6 m, a 4 mm lens (about 80 degrees) covers about 10 m. Sketch it on paper before drilling.",
        "Height matters too. Mounted high and tilted down, a camera covers a trapezoid on the floor, not a rectangle. The area right below the camera is often missed, so the next camera must cover it.",
      ],
    },
    {
      id: "dori",
      h: "Matching the view to the job",
      p: [
        "Quoted pixel targets in the IEC 62676-4 DORI levels are 25 pixels per metre to detect, 63 to observe, 125 to recognise and 250 to identify. To identify on a 4 MP camera (2560 pixels wide), the scene width must be about 10 m or less. See [camera resolution](/glossary/camera-resolution).",
      ],
    },
    {
      id: "mistakes",
      h: "Common mistakes",
      p: [
        "Pointing the camera too high so it sees the ceiling and tops of heads. Placing the camera behind a pillar or a sign. Putting a wide camera in a corridor so far away that faces are tiny. Leaving a gap between two cameras at the corner of a building. Walk the site with a phone showing the live picture and check each corner. The [installer site handover guide](/blog/installer-site-handover-guide) has a checklist.",
      ],
    },
    {
      id: "lunacam",
      h: "Field of view and LunaCam",
      p: [
        "LunaCam has floor plans where you place each camera, which helps you see overlaps and gaps in coverage across a site. It also shows each camera live in the app, so you can check the view from your phone after the install.",
      ],
    },
  ],
  faq: [
    { q: "What is field of view in a camera?", a: "The angle of the area the camera can see, usually in degrees." },
    { q: "What is a good field of view for a CCTV camera?", a: "60 to 100 degrees for most indoor and entrance cameras. Narrower for long distances, wider for room overviews." },
    { q: "Is FOV the same as focal length?", a: "No, but they are linked. A shorter focal length gives a wider field of view." },
    { q: "Why do faces look small on my wide camera?", a: "The pixels are spread across a wide area. Narrow the lens, move closer or raise resolution." },
    { q: "What is the difference between horizontal and diagonal FOV?", a: "Diagonal is measured corner to corner and is the largest number. Horizontal is edge to edge sideways." },
  ],
  related: ["focal-length", "varifocal-lens", "fisheye-camera", "camera-resolution"],
  product: "camera-app",
};

export default term;
