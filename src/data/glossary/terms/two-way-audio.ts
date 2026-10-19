import type { Term } from "../types";

const term: Term = {
  slug: "two-way-audio",
  term: "Two-way audio",
  aka: ["Two way talk", "Push to talk", "Intercom function", "Talkback", "Duplex audio"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "Two-way audio on CCTV cameras: meaning, types and requirements",
  description: "Two-way audio lets you hear and speak through a camera from your phone. Half vs full duplex, hardware needed, echo and legal points on sound.",
  short: "Two-way audio lets you listen through a camera's microphone and speak through its speaker from an app. It works like an intercom between you and the camera.",
  body: [
    "The camera captures sound and sends it with the video. When you hold the talk button in the app, your voice travels back to the camera and plays from its speaker. It is used to greet a visitor at a gate or warn someone off a property.",
    "Not every camera has it. The camera needs a microphone and a speaker, or an audio input and output for connecting them, plus software support in the recorder and app.",
  ],
  sections: [
    {
      id: "meaning",
      h: "What is two-way audio?",
      p: [
        "It is audio in both directions. One-way audio only listens. Two-way audio also talks. Some brands call it talk-back, intercom or push to talk.",
      ],
    },
    {
      id: "duplex",
      h: "Half duplex vs full duplex",
      p: [
        "The difference is how the two directions share the link:",
      ],
      list: [
        "Half duplex: one side at a time, like a walkie-talkie. You press and hold to speak. It is simpler and avoids echo.",
        "Full duplex: both sides at once, like a phone call. It needs echo cancellation, otherwise the camera's speaker feeds back into its microphone.",
      ],
    },
    {
      id: "needs",
      h: "What you need",
      p: [
        "A camera with built-in microphone and speaker, or audio in and out ports with an external speaker. A recorder that passes audio through, for a camera connected to a [DVR](/glossary/dvr) or [NVR](/glossary/nvr). An app that supports talking, which depends on the brand. Check that the audio codec is supported by your viewer, because G.711 is common while some others are not. Cameras added through [ONVIF](/glossary/onvif) may expose audio output as a separate profile, and not every app uses it.",
      ],
    },
    {
      id: "problems",
      h: "Common problems",
      p: [
        "Echo and feedback when the speaker is too close to the microphone. Delay of one or two seconds over a slow link, which makes conversation awkward. No sound because the audio is switched off in the main stream settings. Cheap speakers that clip or sound muffled outdoors. Wind noise. Check the audio setting on the camera and on the recorder channel, as they are separate.",
      ],
    },
    {
      id: "law",
      h: "Legal and privacy points",
      p: [
        "Recording sound can be treated differently from recording pictures, and capturing conversations is more sensitive. Think about where the microphone points and whether staff, customers or neighbours can be heard. Put up signs and, if unsure, ask for legal advice. See [Privacy Act 2075 and CCTV in Nepal](/blog/privacy-act-2075-cctv-nepal) for the wider picture. Many installers turn microphones off by default.",
      ],
    },
    {
      id: "uses",
      h: "What people use it for",
      p: [
        "A shop owner talks to a delivery person at a back door without walking there. A homeowner asks a visitor at the gate to wait. A bank can use a speaker at a night ATM to speak to someone loitering. A warehouse supervisor warns a person who has entered a closed area. In all of these, speech works as a deterrent. It also carries a risk: speaking to a person tells them they are watched, and a wrong word to the wrong person can escalate a situation, so decide who is allowed to use it.",
      ],
    },
    {
      id: "setup",
      h: "Setup checklist",
      p: [
        "Check that the camera has a speaker and microphone. Enable audio on the stream. Choose the audio codec (G.711 is common). Set the speaker volume, then test outdoors, not in the office. Check that the recorder channel passes the audio. Give the talk permission only to people who need it. Test the delay on mobile data as well as on Wi-Fi.",
      ],
    },
    {
      id: "lunacam",
      h: "Two-way audio and LunaCam",
      p: [
        "LunaCam includes push-to-talk in live view, controlled by a separate talk permission, so owners can limit who may speak through a camera. See [camera app](/products/camera-app).",
      ],
    },
    {
      id: "limits",
      h: "Limits to plan for",
      p: [
        "A camera speaker is small and is meant for short phrases. In a noisy market street or beside a generator, a visitor may not hear it at all. Place the camera where the person will stand, not where the lens is happiest, and test with someone at the real spot. Cameras also differ on who hears the audio: some play your voice only on the camera, while others stream the microphone to every viewer, so confirm who can listen before you point a microphone at a counter or an office.",
        "Installers often leave audio switched off on recorder channels to avoid complaints, then forget that the feature exists. Add it to the handover record, with the permission list, so the owner knows what the camera can do. See [installer site handover guide](/blog/installer-site-handover-guide).",
      ],
    },
  ],
  faq: [
    { q: "What is two-way audio on a security camera?", a: "It lets you listen through the camera and speak through its speaker using an app." },
    { q: "Do all CCTV cameras have two-way audio?", a: "No. The camera needs a microphone and speaker or audio ports, and the recorder and app must support it." },
    { q: "Why do I hear echo when I talk?", a: "The speaker sound is entering the microphone. Use half duplex push to talk, lower the volume or move the speaker away." },
    { q: "Does two-way audio work through a DVR?", a: "Only if the DVR supports audio pass-through for that channel. Check the specification." },
    { q: "Is it legal to record audio on CCTV?", a: "Rules differ from video and depend on place and purpose. Check the law and use signs. Turn the microphone off if you do not need it." },
    { q: "Can I record the sound as well?", a: "Many cameras can record audio with the video. Check the law and put up signs before enabling it." },
    { q: "Why is my voice delayed?", a: "Mobile networks and relays add delay. Half duplex push to talk copes better than open conversation." },
  ],
  related: ["ip-camera", "dvr", "nvr", "onvif", "alarm-input-output"],
  product: "camera-app",
};

export default term;
