---
title: "Managing CCTV across many bank branches without losing track"
description: "Banks must run CCTV and keep it. What breaks when a bank has dozens of branches on different recorders, and how roles, audit logs and evidence handling fix it."
date: 2026-10-07
tags: [banks, evidence]
updated: 2026-10-19
cover: ../../assets/blog/bank-branch-cctv-management/nepal-rastra-bank-building-kathmandu.jpg
coverAlt: Nepal Rastra Bank building in Kathmandu with a Nepali sign above a white and pink columned facade and a driveway in front
takeaways:
  - "A bank with dozens of branches ends up with mixed recorders, silent failures and no record of who accessed footage."
  - "Head office needs an organisation tree, per-action roles, a command dashboard and an audit log."
  - "Evidence handling with bookmarks, cases, hashed exports and legal hold gives one place to answer police."
  - "Branch recorders can stay in place, because a LunaCam Box or agent connects them out to the console."
credits:
  - file: nepal-rastra-bank-building-kathmandu.jpg
    title: "Rastrabank"
    author: "Clemensmarabu"
    source: "https://commons.wikimedia.org/wiki/File:Rastrabank.JPG"
    licence: CC BY-SA 3.0
    changes: "Resized and cropped"
  - file: cctv-control-room-monitor-wall.jpg
    title: "CCTV control room monitor wall"
    author: "Mark Yeomans"
    source: "https://commons.wikimedia.org/wiki/File:CCTV_control_room_monitor_wall.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: bank-branch-entrance-atm.jpg
    title: "Raiffeisenbank Maria Heilbrunn"
    author: "Herzi Pinki"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Herzi_Pinki"
    source: "https://commons.wikimedia.org/wiki/File:Raiffeisenbank_Maria_Heilbrunn.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized and cropped"
faq:
  - q: "Can head office see every branch?"
    a: "Yes, through an organisation tree with sub-organisations for provinces and branches. Each person sees only what their role allows."
  - q: "How do we connect existing branch recorders?"
    a: "Through the LunaCam Box or the agent at each branch. Recorders keep recording as they do now."
  - q: "Does footage stay in Nepal?"
    a: "Servers, relays and storage are in Nepal."
---

A bank with three branches can manage cameras by memory. A bank with forty cannot.

## What goes wrong

- **Mixed recorders.** Branches bought what was available when they opened, so there are several brands and ages.
- **Silent failures.** A disk fills or a camera dies, and nobody knows until footage is needed.
- **No record of access.** People ask a branch for footage over the phone and receive it on a USB stick.
- **No single place to answer police.** Each request becomes a scramble.

## What a console should give head office

1. **An organisation tree.** Head office, provinces, branches, zones and cameras.
2. **Roles and permissions per action.** Live, playback, export, PTZ and delete, each controlled on its own.
3. **Scope by site and shift.** A guard sees one branch, during his shift.
4. **A command dashboard.** Sites, open alarms and offline devices.
5. **An audit log.** Sign-ins, live views, playback, exports and configuration changes.
6. **Evidence handling.** Bookmarks, cases, hashed exports and legal hold. See [exporting evidence that stands up](/blog/cctv-evidence-export-nepal).

![Control room video wall with many camera feeds of streets and car parks arranged in grids](../../assets/blog/bank-branch-cctv-management/cctv-control-room-monitor-wall.jpg "A monitor wall shows many sites at once, which is the view head office needs of its branches. Photo: Mark Yeomans, CC BY-SA 4.0")

## Connecting what you have

You do not need to replace branch recorders. A LunaCam Box or agent at each branch connects them out to the console. See [LunaCam for banks](/solutions/banks).

![Bank branch building with a bullet security camera mounted on the yellow wall beside the bank sign](../../assets/blog/bank-branch-cctv-management/bank-branch-entrance-atm.jpg "A camera on a branch wall can stay as it is while the recorder behind it connects out to the console. Photo: Herzi Pinki, CC BY-SA 4.0")

## Integration

Alarms and events can feed your own systems through signed webhooks and the event stream. See the [developer platform](/products/developer-platform).
