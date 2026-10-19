---
title: "Hik-Connect alternatives in Nepal: keep CCTV footage in the country"
description: "Hik-Connect and similar apps route your video and DVR password through servers abroad. What that means, and how a Nepal-hosted app works with the same cameras."
date: 2026-10-02
tags: [camera-app, nepal]
pillar: true
updated: 2026-10-19
cover: ../../assets/blog/hik-connect-alternative-nepal/kathmandu-old-city-street.jpg
coverAlt: Busy street in old Kathmandu with shops, motorbikes, shoppers and overhead power cables
takeaways:
  - "Most vendor camera apps relay your video and recorder password through the maker's cloud, outside Nepal."
  - "For a home this is a privacy question. For a bank, school or municipality it can be a legal one."
  - "A good alternative works with the cameras you own and needs no router settings."
  - "LunaCam keeps relays and storage in Nepal and keeps camera passwords on a box you own."
credits:
  - file: kathmandu-old-city-street.jpg
    title: "Kathmandu Old City Chaos"
    author: "Francisco Anzola"
    authorUrl: "https://500px.com/franciscoanzola"
    source: "https://commons.wikimedia.org/wiki/File:Kathmandu_Old_City_Chaos_(221813587).jpeg"
    licence: CC BY 3.0
    changes: "Resized and cropped"
  - file: nvr-and-cameras-home-setup.jpg
    title: "IPCorder NVR with cameras"
    author: "che (Please credit as \"Petr Novák, Wikipedia\" in case you use this outside Wikimedia projects.)"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Che"
    source: "https://commons.wikimedia.org/wiki/File:IPCorder_NVR_with_cameras.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
  - file: network-switch-cloud-relay.jpg
    title: "Network switches"
    author: "ShakataGaNai"
    authorUrl: "https://commons.wikimedia.org/wiki/User:ShakataGaNai"
    source: "https://commons.wikimedia.org/wiki/File:Network_switches.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
faq:
  - q: "Where does Hik-Connect send your video?"
    a: "Its apps relay video through the maker's own cloud, which is hosted outside Nepal. The same applies to most vendor camera apps. The maker's terms, not Nepali rules, decide what happens to it."
  - q: "Do I have to replace my cameras to switch?"
    a: "No. LunaCam connects to Hikvision and Dahua recorders directly and to other brands over ONVIF or RTSP, so you keep the hardware you have."
  - q: "Is a Nepal-hosted app slower?"
    a: "Live video is relayed through servers in Nepal, which are usually closer than foreign ones. Where a direct path exists the app uses it."
---

Most CCTV in Nepal came with an app. You scan a code on the DVR, install the app and see your cameras from anywhere. It is convenient, and it is why almost nobody asks where the video goes.

The answer, for most vendor apps, is: through the maker's servers, outside Nepal. Your DVR connects out to that cloud. The app connects to the same cloud. The two meet there, and your video passes through on the way.

![Network video recorder with a box camera, a PTZ camera, a PoE switch and a small IP camera on a white table](../../assets/blog/hik-connect-alternative-nepal/nvr-and-cameras-home-setup.jpg "Cameras, recorder and switch sit on your own network, and the vendor app reaches them through a cloud relay. Photo: Petr Novák, CC BY-SA 3.0")

## What this means in practice

Three things are worth knowing.

- **Your video leaves the country.** Every time you open live view, the picture travels through a foreign server first.
- **Your DVR password is shared with that service.** The app has to log in to your recorder on your behalf, so some form of the credential is held by the vendor's cloud.
- **The rules are the vendor's.** Retention, access and what happens in a dispute are set by terms you accepted in a tap.

For a home this is a privacy question. For a bank, a school or a municipality it can be a legal one, which we cover in [what the Privacy Act, 2075 asks of CCTV operators](/blog/privacy-act-2075-cctv-nepal).

## What an alternative has to do

A good replacement should do five things:

1. Work with the cameras and recorders you already own, whatever the brand.
2. Need no router settings, because most homes and shops cannot forward ports. See [why remote viewing fails behind CGNAT](/blog/cctv-remote-viewing-cgnat-nepal).
3. Keep video relays and storage in Nepal.
4. Keep your camera passwords on a device you own, not in a cloud.
5. Say plainly where the data is and who can see it.

![Stacked network switches with blue and grey Ethernet cables in numbered ports](../../assets/blog/hik-connect-alternative-nepal/network-switch-cloud-relay.jpg "A connect-out box sits on this local network and calls outward, so nothing on the router needs opening. Photo: ShakataGaNai, CC BY-SA 3.0")

## How LunaCam does it

[LunaCam](/products/camera-app) runs relays and storage in Nepal. A small [LunaCam Box](/products/lunacam-box) on your network, or the same agent on a PC, connects out to LunaCam, so there is nothing to open on your router. Camera passwords stay on the box.

Live view and DVR playback are free to start. You can try it on one recorder before you decide anything.

## Before you switch

Write down what you have: the recorder brand and model, how many channels, and whether the cameras are analogue or IP. That is enough for us to tell you in one call how it will connect. [Book a walkthrough](/demo) and we will go through it with you.
