import type { Term } from "../types";

const term: Term = {
  slug: "nvr",
  term: "NVR",
  full: "Network Video Recorder",
  short: "An NVR is a recorder for IP cameras. The cameras encode video themselves and send it over the network to the NVR, which stores it.",
  body: [
    "IP cameras plug into the network like a computer. Each one compresses its own video and sends it to the NVR, which records it. Many NVRs have power over the cable built in, so one wire carries both power and picture.",
    "An NVR is the IP-camera counterpart of a DVR. Many sites run both: older analogue cameras on a DVR and newer IP cameras on an NVR.",
    "LunaCam connects to NVRs over ONVIF or RTSP, and directly to Hikvision and Dahua models, so one app shows both kinds of recorder.",
  ],
  related: ["dvr", "onvif", "rtsp"],
  product: "camera-app",
};

export default term;
