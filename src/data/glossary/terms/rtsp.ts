import type { Term } from "../types";

const term: Term = {
  slug: "rtsp",
  term: "RTSP",
  full: "Real Time Streaming Protocol",
  aka: ["RTSP URL", "RTSP stream", "RTSP link"],
  updated: "2026-10-19",
  title: "What is RTSP? RTSP URL, port and how to use it with CCTV",
  description: "RTSP pulls a live video stream from a camera or recorder using a web-style address. What RTSP means, URL examples, port 554 and how to test a stream.",
  short: "RTSP is a protocol for pulling a live video stream from a camera or recorder using a web-style address. Almost every IP camera and DVR offers it.",
  body: [
    "An RTSP address looks like a web address that begins with rtsp://. Give it to a video player or software with the right username and password and it fetches the live picture from the camera.",
    "Most cameras offer two streams: a main stream in full quality and a sub stream in lower quality. Software picks the sub stream for small tiles and the main stream for full screen, which saves a great deal of data. LunaCam uses RTSP to reach any camera or recorder that has no special adapter.",
  ],
  sections: [
    {
      id: "meaning",
      h: "RTSP meaning",
      p: [
        "RTSP stands for Real Time Streaming Protocol. It is a standard way for a program to say “send me the live video from that camera”. It works much like a remote control for a stream: describe, play, pause and stop.",
        "RTSP itself carries the commands. The video travels alongside it, normally over a separate channel using the RTP protocol. For CCTV you can treat all of this as one thing: an address you give to a player.",
      ],
    },
    {
      id: "url",
      h: "RTSP URL format and examples",
      p: [
        "An RTSP URL has a fixed shape: rtsp://username:password@address:port/path. The address is the camera or recorder on your network, the port is normally 554, and the path depends on the brand and model.",
        "Common patterns, which vary by model and firmware, so confirm against the manual:",
      ],
      list: [
        "Hikvision: rtsp://user:pass@192.168.1.64:554/Streaming/Channels/101 (101 is channel 1 main stream, 102 is its sub stream).",
        "Dahua: rtsp://user:pass@192.168.1.108:554/cam/realmonitor?channel=1&subtype=0 (subtype 1 is the sub stream).",
        "Many other cameras: a path such as /stream1 or /live. Check the manual or the ONVIF stream list.",
      ],
    },
    {
      id: "port",
      h: "RTSP port 554",
      p: [
        "Port 554 is the standard RTSP port, and most devices use it by default. Some recorders let you change it. On a local network nothing needs to be set up. Opening port 554 to the internet is a poor idea, because it exposes the camera directly to scans and password guessing. See [port forwarding](/glossary/port-forwarding) for why.",
      ],
    },
    {
      id: "test",
      h: "How to test an RTSP stream",
      p: [
        "A free player is enough. In VLC choose Open Network Stream, paste the URL and press play. If a picture appears, the URL, password and network are correct.",
      ],
      list: [
        "No picture and a login error: wrong username, password or user rights. Some recorders need a separate user for streaming.",
        "Connection timeout: wrong address or port, or a firewall between you and the device.",
        "Black picture or wrong channel: a wrong path or channel number.",
        "Choppy picture: the stream bitrate is too high for the network. Try the sub stream.",
      ],
    },
    {
      id: "main-sub",
      h: "Main stream and sub stream",
      p: [
        "A camera usually makes two streams at once. The main stream is full resolution and high [bitrate](/glossary/bitrate) for recording and full-screen viewing. The sub stream is small and light for grids of thumbnails and weak connections. Picking the right one is the biggest fix for slow remote viewing. The numbers are worked through in [CCTV internet bandwidth and upload speed in Nepal](/blog/cctv-internet-bandwidth-upload-nepal). Also see [substream](/glossary/substream).",
      ],
    },
    {
      id: "vs-onvif",
      h: "RTSP vs ONVIF",
      p: [
        "RTSP is the stream. [ONVIF](/glossary/onvif) is the conversation that finds the camera, lists its streams, moves it and reports events. ONVIF usually tells software which RTSP address to use. A device with RTSP alone can still show video, but you must type the address yourself.",
      ],
    },
    {
      id: "transport",
      h: "UDP, TCP and why a stream may break up",
      p: [
        "RTSP sends the commands on one connection and the video on another. The video can travel over UDP, which is fast but loses packets, or over TCP, which is slower to start but reliable. On a busy or weak Wi-Fi link UDP streams show grey blocks and smearing. Switching the player or software to TCP often fixes that.",
        "Over the internet TCP is nearly always the right choice. Many players call this “RTSP over TCP” or “interleaved”. If a stream plays on the same network but breaks up remotely, transport is the first thing to check.",
      ],
    },
    {
      id: "limits",
      h: "Limits of RTSP",
      p: [
        "RTSP is a delivery method, not a full camera protocol. It carries video and often audio, but it does not describe the camera’s features, it has no standard for events such as motion, and it does not tell you what is on a recorder’s disk. That is why people pair it with [ONVIF](/glossary/onvif) or a brand’s own interface.",
        "Many cameras also limit how many RTSP sessions they accept at once, often only a few. If several apps pull the same camera, later ones may fail. A pooling layer that opens one connection and shares it among viewers avoids that problem.",
      ],
    },
    {
      id: "security",
      h: "RTSP and passwords",
      p: [
        "An RTSP address with a password embedded in it can end up in logs, screenshots and chat messages. Treat the full address as a secret. Give streaming its own user with view-only rights where the device allows it, and never open port 554 to the internet. See [port forwarding](/glossary/port-forwarding).",
      ],
    },
    {
      id: "lunacam",
      h: "RTSP and LunaCam",
      p: [
        "For devices without a brand adapter, LunaCam reads the camera’s RTSP streams. The LunaCam Box opens one connection to each camera and shares it among viewers, so the camera is not overloaded. In low-bandwidth mode it uses the camera’s sub stream. Everything leaves your network through an outbound-only connection, so port 554 stays closed.",
      ],
    },
  ],
  faq: [
    { q: "What is RTSP in CCTV?", a: "RTSP is the protocol most IP cameras and recorders use to hand out a live video stream to players and software, using an address that starts with rtsp://." },
    { q: "What is the default RTSP port?", a: "Port 554. Some devices let you change it." },
    { q: "How do I find my camera’s RTSP URL?", a: "Check the manual or the brand’s URL pattern, or read it from the camera’s ONVIF stream list. Test it in VLC." },
    { q: "Does RTSP work over the internet?", a: "It can, but exposing it by port forwarding is risky and fails behind CGNAT. A connection that starts from inside your network is safer." },
    { q: "Is RTSP encrypted?", a: "Plain RTSP is not. Some devices support RTSP over TLS or secure tunnels. Keep RTSP on the local network and tunnel it for remote use." },
    { q: "What is RTSP over TCP?", a: "A way to carry the video part of an RTSP stream over TCP so no packets are lost. It starts a little slower but avoids broken pictures on weak links." },
    { q: "Why does my RTSP stream work in VLC but not in my software?", a: "Check the stream path, the port, the username and password, and whether the device allows more than a few sessions at once. Software may also expect TCP while VLC defaulted to UDP, or the reverse." },
  ],
  related: ["onvif", "dvr", "nvr", "substream", "bitrate"],
  product: "camera-app",
};

export default term;
