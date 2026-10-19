import type { Term } from "../types";

const term: Term = {
  slug: "wdr",
  term: "WDR",
  full: "Wide Dynamic Range",
  aka: ["Wide dynamic range", "True WDR", "Digital WDR", "HDR", "120dB WDR"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "What is WDR in a CCTV camera? Wide dynamic range explained",
  description: "WDR (wide dynamic range) lets a camera show bright and dark areas in one picture. What WDR means, true vs digital WDR, 120 dB and where it helps.",
  short: "WDR, or wide dynamic range, lets a camera show both very bright and very dark parts of a scene in one picture. It fixes silhouettes at doorways and washed-out windows.",
  body: [
    "A normal camera must pick one exposure. Aim it at a shop door with bright sun outside and it either shows the street and a black shop, or the shop and a white blank street. A WDR camera combines several exposures so that both are readable.",
    "WDR is one of the most useful features for entrances, glass fronts and gates, where faces turn into dark shapes against bright light.",
  ],
  sections: [
    {
      id: "meaning",
      h: "WDR meaning",
      p: [
        "Dynamic range is the span between the darkest and brightest detail a camera can capture at once. Wide dynamic range widens that span. The usual way is to capture two or more frames at different exposure times and blend them, taking dark areas from the long exposure and bright areas from the short one.",
        "Cameras may call this WDR, HDR (high dynamic range) or DWDR. For CCTV they mean roughly the same aim.",
      ],
    },
    {
      id: "true-vs-digital",
      h: "True WDR vs digital WDR",
      p: [
        "The word WDR on a spec sheet covers different quality levels.",
      ],
      list: [
        "True or real WDR: the sensor takes multiple exposures and blends them. Best result, usually found in better cameras.",
        "Digital WDR (DWDR): software brightens dark areas of one exposure. Cheap and it adds noise, with a weaker effect.",
        "dB rating: 120 dB is a common figure for true WDR. A higher dB means a wider range. Treat numbers from different brands with care, since the measuring methods vary.",
      ],
    },
    {
      id: "where",
      h: "Where WDR helps",
      p: [
        "Use it wherever lighting is uneven.",
      ],
      list: [
        "Shop and bank entrances with glass doors.",
        "Gates, gateways and garages with sun on one side and shade on the other.",
        "Windows behind the subject, and lobbies facing a street.",
        "Night scenes with a bright lamp or headlights in the frame. See [CCTV night vision and low light](/blog/cctv-night-vision-low-light-guide).",
      ],
    },
    {
      id: "limits",
      h: "Limits of WDR",
      p: [
        "Blending frames can cause ghosting on fast movement, because the frames are taken a moment apart. WDR also reduces effective frame rate in some models. If the scene has even lighting, turn WDR off or leave it on auto, since it gains nothing there. Sometimes moving the camera so the light is behind it fixes the problem for free.",
      ],
    },
    {
      id: "vs-others",
      h: "WDR, BLC and HLC",
      p: [
        "Cameras often offer other controls with similar aims. BLC (back light compensation) brightens the centre of the frame. HLC (highlight compensation) darkens very bright spots such as headlights so surrounding detail appears. They are simpler and cheaper than true WDR, and can be used together with it. See also [low-light cameras](/glossary/low-light-camera).",
      ],
    },
    {
      id: "settings",
      h: "Settings and what to try first",
      p: [
        "On a camera with WDR the setting is often off, on, or auto, and sometimes a level from 1 to 10 or low, mid and high. Start with auto or mid. Turn it on, then look at the scene at the worst time of day: bright morning sun on a door, or headlights after dark. Raise the level only if faces are still dark.",
        "If the picture gets grainy, the level is too high or the scene does not need it. If moving people leave a double edge, ghosting is the cause and a lower level or a different camera helps.",
      ],
    },
    {
      id: "shutter",
      h: "Why exposure matters here",
      p: [
        "WDR works by taking a long exposure for the dark areas and a short one for the bright ones. At night the long exposure gets longer and motion blurs. This is why WDR in a dark scene with a bright lamp is a compromise. Where you can, move the lamp, shade it, or move the camera, and use WDR for what is left. The guide to [CCTV night vision and low light](/blog/cctv-night-vision-low-light-guide) covers shutter and blur in more detail.",
      ],
    },
    {
      id: "check",
      h: "How to test WDR before you buy",
      p: [
        "Stand a person in a doorway with bright daylight behind them and look at the face on a screen with WDR off and on. A good true WDR camera shows features on the face and detail outside. A weak one shows a dark face with a bright background, or a flat grey picture. Ask the seller for a trial on your own door.",
      ],
    },
  ],
  faq: [
    { q: "What is WDR in a camera?", a: "Wide dynamic range, a feature that shows bright and dark parts of a scene together by blending exposures." },
    { q: "Is 120 dB WDR good?", a: "Yes, 120 dB is a common mark for true WDR in good cameras. Measuring methods vary between brands." },
    { q: "What is the difference between WDR and HDR?", a: "They aim at the same thing. HDR is the broader term from photography and TV. In CCTV WDR is the usual name." },
    { q: "Should I keep WDR on at night?", a: "It helps if a bright lamp or headlights are in view. Otherwise it can add noise, so test both." },
    { q: "Does WDR make the picture worse?", a: "It can cause ghosting on fast motion or lower frame rate. Turn it off where lighting is even." },
  ],
  related: ["low-light-camera", "ir-night-vision", "camera-resolution", "field-of-view"],
  product: "camera-app",
};

export default term;
