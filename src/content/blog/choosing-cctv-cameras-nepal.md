---
title: "Choosing CCTV cameras: resolution, lens, night vision and power"
description: Megapixels are only part of it. How to pick resolution, lens, night vision, housing and power for each spot so the footage shows what you need.
date: 2026-10-12
tags: [setup, guides]
faq:
  - q: "How many megapixels do I need?"
    a: "For most shops and homes, 2 to 4 megapixels is enough when the camera is placed well. Higher resolution helps for wide areas, but it uses more storage and needs more light."
  - q: "Which lens should I choose?"
    a: "A wide lens, around 2.8 mm, shows a whole room but makes faces small. A narrower lens, around 6 mm or more, shows faces and number plates further away. Choose by what you need to recognise, not by how much you want to see."
  - q: "Is colour night vision better than infrared?"
    a: "Colour night vision shows clothing and vehicle colours, but needs some light or its own white light. Infrared works in total darkness and shows black and white. Many sites use both."
---

Most people buy CCTV cameras by megapixels and price. Then, after an incident, they find the footage shows a blur at the door, a face too small to recognise, or a black screen at night. The camera was not broken. It was the wrong camera for that spot.

This guide explains what actually decides whether footage is useful, so you can choose cameras by what you need to see.

## Start with what you need to see

Before looking at any camera, walk the site and write down, for each spot, what you need the footage to show. There are three useful levels:

- **Watch:** you can see that someone is there and what they are doing. Fine for a car park or a corridor.
- **Recognise:** you can tell who a known person is, such as a staff member.
- **Identify:** you can identify a stranger clearly enough to show the police, or read a number plate.

The entrance and the counter usually need to identify. A stockroom may only need to watch. Each level needs more detail on the person, which means a closer camera, a narrower lens or a higher resolution. Our [CCTV for shops](/blog/cctv-for-shops-nepal) guide covers where to point cameras.

## Resolution

Resolution is the number of pixels in the picture. More pixels means more detail, but only across the same area. A 4 megapixel camera covering a whole car park can show less detail on a face than a 2 megapixel camera covering just a door.

Common sizes:

- **2 MP (1080p).** Good for most indoor spots when placed close.
- **4 MP.** A good default for entrances and counters.
- **8 MP (4K).** Useful for wide outdoor areas, but it needs more storage, more bandwidth and more light.

Higher resolution has costs. Each camera uses more disk, so you keep fewer days of footage on the same drive. See [how long to keep CCTV footage](/blog/how-long-to-keep-cctv-footage) for the storage maths. It also sends more data when you watch from your phone. High-resolution sensors often have smaller pixels, which can mean a noisier picture at night.

Pick the lowest resolution that gives the level of detail you need at each spot.

## Lens and field of view

The lens decides how wide the camera sees. The number in millimetres is the focal length.

- **2.8 mm:** wide, around 100 degrees. Shows a whole room, but people further than a few metres look small.
- **4 mm:** a little narrower. A common choice for shop floors.
- **6 mm and above:** narrower. Shows faces and plates further away.
- **Varifocal:** adjustable, often 2.8 to 12 mm. The installer sets it on site. Costs more, but avoids guessing.

A useful rule: if you need to identify people at a door, mount the camera so the door fills most of the picture. Wide is not better. Wide is just wide.

## Night vision

Most incidents happen when the place is closed, so night performance matters more than daytime quality.

- **Infrared (IR).** The camera lights the scene with infrared that people cannot see, and records in black and white. Works in total darkness. Check the IR range in the specification, often 20 to 50 metres. IR reflects off nearby glass, walls and rain, so do not mount the camera behind a window.
- **Colour night vision.** Uses a large sensor and a bright lens to record colour in low light. Some models add a white light. Shows clothing and vehicle colours, which helps identify people. Needs some ambient light, such as a street lamp.
- **Smart hybrid light.** Records in infrared normally and turns on white light when it detects a person. A good choice for entrances.

If a spot has a bright light behind the subject, such as a glass shopfront in daylight, look for **WDR** (wide dynamic range). Without it, faces at the door become dark shapes against a bright background.

## Housing and weather

- **Dome cameras** are harder to knock out of position and their direction is less obvious. Good indoors and under eaves.
- **Bullet cameras** are visible and point one clear way. Good as a deterrent and for long views outside.
- **Turret cameras** are like domes without the plastic cover, so IR does not reflect inside them. A good all-round choice.

For outdoor cameras, look for an **IP66 or IP67** rating against dust and rain. For cameras within reach, look for **IK10** against impact. In the monsoon, a cheap seal fails quickly, and water inside the lens ruins the picture.

## Power and cabling

- **PoE (Power over Ethernet).** One network cable carries both power and video. Simpler installs, and one backup power supply at the switch keeps every camera running during load shedding.
- **Analog (HD-TVI, AHD, CVI).** Uses coaxial cable to a DVR. Cheaper, common in older installs, but less flexible.
- **Wi-Fi cameras.** Easy to place, but still need power, and the picture drops when the Wi-Fi is weak. Avoid them for spots that matter.

Plan for power cuts. A camera without backup power records nothing during the outage, which is often when trouble happens. Put the recorder, the network switch and your internet router on a UPS or inverter.

## Brands and standards

You do not need every camera from one brand. If cameras support **ONVIF** and **RTSP**, most recorders and apps can use them together. Our post on [ONVIF and RTSP](/blog/onvif-rtsp-one-app-many-brands) explains how this works. Check this before you buy, especially for cheaper models.

Before a camera goes live, change its default password. [Default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras) explains why this matters.

## Recorder and storage

The cameras are only half the system. Check that the recorder:

- Supports the number of cameras you plan, with room to add more.
- Supports each camera's resolution and codec. **H.265** uses about half the storage of H.264 for similar quality.
- Has enough disk for the number of days you need to keep. Use surveillance-rated hard drives, which are built to write all day.

## A worked example: a small shop

A shop with one entrance, a counter, a stockroom and a back door might use:

- **Entrance:** 4 MP turret, 4 to 6 mm lens, WDR, hybrid light, about 2.5 metres high, aimed so the door fills the picture.
- **Counter:** 4 MP dome above and slightly in front of the counter, 2.8 to 4 mm, to see hands, cash and faces.
- **Stockroom door:** 2 MP dome, 2.8 mm.
- **Back door outside:** 4 MP bullet, IP67, IR range 30 metres.

All on PoE through one switch, with the recorder, switch and router on a UPS.

## A short checklist

- Write down what each spot must show: watch, recognise or identify.
- Choose the lens by distance and detail, not by how wide it sees.
- Use the lowest resolution that gives enough detail.
- Check night performance, and use WDR for bright doorways.
- Choose IP66 or IP67 for outdoors.
- Prefer PoE and put the whole system on backup power.
- Check ONVIF and RTSP support, and change default passwords.
- Size the recorder and disks for the days you need to keep.

LunaCam works with cameras from many brands, so you can choose the right camera for each spot and still see them all in one app. If you are planning a new site, [talk to us](/contact).
