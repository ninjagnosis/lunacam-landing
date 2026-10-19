import type { Term } from "../types";

const term: Term = {
  slug: "ir-night-vision",
  term: "IR night vision",
  full: "Infrared night vision",
  aka: ["Infrared night vision", "IR cut filter", "IR LED", "IR range", "Night vision camera"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "IR night vision in CCTV: how it works and its real range",
  description: "IR night vision lights a scene with invisible infrared and shows it in black and white. How IR LEDs and the IR cut filter work, real range and common problems.",
  short: "IR night vision lets a camera see in the dark by lighting the scene with infrared LEDs that people cannot see. The picture switches to black and white.",
  body: [
    "In daylight the camera uses colour. When it gets dark the camera swings a filter out of the way, switches on its infrared LEDs and records in monochrome. You see detail where there is no visible light at all.",
    "The range in the box is optimistic. Real distance depends on the scene, the lens, the weather and what is nearby.",
  ],
  sections: [
    {
      id: "meaning",
      h: "IR night vision meaning",
      p: [
        "IR stands for infrared, light just beyond what the eye sees, typically near 850 nm (a faint red glow may be visible on the LEDs) or 940 nm (invisible). A camera sensor can detect it. The camera lights the scene with IR and sees by the reflection, so it works in complete darkness.",
      ],
    },
    {
      id: "how",
      h: "How it works: IR LEDs and the IR cut filter",
      p: [
        "Two parts do the job.",
      ],
      list: [
        "IR cut filter: a small filter blocks infrared in daytime so colours look right. At night it moves aside so the sensor can use infrared.",
        "IR LEDs: a ring or bank of LEDs around the lens that light the scene. A light sensor or the picture brightness switches them on.",
        "Smart IR: the camera lowers LED power when something comes close so faces do not wash out white.",
        "Because the filter is out of the way, the picture is black and white at night.",
      ],
    },
    {
      id: "range",
      h: "How far does IR really reach?",
      p: [
        "A box that says 30 m or 50 m gives the best-case figure to a large reflective subject. Dark clothing, grass, dust and open sky return little. A narrow lens focuses the same IR power on a smaller area, so zoomed cameras reach further than wide ones. As a safe rule, plan on about half the stated range for recognising a person. See [CCTV night vision and low light](/blog/cctv-night-vision-low-light-guide).",
      ],
    },
    {
      id: "problems",
      h: "Common IR problems",
      p: [
        "Most complaints have a simple cause.",
      ],
      list: [
        "White glare or a washed-out centre: the camera is too close to a wall, ceiling or fence, and IR bounces back.",
        "Insects and spiders: webs and bugs lit by IR show as streaks. Clean the lens and keep webs off the housing.",
        "Rain, fog and dust: scatter the IR and fog the picture. Common in monsoon nights.",
        "Behind glass: IR reflects off the window. Place the camera outside the glass or use an indoor window setup.",
        "Dirty dome: dust and film reduce range. Clean periodically.",
      ],
    },
    {
      id: "vs-colour",
      h: "IR vs colour night cameras",
      p: [
        "Some cameras use visible white light or very sensitive sensors to keep colour at night. Colour is useful for clothing and vehicles, but it needs more ambient light or a floodlight. IR is better when you want a low-profile, dark-site solution. See [low-light cameras](/glossary/low-light-camera). IR LEDs draw power, which matters for [PoE](/glossary/poe) budgets.",
      ],
    },
    {
      id: "wavelength",
      h: "850 nm vs 940 nm IR",
      p: [
        "Most CCTV cameras use 850 nm infrared. It gives a stronger picture and longer range, but the LEDs show a faint red glow when you look at them. A few cameras use 940 nm, which is invisible, but the sensor is less sensitive to it, so range drops. Choose 940 nm only when the glow must not be seen, such as a covert installation.",
        "IR LEDs also age. After a few years their output falls and the range shrinks. A camera that saw 30 m on day one may see far less later. Test again after a few years, especially on cameras that stay in direct sun.",
      ],
    },
    {
      id: "setup",
      h: "Settings that help",
      p: [
        "Where the camera has options, these usually give a cleaner night picture.",
      ],
      list: [
        "Smart IR or IR compensation on, so faces close to the camera are not washed out.",
        "Auto day and night switching, with the sensitivity set so the filter does not flick back and forth at dusk.",
        "Shutter limited to a reasonable maximum, so moving people do not smear.",
        "Noise reduction on a medium level. High settings blur detail.",
      ],
    },
    {
      id: "alternatives",
      h: "When to add real light",
      p: [
        "IR is a good fallback, but visible light often gives a better result. A small light that comes on with movement gives colour, discourages people, and lets a cheaper camera produce a clear face. In places with power cuts, a light on a battery or solar unit keeps working when the street is dark. See [low-light cameras](/glossary/low-light-camera) and the guide to [CCTV night vision and low light](/blog/cctv-night-vision-low-light-guide).",
      ],
    },
  ],
  faq: [
    { q: "How does IR night vision work?", a: "Infrared LEDs light the scene with light people cannot see, and the camera sensor records the reflection as a black-and-white picture." },
    { q: "How far can an IR camera see?", a: "The box range is best case. For recognising people plan on about half of it." },
    { q: "Why is my night video white in the middle?", a: "IR is reflecting off a close surface. Move the camera away from walls or ceilings, or lower IR power." },
    { q: "Why is IR video black and white?", a: "The IR cut filter moves out of the way at night, so colour information is lost." },
    { q: "Can IR cameras see through glass?", a: "Not well. IR reflects off the glass back into the lens. Mount the camera outside the glass." },
  ],
  related: ["low-light-camera", "wdr", "poe", "focal-length"],
  product: "camera-app",
};

export default term;
