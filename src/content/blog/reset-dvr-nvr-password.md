---
title: "How to reset a forgotten DVR or NVR password: Hikvision and Dahua owner recovery"
description: "Locked out of your own recorder? Vendor-approved Hikvision SADP and Dahua DMSS recovery steps, what support asks for, and what to avoid."
date: 2026-10-27
tags: [setup, guides]
updated: 2026-10-27
draft: false
cover: ../../assets/blog/reset-dvr-nvr-password/nvr-recorder.jpg
coverAlt: Black network video recorder with a front panel of buttons and a blue control wheel
takeaways:
  - "Hikvision's SADP route needs a QR code or XML file sent to Hikvision support with a photo of the device label, and the key it sends back is valid for 48 hours."
  - "Dahua's DMSS route works only if an email address was entered when the device was first set up."
  - "On Dahua recorders with the older blue interface, support can issue a code if you email the full serial number and the date shown on the screen."
  - "Do not reboot the recorder or export a new Hikvision file between sending the request and importing the reply, or the key may fail."
  - "A factory reset of a Hikvision camera does not free it from a Hik-Connect account."
credits:
  - file: nvr-recorder.jpg
    title: "Lorex 4K NVR"
    author: "Parksondoi"
    source: "https://commons.wikimedia.org/wiki/File:Lorex_4K_NVR.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: control-room-monitor-wall.jpg
    title: "CCTV control room monitor wall"
    author: "Mark Yeomans"
    source: "https://commons.wikimedia.org/wiki/File:CCTV_control_room_monitor_wall.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
faq:
  - q: "Can I reset a Hikvision recorder password myself?"
    a: "Not entirely. Hikvision's SADP procedure has you export a QR code or XML file and send it, with a photo of the device label, to Hikvision support. They send back a key or an encrypted file that you import in SADP to set a new password."
  - q: "How long is the Hikvision reset key valid?"
    a: "Hikvision's SADP guide says the key or XML file is valid for 48 hours. If the reset fails, reboot the device and your computer and re-export, and do not reboot or re-export again before importing the file."
  - q: "What is error 2022 in SADP?"
    a: "Hikvision support says error 2022 means the XML file is no longer usable, because the device rebooted, the file has wrong information or too much time has passed. Re-export the file and send it again."
  - q: "How do I reset a Dahua recorder password with the app?"
    a: "On the recorder or its web page choose Forgot password and a QR code appears. In DMSS go to Tool Manager, then Password Resetting, and scan it. A security code is emailed to the address set at initialization, which you enter on the recorder. This works only if email recovery was set up."
  - q: "What if the Dahua recorder has no recovery email?"
    a: "DahuaWiki lists a support route for recorders on the older blue interface only: email the full serial number and the date shown on screen to Dahua support, then use the code you receive. It says this cannot be done on the newer interfaces."
  - q: "Will a reset delete my recordings?"
    a: "The vendor password procedures above change the password and do not mention erasing recordings. A factory default is different and can erase settings. Ask the vendor or dealer for your model before you default anything."
  - q: "Is there an official reset for CP Plus or Uniview?"
    a: "I could not open an official CP Plus procedure, and Uniview's pages were not reachable, so this guide does not describe them. Contact your dealer or the vendor's support with the serial number and proof of purchase."
  - q: "Can I reset it if the recorder is not mine?"
    a: "No. Vendors ask for proof of ownership for a reason. If the recorder belongs to an employer, landlord or client, ask the owner."
---

Forgetting the password to your own recorder is common. An installer sets it and leaves, an employee changes it and goes, or the email used at setup is no longer yours. Both Hikvision and Dahua publish owner recovery procedures. This guide walks through them, using the vendors' own pages, and explains what support will ask for. It does not cover bypass tools, and it will not help you open a recorder that is not yours.

If the problem is an old default password, read [default passwords on CCTV cameras](/blog/default-passwords-cctv-cameras). If the app is the problem and not the recorder login, see [Hik-Connect not working](/blog/hik-connect-not-working) or [DMSS app offline](/blog/dmss-app-offline-dahua).

![Black network video recorder with front buttons and a round blue control dial](../../assets/blog/reset-dvr-nvr-password/nvr-recorder.jpg "Before you start, note the model, the full serial number and the date and time the recorder shows. Support asks for them. Photo: Parksondoi, CC BY-SA 4.0")

