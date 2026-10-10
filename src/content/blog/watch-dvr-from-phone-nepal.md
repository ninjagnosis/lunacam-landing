---
title: "How to watch your DVR from your phone in Nepal, step by step"
description: "Three ways to see a DVR or NVR on your phone: the vendor app, port forwarding and a connect-out box. What each needs, what each risks, and which suits you."
date: 2026-10-03
tags: [camera-app, guides]
faq:
  - q: "Do I need a static IP to watch my DVR remotely?"
    a: "Not with a connect-out box or a cloud relay. A static IP and port forwarding are only needed for the direct method."
  - q: "Can I watch several shops in one app?"
    a: "Yes. Group cameras by site and open them in one grid, with a different set of cameras for each person."
  - q: "Will it use a lot of mobile data?"
    a: "Live HD does. Low-data mode sends snapshots and a low frame rate when you are not on Wi-Fi."
---

Almost every DVR sold in Nepal can be watched from a phone. The three common ways differ in effort, risk and where your video goes.

## 1. The vendor's app

You scan a QR code on the DVR screen, add it to the maker's app and you are done. It needs no router changes.

The cost is that video and your recorder password pass through the vendor's cloud, abroad. If that matters to you, read [Hik-Connect alternatives in Nepal](/blog/hik-connect-alternative-nepal).

## 2. Port forwarding

You log in to your router, forward a port to the DVR's address and connect to your public IP.

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

## A few habits that help

- Give each camera a clear name: Front gate, Counter, Stockroom.
- Share cameras with family or staff from the app instead of giving out the DVR password.
- Look at the last-seen time now and then. A camera that stopped last month is a camera you will not have footage from.
