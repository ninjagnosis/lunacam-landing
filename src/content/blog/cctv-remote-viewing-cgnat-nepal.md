---
title: "Why CCTV remote viewing fails behind CGNAT, and what to do about it"
description: "Many Nepali homes and shops share one public address with their neighbours. Port forwarding cannot work there. How to tell, and the setups that still work."
date: 2026-10-03
tags: [lunacam-box, setup]
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

## Options that work

- **Ask for a public address.** Some providers give one for a fee. It fixes forwarding but puts the DVR on the open internet, so change every default password first.
- **Use a vendor cloud.** It works, but your video goes abroad. See [Hik-Connect alternatives](/blog/hik-connect-alternative-nepal).
- **Use a connect-out box.** The [LunaCam Box](/products/lunacam-box) opens a connection from inside your network to LunaCam, so it needs no inbound access.

## The last-seen test

Whatever you use, confirm that it tells you when a camera goes quiet. On the box, every camera shows the last time it was seen, and LunaCam alerts you when one goes offline. A remote viewing setup you cannot trust to tell you it broke is worse than none.
