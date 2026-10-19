---
title: "How to watch your DVR from your phone in Nepal, step by step"
description: "Three ways to see a DVR or NVR on your phone: the vendor app, port forwarding and a connect-out box. What each needs, what each risks, and which suits you."
date: 2026-10-03
tags: [camera-app, guides]
updated: 2026-10-19
cover: ../../assets/blog/watch-dvr-from-phone-nepal/old-kathmandu-street-market.jpg
coverAlt: Crowded market street in Kathmandu seen from above with shoppers, motorbikes and shop banners
takeaways:
  - "There are three common ways to watch a DVR from a phone: the vendor app, port forwarding and a box that connects out."
  - "The vendor app is easy, but video and your recorder password pass through the maker's cloud abroad."
  - "Port forwarding exposes the DVR to the internet and fails when your provider shares one address among many customers."
  - "A connect-out box works behind CGNAT and needs no router changes."
credits:
  - file: old-kathmandu-street-market.jpg
    title: "Kathmandu, Nepal (23659150241)"
    author: "Juan Antonio Segal from Madrid, Spain"
    authorUrl: "https://www.flickr.com/people/67525885@N00"
    source: "https://commons.wikimedia.org/wiki/File:Kathmandu,_Nepal_(23659150241).jpg"
    licence: CC BY 2.0
    changes: "Resized and cropped"
  - file: ip-camera-easy-connect.jpg
    title: "Lorex easy connect ip camera"
    author: "Kingrattus at English Wikipedia"
    authorUrl: "https://en.wikipedia.org/wiki/User:Kingrattus"
    source: "https://commons.wikimedia.org/wiki/File:Lorex_easy_connect_ip_camera.jpg"
    licence: Public domain
    changes: "Resized"
  - file: tp-link-wifi-router.jpg
    title: "TP-Link AX1500 Wi-Fi 6 Router Front"
    author: "Abhi25t"
    source: "https://commons.wikimedia.org/wiki/File:TP-Link_AX1500_Wi-Fi_6_Router_Front.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: dvr-nvr-cameras-switch.jpg
    title: "IPCorder NVR with cameras"
    author: "che (Please credit as \"Petr Novák, Wikipedia\" in case you use this outside Wikimedia projects.)"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Che"
    source: "https://commons.wikimedia.org/wiki/File:IPCorder_NVR_with_cameras.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
faq:
  - q: "Do I need a static IP to watch my DVR remotely?"
    a: "Not with a connect-out box or a cloud relay. A static IP and port forwarding are only needed for the direct method."
  - q: "Can I watch several shops in one app?"
    a: "Yes. Group cameras by site and open them in one grid, with a different set of cameras for each person."
  - q: "Will it use a lot of mobile data?"
    a: "Live HD does. Low-data mode sends snapshots and a low frame rate when you are not on Wi-Fi."
---

Almost every DVR sold in Nepal can be watched from a phone. The three common ways differ in effort, risk and where your video goes.

![Network recorder with box, PTZ and small IP cameras connected through a PoE switch](../../assets/blog/watch-dvr-from-phone-nepal/dvr-nvr-cameras-switch.jpg "Whatever the recorder, the phone needs a path to it, and the three methods differ in what that path is. Photo: Petr Novák, CC BY-SA 3.0")

## 1. The vendor's app

You scan a QR code on the DVR screen, add it to the maker's app and you are done. It needs no router changes.

The cost is that video and your recorder password pass through the vendor's cloud, abroad. If that matters to you, read [Hik-Connect alternatives in Nepal](/blog/hik-connect-alternative-nepal).

## 2. Port forwarding

You log in to your router, forward a port to the DVR's address and connect to your public IP.

![Black TP-Link Wi-Fi router with four antennas, the device where port forwarding is set](../../assets/blog/watch-dvr-from-phone-nepal/tp-link-wifi-router.jpg "Port forwarding is set in the router, which is why it fails when the provider controls the address. Photo: Abhi25t, CC BY-SA 4.0")

It gives you a direct path, but it exposes the DVR to the whole internet, it needs a static or dynamic address, and it fails entirely when your provider shares one address among many customers. That sharing is called CGNAT, explained in [why remote viewing fails behind CGNAT](/blog/cctv-remote-viewing-cgnat-nepal).

## 3. A box that connects out

A small box or agent on your network connects outward to a relay. The app connects to the same relay. Nothing on the router changes, and it works behind CGNAT.

This is how the [LunaCam Box](/products/lunacam-box) works, with relays in Nepal.

## Setting it up with LunaCam

1. Plug in the box, or install the agent on a PC that is always on.
2. Open the app and scan the code shown on the box.
3. The box finds your recorder and cameras on the network. Choose the ones to show.
4. If any still use the default password, change them when the app suggests it.
5. Open live view. Save a grid you use often.

![White indoor network camera with infrared lights on a wall bracket](../../assets/blog/watch-dvr-from-phone-nepal/ip-camera-easy-connect.jpg "Name each camera clearly, such as Front gate or Counter, so you know which grid tile is which. Photo: Kingrattus at English Wikipedia, Public domain")

## What the internet costs

Remote viewing needs an upload connection that stays on. WorldLink listed a residential 200 Mbps plan at [Rs 14,894 for 12 months](https://worldlink.com.np/internet-plans/residential-broadband/) and 600 Mbps at Rs 20,000 for 12 months, with VAT extra (checked October 2026). A few cameras at low-data settings need far less than either plan, so choose by how many people share the line, not by the cameras.

## A few habits that help

- Give each camera a clear name: Front gate, Counter, Stockroom.
- Share cameras with family or staff from the app instead of giving out the DVR password.
- Look at the last-seen time now and then. A camera that stopped last month is a camera you will not have footage from.
