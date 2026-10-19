---
title: "ONVIF and RTSP: why one app can watch cameras from many brands"
description: "Why a single camera app can show Hikvision, Dahua and unbranded cameras together: the standards behind it, what each covers and what still needs an adapter."
date: 2026-10-06
tags: [camera-app, developers]
updated: 2026-10-19
cover: ../../assets/blog/onvif-rtsp-one-app-many-brands/axis-ptz-ip-camera.jpg
coverAlt: White Axis PTZ network camera mounted on a ceiling with a power and standby indicator panel
takeaways:
  - "RTSP carries the video and ONVIF adds discovery, PTZ control and events, so one app can show many brands."
  - "ONVIF profile S covers live video and PTZ, profile T adds H.265 and encrypted connections, and profile G covers recordings."
  - "Brand-specific features such as some alarm inputs still need the maker's own interface."
  - "When buying, check that a camera lists ONVIF, ideally profiles S and T, and keep main and sub streams enabled."
credits:
  - file: axis-ptz-ip-camera.jpg
    title: "Axis 214 PTZ Camera"
    author: "Kkmurray"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Kkmurray"
    source: "https://commons.wikimedia.org/wiki/File:Axis_214_PTZ_Camera.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
  - file: mixed-brand-cameras-one-recorder.jpg
    title: "IPCorder NVR with cameras"
    author: "che (Please credit as \"Petr Novák, Wikipedia\" in case you use this outside Wikimedia projects.)"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Che"
    source: "https://commons.wikimedia.org/wiki/File:IPCorder_NVR_with_cameras.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
  - file: hikvision-camera-mounted-pole.jpg
    title: "Hikvision @ P+R Étoile @ Carouge (50514011831)"
    author: "Guilhem Vellut from Annecy, France"
    authorUrl: "https://www.flickr.com/people/22539273@N00"
    source: "https://commons.wikimedia.org/wiki/File:Hikvision_@_P%2BR_%C3%89toile_@_Carouge_(50514011831).jpg"
    licence: CC BY 2.0
    changes: "Resized and cropped"
  - file: tp-link-wifi-router.jpg
    title: "TP-Link AX1500 Wi-Fi 6 Router Front"
    author: "Abhi25t"
    source: "https://commons.wikimedia.org/wiki/File:TP-Link_AX1500_Wi-Fi_6_Router_Front.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
faq:
  - q: "Do all cameras support ONVIF?"
    a: "Most IP cameras sold today do. Older or very cheap models may only offer RTSP."
  - q: "If a camera supports ONVIF, do I get every feature?"
    a: "No. ONVIF covers the common ones. Brand-specific features such as some alarm inputs need that brand's own interface."
  - q: "Can a developer add a new brand?"
    a: "LunaCam has an adapter SDK planned so integrators can add brands. It is on the platform roadmap."
---

Open a good camera app and you may see a Hikvision DVR, a Dahua camera and an unlabelled one from a market stall, all in the same grid. That works because of two standards.

![Sony box camera, Vivotek PTZ camera and Axis camera connected through a PoE switch to one network recorder](../../assets/blog/onvif-rtsp-one-app-many-brands/mixed-brand-cameras-one-recorder.jpg "Sony, Vivotek and Axis cameras can record to the same recorder because they speak the same standards. Photo: Petr Novák, CC BY-SA 3.0")

## RTSP: the video

RTSP gives a camera or recorder a web-style address that returns its video. Almost every IP camera and DVR offers it. If you know the address and the login, any software can ask for the picture. See [RTSP](/glossary/rtsp).

## ONVIF: the conversation

RTSP only carries video. ONVIF adds the rest: finding cameras on the network, reading their capabilities, moving PTZ and receiving events. ONVIF is organised in profiles. S covers live video and PTZ. T adds H.265 and encrypted connections. G covers searching recordings stored on a recorder or card. See [ONVIF](/glossary/onvif).

## Where brand adapters still matter

Standards cover the common ground. Some features live in the maker's own interface: some alarm inputs, health data, playback search on older firmware. For the two brands most common in Nepal, LunaCam has direct adapters for Hikvision and Dahua, so those go beyond what ONVIF alone exposes.

![White Hikvision camera with a green status light hanging from a ceiling rail](../../assets/blog/onvif-rtsp-one-app-many-brands/hikvision-camera-mounted-pole.jpg "A Hikvision camera speaks ONVIF, and LunaCam also has a direct adapter for Hikvision features beyond it. Photo: Guilhem Vellut, CC BY 2.0")

## What this means when you buy

- You do not have to buy one brand everywhere.
- When you choose a camera, check that it lists ONVIF, ideally profiles S and T.
- Keep the main and sub streams enabled. Software picks the sub stream for small tiles to save data.

![Black TP-Link Wi-Fi router with four upright antennas on a tiled floor](../../assets/blog/onvif-rtsp-one-app-many-brands/tp-link-wifi-router.jpg "The sub stream keeps small tiles light on the home or shop router and mobile data. Photo: Abhi25t, CC BY-SA 4.0")

Developers can build on the same layer through the [developer platform](/products/developer-platform).
