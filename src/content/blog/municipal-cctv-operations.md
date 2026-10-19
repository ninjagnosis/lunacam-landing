---
title: "Running public cameras in a municipality: roles, alarms and police requests"
description: "Public cameras fail on process, not hardware: who watches, who acknowledges an alarm, who answers police. How a municipality can set that up on one platform."
date: 2026-10-08
tags: [municipalities, alerts]
updated: 2026-10-19
cover: ../../assets/blog/municipal-cctv-operations/koteshwor-kathmandu-traffic.jpg
coverAlt: Motorbikes, buses and vans queueing on a busy road at Koteshwor, Kathmandu, under road signs
takeaways:
  - "Public cameras fail on process, not hardware: who watches, who acknowledges an alarm and who answers police."
  - "Name the roles, define what counts as an alarm and write the steps next to each alarm."
  - "Set escalation so an alarm nobody acknowledges reaches the next person."
  - "Public bodies are to notify the police or District Administration Office within 15 days and keep footage for at least three months."
credits:
  - file: koteshwor-kathmandu-traffic.jpg
    title: "Koteshwor, Kathmandu-8647"
    author: "Bijay Chaurasia"
    source: "https://commons.wikimedia.org/wiki/File:Koteshwor,_Kathmandu-8647.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized and cropped"
  - file: cctv-control-room-monitor-wall.jpg
    title: "CCTV control room monitor wall"
    author: "Mark Yeomans"
    source: "https://commons.wikimedia.org/wiki/File:CCTV_control_room_monitor_wall.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: kathmandu-old-city-street.jpg
    title: "Kathmandu Old City Chaos"
    author: "Francisco Anzola"
    authorUrl: "https://500px.com/franciscoanzola"
    source: "https://commons.wikimedia.org/wiki/File:Kathmandu_Old_City_Chaos_(221813587).jpeg"
    licence: CC BY 3.0
    changes: "Resized and cropped"
faq:
  - q: "Can several departments share one system?"
    a: "Yes. Sub-organisations, sites and roles are built in."
  - q: "Can police see a live feed?"
    a: "A live feed can be shared with another organisation. Revoking stops new access, and existing tokens last up to five minutes."
  - q: "What about number plate reading?"
    a: "Analytics, including number plates in Nepali formats, are rolling out next."
---

A municipality can buy a hundred cameras in a year. The harder part is deciding who looks at them and what happens next.

## What it can cost

Budgets are usually reported as one figure. The Budhanilkantha project, a joint effort of the Kathmandu Valley Police Office and the municipality, put 181 AI-based cameras on three routes for [Rs 50 million](https://www.technologykhabar.com/?p=160673), as reported in 2024. That total covers the whole project, so it is not a price per camera. Ask for a bill of quantities that lists cameras, network, storage, control room and support separately.

## Start with process

1. **Who is the operator?** Name the roles: operator, supervisor, auditor.
2. **What counts as an alarm?** Offline, tamper, motion in a closed zone.
3. **What do they do when one fires?** Write the steps. They should appear beside the alarm, with the related cameras and the video before and after.
4. **Who do they call if nobody acknowledges?** Set escalation: after five minutes, call the next person.
5. **Who answers police?** One request, approval and delivery path.

## What the platform has to hold

- A map of Nepal or a floor plan with camera icons and field-of-view cones.
- An alarm queue with priority, assignment and acknowledgement reasons such as false alarm, guard sent or police called.
- A command dashboard of sites, open alarms and offline devices.
- Feed sharing with police, with expiring access.
- An audit log of who watched what.

![Operators' video wall of about fifty small camera tiles showing town streets, car parks and squares](../../assets/blog/municipal-cctv-operations/cctv-control-room-monitor-wall.jpg "A wall of tiles is only useful if an alarm tells the operator which tile to look at. Photo: Mark Yeomans, CC BY-SA 4.0")

## What the law asks of public bodies

Public bodies that install CCTV are to notify the police or District Administration Office within 15 days, and keep footage for at least three months. See [the Privacy Act, 2075 summary](/blog/privacy-act-2075-cctv-nepal). LunaCam fills in the notice.

![Narrow shopping street in old Kathmandu with motorbikes, pedestrians and overhead cables](../../assets/blog/municipal-cctv-operations/kathmandu-old-city-street.jpg "Dense streets like this are where overlapping camera views and clear ownership of each camera matter most. Photo: Francisco Anzola, CC BY 3.0")

## Start small

Pick one corridor, run the process for a month and fix what does not work. Then add sites. See [LunaCam for municipalities](/solutions/municipalities).
