import type { Term } from "../types";

const term: Term = {
  slug: "bitrate",
  term: "Bitrate",
  aka: ["Video bitrate", "Data rate", "Mbps", "CBR", "VBR"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "Camera bitrate: what it means, CBR vs VBR and typical values",
  description: "Bitrate is how much data a camera sends each second. What bitrate means for CCTV, CBR vs VBR, typical Mbps values and how it sets storage and upload needs.",
  short: "Bitrate is the amount of video data a camera produces each second, measured in kilobits or megabits per second. It decides how much disk a recording uses and how much upload a remote view needs.",
  body: [
    "Every camera stream has a bitrate. A higher one keeps more detail but uses more disk and more network. A lower one saves both but can make the picture blocky, especially when things move.",
    "Bitrate depends on the [resolution](/glossary/camera-resolution), [frame rate](/glossary/frame-rate) and codec ([H.264](/glossary/h264) or [H.265](/glossary/h265)), plus how busy the scene is.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Bitrate meaning",
      p: [
        "Bitrate is data per second. 4 Mbps means four million bits each second. Note the small b: bits, not bytes. One byte is eight bits, so 4 Mbps is about 0.5 megabytes per second.",
        "Internet plans are also quoted in bits per second, so camera bitrate and your connection speed can be compared directly.",
      ],
    },
    {
      id: "cbr-vbr",
      h: "CBR vs VBR",
      p: [
        "Cameras let you choose how the bitrate behaves.",
      ],
      list: [
        "CBR, constant bitrate: the camera aims at the same rate all the time. Storage and bandwidth are predictable. Busy scenes may look worse because the rate is capped.",
        "VBR, variable bitrate: the rate follows the scene. Quiet scenes use less, busy ones use more up to a maximum. Saves disk, but upload can spike.",
        "For remote viewing over a weak uplink CBR is easier to plan. For storage, VBR with a sensible maximum is more efficient.",
      ],
    },
    {
      id: "typical",
      h: "Typical bitrates",
      p: [
        "These ranges are rough and vary by camera, codec and scene. Test your own.",
      ],
      list: [
        "2 MP (1080p), H.264: about 2 to 4 Mbps main stream. Sources vary.",
        "4 MP, H.264: about 3 to 8 Mbps, depending on scene and frame rate.",
        "8 MP (4K), H.264: about 8 to 16 Mbps; around 16 at 30 fps.",
        "With H.265 the same pictures often need much less, around half.",
        "Sub stream: usually 0.25 to 1 Mbps.",
      ],
    },
    {
      id: "storage",
      h: "Bitrate and storage",
      p: [
        "A quick estimate: bitrate in Mbps times 0.45 gives gigabytes per hour for one camera. 4 Mbps is roughly 1.8 GB per hour, or about 43 GB per day of continuous recording. Multiply by the number of cameras and the days you want to keep. See [retention](/glossary/retention) and [how long to keep CCTV footage](/blog/how-long-to-keep-cctv-footage).",
      ],
    },
    {
      id: "upload",
      h: "Bitrate and upload speed",
      p: [
        "To watch from outside, the camera’s stream, or its sub stream, travels from your site through your upload connection. Home plans in Nepal often have far lower upload than download, so the sum of streams being viewed must fit within upload. Using the sub stream for grids is the usual fix. The working is in [CCTV internet bandwidth and upload speed in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
      ],
    },
    {
      id: "upload-sum",
      h: "A worked upload example",
      p: [
        "Say a shop has four cameras. Each sub stream runs at 0.5 Mbps, and each main stream at 4 Mbps. Watching all four as a grid on the sub streams needs about 2 Mbps of upload. Opening one camera full screen on its main stream adds 4 Mbps, so the total is around 5.5 Mbps. A home fibre plan with 5 Mbps of real upload will struggle. Test the real speed at the site, not the speed on the plan. See the method in [CCTV internet bandwidth and upload speed in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
        "Add margin: another family member uploading photos or a video call on the same line will eat into it. Plan to use no more than about two thirds of the measured upload for cameras.",
      ],
    },
    {
      id: "tuning",
      h: "How to lower bitrate without ruining the picture",
      p: [
        "Change one setting at a time and look at a moving scene, not a still one.",
      ],
      list: [
        "Switch to H.265 if every device supports it. Often the biggest saving.",
        "Lower the frame rate on quiet cameras to 12 or 15 fps.",
        "Use VBR with a sensible maximum on cameras that watch a mostly still scene.",
        "Reduce the resolution on cameras that watch a small, close area. A 2 MP camera at a counter may be enough.",
        "Reduce noise: light the area and avoid high gain. Noise is expensive to encode.",
        "Turn off the camera’s timestamp and logo overlays if you are cropping, since they do not cost much, but lots of text on screen with moving background can.",
      ],
    },
    {
      id: "symptoms",
      h: "Signs that a bitrate is too low",
      p: [
        "A bitrate that is too low shows as blocks in moving areas, a smeared face when someone walks by, and a picture that looks sharp when still and falls apart on movement. Night scenes suffer first because noise uses up the bit budget. If you cannot read a face or number plate in motion, raise the bitrate on that camera before you raise the resolution.",
      ],
    },
    {
      id: "lunacam",
      h: "Bitrate and LunaCam",
      p: [
        "LunaCam’s low-bandwidth mode uses the camera’s sub stream, so grid views stay light. The platform also has a bandwidth and storage usage report. Lowering the sub stream bitrate on the camera is still the simplest help for a weak uplink. See [substream](/glossary/substream).",
      ],
    },
  ],
  faq: [
    { q: "What is bitrate in a CCTV camera?", a: "The amount of video data the camera produces per second, in kbps or Mbps. It sets storage use and network load." },
    { q: "What bitrate should I use for a 2 MP camera?", a: "Around 2 to 4 Mbps in H.264 for the main stream is common. Lower it if upload or disk is tight, and check the picture." },
    { q: "Is higher bitrate always better?", a: "Only up to a point. Beyond what the scene needs, extra bitrate wastes disk and bandwidth without visible gain." },
    { q: "What is the difference between Mbps and MBps?", a: "Mbps is megabits per second. MBps is megabytes per second, eight times larger. Camera and internet speeds use bits." },
    { q: "Does lower bitrate affect night video?", a: "Yes. Night scenes have more noise, which needs more bitrate to look clean. Too low a rate makes night pictures blocky." },
  ],
  related: ["h264", "h265", "frame-rate", "substream", "retention"],
  product: "camera-app",
};

export default term;
