import type { Term } from "../types";

const term: Term = {
  slug: "port-forwarding",
  term: "Port forwarding",
  short: "Port forwarding is a router setting that sends outside traffic on a chosen port to a device on your network, such as a DVR. It is the old way to watch cameras from outside.",
  body: [
    "To reach a DVR from outside, a router must be told to pass a particular port through to it. That means logging into the router, knowing the DVR's address and exposing the DVR to the internet.",
    "It often cannot be done at all. Many homes and shops share one connection with a building, or sit behind carrier-grade NAT, so there is no address of their own to reach.",
    "The LunaCam Box avoids it. It connects out to LunaCam, so nothing on your router needs to open, and it works behind a shared connection.",
  ],
  related: ["cgnat", "p2p-cloud", "dvr"],
  product: "lunacam-box",
};

export default term;
