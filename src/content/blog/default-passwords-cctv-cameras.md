---
title: "Default passwords on CCTV cameras: the quiet risk in most Nepali setups"
description: "Cameras and DVRs ship with well-known default passwords, and many never change. Why it matters, how to check, and how to fix it without visiting every camera."
date: 2026-10-06
tags: [setup, camera-app]
updated: 2026-10-19
cover: ../../assets/blog/default-passwords-cctv-cameras/cctv-cameras-mumbai-street.jpg
coverAlt: Four CCTV cameras mounted on a roadside pole at night in Mumbai
takeaways:
  - "Many cameras and recorders ship with the same login on every unit, printed in the manual."
  - "A camera with a weak password looks identical to one with a strong password, so nobody notices."
  - "Give every camera and recorder its own password, then update the recorder so it still connects."
  - "Turn off remote access you did not set up and check again after each firmware update."
credits:
  - file: cctv-cameras-mumbai-street.jpg
    title: "CCTV cameras in Mumbai"
    author: "Punit Rajpal"
    source: "https://commons.wikimedia.org/wiki/File:CCTV_cameras_in_Mumbai.jpg"
    licence: CC0 1.0
    changes: "Resized and cropped"
  - file: ip-camera-wall-mount-network.jpg
    title: "Lorex easy connect ip camera"
    author: "Kingrattus at English Wikipedia"
    authorUrl: "https://en.wikipedia.org/wiki/User:Kingrattus"
    source: "https://commons.wikimedia.org/wiki/File:Lorex_easy_connect_ip_camera.jpg"
    licence: Public domain
    changes: "Resized"
  - file: network-switch-ports-cables.jpg
    title: "Network switches"
    author: "ShakataGaNai"
    authorUrl: "https://commons.wikimedia.org/wiki/User:ShakataGaNai"
    source: "https://commons.wikimedia.org/wiki/File:Network_switches.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
faq:
  - q: "Why are default passwords a problem?"
    a: "They are published in manuals and lists. Anyone who can reach the device can try them."
  - q: "Will changing the password break my DVR connection?"
    a: "The DVR needs the new camera password. Change it in the recorder as well, or let the box update it for you."
  - q: "Where does LunaCam keep camera passwords?"
    a: "On the LunaCam Box, not in the cloud in plain form."
---

A camera is a small computer with a network port. Like any computer on a network, its password protects what it sees.

![White network camera with infrared lights mounted on a wall bracket with its power cable and Wi-Fi antenna](../../assets/blog/default-passwords-cctv-cameras/ip-camera-wall-mount-network.jpg "Even a small wall camera is a network device with a login of its own. Photo: Kingrattus at English Wikipedia, Public domain")

Many cameras and DVRs leave the factory with a default login that is the same on every unit, and printed in the manual. In many installations the password never changes after the installer leaves.

## Why it matters

- Anyone who can reach the device can try the default.
- A camera you did not secure can be watched by strangers, or used to attack other devices on your network.
- You will not notice. A camera with a weak password looks exactly the same as one with a strong one.

## How to check

Log in to each camera and recorder with the default for its brand. If it lets you in, it is still weak. Doing this for twenty cameras is slow, which is why it does not get done.

## How to fix it

1. List every device: recorders, IP cameras, and any NVR.
2. Set a unique password on each. A password manager or a shared note kept offline is better than reusing one.
3. Update the recorder so it uses the new camera passwords.
4. Turn off services you do not use, such as remote access you did not set up.
5. Check again after a firmware update.

![Network switches with blue and grey Ethernet cables plugged into numbered ports](../../assets/blog/default-passwords-cctv-cameras/network-switch-ports-cables.jpg "Every cable in a rack like this ends at a camera or recorder that needs its own password. Photo: ShakataGaNai, CC BY-SA 3.0")

## What the LunaCam Box does

The [LunaCam Box](/products/lunacam-box) lists cameras still on the default password and helps you change them. It keeps the credentials on the box and never stores them in the cloud in plain form. If you manage sites for customers, see [handing over a site cleanly](/blog/installer-site-handover-guide).
