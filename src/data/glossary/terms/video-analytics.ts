import type { Term } from "../types";

const term: Term = {
  slug: "video-analytics",
  term: "Video analytics",
  aka: ["Video content analysis", "VCA", "Intelligent video analytics", "IVA", "AI video analytics", "Smart events"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "What is video analytics in CCTV? Meaning, types and examples",
  description: "Video analytics is software that studies video to find people, vehicles and events. Types, where it runs, bandwidth needs and accuracy limits.",
  short: "Video analytics is software that analyses video to find people, vehicles and events instead of leaving a person to watch every screen. It is also called video content analysis or smart events.",
  body: [
    "The software looks at each frame or a sequence of frames and produces facts: a person entered this area, a vehicle crossed this line, this plate was read. Those facts become alerts, search filters and reports.",
    "The older term is VCA, video content analysis. Newer products say AI video analytics, which usually means the detection uses a neural network rather than fixed rules on pixels.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is video analytics?",
      p: [
        "It is the step between recording and understanding. Recording stores video. Analytics tells you what is in it. A guard cannot watch sixteen cameras all day, but software can watch all of them and ask for attention only when something matches a rule.",
      ],
    },
    {
      id: "types",
      h: "Types of video analytics",
      p: [
        "Common functions, from simple to complex:",
      ],
      list: [
        "[Motion detection](/glossary/motion-detection): any change in a zone.",
        "[Line crossing](/glossary/line-crossing-detection) and [intrusion detection](/glossary/intrusion-detection): rules on lines and regions.",
        "Object classification: person, vehicle, bike, animal.",
        "[People counting](/glossary/people-counting): in, out, occupancy, queues.",
        "[ANPR](/glossary/anpr): reading number plates.",
        "[Face recognition](/glossary/face-recognition): matching faces to a list.",
        "Tamper detection: lens covered, moved or out of focus.",
        "Abandoned object, loitering and fall detection in more advanced products.",
      ],
    },
    {
      id: "where",
      h: "Where analytics runs",
      p: [
        "Three places are common, each with a different cost:",
      ],
      list: [
        "On the camera (edge): no extra hardware, works without internet, limited to what the camera supports.",
        "On the recorder: the [NVR](/glossary/nvr) analyses streams from basic cameras, within its channel limit.",
        "On a server or cloud: the most flexible, but it needs the video streamed to it, which costs bandwidth. See [CCTV internet bandwidth in Nepal](/blog/cctv-internet-bandwidth-upload-nepal).",
      ],
    },
    {
      id: "limits",
      h: "Accuracy and false alarms",
      p: [
        "Analytics is only as good as the picture. Poor night images, rain, glare and cameras mounted too high lower accuracy. Rule-based analytics gives many false alarms in busy scenes. AI-based detection reduces them but is not perfect, so tune rules and check results for a few weeks before relying on them. See [camera alerts that matter](/blog/camera-alerts-that-matter).",
      ],
    },
    {
      id: "vs",
      h: "Analytics vs VMS",
      p: [
        "Analytics produces events. A [VMS](/glossary/vms) is the software that manages cameras, recording and viewing, and it usually receives and displays those events. Some VMS products include analytics, and some accept it from the camera over [ONVIF](/glossary/onvif).",
      ],
    },
    {
      id: "edge",
      h: "Edge, recorder and server analytics compared",
      p: [
        "On-camera analytics is the simplest. It needs no server and keeps working when the internet drops, and the events travel with the stream. The limit is that every camera needs to be a model with the feature, and every brand names the event differently. Recorder analytics gives smart events from ordinary cameras, but it uses recorder capacity, and the number of channels it can analyse is often smaller than the number it can record. Server analytics is the most flexible and can combine cameras from several brands. It needs the streams to arrive, so bandwidth and server size become the cost.",
        "For a ten-camera shop, edge analytics on two or three key cameras is usually enough. For a municipal network with hundreds of cameras, server-side analytics on a subset of streams is the usual design, because analysing everything is too costly.",
      ],
    },
    {
      id: "lunacam",
      h: "Analytics events and LunaCam",
      p: [
        "LunaCam receives camera events and routes them through a rule engine with zones, confidence and area. Events appear as markers on the timeline, and heatmaps can be drawn over a snapshot. Developers can receive events through webhooks and a real-time event stream and build their own tools on top. See [alerts](/products/alerts) and [developer platform](/products/developer-platform).",
      ],
    },
    {
      id: "choose",
      h: "Choosing what to switch on",
      p: [
        "Pick one question per camera. The gate camera answers: did someone enter after hours? The till camera answers: what happened at this transaction? The entrance counts visitors. Switching on every analytic function on every camera produces a long list of events nobody reads. Start with one rule, run it for two weeks, and keep it only if the alerts are useful.",
      ],
    },
    {
      id: "nepal",
      h: "Analytics in Nepal projects",
      p: [
        "Municipal and Safe City projects in Nepal have been reported as adding AI cameras for plate reading and face matching. At that scale, a control room needs analytics to filter the flood of footage, and the main practical questions are accuracy on local conditions, where the video is processed and stored, and who may search it. For a shop or a home, a single line crossing or intrusion rule on the camera at the door does more good than a large system. See [municipal CCTV operations](/blog/municipal-cctv-operations).",
      ],
    },
  ],
  faq: [
    { q: "What is video analytics in simple words?", a: "It is software that watches video for you and reports what it finds, such as a person at a gate or a vehicle crossing a line." },
    { q: "Is video analytics the same as AI?", a: "Not always. Older analytics uses fixed rules on pixels. AI analytics uses trained models to recognise objects. Both are called video analytics." },
    { q: "Do I need a special camera for video analytics?", a: "Edge analytics needs a supporting camera. Otherwise a recorder or server can do the analysis from ordinary streams." },
    { q: "Does video analytics need internet?", a: "Not if it runs on the camera or recorder. Cloud analytics does." },
    { q: "Is video analytics accurate?", a: "It varies by scene, camera and software. Test on your own site, in daytime and at night." },
    { q: "What is the difference between video analytics and motion detection?", a: "Motion detection only senses pixel change. Video analytics classifies what moved and applies rules such as lines, regions, counts or plate reads." },
    { q: "Does video analytics use a lot of bandwidth?", a: "Not on the camera or recorder. Server or cloud analytics needs the video streamed to it." },
  ],
  related: ["motion-detection", "anpr", "face-recognition", "vms", "onvif"],
  product: "alerts",
};

export default term;
