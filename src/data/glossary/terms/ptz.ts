import type { Term } from "../types";

const term: Term = {
  slug: "ptz",
  term: "PTZ",
  full: "Pan, tilt and zoom",
  short: "PTZ describes a camera that can turn left and right, tilt up and down and zoom, controlled from software, rather than staying fixed on one view.",
  body: [
    "A fixed camera shows one scene. A PTZ camera can be steered, so one camera can cover a large yard or follow a person. Many can also return to saved positions, called presets, and run a tour between them.",
    "PTZ is controlled over the network, usually through ONVIF or the maker's own interface. The operator needs the right permission, and every move is a thing worth logging.",
    "LunaCam gives PTZ control in live view and records PTZ moves in the audit log.",
  ],
  related: ["onvif", "rtsp"],
  product: "camera-app",
};

export default term;
