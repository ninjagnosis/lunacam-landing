---
title: "How long should you keep CCTV footage? Retention and storage maths"
description: Seven days, thirty or ninety? How to choose a retention period, what it costs in disk per camera, and what the Privacy Act, 2075 asks for in Nepal.
date: 2026-10-11
tags: [guides, evidence]
updated: 2026-10-19
cover: ../../assets/blog/how-long-to-keep-cctv-footage/sata-hard-disk-cctv-storage.jpg
coverAlt: Seagate Barracuda 1 TB 3.5 inch SATA hard disk seen from the connector side
takeaways:
  - "Retention is the number of days before the recorder overwrites old video, and disk size usually decides it for you."
  - "One 4 MP camera recording all day needs about 43 GB a day, or about 1.3 TB for 30 days."
  - "Cut camera count on continuous recording before you cut days."
  - "The Home Ministry's CCTV procedure asks for at least three months of footage; the Privacy Act, 2075 sets no period."
  - "Export or hold an important clip so the overwrite does not reach it."
credits:
  - file: sata-hard-disk-cctv-storage.jpg
    title: "3.5\" hard disk. SATA"
    author: "Dmitry Makeev"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Knopik-som"
    source: "https://commons.wikimedia.org/wiki/File:3.5%22_hard_disk._SATA.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: nvr-and-ip-camera-recorder.jpg
    title: "NVR&IP CAM"
    author: "Hfliaa"
    source: "https://commons.wikimedia.org/wiki/File:NVR%26IP_CAM.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: nvr-with-ip-cameras-recorder.jpg
    title: "IPCorder NVR with cameras"
    author: "che (Please credit as \"Petr Novák, Wikipedia\" in case you use this outside Wikimedia projects.)"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Che"
    source: "https://commons.wikimedia.org/wiki/File:IPCorder_NVR_with_cameras.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
faq:
  - q: "How many days of footage should a shop keep?"
    a: "At least thirty days is a safe aim for most shops, because many problems, such as a stock shortfall or a disputed refund, are noticed late. Check the figure against what your disks can hold."
  - q: "Does Nepal's law set a minimum?"
    a: "At least three months, under the Ministry of Home Affairs' CCTV Installation and Operation Procedure as amended in 2019. The Privacy Act, 2075 itself sets no period. Confirm the current rule for your sector with a lawyer."
  - q: "How do I keep one incident longer than the rest?"
    a: "Export it, or place it under legal hold, so the normal overwrite does not delete it. See the evidence export guide."
---

Every recorder overwrites old video once its disks are full. Retention is simply how many days pass before that happens. Most owners never choose it. The disk size chooses for them.

## The storage maths

Disk use is bitrate multiplied by time. A rough guide for one camera recording all day:

| Stream | Per day | 30 days |
|---|---|---|
| 2 Mbps (1080p, efficient codec) | about 21 GB | about 630 GB |
| 4 Mbps (4 MP) | about 43 GB | about 1.3 TB |
| 8 Mbps (4K) | about 86 GB | about 2.6 TB |

Multiply by your camera count. Eight 4 MP cameras for 30 days need about 10 TB, before any spare space.

![Seagate Barracuda 1 TB 3.5 inch SATA hard disk with its data and power connectors](../../assets/blog/how-long-to-keep-cctv-footage/sata-hard-disk-cctv-storage.jpg "A 3.5 inch SATA disk like this is what most DVRs and NVRs record to. Photo: Dmitry Makeev, CC BY-SA 4.0")

## What the disks cost in Nepal

Surveillance disks are sold on Daraz by several sellers, and prices differ even for the same size. A WD Purple 1 TB was listed at [Rs 12,500](https://www.daraz.com.np/products/western-digital-wd-purple-1tb-surveillance-hard-drive-i127821512.html) and a WD Purple 2 TB at [Rs 19,999](https://www.daraz.com.np/products/wd-purple-surveillance-hard-drive-2tb-with-1-year-warranty-i185647125.html) (checked October 2026). A Hikvision-labelled 4 TB WD Purple was listed by another seller at [Rs 14,510](https://www.daraz.com.np/products/hikvision-western-digital-4-tb-surveillance-hard-disk-for-desktop-dvrnvr-wd-purple-i110447902.html) (checked October 2026). The larger disk can cost less than the smaller one, so compare sellers and warranty terms before you buy.

![Diagram of two IP cameras feeding a network switch and an NVR with a monitor and a viewing station](../../assets/blog/how-long-to-keep-cctv-footage/nvr-and-ip-camera-recorder.jpg "Every camera stream passes through the recorder, and its disks set how many days you keep. Photo: Hfliaa, CC BY-SA 4.0")

## Ways to stretch it

- **Motion recording** on quiet cameras, such as a back store room.
- **A lower substream** for cameras that only need to show presence.
- **Efficient codecs** where your cameras support them.
- **Different retention per camera.** The cash counter needs longer than the street view.

![Network recorder with box, PTZ and small IP cameras connected through a PoE switch](../../assets/blog/how-long-to-keep-cctv-footage/nvr-with-ip-cameras-recorder.jpg "Cameras that matter most, such as the cash counter, can be given longer retention than the rest. Photo: Petr Novák, CC BY-SA 3.0")

## What the law asks

Nepal's Privacy Act, 2075 sets no retention period. The three-month minimum comes from the Ministry of Home Affairs' CCTV Installation and Operation Procedure, as amended in 2019 ([Himalayan Times, 15 February 2019](https://thehimalayantimes.com/kathmandu/misuse-of-cctvs-made-punishable)). Banks and public bodies often have their own, longer rules. Read the details in [the Privacy Act and CCTV in Nepal](/blog/privacy-act-2075-cctv-nepal).

## Keep the important moments longer

A fixed period cannot know which clip matters. When an incident happens, export it before the overwrite reaches it. See [exporting evidence that stands up](/blog/cctv-evidence-export-nepal).

## Choose a number, then check it

Pick the days you need, multiply, and compare with the disk you have. If the answer does not fit, reduce cameras on continuous recording before you reduce days.
