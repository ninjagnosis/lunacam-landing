import type { Term } from "../types";

const term: Term = {
  slug: "ip-rating",
  term: "IP rating",
  full: "Ingress Protection rating",
  aka: ["IP66", "IP67", "IP65", "Waterproof rating", "Ingress protection"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "IP rating for CCTV cameras: IP65 vs IP66 vs IP67 explained",
  description: "IP ratings show how well a camera resists dust and water. What the two digits mean, IP65 vs IP66 vs IP67, and what to check for monsoon rain and dust.",
  short: "An IP rating is a two-digit code that tells you how well a device resists dust and water. IP66 means dust-tight and safe against powerful water jets, and IP67 adds short immersion.",
  body: [
    "The letters IP stand for ingress protection, and the code comes from the international standard IEC 60529. The first digit is for solids such as dust. The second is for water. Higher numbers mean more protection.",
    "This is not the same IP as in IP camera. Both abbreviations are IP, but one means internet protocol and the other ingress protection.",
  ],
  sections: [
    {
      id: "meaning",
      h: "IP rating meaning",
      p: [
        "A rating such as IP66 is read digit by digit. The 6 means no dust gets in. The second 6 means the housing withstands powerful jets of water from any direction. If a digit is replaced by X, that type of protection was not rated.",
      ],
    },
    {
      id: "digits",
      h: "What the digits mean",
      p: [
        "The relevant values for cameras:",
      ],
      list: [
        "First digit 5: dust protected, a small amount may get in but not enough to harm. 6: dust-tight, none gets in.",
        "Second digit 4: splashing water from any direction. 5: water jets. 6: powerful water jets. 7: temporary immersion up to 1 metre for 30 minutes. 8: continuous immersion, to a depth the maker states.",
        "IP65: dust-tight, protected from water jets.",
        "IP66: dust-tight, protected from powerful jets. The usual target for outdoor cameras.",
        "IP67: dust-tight, survives short immersion. Useful where water can pool.",
      ],
    },
    {
      id: "outdoor",
      h: "Which IP rating do you need outdoors?",
      p: [
        "IP66 is enough for a camera under an eave or on a wall in rain. IP67 is better for ground-level, drain-side or flood-prone mounts. Cameras at IP65 are acceptable under cover. For the strong monsoon rain and fine dust in many Nepal towns, choose IP66 or above for anything outside. Indoor-only cameras often have no rating at all.",
      ],
    },
    {
      id: "cables",
      h: "The rating covers the camera, not the connections",
      p: [
        "Most outdoor failures are at the cable joint, not the camera body. A camera rated IP67 can still fail through a leaking connector. Use a weatherproof junction box, a drip loop so water runs off the cable, and sealed or gelled connectors. Avoid leaving network plugs or BNC joints exposed. See [bullet cameras](/glossary/bullet-camera) and [dome cameras](/glossary/dome-camera).",
      ],
    },
    {
      id: "vs-ik",
      h: "IP rating vs IK rating",
      p: [
        "IP is about dust and water. IK is about impact. A camera can be IP67 and weak against a hit, or tough against a hit and not waterproof. Vandal-prone sites need both. See [IK10](/glossary/ik10).",
      ],
    },
    {
      id: "claims",
      h: "Reading the claim",
      p: [
        "Look for the exact code on the datasheet. “Weatherproof” on its own is not a rating. Also check the operating temperature. Wet-season humidity can cause fog inside a poorly sealed dome, whatever the code. The wider checklist is in [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal).",
      ],
    },
    {
      id: "tests",
      h: "How the tests work",
      p: [
        "The IP code is checked in a lab under the IEC 60529 standard. For dust, a unit sits in a chamber of fine talc for several hours and is checked for dust inside. For water, it is sprayed or dipped under set conditions. IP65 uses a 6.3 mm nozzle at low pressure from every angle. IP66 uses a 12.5 mm nozzle with far more water. IP67 dips the unit 1 m under water for 30 minutes. Water tests use fresh water at room temperature, not salt, steam or chemicals.",
        "Because the tests are different tests, an IP67 rating does not guarantee IP66. Some products are rated for both, written IP66/IP67.",
      ],
    },
    {
      id: "nepal",
      h: "What this means for a site in Nepal",
      p: [
        "Fine dust on roads and building sites is where the first digit matters, so choose 6 for outdoors. Monsoon rain and splash from the ground is where the second digit matters. Mounting height and cover do as much as the code: a camera under an eave sees far less water than one on an open pole. Check the whole run, including the junction box and the point where cable meets camera.",
        "Cold and humidity matter as well, but the code does not cover them. Check the operating temperature range on the datasheet, and look for a breathing membrane or desiccant on cameras that will see big day and night swings.",
      ],
    },
    {
      id: "buying",
      h: "Checking the claim at purchase",
      p: [
        "Look for the code printed on the datasheet and on the camera label. Be careful with listings that say “waterproof” or “weatherproof” and no code. Ask the seller for the test report if the camera will be exposed. A rating applies to the camera as sold with its supplied gland and seals, so do not drill extra holes in the housing.",
      ],
    },
  ],
  faq: [
    { q: "What does IP66 mean?", a: "Dust-tight and protected against powerful water jets from any direction." },
    { q: "What is the difference between IP66 and IP67?", a: "IP67 also survives temporary immersion up to 1 metre. IP66 does not." },
    { q: "Is IP65 enough for an outdoor camera?", a: "Under cover, yes. For open exposure to heavy rain, choose IP66." },
    { q: "Is IP68 better than IP67?", a: "It allows deeper or longer immersion, to a depth the maker specifies. It is rarely needed for cameras." },
    { q: "Does waterproof mean IP67?", a: "Not by itself. Look for the actual IP code, since “waterproof” has no fixed meaning." },
  ],
  related: ["ik10", "bullet-camera", "dome-camera", "turret-camera"],
  product: "camera-app",
};

export default term;
