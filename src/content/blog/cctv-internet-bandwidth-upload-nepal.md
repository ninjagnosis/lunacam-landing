---
title: "How much internet does CCTV need? Upload bandwidth maths for Nepali connections"
description: "Why remote CCTV buffers on a fast plan, how to work out the upload speed your cameras need, and the settings that make live view smooth in Nepal."
date: 2026-10-14
tags: [setup, guides]
faq:
  - q: "How much internet speed do I need for CCTV?"
    a: "For watching remotely, what matters is your site's upload speed, not download. A sub stream needs roughly 0.3 to 1 Mbps per camera, and a full quality 1080p main stream roughly 2 to 4 Mbps. Add up what will be watched at the same time and keep it under about half of your measured upload."
  - q: "Does CCTV use internet when nobody is watching?"
    a: "A DVR or NVR recording locally uses no internet for recording. It only sends video out when someone watches live, plays back, or when footage is copied to cloud storage. Small amounts of data are used for status checks and alerts."
  - q: "Why does my CCTV app buffer even though I have fast internet?"
    a: "Usually because the plan's speed is the download figure and the upload is lower or shared, because the app is pulling the full quality main stream for small tiles, or because the recorder's own network port or processor is the bottleneck."
  - q: "Is H.265 better than H.264 for CCTV?"
    a: "For the same picture, H.265 usually needs noticeably less bitrate, which means less storage and less upload. The catch is that older phones, browsers and software may not play it, so check that whatever you watch on supports it."
  - q: "How much data does CCTV remote viewing use per month?"
    a: "Multiply the bitrate by the time spent watching. One camera's sub stream at 0.5 Mbps watched for an hour uses about 225 MB. A 1080p main stream at 3 Mbps for an hour uses about 1.35 GB."
---

The complaint arrives in almost the same words every week. "We have a 100 Mbps plan. Why does the CCTV keep buffering when I watch from my phone?"

The owner has done everything that seems sensible. They paid for a fast plan. Their phone is new. On the shop Wi-Fi, the cameras are perfectly smooth. But from home, or from a relative's house in another town, the picture freezes, jumps, goes blurry, and sometimes just shows a spinning circle.

Nine times out of ten, nothing is broken. The problem is arithmetic. A video system is a pipe, and the narrowest part of the pipe decides what you see. For remote CCTV the narrowest part is almost never the one people check.

This guide explains where that narrow part is, how to measure it, how to work out what your cameras actually need, and which settings make the biggest difference. You need a calculator, your router, and ten minutes.

## The one thing to understand: upload, not download

When you watch your cameras from somewhere else, video travels **out of** the site where the cameras are and **into** your phone. So two speeds matter:

- The **upload** speed at the camera site.
- The **download** speed where you are watching.

Your phone's download speed is rarely the problem. Even ordinary mobile data can pull a few megabits per second. The problem is the upload at the site.

Internet plans are advertised by their **download** speed, because that is what most households use: video, browsing, downloads. Upload is often lower, sometimes much lower, and it is rarely in large print. On many fibre plans in Nepal the two are close. On others, and on many wireless and older connections, the upload is a fraction of the headline number. A plan sold as 100 Mbps may give you 100 down and far less up. The only way to know is to measure.

That is why a CCTV system can be perfectly smooth on the shop Wi-Fi, where it never touches the internet, and painful from home, where every frame has to squeeze through the site's upload.

## How to measure your real upload speed

Do this at the camera site, not at home.

1. Connect a phone or laptop to the same router the DVR or NVR uses. A cable is better than Wi-Fi for this test.
2. Open any speed test in a browser.
3. Note the **upload** figure, not the download.
4. Repeat at three times of day: morning, afternoon, and the evening peak, roughly 7 to 10 pm, when the neighbourhood is streaming.

Write down the **lowest** of the three. That is your honest budget. Providers share capacity among customers, and the evening dip is real. A system planned on the morning figure will work in the morning and fail when you most often check it, which is after closing.

If your router's status page shows a WAN address in the 100.64 to 100.127 range, you are also behind a shared address, which affects how remote viewing connects at all. We wrote about that separately in [why remote viewing fails behind CGNAT](/blog/cctv-remote-viewing-cgnat-nepal).

## What a camera actually sends: bitrate

A camera turns pictures into a stream of data. The amount of data per second is the **bitrate**, measured in kilobits per second (kbps) or megabits per second (Mbps). It is the single number that decides how much upload and how much storage a camera needs.

Bitrate depends on several things:

- **Resolution.** More pixels mean more data. A 4 MP or 8 MP camera sends more than a 2 MP one.
- **Frame rate.** Twenty-five frames per second sends more than ten.
- **Compression, or codec.** H.265 sends noticeably less than H.264 for a similar picture.
- **What is happening in the scene.** A still corridor compresses very well. A busy road, trees moving in the wind, rain, or a noisy night picture compress badly and use much more.
- **The recorder's settings.** Constant bitrate (CBR) sends the same amount whatever happens. Variable bitrate (VBR) sends less when the scene is still and more when it moves.

