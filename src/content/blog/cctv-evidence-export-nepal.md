---
title: "Exporting CCTV evidence that stands up: hash, manifest and a clean trail"
description: "A clip on a pen drive proves little. What makes CCTV footage trustworthy as evidence: a hash, a signed manifest, a watermark and a log of who handled it."
date: 2026-10-05
tags: [evidence, law]
updated: 2026-10-19
cover: ../../assets/blog/cctv-evidence-export-nepal/cctv-cameras-mumbai-street-pole.jpg
coverAlt: Four CCTV cameras mounted on a street pole at night in Mumbai, pointing in different directions
takeaways:
  - "Footage is only evidence if you can show it is the right footage, complete and unchanged."
  - "A SHA-256 hash and a signed manifest let anyone check that an export has not been edited."
  - "A visible watermark and a log of every view, export and share form the chain of custody."
  - "Bookmark, build a case, export, hand over by expiring link, and keep a legal hold."
credits:
  - file: cctv-cameras-mumbai-street-pole.jpg
    title: "CCTV cameras in Mumbai"
    author: "Punit Rajpal"
    source: "https://commons.wikimedia.org/wiki/File:CCTV_cameras_in_Mumbai.jpg"
    licence: CC0 1.0
    changes: "Resized and cropped"
  - file: usb-flash-drives-footage-copy.jpg
    title: "Kingston Technology USB flash drives. USB 3.0"
    author: "Dmitry Makeev"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Knopik-som"
    source: "https://commons.wikimedia.org/wiki/File:Kingston_Technology_USB_flash_drives._USB_3.0.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: desktop-hard-drive-recorder-storage.jpg
    title: "35-Desktop-Hard-Drive"
    author: "Evan-Amos"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Evan-Amos"
    source: "https://commons.wikimedia.org/wiki/File:35-Desktop-Hard-Drive.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
faq:
  - q: "Why does a hash matter?"
    a: "A SHA-256 hash is a fingerprint of the file. Change a single frame and the fingerprint changes, so anyone can check the file is the one that was exported."
  - q: "What is a signed manifest?"
    a: "A list of the files in an export with their hashes, signed by the system that created them, so edits to the list also show up."
  - q: "Can I share an export without giving access to the system?"
    a: "Yes. Send an expiring, password-protected, view-only link."
---

When something goes wrong at a shop, a branch or a junction, someone asks for the footage. Too often it arrives on a pen drive with a file name like VID_0042, and no way to show where it has been.

![White and red USB flash drive with its cap off, the kind often used to hand over CCTV clips](../../assets/blog/cctv-evidence-export-nepal/usb-flash-drives-footage-copy.jpg "A clip on a pen drive says nothing about where it has been or who has copied it. Photo: Dmitry Makeev, CC BY-SA 4.0")

## What makes footage evidence

Footage is only as good as your ability to show three things: that it is the right footage, that it is complete, and that nobody changed it.

### A fingerprint of every file

An export gets a SHA-256 hash. Change one frame and the hash changes. Whoever receives the file can recompute the hash and compare.

### A signed manifest

The manifest lists every file in the export with its hash, signed by the system that made it. A verifier tool checks the signature, so changing the list is as visible as changing a file.

### A watermark

A visible watermark names the user, the time and the site. It discourages passing footage around, and it tells you whose export leaked if one does.

### A record of who handled it

Every view, export and share of a case should be logged. That log is the chain of custody. See [chain of custody](/glossary/chain-of-custody).

## The steps

1. **Bookmark** the moment with a note and tags.
2. **Build a case** from clips, snapshots, notes and the people involved.
3. **Export** with a hash, a manifest and a watermark.
4. **Hand over** with an expiring, password-protected link.
5. **Keep a legal hold** on the footage so it cannot be deleted while the case is open.

![Open desktop hard disk drive showing the platter and read arm, the storage inside a CCTV recorder](../../assets/blog/cctv-evidence-export-nepal/desktop-hard-drive-recorder-storage.jpg "A recorder overwrites its oldest footage when the disk fills, so a legal hold stops deletion while a case is open. Photo: Evan-Amos, CC BY-SA 3.0")

[Evidence and Compliance](/products/evidence) does all five. The legal background is in [what the Privacy Act, 2075 asks of CCTV operators](/blog/privacy-act-2075-cctv-nepal).