## Before you start

Gather what both vendors ask for.

1. Confirm you own the recorder or are authorised by the owner.
2. Take a photo of the device label. Hikvision's guide asks for a device label picture.
3. Write down the full serial number.
4. Check the recorder's date and time. Dahua's support route asks for the date shown on the screen, and Hikvision's security code route asks for the start time.
5. Find your proof of purchase. Dahua's unbinding page asks for one if available.
6. Put a computer on the same network as the recorder, with a monitor and mouse on the recorder if you can.

## Hikvision: the SADP route

Hikvision's US support site gives a PDF titled "Reset password with xml file QR code via SADP on computer" (version 1.1, 14 May 2024). It is the vendor's own owner recovery procedure ([Hikvision support](https://supportusa.hikvision.com/support/solutions/articles/17000128967-how-to-reset-your-hikvision-devices-password-using-sadp)).

### Preparation

1. Download the SADP tool from Hikvision's official website. There are builds for Windows and Mac.
2. The device and the computer with SADP must be on the same LAN.
3. Open SADP, select the device and click Forgot Password.
4. Work out which situation you are in, because the screen differs.

### Situation 1: QR code or XML file

1. In SADP tick the device and click Forgot Password.
2. Choose one method: Generate QR code (saves a screenshot of the QR code), Export QR code, or Export device feature code file (saves an XML file).
3. Send the saved file or QR code to the Hikvision support team, with the device label picture, and wait for the reply.
4. When you receive a key or an encrypted file, choose Input Key or Import File in SADP, enter the code or import the encrypted XML file, set a new password and click Confirm.

Hikvision attaches a warning: the key or XML file is valid for 48 hours. If the reset fails, reboot the Hikvision device and your computer, re-export the QR code or XML file, and keep the device running. Do not reboot the device or export the file again before importing the reply.

### Situation 2: security code

You may see a pop-up asking for a Security Code after clicking Forgot Password. Hikvision's steps are:

1. Reboot the device.
2. Copy the Start Time and the full Device Serial Number.
3. Send them to Hikvision technical support with a device label picture. Support sends back security codes.
4. Reboot the device again, check the start time, choose the security code that matches the device's start time, enter it and click Confirm.

The guide says how to check the start time. For a DVR that is running, read it on the monitor connected to the DVR. For an NVR connected to IP cameras, read it on the camera's on-screen display. If the NVR has no IP cameras, reboot it and read the start time in SADP as the current time. If the reset fails, reboot, search again in SADP and send the start time and full serial number again.

### Hikvision error messages

| Message | What Hikvision support says | Source |
|---|---|---|
| "Device rejected" in SADP | Close SADP, run it as administrator, and start the process again | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000128853-why-is-sadp-giving-me-a-device-rejected-error-when-trying-to-reset-my-password-) |
| Error 2022 | The XML file is invalid because the device rebooted, the file has wrong information or too long passed. Re-export it and send it again | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000128972-why-am-i-getting-error-2022-when-resetting-a-password-) |
| Error 2022, persistent | Regenerate the files, reply to the analyst's email with the new files, and if it persists contact technical support from a computer on the network, since a remote session may be needed | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000129886-what-does-error-code-2022-mean-when-i-am-resetting-my-password-) |

### Cameras behind an NVR's PoE ports

If you cannot see cameras in SADP but can see the NVR, Hikvision explains that cameras plugged into the PoE ports on the back of an NVR sit on their own private network. Plug a computer into one of the PoE ports, or use a cable from the NVR to your router, so SADP can reach them ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128664-why-can-t-i-see-my-cameras-on-sadp-but-i-can-see-my-nvr-)).

### A Hikvision IP camera reset

Hikvision also gives a factory default procedure for an IP camera powered over PoE. Hold the reset button for 1.5 minutes (90 seconds). After the first 30 seconds disconnect the network cable while still holding. Wait 30 seconds, reconnect the cable, wait 30 more seconds, then release. The camera returns to a factory un-activated state ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128680-how-do-i-default-a-hikvision-ip-camera-)). This is a reset to default, so it clears the settings. Check your model's manual first.

