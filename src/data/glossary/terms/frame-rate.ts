import type { Term } from "../types";

const term: Term = {
  slug: "frame-rate",
  term: "Frame rate",
  full: "Frames per second",
  aka: ["FPS", "Frames per second", "Camera fps"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "Frame rate (FPS) in CCTV: how many frames per second you need",
  description: "Frame rate is how many pictures a camera records per second. What FPS means for CCTV, how many you need, and how it affects storage, bitrate and motion blur.",
  short: "Frame rate is the number of pictures a camera records each second, written as fps. More frames show motion more smoothly but use more storage and bandwidth.",
  body: [
    "Video is a quick series of still pictures. At 25 fps the camera takes 25 pictures every second, which looks smooth to the eye. At 5 fps you see 5 pictures a second, so fast movement appears as jumps.",
    "More frames means more data, so frame rate directly affects [bitrate](/glossary/bitrate), disk use and upload.",
  ],
  sections: [
    {
      id: "meaning",
      h: "FPS meaning",
      p: [
        "FPS stands for frames per second. A frame is a single picture. Cameras commonly offer 1 to 30 fps. Nepal and most of Asia and Europe use PAL video, where 25 fps is the standard, and 30 fps is the NTSC equivalent. Many cameras let you pick any value in between.",
      ],
    },
    {
      id: "how-many",
      h: "How many fps do you need for CCTV?",
      p: [
        "It depends on what you want to prove.",
      ],
      list: [
        "12 to 15 fps: enough for most indoor monitoring, shops and corridors, and a reasonable balance for storage.",
        "25 fps: smooth, natural motion. Good for entrances, counters and cash areas where hands and quick actions matter.",
        "Higher than 25 fps: rarely needed. Useful for specialist cases such as fast traffic.",
        "5 to 8 fps: acceptable for quiet areas such as storerooms where little moves.",
        "Set the main stream for evidence quality. A lower rate on the [sub stream](/glossary/substream) is fine.",
      ],
    },
    {
      id: "storage",
      h: "Frame rate, storage and bandwidth",
      p: [
        "Dropping from 25 to 12 fps does not halve the data, because compression already skips repeated information, but it commonly cuts bitrate noticeably. A small saving per camera adds up across 16 cameras and a month of retention. See [CCTV internet bandwidth and upload speed in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
      ],
    },
    {
      id: "blur",
      h: "Frame rate and motion blur",
      p: [
        "Frame rate is not the same as shutter speed. Shutter speed is how long each frame is exposed. At night, cameras slow the shutter to collect light, which blurs movement even at 25 fps. Fixing blur at night is a lighting problem more than a frame-rate one. The guide to [CCTV night vision and low light](/blog/cctv-night-vision-low-light-guide) covers shutter and motion blur.",
      ],
    },
    {
      id: "mismatch",
      h: "Common mistakes",
      p: [
        "Setting the camera to 25 fps while the recorder is set to 12 fps lets the recorder drop frames. Match the settings. Setting very high fps on every camera quickly fills the disk. Lower fps at quiet spots and keep higher rates only where action matters.",
      ],
    },
    {
      id: "pal",
      h: "PAL, NTSC and why 25 and 30 fps",
      p: [
        "Television systems standardised on 25 frames per second in PAL regions, which include Nepal, India and Europe, and 30 in NTSC regions such as North America and Japan. Mains frequency was part of the reason: 50 Hz in PAL regions and 60 Hz in NTSC. Cameras today are digital and can run at other rates, but 25 fps is a natural default here. Lights powered from the mains can flicker on camera if the rate and the mains frequency do not agree, which is one reason to keep indoor cameras at 25.",
      ],
    },
    {
      id: "motion",
      h: "Which scenes need more frames",
      p: [
        "Think about how fast the thing you care about moves.",
      ],
      list: [
        "Walking people at a door: 12 to 15 fps usually captures a face.",
        "Hands at a counter or till: 20 to 25 fps shows what was passed.",
        "Cars on a street: 25 fps helps. Fast cars at 12 fps move a car length between frames.",
        "A storeroom or corridor at night: 5 to 10 fps is enough to show who entered.",
      ],
    },
    {
      id: "variable",
      h: "Frame rate on motion and event recording",
      p: [
        "Some recorders keep a low frame rate when nothing moves and raise it when there is activity. Others record the main stream continuously at one rate and a lighter sub stream at another. These save space without losing key moments, but they depend on motion detection working well. Test with a real walk-through. If the quiet rate is too low, a quick action may be missed.",
      ],
    },
    {
      id: "lunacam",
      h: "Frame rate and LunaCam",
      p: [
        "LunaCam shows the frame rate the camera or recorder produces. For a slow home connection, a lower frame rate on the sub stream makes grid view smoother and lighter. Low-bandwidth mode uses the camera’s sub stream.",
      ],
    },
  ],
  faq: [
    { q: "What does fps mean in a camera?", a: "Frames per second, the number of pictures recorded each second." },
    { q: "Is 15 fps enough for CCTV?", a: "For most indoor and quiet areas, yes. Use 25 fps for entrances, counters and where fast actions matter." },
    { q: "What fps is real-time video?", a: "About 25 fps in PAL regions like Nepal, or 30 fps in NTSC, looks like smooth real-time motion." },
    { q: "Does a lower frame rate save storage?", a: "Yes, it lowers bitrate and so disk use, though not in direct proportion." },
    { q: "Why is my night video blurry at 25 fps?", a: "At night the shutter slows to gather light, which blurs motion. Add light rather than raising fps." },
  ],
  related: ["bitrate", "h264", "camera-resolution", "substream"],
  product: "camera-app",
};

export default term;
