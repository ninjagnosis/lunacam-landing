import type { Term } from "../types";

const term: Term = {
  slug: "surveillance-hard-drive",
  term: "Surveillance hard drive",
  aka: ["CCTV hard disk", "Surveillance HDD", "DVR hard disk", "Video hard drive", "SkyHawk", "Purple drive"],
  updated: "2026-10-19",
  published: "2026-10-26",
  title: "Surveillance hard drive for CCTV: what it is and how to size it",
  description: "A surveillance hard drive is built for continuous recording from many cameras. How it differs from a desktop drive, how to size it and what to check.",
  short: "A surveillance hard drive is a disk built for recording video around the clock. It handles constant writing from many camera streams better than an ordinary desktop drive.",
  body: [
    "A DVR or NVR writes to its disk every second of every day. Desktop drives are designed for short bursts of work with idle time between. Surveillance drives are designed for continuous write load, with firmware tuned for video and lower error recovery delays.",
    "Seagate sells them as SkyHawk and Western Digital as Purple. Toshiba has an S300 line. Other makers have equivalents. They are ordinary 3.5 inch drives, so they fit any recorder with SATA bays.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Surveillance drive vs normal hard disk",
      p: [
        "The differences are mostly in firmware and tuning: support for many simultaneous streams, behaviour that prefers writing video without long pauses, and higher rated workloads. Desktop drives can work, but they tend to fail earlier under 24 hour use and may drop frames when the system is busy.",
        "Desktop drives may use shingled recording (SMR), which is slower at sustained writing and can cause gaps in a recorder. Check the exact model before you buy.",
      ],
    },
    {
      id: "size",
      h: "How to calculate storage size",
      p: [
        "Storage needed = bitrate x seconds recorded x cameras. The bitrate depends on resolution, [frame rate](/glossary/frame-rate), [codec](/glossary/h265) and how busy the scene is. See [bitrate](/glossary/bitrate).",
      ],
      list: [
        "Take each camera's bitrate in megabits per second, for example 4 Mbps.",
        "Multiply by 86,400 seconds per day, then divide by 8 to get megabytes per day, and by 1,000 for gigabytes.",
        "4 Mbps is about 43 gigabytes per day for one camera.",
        "Multiply by the number of cameras and by the days you want to keep.",
        "Add margin. Motion-only recording uses less, and constant recording of busy scenes uses more.",
      ],
    },
    {
      id: "retention",
      h: "Match size to retention",
      p: [
        "Decide how many days you must keep footage first, then buy the disk. See [how long to keep CCTV footage](/blog/how-long-to-keep-cctv-footage) and [retention](/glossary/retention). Using [H.265](/glossary/h265) instead of [H.264](/glossary/h264) can cut storage use, if both camera and recorder support it.",
      ],
    },
    {
      id: "health",
      h: "Health, failure and RAID",
      p: [
        "Drives fail without notice, and a recorder with a dead disk may show a live picture while recording nothing. Watch for HDD error alerts, check the recording timeline each month and replace drives on a schedule. Heat shortens life, so keep the recorder ventilated. A recorder with several bays can use [RAID](/glossary/raid) so one drive can fail without losing footage.",
        "Remote health checks that report disk status help catch silent failures before an incident.",
      ],
    },
    {
      id: "buy",
      h: "What to check when buying",
      p: [
        "Match capacity to the recorder's maximum per disk, which is listed in its manual. Buy from a trusted seller, because fake and refurbished drives are sold as new. Check the model number and warranty on the maker's site.",
      ],
    },
    {
      id: "lines",
      h: "Product lines and workload ratings",
      p: [
        "Each of the three major makers has a mainstream line and a higher-endurance line: WD Purple and Purple Pro, Seagate SkyHawk and SkyHawk AI, Toshiba S300 and S300 Pro. Retail comparisons list workload ratings of about 180 TB a year for mainstream WD and Seagate drives and 300 to 550 TB a year for the Pro and AI lines, with Toshiba's S300 lower at some sizes. These are figures from sellers and vendors, so confirm them on the maker's data sheet.",
        "The higher lines are meant for recorders that run analytics on many streams, or for many bays. A four-camera home does not need them.",
      ],
    },
    {
      id: "cmr",
      h: "CMR, SMR and checking the exact model",
      p: [
        "Drives use either conventional recording (CMR) or shingled recording (SMR). SMR is slower at sustained writing and is a concern in recorders. Sources are not consistent about which models use which, and the same product name can change recording type between sizes or years. Read the data sheet for the exact model number, and ask the maker if it does not say. A model you cannot verify is a model to avoid for a recorder.",
      ],
    },
    {
      id: "lunacam",
      h: "Disk health and LunaCam",
      p: [
        "LunaCam reads recording health and device health, and reports bandwidth and storage use per camera, so an owner can see that a disk has stopped recording before the footage is needed. A retention compliance report shows whether the days kept match the days required. See [retention](/glossary/retention).",
      ],
    },
  ],
  faq: [
    { q: "Can I use a normal hard disk in a DVR?", a: "It often works at first, but desktop drives are not built for 24 hour writing and tend to fail earlier. Use a surveillance model." },
    { q: "How long does a CCTV hard disk last?", a: "There is no fixed figure. Many last several years, but heat, power problems and workload matter. Plan to check and replace on a schedule." },
    { q: "How many days of footage does 1TB hold?", a: "It depends on bitrate. One camera at 4 Mbps uses about 43 GB a day, so 1 TB holds roughly 23 days for one camera, less with more cameras." },
    { q: "What is the difference between SkyHawk and Purple?", a: "They are the surveillance drive lines from Seagate and Western Digital. Both are designed for continuous recording." },
    { q: "Do I need RAID in a DVR?", a: "Not for a small system. It helps where losing footage is costly and the recorder has several bays." },
    { q: "What size hard drive do I need for 8 cameras?", a: "Work it out from bitrate and days. Eight cameras at 4 Mbps for 15 days is about 8 x 43.2 GB x 15, or roughly 5.2 TB, before margin." },
    { q: "Can I mix different disks in one recorder?", a: "Usually yes, but similar models are safer. In RAID, mismatched disks limit the array to the smallest." },
  ],
  related: ["raid", "retention", "bitrate", "h265", "dvr"],
  product: "lunacam-box",
};

export default term;
