import type { Term } from "../types";

const term: Term = {
  slug: "cloud-recording",
  term: "Cloud recording",
  aka: ["Cloud storage for CCTV", "Cloud video storage", "Cloud VSaaS", "Off-site recording"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "Cloud recording for CCTV: how it works, cost and bandwidth needs",
  description: "Cloud recording saves camera video on a provider's servers over the internet. How it works, cloud vs local recording, upload bandwidth and privacy.",
  short: "Cloud recording saves camera video on a provider's servers over the internet instead of, or as well as, a disk on site. It protects footage if the recorder is stolen or damaged.",
  body: [
    "Video leaves the site, travels over your internet connection and is stored on remote servers. You play it back from an app or browser. If the recorder is stolen or burnt, the footage is still there.",
    "Cloud recording is different from cloud viewing. Many apps let you watch live video through a cloud service while the recording stays on the local disk. Check which one a product means.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is cloud recording?",
      p: [
        "It means storage of video in a data centre run by the service. Some products record everything. Others upload only clips around motion or alerts. Plans usually set the number of days kept and the number of cameras.",
      ],
    },
    {
      id: "vs",
      h: "Cloud vs local vs edge recording",
      p: [
        "Where the video is saved changes cost, safety and bandwidth:",
      ],
      list: [
        "Local recording: a [DVR](/glossary/dvr) or [NVR](/glossary/nvr) on site. No upload needed, but the disk is a single point of loss.",
        "[Edge recording](/glossary/edge-recording): on the camera's SD card or the recorder, with video pulled when needed.",
        "Cloud recording: off site, so it survives theft and fire, and costs a monthly fee plus upload bandwidth.",
        "Hybrid: record locally and send alerts or key clips to the cloud.",
      ],
    },
    {
      id: "bandwidth",
      h: "How much bandwidth does cloud recording need?",
      p: [
        "Continuous recording uploads the full bitrate of every camera all day. Four cameras at 4 Mbps each need 16 Mbps of steady upload, which many home plans cannot sustain while also carrying other traffic. Lower the bitrate, use [H.265](/glossary/h265) and record on motion to reduce it. See [bitrate](/glossary/bitrate) and [CCTV internet bandwidth in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
        "If the internet link drops, a pure cloud camera records nothing unless it buffers on an SD card.",
      ],
    },
    {
      id: "privacy",
      h: "Privacy, location and law",
      p: [
        "Ask where the servers are, who can open the footage, how it is encrypted and how long it is kept. For some sites, such as banks, rules may require data to stay in the country. See [Privacy Act 2075 and CCTV in Nepal](/blog/privacy-act-2075-cctv-nepal). Remember that you still need to decide on [retention](/glossary/retention).",
      ],
    },
    {
      id: "choose",
      h: "When cloud recording makes sense",
      p: [
        "It suits sites that cannot protect a recorder, such as a shop with a back office anyone can enter, or many small branches without IT staff. It suits worse where upload is slow, expensive or unreliable. A common middle path is local recording for everything and cloud copies of events and exported clips, which keeps evidence safe without a full upload. See [CCTV evidence export in Nepal](/blog/cctv-evidence-export-nepal).",
      ],
    },
    {
      id: "modes",
      h: "Recording modes: continuous, motion, event and schedule",
      p: [
        "Continuous cloud recording uploads everything and gives the most complete archive, at the highest bandwidth and storage cost. Motion or event recording uploads only clips around triggers, which is far cheaper but misses anything the trigger missed. Schedule recording uploads during set hours, such as closing time to opening time in a shop. Many sites mix them: continuous on a till camera and event-only on a back lane.",
        "Ask how pre-event footage is handled. If a clip starts after the trigger, you may lose the moment someone approached.",
      ],
    },
    {
      id: "cost",
      h: "What drives the cost",
      p: [
        "Three things: number of cameras, resolution and bitrate, and days kept. A camera at 4 Mbps uploads about 43 GB a day, so thirty days of one camera is about 1.3 TB. Ten cameras for thirty days is about 13 TB. That is why plans usually cap retention and why event-only recording is popular. Compare the per-camera price along with the retention days and the resolution it covers.",
      ],
    },
    {
      id: "lunacam",
      h: "Cloud recording and LunaCam",
      p: [
        "LunaCam supports cloud recording modes (continuous, motion, event and schedule), event-only cloud clips, and a hybrid local and cloud copy. After an outage the box can sync and backfill what it recorded locally. Retention plans set how long footage is kept, and legal holds stop deletion while a case is open. Playback from cloud and from the recorder share one timeline. See [playback and clips](/products/playback-clips).",
      ],
    },
    {
      id: "failure",
      h: "What happens when the internet fails",
      p: [
        "A camera that streams straight to the cloud and has no local buffer records nothing during an outage, and in many places outages are the moment of highest risk. Look for cameras with an SD card that fills the gap, or a local box that keeps recording and uploads the missing time later. Also ask what happens when the plan lapses. Some services delete footage immediately and others keep it for a grace period.",
      ],
    },
  ],
  faq: [
    { q: "What is cloud recording in CCTV?", a: "It is saving camera video on a provider's servers over the internet rather than only on a disk at the site." },
    { q: "Is cloud recording better than a DVR?", a: "It is safer against theft and fire but needs upload bandwidth and a monthly fee. Many sites combine both." },
    { q: "How much does cloud recording cost?", a: "It depends on the provider, the number of cameras and the days of retention. Ask for a price per camera per month, and check what is included." },
    { q: "Does cloud recording work without internet?", a: "Not for the upload. Cameras with an SD card can buffer during an outage and upload afterwards, if the product supports it." },
    { q: "Can I use cloud recording with an existing DVR?", a: "Some services pull streams from a DVR through a gateway box and store them in the cloud. Check compatibility and bandwidth first." },
    { q: "Is cloud recording the same as cloud viewing?", a: "No. Cloud viewing relays live video. Cloud recording stores video on remote servers." },
    { q: "How many days of cloud video can I keep?", a: "It is set by the plan and by your retention rules. Check the law and your own policy first." },
  ],
  related: ["edge-recording", "retention", "bitrate", "p2p-cloud", "nvr"],
  product: "playback-clips",
};

export default term;
