import type { Term } from "../types";

const term: Term = {
  slug: "bullet-camera",
  term: "Bullet camera",
  aka: ["Bullet CCTV camera", "Bullet IP camera", "Tube camera"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "Bullet camera: what it is and bullet vs dome vs turret",
  description: "A bullet camera is a long, tube-shaped CCTV camera made for outdoor walls and long views. Bullet vs dome vs turret, where to mount it and what to check.",
  short: "A bullet camera is a long, tube-shaped CCTV camera that points one way. It is made for walls and eaves, outdoors, and reaches further than most domes.",
  body: [
    "The shape is a cylinder with the lens at one end, usually under a small sun shield. It mounts on a bracket on a wall or ceiling and aims where you point it.",
    "A visible bullet camera also tells people they are watched, which is useful at a shopfront, gate or yard.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Bullet camera meaning",
      p: [
        "Bullet describes the body shape. Inside is the same sensor, lens and electronics as any other [IP camera](/glossary/ip-camera) or [analogue HD](/glossary/analog-hd-camera) camera. Inside the housing the infrared LEDs sit around or beside the lens, and the long body allows a larger lens and a deeper heat sink.",
      ],
    },
    {
      id: "strengths",
      h: "Strengths of a bullet camera",
      p: [
        "Where it works best:",
      ],
      list: [
        "Distance: room for a longer lens and strong infrared, so it suits yards, car parks and long walls.",
        "Visible deterrent: people see where it points.",
        "Easy aiming: the camera tilts and swivels on its bracket and you can check the direction from the ground.",
        "Weather: many are built to an [IP66 or IP67 rating](/glossary/ip-rating) for outdoor use.",
        "Cooling and servicing: the body is accessible and often easier to open than a dome.",
      ],
    },
    {
      id: "weaknesses",
      h: "Weaknesses",
      p: [
        "The same visibility makes it easier to grab, spray or turn away. It is more exposed to wind, dust and spider webs. It looks less discreet than a dome. Anyone within reach can see which way it points, which also shows blind spots. In vandal-prone spots a [dome with IK10](/glossary/ik10) is tougher.",
      ],
    },
    {
      id: "vs",
      h: "Bullet vs dome vs turret",
      p: [
        "The three common fixed shapes:",
      ],
      list: [
        "Bullet: best for long outdoor views and visible deterrence.",
        "[Dome camera](/glossary/dome-camera): discreet, vandal-resistant, good indoors and under eaves.",
        "[Turret camera](/glossary/turret-camera): ball-shaped, easy to install, less IR glare than a dome, good all-round.",
        "Pick by mounting point, risk of tampering and light conditions rather than brand.",
      ],
    },
    {
      id: "nepal",
      h: "Mounting tips for Nepal",
      p: [
        "Mount under an eave or add a shield so monsoon rain does not fall on the lens. Dust on the front glass blurs the picture and shows up under infrared, so plan to clean it. Seal cable entries with a junction box and drip loop. Place it just out of reach, but still where a ladder will reach for servicing. Read [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal) for a fuller list.",
      ],
    },
    {
      id: "buying",
      h: "What to check on a bullet camera",
      p: [
        "Look at the sun shield, the cable exit and the bracket. A good bullet has a metal bracket, a cable that passes through the base and out the back, and a shield wide enough to keep rain off the lens glass. A cable that comes out the side leaves a loop where water collects. Check the IR range and the lens on the datasheet, and see whether the lens is fixed or [varifocal](/glossary/varifocal-lens).",
      ],
      list: [
        "Weather: IP66 or better for outdoor use. See [IP rating](/glossary/ip-rating).",
        "Impact: IK10 if it can be reached. See [IK10](/glossary/ik10).",
        "Lens: 4 mm for doors and shopfronts, 6 mm or longer for yards.",
        "Power: [PoE](/glossary/poe) saves a power point on the wall.",
        "Bracket: a junction box or back box hides the cable and keeps the join dry.",
      ],
    },
    {
      id: "placement",
      h: "Placement that works",
      p: [
        "Mount a bullet camera 2.5 to 3.5 m up and angle it down about 20 to 30 degrees. Aim along the line people walk, not across it, so the face is visible for longer. Avoid pointing into the sun at sunrise or sunset, which blinds the sensor. A tilt and a shade can fix that. Watch for lights in the frame that wash out the night picture, and for trees that move in wind and trigger [motion detection](/glossary/motion-detection).",
      ],
    },
    {
      id: "maintenance",
      h: "Maintenance in dusty and wet seasons",
      p: [
        "Dust on the front glass becomes a white haze under infrared. Spider webs near the IR LEDs light up at night as white threads. In the monsoon, water gets in through poor cable seals and condensation can form inside. Clean the glass with a soft cloth every few months, check the seals when you service, and keep spare silicone and cable glands on the service truck.",
      ],
    },
    {
      id: "lunacam",
      h: "Bullet cameras and LunaCam",
      p: [
        "A bullet camera that is on your DVR or NVR, or that speaks ONVIF, can be viewed in the LunaCam app through the LunaCam Box. The box connects outward only, so no port forwarding is needed.",
      ],
    },
  ],
  faq: [
    { q: "What is a bullet camera?", a: "A tube-shaped CCTV camera, usually outdoor, that points in a fixed direction." },
    { q: "Bullet or dome camera: which is better?", a: "Bullet for long outdoor views and visible deterrence. Dome for discreet, vandal-resistant mounting." },
    { q: "Are bullet cameras waterproof?", a: "Many are weather-resistant to IP66 or IP67. Check the rating and seal the cable entry." },
    { q: "Do bullet cameras have better night vision?", a: "They often have longer IR range than domes because there is room for bigger LEDs." },
    { q: "Where should I mount a bullet camera?", a: "On a wall or eave, out of easy reach, aimed along the area to protect." },
  ],
  related: ["dome-camera", "turret-camera", "ip-rating", "ir-night-vision"],
  product: "camera-app",
};

export default term;