A default does not free the device from a Hik-Connect account. Hikvision says it has to be unbound or deleted from the account ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128727-will-defaulting-my-device-unbind-it-from-hikconnect-)).

## Dahua: the DMSS route

DahuaWiki's Password Reset page lists the options by device type ([source](https://dahuawiki.com/Password_Reset)).

| Device | Options |
|---|---|
| NVR or XVR | Reset using the DMSS app (email recovery must have been set up). Reset using a reset code, only on firmware before 4.0 |
| IP camera | Reset using ConfigTool on a computer on the same network. Reset using DMSS (email recovery must have been set up during initialization). Reset with the reset button, available on most models |

### Reset a recorder with DMSS

DahuaWiki's NVR page says an email address must have been entered during device initialization for this to work ([source](https://dahuawiki.com/FAQ/Password_Reset_NVR_DMSS)).

1. On the recorder's local interface, right click on the live view to reach the login prompt, click Forgot Pattern if enabled, then the Forgot Password option. Or open the recorder's IP address in a browser and click Forgot password at the login.
2. Click OK on the prompt. A QR code appears. The email address on file is partly shown.
3. In DMSS, select Tool Manager, then Password Resetting, and scan the QR code.
4. A confirmation shows the reset worked, and an email with a security code is sent to the address on file.
5. Enter that code at the Forgot Password screen, then enter a new password.

