import type { Term } from "../types";

const term: Term = {
  slug: "edge-recording",
  term: "Edge recording",
  aka: ["SD card recording", "On-camera recording", "Local storage on camera", "ONVIF Profile G recording"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "Edge recording: SD card and on-camera storage explained",
  description: "Edge recording saves video on the camera or at the site, usually on an SD card. How it works, SD card limits and edge vs cloud recording.",
  short: "Edge recording means video is saved at the camera or the site, such as on an SD card, instead of being sent to a remote server. Video is fetched only when someone asks for it.",
  body: [
    "The word edge refers to the edge of the network, where the cameras are. A camera with a memory card records its own video. A recorder on site does the same for many cameras.",
    "Only requested clips or alerts travel over the internet, so edge recording uses far less bandwidth than [cloud recording](/glossary/cloud-recording) and keeps recording even when the internet is down.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is edge recording?",
      p: [
        "It is recording at the source. The commonest forms are a microSD card inside an IP camera and the disks of a [DVR](/glossary/dvr) or [NVR](/glossary/nvr). Both are edge storage, because the video is stored near the camera and not in a data centre.",
      ],
    },
    {
      id: "sd",
      h: "SD card recording: what to know",
      p: [
        "SD recording is cheap and useful as a backup or for single cameras, with limits:",
      ],
      list: [
        "Cards wear out from constant writing. Use high-endurance cards made for video, not ordinary cards.",
        "Capacity is small. A 128 GB card holds only a few days at a typical main-stream [bitrate](/glossary/bitrate).",
        "The card goes with the camera if the camera is stolen.",
        "Format the card in the camera, and check the recording timeline regularly. A failed card often fails silently.",
        "Playback speed depends on the camera's small processor and the network.",
      ],
    },
    {
      id: "playback",
      h: "How playback from the edge works",
      p: [
        "The app asks the camera or recorder for a time range. The device searches its storage and streams that clip. Standard interfaces exist for this, such as ONVIF Profile G for recording search and replay. See [ONVIF](/glossary/onvif). Brand protocols from Hikvision and Dahua do the same. Playback can be slow over a weak upload link, because the full bitrate of the recording is sent.",
      ],
    },
    {
      id: "vs",
      h: "Edge vs cloud recording",
      p: [
        "Edge is cheaper to run and works without internet, but footage can be lost with the device. Cloud survives theft and fire, but costs a fee and upload bandwidth. A hybrid keeps full recording at the edge and copies key clips off site. See [CCTV evidence export in Nepal](/blog/cctv-evidence-export-nepal).",
      ],
    },
    {
      id: "retention",
      h: "Retention at the edge",
      p: [
        "Retention depends on disk size and bitrate. Size the disk for the days you need. See [surveillance hard drive](/glossary/surveillance-hard-drive), [retention](/glossary/retention) and [how long to keep CCTV footage](/blog/how-long-to-keep-cctv-footage).",
      ],
    },
    {
      id: "sd",
      h: "Choosing and checking SD cards",
      p: [
        "Industry articles advise treating SD cards as failover or a backup, and not as primary storage, because they were not designed for years of 24 hour writing. Buy cards sold for video or high endurance, avoid unbranded cards and check the camera's maximum card size. Look at the recording timeline every month. A card that has died often shows no alarm until you search for footage.",
        "A 128 GB card at 4 Mbps holds about three days (4 Mbps is 43.2 GB a day). A lower substream-quality recording on the card would last longer but would show less detail.",
      ],
    },
    {
      id: "sync",
      h: "Getting edge footage to safety",
      p: [
        "The weak point of edge recording is the device. If the camera or recorder is taken, the footage goes with it. Three common fixes: export key clips as soon as an incident is known, copy events to a cloud account, or place the recorder in a locked cabinet away from the entrance. Hybrid plans copy a subset off site and keep the full recording local.",
      ],
    },
    {
      id: "lunacam",
      h: "Edge recording and LunaCam",
      p: [
        "LunaCam plays back from the camera's SD card or a DVR or NVR on the same timeline as everything else, and the box pulls footage on demand. After an internet outage, edge sync backfills the gap. Clips can be cut and downloaded as MP4. See [playback and clips](/products/playback-clips).",
      ],
    },
    {
      id: "when",
      h: "When edge recording is the right design",
      p: [
        "Edge recording suits sites with weak or capped internet, which describes many home and shop connections in Nepal, where upload is often much slower than download. It also suits sites that must keep recording through load-shedding and link failures, because the recorder does not depend on the line. It is a weaker fit where the device cannot be physically protected, or where a regulator or an insurer expects an off-site copy. Most real sites end up with edge recording plus a small number of exported or uploaded clips. See [CCTV internet bandwidth in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
      ],
    },
  ],
  faq: [
    { q: "What is edge recording in CCTV?", a: "Recording that happens at the camera or on site, such as on an SD card or a DVR, with no need to upload video to a server." },
    { q: "How long does an SD card record?", a: "It depends on card size and bitrate. A 128 GB card at 4 Mbps lasts roughly three days." },
    { q: "Is SD card recording reliable?", a: "It is fine as a backup. Use high-endurance cards and check the timeline often, since cards wear out." },
    { q: "Does edge recording work without internet?", a: "Yes. The camera or recorder keeps recording locally. Internet is only needed to view or fetch footage remotely." },
    { q: "Can I watch edge recordings from my phone?", a: "Yes, through the brand app or a viewer that can search the device's recordings remotely." },
    { q: "Can I use the SD card and the NVR together?", a: "Yes. Many sites record to the NVR and keep the SD card as a second copy for outages." },
    { q: "Do SD cards need replacing?", a: "Yes. Plan to replace them on a schedule and check them regularly." },
  ],
  related: ["cloud-recording", "nvr", "dvr", "retention", "onvif"],
  product: "playback-clips",
};

export default term;
