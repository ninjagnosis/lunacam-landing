import type { Term } from "../types";

const term: Term = {
  slug: "low-light-camera",
  term: "Low-light camera",
  aka: ["Starlight camera", "ColorVu", "Full-colour night camera", "Darkfighter", "Night colour camera"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "Low-light cameras: starlight, ColorVu and colour at night",
  description: "Low-light cameras use bigger sensors and brighter lenses to keep colour in near darkness. What starlight and ColorVu mean, what to check and how to test.",
  short: "A low-light camera uses a sensitive sensor and a wide-aperture lens to record usable video in very little light, often in colour. It can reduce the need for infrared.",
  body: [
    "Where an ordinary camera turns black and white under infrared, a low-light camera collects enough light to keep colour with only streetlight or a shop sign. Brand names include Starlight, ColorVu, Darkfighter and Full-colour.",
    "The result depends mostly on the sensor and the lens, not on a megapixel number. It also depends on whether any light exists at all. Total darkness still needs infrared or a lamp.",
    "For a practical guide to getting clear night footage, read [CCTV night vision and low light](/blog/cctv-night-vision-low-light-guide).",
  ],
  sections: [
    {
      id: "meaning",
      h: "Low-light camera meaning",
      p: [
        "“Low light” means the camera is built to produce a clean picture at very low light levels, measured in lux. A figure such as 0.001 lux in colour describes the lowest light at which the camera still gives a picture, under test conditions. Real sites differ, so treat it as a comparison between models.",
      ],
    },
    {
      id: "what-makes",
      h: "What makes a camera good in low light",
      p: [
        "Three things matter more than the headline.",
      ],
      list: [
        "Sensor size and pixel size: larger pixels catch more light. A big sensor with a modest [resolution](/glossary/camera-resolution) usually beats a small sensor with many megapixels at night.",
        "Lens aperture: a lower f-number such as f/1.0 or f/1.6 lets in more light than f/2.8.",
        "Image processing: noise reduction and exposure control. Heavy noise reduction can smear detail.",
        "Shutter: slower shutter gathers more light but blurs movement. See [frame rate](/glossary/frame-rate).",
      ],
    },
    {
      id: "vs-ir",
      h: "Low-light colour vs IR night vision",
      p: [
        "Choose by the site, not the name.",
      ],
      list: [
        "[IR night vision](/glossary/ir-night-vision): works in total darkness. Black and white. Hides in dark sites.",
        "Low-light colour: needs some ambient light or a small white light. Gives colours for clothing and vehicles, which helps identification.",
        "Hybrid cameras: use colour while light exists and switch to IR when it does not.",
        "White-light cameras: add a visible LED, which also deters but lights the area up.",
      ],
    },
    {
      id: "nepal",
      h: "Where it helps in Nepal",
      p: [
        "Narrow lanes with street lights, shop fronts at night, forecourts and gates often have a little light and a lot of passing traffic. A low-light colour camera makes sense there. Power cuts that kill streetlights change the picture, so check how the camera behaves when lights are out. Dust and monsoon moisture on the dome degrade night video quickly.",
      ],
    },
    {
      id: "test",
      h: "How to test before you buy",
      p: [
        "Specs vary, and sample videos are staged. Put the camera in its real position and view it after dark, with the lights on and off. Compare faces, plates and clothing, not just brightness. The guide to [CCTV night vision and low light](/blog/cctv-night-vision-low-light-guide) has a full test routine. Pair with [WDR](/glossary/wdr) where a bright lamp is in the frame.",
      ],
    },
    {
      id: "terms",
      h: "What the marketing terms mean",
      p: [
        "Starlight, ColorVu, Darkfighter and similar names are brand labels. They point to a larger or more sensitive sensor and a lens with a wide aperture, but they have no common definition. Two cameras with the same label from different makers can behave differently. Compare the sensor size, the lens f-number and the quoted minimum lux, and then test.",
      ],
    },
    {
      id: "light",
      h: "How much light is there really?",
      p: [
        "Light levels at night vary a lot. Moonlight is far brighter than starlight, and a street lamp is far brighter than moonlight. A shop sign, a nearby window or a gate lamp may be enough for a colour picture. When power is cut, those lights go too. Plan for the worst case at the site: ask what happens to the picture when load-shedding or a fault turns off the street lamps.",
      ],
    },
    {
      id: "noise",
      h: "Noise and gain",
      p: [
        "In low light the camera raises its gain to brighten the picture. That also raises noise, which looks like grain or shimmering. Cameras clean this with noise reduction, which can smear fine detail and make moving objects leave trails. A good low-light camera needs less gain in the first place, so the cleaning does less harm. Noise also costs [bitrate](/glossary/bitrate), so a noisy night picture can look blocky when compressed.",
      ],
    },
  ],
  faq: [
    { q: "What is a low-light camera?", a: "A camera with a sensitive sensor and bright lens that gives a usable, often colour, picture in very little light." },
    { q: "What does starlight mean in CCTV?", a: "Starlight is a marketing name for low-light cameras that can produce colour video with very little light, such as starlight or a distant streetlamp." },
    { q: "Is a low-light camera better than IR?", a: "Not always. Low-light colour needs some light. IR works in total darkness. Many sites use both." },
    { q: "Does a higher megapixel camera see better at night?", a: "Usually not. Smaller pixels catch less light. Sensor size and lens matter more." },
    { q: "What does lux mean on a camera spec?", a: "Lux measures light level. A lower lux rating means the camera works in dimmer light, under the maker’s test conditions." },
  ],
  related: ["ir-night-vision", "wdr", "camera-resolution", "focal-length"],
  product: "camera-app",
};

export default term;
