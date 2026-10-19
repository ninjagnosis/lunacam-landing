import type { Term } from "../types";

const term: Term = {
  slug: "analog-hd-camera",
  term: "Analogue HD camera",
  full: "High-definition analogue camera",
  aka: ["HD-TVI", "AHD", "HD-CVI", "TVI camera", "CVI camera", "HD analog camera"],
  updated: "2026-10-19",
  published: "2026-10-19",
  title: "Analogue HD cameras: AHD, HD-TVI and HD-CVI explained",
  description: "Analogue HD cameras send HD video over coaxial cable. What AHD, HD-TVI and HD-CVI mean, how they differ from IP cameras and when to keep or replace them.",
  short: "An analogue HD camera sends high-definition video over ordinary coaxial cable to a DVR. The main formats are AHD, HD-TVI and HD-CVI.",
  body: [
    "Old analogue CCTV gave a soft, low-resolution picture. Analogue HD formats keep the coaxial cable but carry a much sharper signal, so a shop can upgrade cameras without re-cabling the building.",
    "The formats are not interchangeable by name alone. AHD, HD-TVI and HD-CVI each need a recorder that supports them. Most current DVRs accept several at once, often called a multi-format or hybrid input.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What analogue HD means",
      p: [
        "Analogue HD is still an analogue signal. The picture travels as a varying electrical signal on coaxial cable, and the [DVR](/glossary/dvr) turns it into digital video. What changed is the signal format, which now fits 720p, 1080p and higher into the same cable that carried standard definition.",
        "Marketing names include “HD analog”, “HD over coax” and the specific format names below.",
      ],
    },
    {
      id: "formats",
      h: "AHD vs HD-TVI vs HD-CVI",
      p: [
        "Three competing formats came from different makers. Pictures from the three look very close at the same resolution, and the differences are mostly about compatibility.",
      ],
      list: [
        "AHD (Analog High Definition): promoted by several Korean and Chinese makers, widely supported.",
        "HD-TVI (High Definition Transport Video Interface): developed by Techpoint, used by Hikvision, among others.",
        "HD-CVI (High Definition Composite Video Interface): developed by Dahua.",
        "Match the camera format to the recorder. A TVI-only DVR will not show a CVI-only camera, but multi-format recorders solve this.",
      ],
    },
    {
      id: "vs-ip",
      h: "Analogue HD vs IP camera",
      p: [
        "An [IP camera](/glossary/ip-camera) digitises the picture inside the camera and works on a network cable, usually with [PoE](/glossary/poe). Analogue HD digitises at the recorder and uses coaxial.",
      ],
      list: [
        "Resolution: analogue HD is commonly 2 to 8 megapixel in current kit, IP goes further and has more choice.",
        "Cable: analogue HD reuses existing coax. IP needs network cable unless you use a converter.",
        "Cost: analogue HD cameras and DVRs are cheaper.",
        "Features: IP cameras have more built-in smart functions and open standards like [ONVIF](/glossary/onvif).",
      ],
    },
    {
      id: "range",
      h: "Cable length and quality",
      p: [
        "Analogue HD can run several hundred metres on good coaxial cable, which is further than the 100 metres of Ethernet. The real distance depends on the format, resolution and the cable. Thin or cheap cable, bad crimps and damp connectors cut the picture quality long before the limit.",
        "In Nepal, rain and dust get into outdoor BNC joints. Seal them, use proper connectors and keep joints off the ground.",
      ],
    },
    {
      id: "upgrade",
      h: "Keep it, upgrade it or replace it",
      p: [
        "If the cable is sound and the recorder takes HD analogue, swapping cameras is a cheap upgrade. If you want higher resolution, more features or cameras in new places, move to IP. You do not have to do it at once: a hybrid recorder accepts both. Weigh the options in [choosing CCTV cameras in Nepal](/blog/choosing-cctv-cameras-nepal).",
      ],
    },
    {
      id: "compare",
      h: "Resolution and format limits",
      p: [
        "Early analogue HD formats stopped at 720p and 1080p. Current HD-TVI and HD-CVI cameras go to 4 MP, 5 MP and 8 MP (4K), and maker datasheets show many recorders accepting them. AHD at higher resolutions is less consistent across makers, so check the exact model against the exact recorder.",
        "Frame rate also varies: some formats carry 1080p at 25 or 30 fps, and some higher resolutions drop to a lower frame rate on coax. Read the recorder’s table of resolution and frame rate by format before buying cameras.",
      ],
    },
    {
      id: "cable",
      h: "Cable, joints and power",
      p: [
        "Makers quote about 300 to 500 metres for 720p or 1080p over good coaxial cable, and Hikvision has claimed more for some HD-TVI modes. Treat those as best case. In practice the picture softens with distance, and higher resolutions go less far. Use solid copper RG59 or RG6 cable with good BNC connectors, and avoid joining cable with tape or twisted wire.",
        "Power is separate in most analogue systems: 12 V DC, either from an adaptor at each camera or a central supply with a power cable alongside the coax. A single central supply on a UPS keeps all cameras running through short power cuts. Check the voltage at the camera, because long thin power cable drops it, and IR cameras fail first when it is low.",
      ],
    },
    {
      id: "upgrade",
      h: "Step by step upgrade",
      p: [
        "You can upgrade without a full rip-out. Replace the recorder with a multi-format or hybrid unit, keep the cable, and change cameras one at a time to HD. Later add [IP cameras](/glossary/ip-camera) in new places. A hybrid recorder shows both in the same screen. See [hybrid DVR](/glossary/hybrid-dvr).",
      ],
    },
    {
      id: "lunacam",
      h: "Analogue HD and LunaCam",
      p: [
        "LunaCam does not connect to analogue cameras directly. It reads video from the DVR that records them, through a vendor adapter, [ONVIF](/glossary/onvif) or [RTSP](/glossary/rtsp), using the LunaCam Box. Your analogue HD cameras then appear in the app beside any IP camera. The box connects outward only, so no port forwarding is needed.",
      ],
    },
  ],
  faq: [
    { q: "What is the difference between AHD, TVI and CVI?", a: "They are three HD-over-coax formats from different makers. Picture quality is similar. The key point is that the camera and recorder must support the same format." },
    { q: "Is analogue HD the same as IP?", a: "No. Analogue HD sends an analogue signal over coax to a DVR. IP sends digital video over network cable." },
    { q: "Can I connect an AHD camera to a TVI DVR?", a: "Only if the DVR supports AHD. Many recorders are multi-format and accept all three." },
    { q: "How far can analogue HD run on coax?", a: "Often several hundred metres on good cable, but it depends on the format, resolution and cable quality." },
    { q: "Can I watch analogue HD cameras on my phone?", a: "Yes, through the DVR that records them, using the maker’s app or a platform that reads from the DVR." },
    { q: "Is analogue HD being phased out?", a: "Many installers now prefer IP for new sites, but analogue HD is still sold and supported, and suits sites with good coax already in place." },
  ],
  related: ["dvr", "hybrid-dvr", "ip-camera", "camera-resolution"],
  product: "camera-app",
};

export default term;
