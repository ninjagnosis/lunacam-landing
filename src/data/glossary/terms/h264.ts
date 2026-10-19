import type { Term } from "../types";

const term: Term = {
  slug: "h264",
  term: "H.264",
  full: "Advanced Video Coding",
  aka: ["AVC", "MPEG-4 AVC", "H264", "H.264+"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "What is H.264? AVC video compression for CCTV explained",
  description: "H.264 (AVC) is the most widely supported video compression for CCTV. What it does, how it compares with H.265, and how it affects storage and bandwidth.",
  short: "H.264, also called AVC, is a video compression format used by almost every camera, recorder and phone. It shrinks CCTV video to a fraction of its raw size.",
  body: [
    "Raw video is far too large to store or send. A codec such as H.264 removes detail the eye barely notices and avoids repeating what has not changed between frames. A fixed camera looking at a quiet shop floor compresses very well.",
    "H.264 is the safe common choice: any recorder, phone, browser and player can handle it. Its newer successor, [H.265](/glossary/h265), needs less space for the same quality but is less universally supported.",
  ],
  sections: [
    {
      id: "meaning",
      h: "H.264 meaning",
      p: [
        "H.264 is a video compression standard, finished in 2003. Its formal names are Advanced Video Coding (AVC) and MPEG-4 Part 10. A codec is the program on each end: the camera encodes, and the recorder or phone decodes.",
        "Compression makes CCTV practical. Without it a few cameras would fill a disk in hours and choke any internet connection.",
      ],
    },
    {
      id: "how-it-works",
      h: "How H.264 compresses video",
      p: [
        "H.264 saves data in two ways. It describes each frame by blocks and removes detail in the blocks, and it describes later frames only by what changed since an earlier one.",
      ],
      list: [
        "I-frames: complete pictures, sent at intervals. Larger.",
        "P-frames: store only differences from earlier frames. Smaller.",
        "B-frames: use both earlier and later frames. Smallest, but not all cameras use them.",
        "Because of this, a still scene uses far less data than a busy one, and the [bitrate](/glossary/bitrate) rises when there is movement or noise.",
      ],
    },
    {
      id: "h264-plus",
      h: "H.264+ and “smart codecs”",
      p: [
        "Makers add their own names on top of H.264, such as H.264+, Smart Codec or ZIP. These lower the bitrate in static scenes further by keeping the background frames for longer. They save storage but are brand-specific, and playback in other software may need the same maker’s features. Treat them as an extra and test with your viewing tools.",
      ],
    },
    {
      id: "vs-h265",
      h: "H.264 vs H.265",
      p: [
        "H.265 usually achieves similar quality at a much lower bitrate, often cited as saving up to about half. It needs more processing to encode and decode, and older recorders, browsers and phones may not play it. See [H.265](/glossary/h265) for details.",
      ],
      list: [
        "Choose H.264 when you need the widest compatibility or when devices are old.",
        "Choose H.265 when storage or upload bandwidth is the limit and every device in the chain supports it.",
      ],
    },
    {
      id: "settings",
      h: "Settings that matter",
      p: [
        "In a camera, choose H.264 for the main stream if you are unsure. Then set the bitrate type and value, [frame rate](/glossary/frame-rate) and [resolution](/glossary/camera-resolution). A fixed bitrate gives predictable storage. A variable bitrate follows scene activity, which saves space but can spike. The worked sums for upload are in [CCTV internet bandwidth in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
      ],
    },
    {
      id: "profiles",
      h: "H.264 profiles and levels",
      p: [
        "H.264 has profiles, which are feature sets. Baseline is the simplest and lightest. Main adds more compression tools. High is the most efficient and is the one most CCTV cameras offer. Choosing High gives the best picture per bit when the recorder and viewer support it. Choosing Baseline suits very old players.",
        "Levels set the limits on resolution and frame rate. In practice you rarely set them: the camera chooses a level to match the resolution you pick.",
      ],
    },
    {
      id: "gop",
      h: "Keyframe interval (I-frame interval)",
      p: [
        "A camera sends a full picture, an I-frame, every so often, and smaller frames between. The gap is called the GOP or I-frame interval and is often set to equal the frame rate, one keyframe per second, or to double it. A longer gap saves bits but makes it slower to start a stream, to scrub a recording and to recover after a lost packet. For remote viewing and playback search, a short interval is more comfortable. For deep storage a longer one saves space.",
      ],
    },
    {
      id: "when",
      h: "When H.264 is still the right choice",
      p: [
        "H.264 remains the safe codec for mixed sites. Pick it when the recorder is older, when you must share clips with people who use ordinary players, when you want to watch in a browser, or when the cameras are 2 MP and the saving from H.265 would be small anyway. A cheap camera’s H.265 encoder is often worse than its H.264 one, so test both.",
      ],
    },
    {
      id: "lunacam",
      h: "H.264 and LunaCam",
      p: [
        "LunaCam reads H.264 streams from cameras and recorders through the LunaCam Box. In low-bandwidth mode it uses the camera’s sub stream. When a camera sends H.265, the box converts to H.264 only when the viewer needs it, which keeps the work down. Everything leaves your network over an outbound-only connection.",
      ],
    },
  ],
  faq: [
    { q: "What is H.264?", a: "A widely used video compression standard, also called AVC, that makes video files and streams much smaller." },
    { q: "Is H.264 the same as MP4?", a: "No. H.264 is the codec that compresses video. MP4 is a file container that can hold H.264 video." },
    { q: "Is H.264 or H.265 better for CCTV?", a: "H.265 saves storage and bandwidth. H.264 works with more devices. Use H.265 only if everything in your chain supports it." },
    { q: "What is the full form of H.264?", a: "Advanced Video Coding (AVC), also known as MPEG-4 Part 10." },
    { q: "Does H.264 lower picture quality?", a: "It discards detail, but at a sensible bitrate the loss is not noticeable. Too low a bitrate causes blocky pictures." },
    { q: "What is the difference between H.264 and H.264+?", a: "H.264+ is a brand name for H.264 with extra bitrate savings in still scenes. It is not a different standard, and works best with the same maker’s recorder." },
  ],
  related: ["h265", "bitrate", "frame-rate", "camera-resolution"],
  product: "camera-app",
};

export default term;
