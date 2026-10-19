import type { Term } from "../types";

const term: Term = {
  slug: "substream",
  term: "Substream",
  aka: ["Sub stream", "Sub-stream", "Secondary stream", "Extra stream", "Main stream vs sub stream"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "Substream vs main stream in CCTV: meaning and best settings",
  description: "A substream is a second, lower-quality video stream from the same camera. Why main stream vs sub stream matters for phones, bandwidth and recorder load.",
  short: "A substream is a second, lower-quality video stream that a camera sends alongside its main stream. It is used for live view on phones and multi-camera grids.",
  body: [
    "A modern IP camera encodes its picture more than once at the same time. The main stream is full resolution and is used for recording. The substream has lower [resolution](/glossary/camera-resolution), [frame rate](/glossary/frame-rate) and [bitrate](/glossary/bitrate), and is used when a smaller, lighter picture is enough.",
    "Cameras may also have a third stream. Names vary: main, sub, extra, third stream, or stream 1, 2 and 3.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Main stream vs substream",
      p: [
        "Think of the main stream as the recording copy and the substream as the viewing copy. They come from the same sensor, but the camera compresses each with its own settings, so their sizes are very different.",
      ],
      list: [
        "Main stream: for example 4 MP at 15 to 25 fps and several Mbps. Used for recording and for full-screen viewing.",
        "Substream: for example 640 x 360 or D1 at 10 to 15 fps and under 1 Mbps. Used for grids, previews and mobile data.",
      ],
    },
    {
      id: "why",
      h: "Why substreams matter",
      p: [
        "Showing sixteen full-resolution streams at once is too much for a phone or a small PC, and for a home internet upload link. Showing sixteen substreams is manageable. The viewer app picks the substream for the grid and switches to the main stream when you open one camera full screen.",
        "On the recorder, the substream also feeds remote viewing, so the recorder does not need to re-encode. See [CCTV internet bandwidth in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
      ],
    },
    {
      id: "settings",
      h: "Recommended substream settings",
      p: [
        "There is no single correct value, but these are practical starting points:",
      ],
      list: [
        "Resolution: 640 x 360 or 704 x 576. Avoid very low sizes that make faces unreadable.",
        "Frame rate: 10 to 15 fps is enough for viewing.",
        "Bitrate: 256 to 1024 kbps, using variable bitrate.",
        "Codec: [H.264](/glossary/h264) for widest compatibility on phones. [H.265](/glossary/h265) saves bandwidth if every viewer supports it.",
      ],
    },
    {
      id: "rtsp",
      h: "Substream URLs and RTSP",
      p: [
        "Each stream has its own [RTSP](/glossary/rtsp) address. On many Hikvision cameras the main stream is channel 101 and the substream channel 102, so a recorder channel 1 gives 101, 102, and so on. Dahua uses subtype=0 for main and subtype=1 for sub. Check the camera's manual for the exact pattern. [ONVIF](/glossary/onvif) lists streams as profiles.",
      ],
    },
    {
      id: "problems",
      h: "Common problems",
      p: [
        "If the phone view is blurry, raise the substream resolution or bitrate. If the phone view stutters, lower them. If a camera lacks a substream, the viewer must download the main stream, which can overload a slow link. Recording is not affected by substream settings on most recorders, but check that the recorder is set to record the main stream.",
      ],
    },
    {
      id: "urls",
      h: "Finding the substream address",
      p: [
        "The pattern below is widely used but varies by model and firmware, so confirm it in the manual. On Hikvision, the path ends in 101 for the main stream and 102 for the substream of channel 1. On a recorder, channel 2 uses 201 and 202, and so on. Dahua uses a path of the form cam/realmonitor with channel=1 and subtype=0 for the main stream and subtype=1 for the first extra stream. Some newer Dahua models also have subtype=2.",
        "A tool such as VLC can open an address to check it. If the substream address fails, the camera may have the substream switched off, or the password may contain a character that needs encoding in the address.",
      ],
    },
    {
      id: "lunacam",
      h: "Substreams and LunaCam",
      p: [
        "LunaCam chooses the main or sub stream by itself: grids use the substream and a full-screen view uses the main stream. A low-bandwidth mode keeps live view usable on weak mobile data, and live video is passed through without re-encoding, so the picture is what the camera sent. See [camera app](/products/camera-app).",
      ],
    },
    {
      id: "tradeoffs",
      h: "Trade-offs when you tune the substream",
      p: [
        "A larger substream looks better on a phone but uses more of the shop's upload when several people watch at once. If one family member watches four cameras on mobile data, four substreams at 512 kbps is about 2 Mbps. If eight staff watch at the same time, the shop's upload may fill. Test during busy hours.",
        "Do not lower the main stream to save phone data. The main stream is your evidence. Lower the substream instead.",
      ],
    },
  ],
  faq: [
    { q: "What is a substream on a CCTV camera?", a: "It is a second, lower-quality video stream used for live view on phones and grids while the main stream is recorded." },
    { q: "Does the substream affect recording quality?", a: "Usually not. Recordings use the main stream. Check your recorder's setting to confirm." },
    { q: "What substream resolution should I use?", a: "640 x 360 or similar is a good start. Raise it if faces are unreadable on your phone, lower it if viewing stutters." },
    { q: "Why does my phone show a blurry picture?", a: "The app may be showing the substream. Open a single camera full screen to switch to the main stream, or raise the substream quality." },
    { q: "Do all cameras have a substream?", a: "Almost all IP cameras and modern recorders do. Very old cameras may not." },
    { q: "What is the third stream on a camera?", a: "Some cameras offer a third stream, usually a middle resolution. It can be used for a different viewer, or for analytics." },
    { q: "Can I turn the substream off?", a: "Yes on many cameras, but then remote viewing may have to use the main stream, which uses much more bandwidth." },
  ],
  related: ["bitrate", "frame-rate", "rtsp", "h264", "camera-resolution"],
  product: "camera-app",
};

export default term;