You do not need to guess. Most recorders show each camera's bitrate in their settings or status pages. Look there first.

## Main stream and sub stream: the setting that changes everything

Almost every camera and recorder produces **two streams** of the same camera at once.

The **main stream** is full quality: full resolution, full frame rate, high bitrate. It is what the recorder saves to disk and what you want when you need to read a number plate.

The **sub stream** is a small, light version: lower resolution, lower frame rate, a fraction of the bitrate. It exists precisely for viewing many cameras at once on a small screen.

This is where most buffering comes from. If an app shows a grid of nine cameras on a phone and pulls the **main stream** for each, it is asking the site to upload nine full quality streams to display nine thumbnails the size of a stamp. Nobody's upload can do that comfortably, and nothing is gained, because a phone tile cannot show the detail anyway.

A sensible app pulls the sub stream for the grid and switches to the main stream only when you open one camera full screen. LunaCam does exactly that, picking main or sub stream to suit the network and the tile size. If you use another app, look for a setting called sub stream, fluent, smooth, SD or "extra stream", and use it for grids.

## Typical numbers to plan with

These are rough working figures, not promises. Your cameras will differ, and a busy scene can easily double them. Use them for planning, then check your own recorder's real numbers.

| Stream | Typical bitrate |
|---|---|
| Sub stream (for grids and small tiles) | 0.3 to 1 Mbps |
| 1080p (2 MP) main stream, H.264 | 2 to 4 Mbps |
| 1080p (2 MP) main stream, H.265 | 1 to 2 Mbps |
| 4 MP main stream, H.265 | 2 to 4 Mbps |
| 4K (8 MP) main stream, H.265 | 4 to 8 Mbps or more |

Two patterns stand out. A sub stream is many times lighter than a main stream. And H.265 roughly halves what H.264 needs for a similar picture. Both of those are settings you can change today, without buying anything.

## The maths, step by step

Here is the calculation that tells you whether your connection can cope.

**Step 1. Decide what will be watched at the same time.** Not how many cameras you have, but how many streams will travel over the internet at once. A shop owner checking a grid of eight cameras on one phone is eight sub streams. Two family members watching full screen at once is two main streams.

**Step 2. Add up their bitrates.**

**Step 3. Compare with your lowest measured upload,** and keep the total under about half of it. The other half is headroom for peaks, for the busy scene that suddenly needs more, and for everything else at the site that uses the internet: card machines, the office computer, staff phones on the Wi-Fi.

### Example 1: a shop with eight cameras

A grocery in Butwal has eight 2 MP cameras on a DVR. The owner checks them on a phone from home, usually as a grid, sometimes opening one camera full screen.

- Grid of eight sub streams at about 0.5 Mbps each: **4 Mbps**.
- One camera opened full screen on the main stream at 3 Mbps, while the grid is closed: **3 Mbps**.

Worst realistic case: about **4 Mbps**. Measured evening upload at the shop: **10 Mbps**. Half of that is 5 Mbps. Comfortable.

But if the app pulls main streams for the grid: 8 × 3 Mbps = **24 Mbps**. Far more than the shop can send. This is the buffering the owner was complaining about, and no faster download plan would ever have fixed it.

### Example 2: a school with twenty cameras and three viewers

A school has twenty cameras. The principal, the administrator and the owner all sometimes check at the same time.

- Each viewer opens a grid of twenty sub streams at 0.5 Mbps: 10 Mbps per viewer.
- Three viewers at once: **30 Mbps**.

The school's measured evening upload is 20 Mbps. This will struggle.

The fixes, in order of cost:

1. Show smaller grids of, say, nine cameras at a time: 3 × 4.5 = 13.5 Mbps. Better.
2. Lower the sub stream bitrate a little where the picture still looks fine: 0.3 Mbps each brings three nine-camera grids to about 8 Mbps.
3. Ask whether your system can send each stream **once** to a relay that serves it to all three viewers, so the site's upload carries one copy, not three. With a plain direct connection, every viewer pulls a separate copy straight from the recorder.

### Example 3: playback is different

Watching a recording works the same way as live view. The recorder sends the saved video over the internet, so it uses upload at the site.

The difference is that **recordings are usually saved from the main stream**, so playback is heavy by default. Scrubbing back and forth through an hour of main stream footage on a weak upload is slow.

Two habits help. Use search markers, such as motion, person or vehicle events, to jump to the right minute instead of scrubbing. And download only the short clip you need, rather than streaming the whole hour. LunaCam's playback timeline shows motion, person and vehicle markers for exactly this reason.

## Monthly data: if your plan has a cap

Most fixed home and office plans in Nepal are unlimited, but mobile data, some wireless plans and some 4G routers used at remote sites are not. If yours has a cap, use this:

**Data used = bitrate × time watched.**

