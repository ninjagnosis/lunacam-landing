import type { Term } from "../types";

const term: Term = {
  slug: "h265",
  term: "H.265",
  full: "High Efficiency Video Coding",
  aka: ["HEVC", "H265", "H.265+"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "What is H.265 (HEVC)? Storage savings vs H.264 for CCTV",
  description: "H.265 (HEVC) compresses CCTV video into much less space than H.264. What it means, how much it saves, compatibility limits and when it is worth using.",
  short: "H.265, also called HEVC, is a video compression format that keeps the same picture quality as H.264 in roughly half the data. It lets CCTV store more days of footage and stream over weaker connections.",
  body: [
    "H.265 is the successor to [H.264](/glossary/h264). It uses larger, smarter blocks and better prediction, so the same camera needs a lower [bitrate](/glossary/bitrate) for the same picture. That matters most with high-resolution cameras, where H.264 files become very large.",
    "The trade-off is processing power and support. Encoding and decoding H.265 takes more work, and older recorders, browsers and phones may not play it. It is worth using when storage or upload is your limit and every device in the chain supports it.",
  ],
  sections: [
    {
      id: "meaning",
      h: "H.265 meaning",
      p: [
        "H.265 is the common name for HEVC, High Efficiency Video Coding, finished in 2013. Like any codec it has an encoder, in the camera, and a decoder, in the recorder, phone or computer. Both ends must support it for the picture to appear.",
        "Makers also sell variants called H.265+, Smart H.265 or similar. These add scene-based tricks on top, are brand-specific, and are covered below.",
      ],
    },
    {
      id: "savings",
      h: "How much storage does H.265 save?",
      p: [
        "Typical savings against H.264 at the same quality are about 30 to 50%, and nearer 50% at 4K than at low resolutions. Real savings vary with the scene and the camera. A quiet corridor compresses far better than a busy road, and noise from poor lighting eats the benefit.",
        "As an example of the effect, if a camera needs 4 Mbps in H.264, a similar picture may need around 2 to 3 Mbps in H.265. Test on your own cameras rather than trust a rule, and keep other settings the same when comparing.",
      ],
    },
    {
      id: "vs-h264",
      h: "H.265 vs H.264",
      p: [
        "Both do the same job. They differ in efficiency and support.",
      ],
      list: [
        "Efficiency: H.265 uses less bitrate for the same quality.",
        "Support: H.264 plays almost everywhere. H.265 support is wide on recorders and phones made in recent years but patchy on older gear and in web browsers.",
        "Processing: H.265 needs a stronger chip in the recorder to decode many streams at once.",
        "Licensing: H.265 has more complicated patent licensing, which is why some software and browsers leave it out.",
      ],
    },
    {
      id: "when",
      h: "When to use H.265",
      p: [
        "It helps most where bytes are costly.",
      ],
      list: [
        "Long retention on a limited disk. See [retention](/glossary/retention).",
        "High-resolution cameras, 4 MP and above.",
        "Streaming over slow home upload. Read [CCTV internet bandwidth and upload in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
        "Stay on H.264 when you mix old and new gear or must view footage in a browser or on older phones.",
      ],
    },
    {
      id: "plus",
      h: "H.265+ and smart codecs",
      p: [
        "Brand extensions such as H.265+ lower the bitrate in static scenes by keeping background data for longer. They can cut storage further but sometimes cause blur on slowly moving objects, and they only work fully with the maker’s own recorder. Check a sample of a moving subject before relying on them.",
      ],
    },
    {
      id: "check",
      h: "How to check and switch",
      p: [
        "In the camera’s video settings, choose the video encoding for the main stream and sub stream. Confirm the recorder shows the camera after the change. If the picture goes black, the recorder or viewer does not support H.265, so switch back. [ONVIF](/glossary/onvif) Profile T is the profile that covers H.265 streaming.",
      ],
    },
    {
      id: "how",
      h: "How H.265 saves space",
      p: [
        "H.264 splits each frame into small blocks of up to 16 by 16 pixels. H.265 uses larger blocks, up to 64 by 64, and can split them more finely where the picture needs it. Flat areas such as a wall or the sky cost very little to describe. It also predicts movement from earlier frames more cleverly. The result is the same picture from fewer bits.",
        "The cost is work. Encoding H.265 takes more processing in the camera, and decoding it takes more in the recorder or phone. That is why very old recorders cannot show it, and why a recorder may support fewer H.265 channels than H.264 ones. Look for the maximum channels at the maximum resolution in H.265 on the datasheet.",
      ],
    },
    {
      id: "example",
      h: "A worked example of the saving",
      p: [
        "Take sixteen 4 MP cameras recording around the clock. At roughly 4 Mbps each in H.264, that is about 64 Mbps in total, or 28 GB per hour. A 10 TB disk holds around 14 days. If H.265 brings each camera down to 2.5 Mbps, the total is 40 Mbps, and the same disk holds about 22 days.",
        "These numbers are an illustration, not a promise. Measure on your own cameras over a few days, and look at the bitrate shown in the recorder rather than the figure in the settings. The sums for a single camera are in [bitrate](/glossary/bitrate), and how long to keep footage is in [how long to keep CCTV footage](/blog/how-long-to-keep-cctv-footage).",
      ],
    },
    {
      id: "compat",
      h: "Compatibility checklist before switching",
      p: [
        "Changing a codec on a working system can break viewing, so check each link first.",
      ],
      list: [
        "Recorder: does it decode H.265 at the channel count and resolution you use?",
        "Viewing apps: does the phone app show it, and on older phones?",
        "Browsers: web viewers often cannot play H.265. Check before promising browser access.",
        "Exported clips: will the recipient’s player open them? Police and courts may need a common format. See [CCTV evidence export in Nepal](/blog/cctv-evidence-export-nepal).",
        "Sub stream: many cameras keep the sub stream in H.264 for compatibility and use H.265 only on the main stream.",
      ],
    },
    {
      id: "lunacam",
      h: "H.265 and LunaCam",
      p: [
        "When a camera sends H.265 and the viewer needs H.264, LunaCam converts to H.264 on the LunaCam Box, and only when it is needed. When the camera already sends H.264, for example on its sub stream, the stream is passed on as it is. The box connects outward only, so a weak home uplink is the limit to plan for.",
      ],
    },
  ],
  faq: [
    { q: "What is H.265?", a: "H.265, or HEVC, is a video compression standard that delivers the same quality as H.264 at about half the data." },
    { q: "What does HEVC stand for?", a: "High Efficiency Video Coding." },
    { q: "Is H.265 better than H.264 for CCTV?", a: "It saves storage and bandwidth, so yes where it is supported. H.264 is safer for compatibility." },
    { q: "Why does H.265 not play in my browser?", a: "Many browsers do not include H.265 decoding because of licensing and processing cost. Use the recorder’s app, a player that supports it, or switch to H.264." },
    { q: "Does H.265 reduce picture quality?", a: "Not at the same effective quality. Savings come from smarter compression. Aggressive smart-codec modes can blur motion." },
    { q: "Can H.265 and H.264 cameras be mixed on one recorder?", a: "Yes if the recorder supports both. Each camera is set separately." },
  ],
  related: ["h264", "bitrate", "camera-resolution", "retention", "onvif"],
  product: "camera-app",
};

export default term;
