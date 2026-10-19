import type { Term } from "../types";

const term: Term = {
  slug: "turret-camera",
  term: "Turret camera",
  aka: ["Eyeball camera", "Ball camera", "Turret dome"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "Turret camera: what it is and turret vs dome vs bullet",
  description: "A turret (eyeball) camera is a ball-shaped CCTV camera on a fixed base with no bubble cover. Turret vs dome vs bullet, IR glare and where it fits best.",
  short: "A turret camera is a ball-shaped camera on a small base, with the lens exposed and no dome bubble. It is easy to install and avoids most infrared glare.",
  body: [
    "The camera sits in a swivelling ball. You loosen it, aim the lens, and tighten it again. The lens is exposed behind a flat window, not under a bubble.",
    "That removes the common dome problem of infrared light bouncing back into the lens, so night pictures are usually cleaner for the same hardware.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Turret camera meaning",
      p: [
        "A turret camera is a fixed camera with a ball gimbal, also sold as an eyeball or ball camera. The base mounts to a wall or ceiling, and the ball rotates to aim. It can often be adjusted without opening the unit.",
      ],
    },
    {
      id: "strengths",
      h: "Strengths of a turret camera",
      p: [
        "Why installers like them:",
      ],
      list: [
        "Less IR glare: no bubble to reflect infrared back into the lens.",
        "Easy aiming: adjust the ball by hand with the picture on a phone.",
        "Compact and neat: smaller than most bullets.",
        "Wide use: indoors, under eaves and on outdoor walls, with [IP66/IP67](/glossary/ip-rating) models.",
      ],
    },
    {
      id: "weaknesses",
      h: "Weaknesses",
      p: [
        "The ball and lens are more exposed than a dome, so a determined vandal can twist or hit it. Look for a metal body and an [IK10](/glossary/ik10) rating where that is a risk. The lens window can collect dust, rain splash and spider webs. Fully exposed lenses need more frequent cleaning.",
      ],
    },
    {
      id: "vs",
      h: "Turret vs dome vs bullet",
      p: [
        "A short comparison.",
      ],
      list: [
        "[Dome](/glossary/dome-camera): hidden direction, strongest against impact, prone to IR glare.",
        "Turret: balanced, easy install, less glare, but visible direction.",
        "[Bullet](/glossary/bullet-camera): best for distance and deterrence.",
        "For a small shop with ceiling or wall mounting and night coverage, a turret is a good default.",
      ],
    },
    {
      id: "tips",
      h: "Install tips",
      p: [
        "Do not tilt the ball so far that the base shows in the picture. Keep it from walls and fences that bounce infrared. Under an eave, the lens stays cleaner during monsoon rain. Seal the cable entry. Clean the window when you service the site. For all-weather advice see [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal).",
      ],
    },
    {
      id: "compare",
      h: "Why installers pick turrets",
      p: [
        "A turret is quick to fit and quick to aim. You do not open a dome or reach round a bullet, and you can move the ball with the picture live on a phone. It also avoids the white ring that a dome bubble throws up at night. For a typical shop with a mix of ceiling and wall positions, one turret model covers most spots, which keeps spares simple.",
      ],
    },
    {
      id: "limits",
      h: "What a turret does less well",
      p: [
        "It reaches shorter than a bullet, since the body is small and the IR LEDs are fewer. It shows where it points, which a dome does not. It is exposed to rain on the window, so mount it under cover outdoors. A cheap plastic ball can loosen over time, so tighten it after a week of use and check again after the first season.",
      ],
      list: [
        "Range: choose a bullet when you need 30 m or more at night.",
        "Impact: look for a metal body for exposed spots.",
        "Heat: dark plastic in direct sun gets hot. Shade helps.",
      ],
    },
    {
      id: "tips",
      h: "Set-up checklist",
      p: [
        "Aim the ball so the horizon sits about a third from the top. Keep the cable exit pointing down so water drips off. Tighten the ball lock. Check the night picture for IR bounce off nearby surfaces. Label the camera in the recorder and keep a note of its position for the handover. See the [installer site handover guide](/blog/installer-site-handover-guide).",
      ],
    },
    {
      id: "lunacam",
      h: "Turret cameras and LunaCam",
      p: [
        "A turret camera that is on your DVR or NVR, or that speaks ONVIF, appears in the LunaCam app like any other camera, through the LunaCam Box. The box connects outward only, so no port forwarding is needed.",
      ],
    },
  ],
  faq: [
    { q: "What is a turret camera?", a: "A fixed ball-shaped camera on a base, with the lens behind a flat window and no dome bubble." },
    { q: "Is a turret camera the same as an eyeball camera?", a: "Yes. Eyeball, ball and turret all describe the same shape." },
    { q: "Why do turret cameras have less IR glare?", a: "There is no bubble cover for infrared light to bounce off back into the lens." },
    { q: "Turret or dome for a shop?", a: "Turret for easy install and clean night video. Dome where vandal resistance or a hidden direction matters." },
    { q: "Can turret cameras be used outdoors?", a: "Yes, when rated IP66 or IP67." },
    { q: "Is a turret camera good for a shop?", a: "Yes for most shops. It installs quickly, aims easily and avoids the infrared glare that a dome bubble causes at night. Choose a dome where the camera may be hit, and a bullet where you need long night range." },
  ],
  related: ["dome-camera", "bullet-camera", "ir-night-vision", "ip-rating"],
  product: "camera-app",
};

export default term;
