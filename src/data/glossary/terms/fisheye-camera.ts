import type { Term } from "../types";

const term: Term = {
  slug: "fisheye-camera",
  term: "Fisheye camera",
  aka: ["360 degree camera", "Panoramic camera", "Fisheye CCTV camera", "180 degree camera"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "Fisheye camera: 360 degree CCTV, dewarping and where to use it",
  description: "A fisheye camera sees up to 360 degrees from the ceiling with one ultra-wide lens. How dewarping works, resolution needs and when it beats several cameras.",
  short: "A fisheye camera has an ultra-wide lens that covers a whole room, up to 360 degrees, with one device. Its circular picture is flattened by software into normal views.",
  body: [
    "Mounted flat in the middle of a ceiling, a fisheye camera sees every wall and the floor in one round image. Mounted on a wall it shows a 180 degree panorama.",
    "The raw picture looks curved, so the recorder or app dewarps it into standard views. One fisheye camera can replace two to four ordinary cameras in an open room.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Fisheye camera meaning",
      p: [
        "The lens is a very short [focal length](/glossary/focal-length), around 1 to 2 mm, that bends light from a hemisphere onto the sensor. Its [field of view](/glossary/field-of-view) is 180 degrees or more. The image is a circle with a strong curve at the edges.",
      ],
    },
    {
      id: "dewarp",
      h: "Dewarping and view modes",
      p: [
        "Dewarping is the maths that unrolls the circle into flat pictures. It can be done in the camera, in the recorder or in the viewing software. Common modes:",
      ],
      list: [
        "Fisheye: the raw circle.",
        "Panorama: a flat 180 or 360 degree strip.",
        "Quad or 4 split: four flat views of the four directions.",
        "PTZ view: a virtual camera you steer inside the image with no moving parts.",
        "Check that your recorder or app supports the camera’s dewarp, otherwise you only see the circle.",
      ],
    },
    {
      id: "resolution",
      h: "Why resolution matters",
      p: [
        "One sensor covers the whole room, so detail per object is low. Faces at the edge of the room get few pixels. Use 5 MP, 8 MP or higher models. See [camera resolution](/glossary/camera-resolution). Use a fisheye for coverage and context, and an ordinary camera for identification at doors and counters.",
      ],
    },
    {
      id: "where",
      h: "Where fisheye works",
      p: [
        "Good fits are open rooms and halls: restaurants, showrooms, reception areas, small warehouses, corridors junctions and lifts. It removes blind spots between cameras. It is a poor fit outdoors at a distance, in rooms with very low ceilings, and anywhere you need to read plates or recognise faces far away.",
      ],
    },
    {
      id: "mount",
      h: "Mounting tips",
      p: [
        "Centre it on the ceiling for 360 degrees, with nothing blocking the lens like a beam or hanging light. Wall-mounting gives a 180 degree view. Keep IR from reflecting off nearby walls by checking the night picture. The planning method is in [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal).",
      ],
    },
    {
      id: "modes",
      h: "Where dewarping happens",
      p: [
        "Dewarping can happen in three places. In the camera, the recorder gets flat pictures and any software works. In the recorder, the recorder shows the views but outside apps may only see the circle. In the viewing software, you need a player that knows the camera model. Check this before you buy. A fisheye whose view only dewarps inside one maker’s app is a poor fit for a mixed system.",
      ],
    },
    {
      id: "pixels",
      h: "Pixel density in a fisheye",
      p: [
        "The pixels are spread over a circle, and the centre gets more detail than the edge. On an 8 MP fisheye in a 6 m wide room, a person at the wall has far fewer pixels than someone below the camera. Use the DORI figures from [camera resolution](/glossary/camera-resolution) as a guide: for faces you want 125 to 250 pixels per metre, which a ceiling fisheye rarely gives at the walls. Plan a normal camera for each entrance.",
      ],
    },
    {
      id: "cases",
      h: "Good and poor fits",
      p: [
        "Examples help.",
      ],
      list: [
        "Good: a restaurant floor, a showroom, a small hall, a reception area, a lift lobby.",
        "Good: a corner junction where two corridors meet.",
        "Poor: a long hallway. A normal camera sees further.",
        "Poor: outdoors across a yard. Detail at distance is too low.",
        "Poor: very low ceilings, where the view is mostly the floor directly below.",
      ],
    },
    {
      id: "lunacam",
      h: "Fisheye cameras and LunaCam",
      p: [
        "A fisheye camera on your DVR or NVR, or one that speaks ONVIF, shows in the LunaCam app as the stream it sends. If the camera dewarps itself, you see flat views. A raw circular picture needs software that can dewarp it, so check your model before relying on that.",
      ],
    },
  ],
  faq: [
    { q: "What is a fisheye camera?", a: "A camera with an ultra-wide lens that covers 180 to 360 degrees, usually mounted on a ceiling." },
    { q: "What is dewarping?", a: "The process of flattening the curved fisheye image into normal-looking views." },
    { q: "Can a fisheye camera replace several cameras?", a: "In an open room, yes, for overview coverage. For faces and plates, use dedicated cameras." },
    { q: "Do fisheye cameras need high resolution?", a: "Yes, because one sensor covers the whole room. 5 MP or higher is common." },
    { q: "Can I use a fisheye camera outdoors?", a: "Outdoor models exist, but a fisheye is mainly for rooms and short distances." },
  ],
  related: ["field-of-view", "focal-length", "dome-camera", "camera-resolution"],
  product: "camera-app",
};

export default term;
