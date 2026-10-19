import type { Term } from "../types";

const term: Term = {
  slug: "ik10",
  term: "IK10",
  full: "IK impact protection rating, level 10",
  aka: ["IK rating", "Vandal-proof", "Vandal resistant", "IK08", "IK09"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "IK10 rating: what it means for vandal-resistant CCTV cameras",
  description: "IK10 is the highest impact rating for enclosures, 20 joules, like a 5 kg weight dropped from 40 cm. What IK ratings mean for vandal-resistant cameras and domes.",
  short: "IK10 is the highest level of the IK impact scale. It means the housing survives a 20 joule hit, about a 5 kg weight dropped from 40 cm.",
  body: [
    "The IK scale, defined in standard IEC 62262, rates how well an enclosure resists mechanical impact. It runs from IK00 (no protection) to IK10 (the highest). Each step roughly doubles the energy.",
    "A camera sold as vandal-resistant usually means IK10 or at least IK08. It is a test of the housing and dome, not a promise that no one can ever break it.",
  ],
  sections: [
    {
      id: "meaning",
      h: "IK10 meaning",
      p: [
        "IK10 corresponds to an impact of 20 joules, applied by a standard hammer or weight under test. In the usual description, that is a 5 kg mass dropped from 400 mm. The camera must stay working and the housing intact enough to still do its job, as defined by the maker’s test.",
      ],
    },
    {
      id: "scale",
      h: "The IK scale",
      p: [
        "Selected levels, with impact energy:",
      ],
      list: [
        "IK06: 1 joule.",
        "IK07: 2 joules.",
        "IK08: 5 joules, a 1.7 kg mass dropped from 30 cm.",
        "IK09: 10 joules, a 5 kg mass dropped from 20 cm.",
        "IK10: 20 joules, a 5 kg mass dropped from 40 cm.",
        "The levels below IK06 cover very light impacts and are of little use for outdoor CCTV.",
      ],
    },
    {
      id: "where",
      h: "Where you need IK10",
      p: [
        "Low-mounted and reachable spots: school corridors, bank lobbies, lifts, parking, public toilets, bus shelters, ATM areas and shop fronts. For ceilings out of reach, a lower rating is acceptable. A [dome camera](/glossary/dome-camera) with a thick bubble and metal base is the usual way to get IK10. Many [turret](/glossary/turret-camera) and [bullet](/glossary/bullet-camera) cameras also carry it.",
      ],
    },
    {
      id: "not",
      h: "What IK10 does not cover",
      p: [
        "It says nothing about dust and water. For that see the [IP rating](/glossary/ip-rating). It does not stop someone cutting the cable, spraying the lens or pulling the mount off. Good mounting adds to the rating: a flush ceiling fit, hidden cabling inside conduit, tamper alarms and a sturdy back box.",
      ],
    },
    {
      id: "check",
      h: "How to check the claim",
      p: [
        "Look for IK10 on the datasheet and ask which part was tested. “Vandal-proof” has no standard definition. Also look at the material of the dome cover. Polycarbonate resists impact better than acrylic or glass. Find a sample camera and look at the housing: a solid metal body feels different from thin plastic.",
      ],
    },
    {
      id: "layout",
      h: "Beyond the rating",
      p: [
        "The best protection is placement. Mount high, out of arm’s reach, with the camera watching itself where possible. A second camera facing the first records anyone who tampers with it. See [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal) and [bank branch CCTV management](/blog/bank-branch-cctv-management).",
      ],
    },
    {
      id: "energy",
      h: "Reading the energy figures",
      p: [
        "IK ratings are stated in joules, the energy of the hit. Each level roughly doubles the energy of the one below. The standard test hits the housing with a steel hammer swung on a pendulum or dropped from a set height. A passing unit shows no cracks that expose the inside, and the camera still works. The IK scale tops out at IK10. Some makers claim IK11 or higher, but that is outside the core standard.",
      ],
    },
    {
      id: "real",
      h: "What a real attack looks like",
      p: [
        "Someone with a stick, a stone or a crowbar can deliver far more than 20 joules in a swing, and they usually go for the dome or the lens, not the middle of the housing. IK10 raises the effort required and the chance of the camera still recording the attack. It does not make it unbreakable. Mounting out of reach, using a back box, and a second camera watching the first remain the best defence.",
      ],
      list: [
        "Dome: thick polycarbonate and a metal rim.",
        "Mount: a back box that hides cable and screws.",
        "Cable: run inside conduit or the wall, not hanging.",
        "Tamper alarm: tell the recorder when the camera is moved or covered.",
        "Second camera: watch the first one.",
      ],
    },
    {
      id: "bank",
      h: "Where it matters most",
      p: [
        "Bank lobbies, schools, public transport and municipal sites are the usual places that ask for vandal-resistant cameras. For ATMs and branch installs, see [bank branch CCTV management](/blog/bank-branch-cctv-management) and [municipal CCTV operations](/blog/municipal-cctv-operations). When a tender asks for “vandal-proof”, ask for IK10 and IP66 in writing.",
      ],
    },
  ],
  faq: [
    { q: "What does IK10 mean?", a: "The highest impact rating, a 20 joule hit, like a 5 kg weight dropped from 40 cm." },
    { q: "Is IK10 the same as vandal-proof?", a: "Close. Vandal-resistant cameras typically meet IK10 or IK08. The term itself has no standard." },
    { q: "What is the difference between IP66 and IK10?", a: "IP66 is protection against dust and water. IK10 is protection against impact. They are independent." },
    { q: "Is IK10 enough to stop thieves?", a: "No. It resists blows, not cutting, spraying or removal. Mount high and use tamper alerts." },
    { q: "How many joules is IK08?", a: "5 joules." },
  ],
  related: ["ip-rating", "dome-camera", "turret-camera", "bullet-camera"],
  product: "camera-app",
};

export default term;