If you get an error message in the app, DahuaWiki says you cannot use this method and should try another option. The IP camera version of the steps is on a separate page ([source](https://dahuawiki.com/FAQ/Password_Reset_IPC_DMSS)): type the camera's IP into a browser, choose Forgot password, scan the QR code in DMSS and enter the emailed security code.

An independent guide that tested the method on a Dahua NVR says the security code emailed is valid for 24 hours ([Learn CCTV](https://learncctv.com/reset-dahua-nvr-password/amp/)). I did not find that figure on Dahua's own page, so treat it as a guide.

### When there is no recovery email

DahuaWiki gives a support route for a recorder where neither email recovery nor security questions were set up. It works only on the older blue interface and cannot be done on the orange and grey or black interface ([source](https://dahuawiki.com/FAQ/Password_Reset_Instructions)).

1. With a monitor and mouse connected and access to your email, send the full device serial number and the date shown on the screen to Dahua's US support email address given on that page.
2. When you receive a code from support, right click and choose Main Menu.
3. Under the Admin account, enter the code from support.
4. Go to Settings, System, Account, then Modify next to the Admin username.
5. Tick modify password, enter the support code as the old password, then enter and confirm a new password and save.

A 2017 IPVM discussion quotes a Dahua staff member saying that on newer firmware the older daily code no longer works. The two options there are a QR code reset by email, or security questions, which are valid on the local menu only, and that old firmware is handled by Dahua technical support the old way ([IPVM](https://ipvm.com/discussions/dahua-nvr-dvr-password-recovery-hassle)). That is dated, so use DahuaWiki's current pages first.

### Dahua IP cameras with ConfigTool

For a Dahua IP camera there is a third route on DahuaWiki. In ConfigTool on a computer on the same network, you choose Password Reset, find the device, check it has the XML reset option under Support, click Reset, agree, choose XML File as the reset mode and confirm. You can select several cameras and use Batch Reset to make one XML file. DahuaWiki says these instructions cannot be completed without assistance from Dahua Technical Support ([source](https://dahuawiki.com/FAQ/Password_Reset_IPC_ConfigTool)). It also notes that most Dahua IP cameras have a physical reset button that returns the device to factory defaults, and to check the camera's product page to see whether your model has one.

## Other brands

CP Plus, Uniview and other brands also sell in Nepal. I could not open an official recovery procedure for either, so this guide does not describe them. Ask your dealer or the maker's support, and have the serial number, the device label photo and your proof of purchase ready.

## What not to do

- Do not use cracking tools, leaked passwords or exploits from forums. A wrong step can corrupt the firmware or lock the device.
- Do not buy a reset code from a stranger. Hikvision and Dahua both issue codes through their own support teams.
- Do not reset a recorder that is not yours.
- Do not factory default a recorder to get in if you need the recordings or the settings. Ask the vendor first.

## After you get back in

1. Set a strong, unique password and store it safely. Use a password manager or a sealed envelope held by two people.
2. Set the recovery email. Dahua's DMSS route works only if an email was entered, so add one now.
3. Create separate accounts for staff instead of sharing the admin login.
4. Write the handover: model, serial number, account name, where the password is stored. See the [installer handover guide](/blog/installer-site-handover-guide).
5. Update the firmware. Hikvision says it recommends keeping devices on the latest firmware because updates fix bugs and patch security issues ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128914-my-hikvision-devices-are-behind-on-firmware-what-is-hikvision-s-stance-on-firmware-upgrades-)).
6. Change every default on the cameras. See [default passwords](/blog/default-passwords-cctv-cameras).

LunaCam stores device credentials encrypted, shows them masked and can rotate them, so the owner holds them without keeping a notebook. It works through the [LunaCam Box](/products/lunacam-box), and [pricing](/pricing) lists the plans.

![Wall of monitors in a control room showing grids of street and car park camera views](../../assets/blog/reset-dvr-nvr-password/control-room-monitor-wall.jpg "Larger sites with many recorders need a record of who holds each password. Photo: Mark Yeomans, CC BY-SA 4.0")

## Questions to ask support

1. What do you need to confirm I own the device?
2. Which method applies to my model and firmware?
3. Will this keep my recordings and settings?
4. How long is the key or code valid, and what must I not do while I wait?
5. If it fails, what do I send next?

## Checklist

1. Ownership confirmed.
2. Label photo, serial number, date and start time written down.
3. Computer on the same network, SADP or DMSS ready.
4. Vendor's own method used, in order.
5. No reboot or re-export between request and reply (Hikvision).
6. New password stored safely, recovery email set.
7. Defaults changed on the cameras.

## Sources

- [Hikvision support: Reset password using SADP (PDF)](https://supportusa.hikvision.com/support/solutions/articles/17000128967-how-to-reset-your-hikvision-devices-password-using-sadp)
- [Hikvision support: SADP device rejected](https://supportusa.hikvision.com/support/solutions/articles/17000128853-why-is-sadp-giving-me-a-device-rejected-error-when-trying-to-reset-my-password-)
- [Hikvision support: Error 2022](https://supportusa.hikvision.com/support/solutions/articles/17000128972-why-am-i-getting-error-2022-when-resetting-a-password-)
- [Hikvision support: Error code 2022](https://supportusa.hikvision.com/support/solutions/articles/17000129886-what-does-error-code-2022-mean-when-i-am-resetting-my-password-)
- [Hikvision support: Cameras not visible in SADP](https://supportusa.hikvision.com/support/solutions/articles/17000128664-why-can-t-i-see-my-cameras-on-sadp-but-i-can-see-my-nvr-)
- [Hikvision support: Default a Hikvision IP camera](https://supportusa.hikvision.com/support/solutions/articles/17000128680-how-do-i-default-a-hikvision-ip-camera-)
- [Hikvision support: Defaulting and Hik-Connect binding](https://supportusa.hikvision.com/support/solutions/articles/17000128727-will-defaulting-my-device-unbind-it-from-hikconnect-)
- [Hikvision support: Firmware stance](https://supportusa.hikvision.com/support/solutions/articles/17000128914-my-hikvision-devices-are-behind-on-firmware-what-is-hikvision-s-stance-on-firmware-upgrades-)
- [DahuaWiki: Password Reset](https://dahuawiki.com/Password_Reset)
- [DahuaWiki: Password Reset NVR DMSS](https://dahuawiki.com/FAQ/Password_Reset_NVR_DMSS)
- [DahuaWiki: Password Reset IPC DMSS](https://dahuawiki.com/FAQ/Password_Reset_IPC_DMSS)
- [DahuaWiki: Password Reset IPC ConfigTool](https://dahuawiki.com/FAQ/Password_Reset_IPC_ConfigTool)
- [DahuaWiki: Password Reset Instructions](https://dahuawiki.com/FAQ/Password_Reset_Instructions)
- [IPVM: Dahua NVR DVR password recovery](https://ipvm.com/discussions/dahua-nvr-dvr-password-recovery-hassle)
- [Learn CCTV: Reset Dahua NVR password](https://learncctv.com/reset-dahua-nvr-password/amp/)
