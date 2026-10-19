import type { Term } from "../types";

const term: Term = {
  slug: "dome-camera",
  term: "Dome camera",
  aka: ["Dome CCTV camera", "Vandal dome", "Eyeball camera"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "Dome camera: what it is and dome vs bullet vs turret",
  description: "A dome camera hides its lens under a rounded cover on a ceiling or wall. Dome vs bullet vs turret, vandal-resistant domes, IK10 and common IR problems.",
  short: "A dome camera has its lens inside a rounded cover mounted on a ceiling or wall. The cover hides where it is pointing and protects it from knocks.",
  body: [
    "The dome is a clear or smoked bubble over the lens. People cannot tell exactly where it looks. That makes it a common choice for shops, offices, corridors and lifts.",
    "Domes mount flush on a ceiling or on a wall bracket, and many are rated to resist impact with the [IK10](/glossary/ik10) rating.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Dome camera meaning",
      p: [
        "A dome camera is a fixed camera inside a bubble cover. Some are fixed domes with a manually adjusted lens. Others are [PTZ](/glossary/ptz) domes that pan, tilt and zoom, which are bigger and cost more. When people simply say “dome”, they usually mean the fixed type.",
      ],
    },
    {
      id: "strengths",
      h: "Strengths",
      p: [
        "Domes suit places where looks and tough housing matter.",
      ],
      list: [
        "Discreet: the viewing direction is hidden.",
        "Tamper resistance: the bubble and body are harder to grab or twist than a bullet. Vandal domes carry IK10.",
        "Neat ceiling look: they sit flush and blend in.",
        "Weather: outdoor models have [IP66/IP67](/glossary/ip-rating).",
      ],
    },
    {
      id: "weaknesses",
      h: "Weaknesses and common problems",
      p: [
        "A domed cover can cause issues.",
      ],
      list: [
        "IR reflection: infrared light bounces off the bubble into the lens, giving a white glare or ring at night. Do not touch or smudge the dome. Keep the cover clean.",
        "Dust and moisture: fog inside the dome or a film outside blurs the picture. Seal and dry the unit at install.",
        "Shorter IR range: less room for LEDs than a [bullet camera](/glossary/bullet-camera).",
        "Harder to aim: adjusting means opening the dome.",
        "Scratches and finger marks on the bubble cause glare.",
      ],
    },
    {
      id: "vs",
      h: "Dome vs bullet vs turret",
      p: [
        "Choose by where it will live.",
      ],
      list: [
        "Dome: indoors, ceilings and areas with a risk of tampering.",
        "Bullet: long outdoor views and visible deterrence.",
        "[Turret camera](/glossary/turret-camera): a ball-in-socket camera with no bubble, so less IR glare, easy setup.",
        "See [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal).",
      ],
    },
    {
      id: "install",
      h: "Install tips",
      p: [
        "Mount at 2.5 to 3 m on a ceiling to cover a floor evenly, or lower where you need faces. Avoid pointing at windows or glass. Leave the protective film on until the end of the job, then remove it, and wipe the bubble with a soft cloth. In places where load-shedding and tropical humidity are issues, check the dome seals for condensation during the first wet season.",
      ],
    },
    {
      id: "types",
      h: "Types of dome camera",
      p: [
        "Fixed domes come in a few common builds.",
      ],
      list: [
        "Mini dome: small, for ceilings in shops and offices.",
        "Vandal dome: thick bubble and metal body, often [IK10](/glossary/ik10).",
        "Outdoor dome: gasketed, with [IP66 or IP67](/glossary/ip-rating).",
        "Motorised dome: lens zoom and focus by software. See [varifocal lens](/glossary/varifocal-lens).",
        "[PTZ dome](/glossary/ptz): moves and zooms on command, much larger and dearer.",
      ],
    },
    {
      id: "mounting",
      h: "Mounting and cabling",
      p: [
        "A ceiling dome needs a hole or a surface mount. Hide the cable above the ceiling for a neat finish and to keep it out of reach. If the ceiling is concrete, use a surface box and run the cable in trunking. For outdoor domes under an eave, use a junction box and a drip loop. Do not point a dome straight at glass, a mirror or a shiny wall at close range, since infrared will bounce back in.",
        "Set the lens angle before closing the dome. Walk the scene with a phone, then lock the lens in place. Peel the film off the bubble last.",
      ],
    },
    {
      id: "clean",
      h: "Keeping the bubble clear",
      p: [
        "A scratched or greasy bubble gives a glare ring at night and a soft picture in daytime. Wipe with a soft cloth and a little water. Do not use rough cloth or strong cleaner on polycarbonate. In humid places, drop a silica gel pack inside before sealing, and check for fog after the first monsoon.",
      ],
    },
    {
      id: "lunacam",
      h: "Dome cameras and LunaCam",
      p: [
        "A dome camera that is on your DVR or NVR, or that speaks ONVIF, appears in the LunaCam app like any other camera, through the LunaCam Box. The box connects outward only, so no port forwarding is needed.",
      ],
    },
  ],
  faq: [
    { q: "What is a dome camera?", a: "A fixed camera with the lens inside a rounded cover, normally mounted on a ceiling or wall." },
    { q: "Is a dome better than a bullet?", a: "Not better, different. Domes are discreet and vandal resistant. Bullets reach farther and deter more visibly." },
    { q: "Why does my dome camera have a white ring at night?", a: "IR reflects off the dome cover into the lens. Clean the dome and avoid pointing it at nearby surfaces." },
    { q: "Can a dome camera be used outdoors?", a: "Yes if it carries an IP66 or IP67 rating." },
    { q: "What is a vandal dome?", a: "A dome in a strong housing, often rated IK10, made to resist impacts." },
  ],
  related: ["bullet-camera", "turret-camera", "ik10", "ptz"],
  product: "camera-app",
};

export default term;