To convert, 1 Mbps for one hour is about **450 MB** (1,000,000 bits ÷ 8 × 3,600 seconds).

- A sub stream at 0.5 Mbps for one hour: about **225 MB**.
- A 1080p main stream at 3 Mbps for one hour: about **1.35 GB**.
- Thirty minutes a day of a nine-camera grid at 0.5 Mbps each: 4.5 Mbps × 0.5 h × 30 days ≈ **30 GB per month**.

A recorder that only records locally uses almost no data until somebody watches. A system that also copies all footage to cloud storage around the clock is a different matter, and needs its own calculation, as below.

## Copying footage off site

Some people want their footage stored somewhere other than the DVR, so that a stolen or burnt recorder does not take the evidence with it. That is a good instinct. But continuous off-site recording is the heaviest thing you can ask of an upload.

A single 1080p camera at 2 Mbps recording continuously to the cloud sends 2 Mbps **all day, every day**. Eight cameras is 16 Mbps, permanently. That is more than many sites can spare, and it competes with everything else on the connection.

Practical alternatives:

- **Copy events, not everything.** Upload only clips around motion, person or vehicle detections.
- **Copy sub streams continuously and main streams on events,** so you always have something, and the important moments in full quality.
- **Copy outside business hours** if you can tolerate a delay.
- **Keep a second recorder** in a separate, hidden place on the same premises, which needs no internet at all.

How long you keep footage changes the storage bill far more than it changes the upload. We worked through those numbers in [how long to keep CCTV footage](/blog/how-long-to-keep-cctv-footage).

## Other bottlenecks that look like slow internet

Sometimes the upload is fine and the problem is somewhere else. Check these before you call your provider.

**The recorder itself.** Older or cheaper DVRs have small processors and a limited number of remote streams they can serve. Ask one to send many streams at once and it slows down, whatever the internet can do. Check the recorder's specification for its maximum remote connections or outgoing bandwidth.

**The recorder's network port.** Many older recorders have a 100 Mbps port. That is usually enough, but not if it also serves local viewing to a large monitor wall at the same time.

**Wi-Fi between the recorder and the router.** A recorder on a weak Wi-Fi link, or on a cheap repeater, is limited by that link. Use a cable wherever you can.

**Camera settings set too high for the purpose.** A 4K camera at 25 frames per second watching a storeroom door is a lot of data for very little information. Ten or twelve frames per second is plenty for most fixed scenes and saves a great deal.

**Night noise.** Grainy low light pictures compress badly. The same camera may use far more bitrate at night than by day. If your night streams stutter and your day streams do not, that is why. Better lighting on the scene helps more than anything. We covered this in [night vision and low light](/blog/cctv-night-vision-low-light-guide).

**Everything else on the connection.** A staff member uploading phone photos to the cloud, a computer backing up, or a smart TV left streaming in the back room all use the same upload.

## A settings checklist that fixes most buffering

If you only do one thing after reading this, go through this list on your recorder and in your app:

1. **Sub stream for grids.** Make sure the app uses it. Check that it is actually enabled on each camera, not left blank.
2. **Sub stream sensible, not tiny.** Around 640 × 360 at 10 to 15 frames per second and a few hundred kbps is a good start for most phones.
3. **H.265 where everything supports it.** Switch the main stream to H.265 if your recorder, app and phones can play it. Test before you switch every camera.
4. **Variable bitrate with a cap.** Use VBR so still scenes use less, with a sensible maximum so busy scenes do not swamp the connection.
5. **Frame rate to fit the scene.** 10 to 15 frames per second for doors, corridors and storerooms. Higher only where fast motion matters, such as tills or entrances.
6. **Smaller grids.** Nine tiles on a phone is plenty. Use views or pages for the rest.
7. **Cable, not Wi-Fi,** from recorder to router.
8. **Measure evening upload,** and keep remote viewing under half of it.

## What this means when you buy

When a shop or installer quotes you a system, these questions will save you a disappointment:

- What bitrate does each camera send on its main stream and on its sub stream?
- Does the recorder support H.265, and do the apps I will use play it?
- How many remote viewers can the recorder serve at once?
- If several people watch at once, does each one pull a separate copy from my site, or is there a relay?
- What upload speed do I need at the site for the way I plan to watch?

A good installer can answer all five. If the only answer is "you have 100 Mbps, it will be fine", you now know why it might not be.

## Where LunaCam fits

LunaCam works with the DVRs, NVRs and cameras you already have, including Hikvision, Dahua and any ONVIF or RTSP camera. It picks the sub stream for grids and the main stream for full screen, and video passes through relays and storage in Nepal rather than through a camera maker's servers abroad. Playback has motion, person and vehicle markers, so you can jump to the right minute instead of streaming an hour of video.

None of that changes the arithmetic. It just makes better use of the upload you have. Measure it first, add up what you watch, keep it under half, and most CCTV buffering simply goes away.
