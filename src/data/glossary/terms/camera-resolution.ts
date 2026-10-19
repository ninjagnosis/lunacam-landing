import type { Term } from "../types";

const term: Term = {
  slug: "camera-resolution",
  term: "Camera resolution",
  aka: ["Megapixel", "MP", "1080p", "4MP", "4K camera", "2MP vs 4MP"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "CCTV camera resolution: 2MP vs 4MP vs 8MP (4K) explained",
  description: "Camera resolution is the number of pixels in the picture. 2MP, 4MP, 5MP and 8MP (4K) compared, with what each means for detail, storage and bandwidth.",
  short: "Camera resolution is the number of pixels in the picture, usually quoted in megapixels. More pixels mean more detail, and also more storage and bandwidth.",
  body: [
    "A 2 MP camera produces a 1920 by 1080 picture, about two million pixels. An 8 MP camera produces 3840 by 2160, four times as many. More pixels let you see a face, a number plate or a small label from farther away, or zoom in later.",
    "Resolution is only part of picture quality. A high-megapixel camera with a small sensor or poor night performance can look worse than a lower one in the dark.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Camera resolution meaning",
      p: [
        "Resolution is width times height in pixels. Megapixels (MP) round that to millions. Names like 1080p, 2K and 4K describe common sizes.",
      ],
      list: [
        "2 MP: 1920 x 1080, called 1080p or Full HD.",
        "4 MP: 2560 x 1440, called 2K or QHD.",
        "5 MP: 2592 x 1944, a 4:3 shape common in cheaper cameras.",
        "8 MP: 3840 x 2160, called 4K or UHD.",
      ],
    },
    {
      id: "compare",
      h: "2MP vs 4MP vs 8MP",
      p: [
        "Choose by the job. A wider area or a longer distance means more pixels are needed to keep detail.",
      ],
      list: [
        "2 MP: fine for close shop interiors, counters and corridors. Lowest storage use.",
        "4 MP: a sensible default for entrances, small yards and shops. Noticeable gain over 2 MP.",
        "8 MP: wide yards, parking, forecourts or when you want to zoom in on recordings. Heavy on disk and network.",
        "Beyond a point, the lens, the lighting and the sensor limit what you can see.",
      ],
    },
    {
      id: "pixel-density",
      h: "Pixels per metre: what matters for identification",
      p: [
        "What you can recognise depends on how many pixels land on the subject, not on the number printed on the box. Security guidance commonly uses pixel density, in pixels per metre, as a target. In the DORI levels of IEC 62676-4 it is 25 to detect, 63 to observe, 125 to recognise and 250 to identify a person. A wider [field of view](/glossary/field-of-view) spreads the same pixels over a bigger area and lowers density.",
        "A narrow lens on a 4 MP camera aimed at a door can beat a wide lens on an 8 MP camera watching a whole yard.",
      ],
    },
    {
      id: "cost",
      h: "What higher resolution costs",
      p: [
        "More pixels raise [bitrate](/glossary/bitrate), so a 4K camera can use several times the disk of a 2 MP one. [H.265](/glossary/h265) helps. The recorder must also support the resolution and have enough channels. Upload speed limits remote viewing, so use the sub stream for live grids. See [CCTV internet bandwidth in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
      ],
    },
    {
      id: "night",
      h: "Resolution and low light",
      p: [
        "More pixels on the same sensor size means smaller pixels, which catch less light and make more noise at night. See [low-light cameras](/glossary/low-light-camera) and [CCTV night vision and low light](/blog/cctv-night-vision-low-light-guide).",
      ],
    },
    {
      id: "dori",
      h: "DORI: how many pixels you need on a person",
      p: [
        "The IEC 62676-4 standard describes four levels, often called DORI, and gives target pixel densities in pixels per metre across the subject. The figures below are as commonly quoted by camera makers.",
      ],
      list: [
        "Detect: 25 pixels per metre. You can tell that a person or vehicle is there.",
        "Observe: 63 pixels per metre. You see distinctive details such as clothing.",
        "Recognise: 125 pixels per metre. You can tell whether a person is someone you already know.",
        "Identify: 250 pixels per metre. You can identify a person with high certainty.",
      ],
    },
    {
      id: "calc",
      h: "Working out the distance",
      p: [
        "Pixels per metre equals the horizontal pixel count divided by the width of the scene in metres. A 4 MP camera is 2560 pixels wide. If it covers a 10 m wide scene, density is 256 pixels per metre, which reaches the identify level. Cover 20 m instead and it halves to 128, which only reaches recognise. A 2 MP camera (1920 pixels) on the same 10 m scene gives 192 pixels per metre.",
        "That is why a doorway camera should be aimed tightly at the door, not at the whole shop. The lens and distance decide the scene width, as explained in [field of view](/glossary/field-of-view) and [focal length](/glossary/focal-length).",
      ],
    },
    {
      id: "shape",
      h: "Aspect ratio and stream size",
      p: [
        "Most cameras are 16:9, which suits a wide room. Some 5 MP models are 4:3 and show more height, which helps when you watch a tall entrance or a person from above. Check the recorder shows the full picture and does not crop it. Cameras can also be set to a lower resolution than their maximum; setting the main stream to a lower value is a cheap way to cut storage without changing the lens.",
      ],
    },
    {
      id: "lunacam",
      h: "Resolution and LunaCam",
      p: [
        "LunaCam shows whatever your camera or recorder streams. In low-bandwidth mode it uses the camera’s lighter sub stream. Pick the camera’s resolution for the scene, not the app. For buying advice read [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal).",
      ],
    },
  ],
  faq: [
    { q: "How many megapixels do I need for CCTV?", a: "4 MP suits most shops and entrances. 2 MP is enough for close indoor views. 8 MP suits wide outdoor areas." },
    { q: "Is 4K better than 4MP?", a: "4K is 8 MP, twice the pixels. It gives more detail but needs more storage and bandwidth." },
    { q: "Is 1080p the same as 2MP?", a: "Yes. 1080p is 1920 x 1080, about 2 megapixels." },
    { q: "Does higher resolution mean better night video?", a: "Not necessarily. Sensor size, lens and lighting matter more at night." },
    { q: "Can I zoom into recordings?", a: "A higher resolution lets you zoom in more before the picture breaks up, up to the limit of the original pixels." },
    { q: "What resolution is enough to identify a face?", a: "About 250 pixels per metre across the face area is the figure commonly quoted from the IEC 62676-4 DORI levels. It depends on distance and lens, not only megapixels." },
  ],
  related: ["bitrate", "field-of-view", "h265", "low-light-camera", "ip-camera"],
  product: "camera-app",
};

export default term;
