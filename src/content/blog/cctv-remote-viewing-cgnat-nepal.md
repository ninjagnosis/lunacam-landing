---
title: "Why CCTV remote viewing fails behind CGNAT, and what to do about it"
description: "Many Nepali homes and shops share one public address with their neighbours. Port forwarding cannot work there. How to tell, and the setups that still work."
date: 2026-10-03
tags: [lunacam-box, setup]
updated: 2026-10-19
cover: ../../assets/blog/cctv-remote-viewing-cgnat-nepal/kathmandu-rooftops-shared-buildings-sunset.jpg
coverAlt: Kathmandu rooftops at sunset with several multi-storey buildings close together and hills in the background
takeaways:
  - "Behind CGNAT many customers share one public address, so port forwarding cannot reach your DVR."
  - "Compare the router WAN address with a what is my IP site. If they differ, or it starts 100.64 to 100.127, you are behind CGNAT."
  - "A public address fixes forwarding but exposes the DVR, so change every default password first."
  - "A connect-out box makes only outbound connections and needs no inbound access."
credits:
  - file: kathmandu-rooftops-shared-buildings-sunset.jpg
    title: "KATHMANDU ROOFTOPS AT SUNSET TAKEN FROM THE ROOF TERRACE OF THE ECO HOTEL IN THAMMEL MARG NEPAL FEB 2013 (8562532486)"
    author: "calflier001"
    authorUrl: "https://www.flickr.com/people/28984065@N04"
    source: "https://commons.wikimedia.org/wiki/File:KATHMANDU_ROOFTOPS_AT_SUNSET_TAKEN_FROM_THE_ROOF_TERRACE_OF_THE_ECO_HOTEL_IN_THAMMEL_MARG_NEPAL_FEB_2013_(8562532486).jpg"
    licence: CC BY-SA 2.0
    changes: "Resized and cropped"
  - file: network-cables-plugged-into-router.jpg
    title: "Network cables plugged to router 20170903"
    author: "Santeri Viinamäki"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Zunter"
    source: "https://commons.wikimedia.org/wiki/File:Network_cables_plugged_to_router_20170903.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: gigabit-network-switch-5-port.jpg
    title: "Netgear Gigabit Switch 5-port"
    author: "Simon A. Eugster"
    authorUrl: "https://commons.wikimedia.org/wiki/User:LivingShadow"
    source: "https://commons.wikimedia.org/wiki/File:Netgear_Gigabit_Switch_5-port.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
faq:
  - q: "How do I know if I am behind CGNAT?"
    a: "Compare the WAN address shown in your router with the address a \"what is my IP\" site reports. If they differ, or the router address starts with 100.64 to 100.127, your provider is sharing an address."
  - q: "Will a static IP fix it?"
    a: "Usually yes, but it often costs extra and exposes the DVR directly to the internet."
  - q: "Does the LunaCam Box work behind CGNAT?"
    a: "Yes. It only makes outbound connections, so it needs no inbound access."
---

You forwarded the port, typed the right address, and the DVR will not open from outside. The DVR is fine. The problem is usually your connection.

## What CGNAT is

Internet addresses are in short supply. Many providers put several customers behind one public address. That is carrier-grade NAT, or CGNAT. From the internet, your router has no address of its own, so nobody can reach it, however you set the router.

Apartments, shared buildings and some mobile and wireless providers are the usual cases.

## How to check

Open your router's status page and read the WAN or internet address. Then search the web for "what is my IP". If the two differ, you are behind a shared address. A router address that starts with 100.64 up to 100.127 is also a sign of CGNAT.

![White router seen from behind with blue and grey Ethernet cables plugged into its ports](../../assets/blog/cctv-remote-viewing-cgnat-nepal/network-cables-plugged-into-router.jpg "The WAN address on the router status page is the one to compare with what the internet sees. Photo: Santeri Viinamäki, CC BY-SA 4.0")

## Options that work

- **Ask for a public address.** Some providers give one for a fee. It fixes forwarding but puts the DVR on the open internet, so change every default password first.
- **Use a vendor cloud.** It works, but your video goes abroad. See [Hik-Connect alternatives](/blog/hik-connect-alternative-nepal).
- **Use a connect-out box.** The [LunaCam Box](/products/lunacam-box) opens a connection from inside your network to LunaCam, so it needs no inbound access.

![Blue five-port gigabit network switch with a yellow and a red Ethernet cable plugged in](../../assets/blog/cctv-remote-viewing-cgnat-nepal/gigabit-network-switch-5-port.jpg "A connect-out box only needs a cable to the local network and an outbound connection to reach the console. Photo: Simon A. Eugster, CC BY-SA 3.0")

## The last-seen test

Whatever you use, confirm that it tells you when a camera goes quiet. On the box, every camera shows the last time it was seen, and LunaCam alerts you when one goes offline. A remote viewing setup you cannot trust to tell you it broke is worse than none.
