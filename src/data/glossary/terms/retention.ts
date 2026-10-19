import type { Term } from "../types";

const term: Term = {
  slug: "retention",
  term: "Retention",
  short: "Retention is how long recorded video is kept before it is deleted. It can be set per camera or per site, from a few days to a year.",
  body: [
    "Disks are finite, so every system overwrites old video eventually. Retention is the rule that says how long. Seven days is common in shops, thirty or more in banks, and some law sets a minimum.",
    "In Nepal, the Ministry of Home Affairs' CCTV Installation and Operation Procedure (as amended in 2019) asks for footage to be kept for at least three months; the Privacy Act, 2075 itself sets no period. A retention floor makes sure nobody shortens it by mistake.",
    "LunaCam sets retention from 7 to 365 days, per camera or per site, and a legal hold stops deletion of footage that matters to a case.",
  ],
  related: ["dvr", "chain-of-custody"],
  product: "playback-clips",
};

export default term;
