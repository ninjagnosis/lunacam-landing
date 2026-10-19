import type { Term } from "../types";

const term: Term = {
  slug: "chain-of-custody",
  term: "Chain of custody",
  short: "Chain of custody is the record of who handled a piece of evidence, when and why. For CCTV it shows that footage was not changed between the camera and the court.",
  body: [
    "Footage is only worth something as evidence if you can show where it has been. A clip on a pen drive passed from hand to hand has no history, so anyone can say it was edited.",
    "A proper trail records every view, export and share, fixes a hash of each file when it is exported and signs a manifest so changes show up. A visible watermark names the user, time and site.",
    "LunaCam logs each step of a case and gives anyone a verifier tool to check an export against its signed manifest.",
  ],
  related: ["retention", "dvr"],
  product: "evidence",
};

export default term;
