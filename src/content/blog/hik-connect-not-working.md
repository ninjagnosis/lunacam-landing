---
title: "Hik-Connect not working? How to fix offline, unbind and code errors"
description: "Fix Hik-Connect offline, device already added, wrong verification code and 5 minute live view limits with steps from Hikvision's own support pages."
date: 2026-10-20
tags: [setup, guides]
updated: 2026-10-20
draft: false
cover: ../../assets/blog/hik-connect-not-working/hikvision-camera-carouge.jpg
coverAlt: White Hikvision camera hanging from a ceiling rail with a green glowing lower section
takeaways:
  - "Hikvision's own checklist for an offline recorder starts on the recorder: Platform Access switched on, a cable plugged in, then DHCP and DNS."
  - "Hikvision recommends 8.8.8.8 as the preferred DNS, with 8.8.4.4 or 1.1.1.1 as the alternate."
  - "Resetting a recorder to default does not unbind it from a Hik-Connect account. The account owner, SADP or the app has to unbind it."
  - "Hik-Connect live view stops after 5 minutes by design, to limit mobile data use."
  - "A wrong date can be a symptom of a dead CMOS battery. Hikvision names the CR1220 as the cell its devices use."
credits:
  - file: hikvision-camera-carouge.jpg
    title: "Hikvision @ P+R Étoile @ Carouge (50514011831)"
    author: "Guilhem Vellut from Annecy, France"
    authorUrl: "https://www.flickr.com/people/22539273@N00"
    source: "https://commons.wikimedia.org/wiki/File:Hikvision_@_P%2BR_%C3%89toile_@_Carouge_(50514011831).jpg"
    licence: CC BY 2.0
    changes: "Resized"
  - file: tp-link-wifi-router.jpg
    title: "TP-Link AX1500 Wi-Fi 6 Router Front"
    author: "Abhi25t"
    source: "https://commons.wikimedia.org/wiki/File:TP-Link_AX1500_Wi-Fi_6_Router_Front.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
  - file: network-cables-router.jpg
    title: "Network cables plugged to router 20170903"
    author: "Santeri Viinamäki"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Zunter"
    source: "https://commons.wikimedia.org/wiki/File:Network_cables_plugged_to_router_20170903.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
faq:
  - q: "Why does Hik-Connect say my device is offline?"
    a: "The recorder cannot reach the Hik-Connect service. Hikvision's checklist covers the cable, the Platform Access switch in System Configuration, Network, Advanced, DHCP and the DNS addresses. Start on the recorder screen, not the app."
  - q: "What DNS should I set for Hik-Connect?"
    a: "Hikvision support recommends a preferred DNS of 8.8.8.8. Its pages give 8.8.4.4 or 1.1.1.1 as the alternate."
  - q: "Why can I not add my recorder to my account?"
    a: "A device can be bound to one Hik-Connect account at a time. If someone else added it before, it must be unbound first, using the app, the SADP tool or the old account."
  - q: "Will a factory reset free my recorder from the old account?"
    a: "No. Hikvision says defaulting the device does not remove it from the Hik-Connect account. It has to be deleted or unbound from the account."
  - q: "Why does live view stop after 5 minutes?"
    a: "Hikvision says the 5 minute limit is intentional, to reduce cellular bandwidth use. For longer live view it suggests adding the device by IP or domain with port forwarding."
  - q: "I get events in the app but no phone alerts when the app is closed. Why?"
    a: "Hikvision says to enable push notifications for Hik-Connect in the phone settings."
  - q: "What do I do if I forgot my Hik-Connect account password?"
    a: "Go to www.hik-connect.com, choose Forgot Password, enter the email or phone number you registered with and the captcha, then the security code that is sent to you."
  - q: "Does Hik-Connect need port forwarding?"
    a: "Not for the standard cloud service. Hikvision lists port forwarding only for Hik-Connect DDNS and for direct IP access, which are separate methods."
---

When Hik-Connect stops working, the app is rarely the cause. The recorder has lost its link to the Hik-Connect cloud, or the account and the recorder disagree about who owns the device. This guide follows Hikvision's own support pages, in the order that finds the fault fastest, and adds the fixes that Hikvision's US support site and installer guides give for the common error messages.

If you are deciding whether to keep using Hik-Connect at all, read [Hik-Connect alternatives in Nepal](/blog/hik-connect-alternative-nepal) instead. I found no Nepal-specific outage page or local Hikvision support article while researching this, so everything below comes from Hikvision's international and US pages and from installer guides.

## What Hik-Connect is

Hikvision describes Hik-Connect as both an application and a cloud service that connects cameras or an NVR to a phone, tablet or computer. You register an account, sign in to the app, then add the device. On a computer the same service works through iVMS-4200 on Windows or Mac ([Hikvision support: How to set up Hik-Connect](https://supportusa.hikvision.com/support/solutions/articles/17000110900-how-to-setup-hikconnect)).

The same article lists two other ways to connect that are not the cloud service: Hik-Connect DDNS, which needs port forwarding, and direct WAN IP access or third party DDNS such as No-IP or DynDNS. Hikvision calls these advanced configurations. This guide is about the standard cloud service.

![White Hikvision camera with a black panel hanging from a ceiling rail, its lower dome glowing green](../../assets/blog/hik-connect-not-working/hikvision-camera-carouge.jpg "A Hikvision camera on a ceiling rail. Hik-Connect links cameras and recorders like this to a phone through the maker's cloud. Photo: Guilhem Vellut, CC BY 2.0")

## Step 1. Check the recorder, not the phone

Hikvision's article "Why is my Platform Access offline?" gives this order ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128685-why-is-my-platform-access-offline-)).

1. Check the recorder is physically plugged into your network.
2. On the recorder, go to System Configuration, then Network, then Advanced, then Platform Access, and make sure it is enabled.
3. If it is still offline, go to System Configuration, then Network and note the IPv4 address. Turn DHCP on and save. If it was already on, turn it off, save, then turn it on and save. Check whether the IPv4 address has changed. If it has not changed, Hikvision asks to hear from you.
4. If the address did change, untick DHCP and set the Preferred DNS to 8.8.8.8 and the Alternate DNS to 8.8.4.4.

Another Hikvision page on DNS gives the recommended preferred DNS as 8.8.8.8 and the alternate as 1.1.1.1 ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128852-when-using-the-hik-connect-service-what-should-the-preferred-and-alternate-dns-be-set-to-)). Both pages agree on 8.8.8.8 as the preferred server.

![White router with a Netgear label seen from behind with blue, white and grey network cables in its ports](../../assets/blog/hik-connect-not-working/network-cables-router.jpg "Step 1 is the cable. Check that the recorder's network cable is firmly seated and the link light is on. Photo: Santeri Viinamäki, CC BY-SA 4.0")

## Step 2. Work through Hikvision's longer checklist

Hikvision's "Troubleshooting platform access offline on device" article adds these checks ([source](https://supportusa.hikvision.com/support/solutions/articles/17000146654-troubleshooting-platform-access-offline-on-device)).

1. Confirm the Platform Access or Hik-Connect enable box is ticked.
2. Change the platform access server address to one of these: dev.hik-connect.com, litedev.hik-connect.com, dev.us.hik-connect.com or litedev.us.hik-connect.com.
3. Set the preferred DNS to 8.8.8.8. The alternate DNS can be the one from your provider, the device's gateway, 8.8.4.4 or 1.1.1.1.
4. Reboot the device.
5. Confirm the device is getting internet. You can use DHCP or static settings.
6. If static, connect a PC to the same network and run ipconfig in a command prompt. The device's gateway should match the PC's, and its IP should be on the same subnet.
7. On a recorder, use the network detection (net detect) tool in the local menu to ping the gateway and the preferred DNS.
8. Check that the STUN ports 6002, 6800, 8555, 9010 and 9020 are not closed by a firewall.
9. If the network is very secure and blocks remote connections, ask the IT person on site to check that the ports Hik-Connect needs are not blocked.
10. A router firewall may be blocking P2P. If you can reach the router, test by turning security settings off. If that fixes it, create an exception for the device.
11. Check whether the recorder is listed under "blocked devices" in the router.
12. As a last resort, default the unit or upgrade the firmware.

Hikvision adds that its support does not make changes to a customer's router or firewall.

The ports in item 8 are for the cloud link, which is outbound traffic. They are not the same as the ports you forward for direct access. For direct IP access, Hikvision lists the HTTP port (default 80) for a web browser, and the server port (default 8000) and RTSP port (default 554 or 10554) for the mobile app and iVMS-4200 ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128725-what-port-forwards-are-required-for-direct-ip-remote-access-)). Avoid opening those unless you know why. The [CGNAT guide](/blog/cctv-remote-viewing-cgnat-nepal) explains why they often cannot work from a shared address anyway.

![Black TP-Link router with four upright antennas seen from the front](../../assets/blog/hik-connect-not-working/tp-link-wifi-router.jpg "Hikvision's checklist asks you to look at the router too, including its blocked devices list and firewall. Photo: Abhi25t, CC BY-SA 4.0")

## Step 3. Check the date and time

If the recorder keeps going back to a date in the 1970s, Hikvision says the cause is a bad CMOS battery, and the model its devices use is the CR1220 ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128830-why-does-my-recorder-reset-my-date-to-the-1970s-cmos-battery-cr1220)). Hikvision does not tie this to Hik-Connect, but a recorder that forgets the date after every power cut also cannot keep reliable recording times. An installer guide on the picture loading problem also suggests making sure the time is right and synced by NTP ([SecurityCamCenter](https://securitycamcenter.com/hik-connect-loading-picture-failed/)).

## Step 4. Test the phone separately

Switch the phone off Wi-Fi and open Hik-Connect on mobile data. If it works on mobile data but not on your home Wi-Fi, look at the home network. If it fails on both, the recorder is offline or on a different account.

## Common errors and fixes

| What you see | What Hikvision or an installer guide says | Source |
|---|---|---|
| Device offline in Platform Access | Follow steps 1 and 2 above | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000128685-why-is-my-platform-access-offline-) |
| "The device is added by other users" | A device can be added by one account only. Unbind it using the app, SADP or the old account | [Learn CCTV](https://learncctv.com/hik-connect-device-added-by-other-users/) |
| Defaulting did not free the device | Defaulting does not remove it from the account. It must be unbound or deleted | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000128727-will-defaulting-my-device-unbind-it-from-hikconnect-) |
| Error 102060 when unbinding | The device is a legacy device that does not support self-service unbinding. Get into the bound account and delete it there | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000128896-cannot-unbind-error-code-102060) |
| Live view stops after 5 minutes | Intentional, to reduce cellular data use | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000128663-why-do-my-cameras-time-out-after-5-minutes-when-using-hik-connect-) |
| Alerts show only while the app is open | Enable push notifications for Hik-Connect in phone settings | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000128703-i-am-receiving-notifications-when-my-app-is-open-why-won-t-my-phone-notify-me-when-the-app-is-closed) |
| Stream encrypted, wrong key | The "encryption key" is the verification code set when Platform Access was enabled | [SecurityCamCenter](https://securitycamcenter.com/fix-invalid-encryption-key-error-hikvision/) |
| Alert thumbnails fail to load | One guide suggests turning stream encryption off in Platform Access, rebooting, updating firmware and checking the time | [SecurityCamCenter](https://securitycamcenter.com/hik-connect-loading-picture-failed/) |

## Limits of the Hik-Connect service itself

Some things that look like faults are limits that Hikvision documents.

| Symptom | What Hikvision says | Source |
|---|---|---|
| Playback will not fast forward | The Hik-Connect service does not allow fast forward. To fast forward, add the device by IP/Domain instead of the Hik-Connect P2P service | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000128684-why-can-t-i-fast-forward-through-playback-on-hik-connect-) |
| Notification schedule is missing | On devices running firmware V5.03.020 and newer the notification schedule feature is no longer supported. Use the Group Arming/Disarming function instead | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000146073-hik-connect-notification-schedule-missing) |
| A WiFi kit camera will not connect on its own | A WiFi kit camera installed separately as a stand-alone camera does not connect to the internet over WiFi. To connect as a solo camera it must be hardwired | [Hikvision](https://supportusa.hikvision.com/support/solutions/articles/17000137768-wifi-kit-camera-not-compatible-stand-alone-hik-connect-wifi) |
| Human and vehicle colours missing in playback | The coloured playback progress bar needs Hik-Connect V5.0 or above, and on the recorder a professional menu NVR above V4.62, a simplified menu NVR above V4.74, or a DVR above 4.75.000 | [Hikvision FAQ document](https://supportusa.hikvision.com/support/solutions/articles/17000143726-human-vehicle-filter-on-hc-app-playback) |
| Arm, arm silently and disarm are missing | The feature needs Hik-Connect V5.2 or above and NVR firmware V4.63 or above | same |

Two more Hikvision pages help with setup. The Android app comes from appstore.hikvision.com ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128681-where-do-i-get-the-hik-connect-app-for-an-android-phone-)). For a computer, log in to iVMS-4200 using the cloud icon at the top right, accept the Hik-Connect prompt and sign in with your Hik-Connect account. A device that connected through the cloud shows Cloud P2P and Online in the Connection Type column ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128728-how-to-log-in-to-hik-connect-on-ivms-4200)).

## Unbinding a device you cannot access

This is the most common reason a second owner cannot add a recorder. Hikvision gives two ways to unbind an NVR or DVR from an account you do not have access to ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128905-how-do-i-unbind-my-nvr-dvr-from-an-account-i-do-not-have-access-to-)).

From a computer:

1. Connect a computer by cable to the same network as the recorder. Disable Wi-Fi and any VPN on the computer.
2. Download the latest SADP from us.hikvision.com.
3. Open SADP, tick the recorder and follow the Unbind process at the top.

From a phone:

1. Put the phone in airplane mode and connect to the main Wi-Fi network.
2. Download the latest Hik-Connect, then register an account.
3. Scan the QR code and follow the unbind process.

Learn CCTV adds that on an Android phone an Unbind button appears during setup, and that on some iPhones the button does not show, so you may need to borrow an Android phone ([source](https://learncctv.com/hik-connect-device-added-by-other-users/)). If you get error 102060, the device is a legacy model and Hikvision says you must get into the original account and delete the device there.

If you bought a used recorder, ask the seller to unbind it before you pay.

## The verification code

Installer guides describe the "encryption key" a recorder asks for as the verification code you set when you enabled Platform Access. SecurityCamCenter says it is entered under Configuration, Advanced Settings in the web interface, and that stream encryption can be turned off from a monitor connected directly to the recorder, under Configuration, Network, Access Platform, by unticking Enable Stream Encryption ([source](https://securitycamcenter.com/fix-invalid-encryption-key-error-hikvision/)). I did not find a Hikvision page that documents the same menu, so check it against your recorder's manual.

## Forgot the account password

Hikvision's page for the Hik-Connect account says to go to www.hik-connect.com, choose Forgot Password, enter the email address or phone number you registered with and the captcha, then enter the security code sent to that email or phone, and set a new password ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128915-how-do-you-reset-the-hik-connect-account-password-)). This resets the account password. A forgotten recorder password is a different problem, covered in [how to reset a forgotten DVR or NVR password](/blog/reset-dvr-nvr-password).

## Keep firmware current

Hikvision's stance is that it always recommends keeping devices on the latest firmware, because updates fix bugs and patch security issues ([source](https://supportusa.hikvision.com/support/solutions/articles/17000128914-my-hikvision-devices-are-behind-on-firmware-what-is-hikvision-s-stance-on-firmware-upgrades-)). Use firmware from Hikvision or your dealer. If your device is offline, a firmware update is the last item in Hikvision's checklist, after the network checks.

## When the vendor cloud is the problem

Several of the fixes above come from the account model: one device on one account, and a mandatory path through the maker's servers. If you would rather not depend on it, a connect-out box is another route. The [LunaCam Box](/products/lunacam-box) connects your Hikvision or Dahua recorder, and cameras of other makes over ONVIF and RTSP, to the LunaCam app through an outbound encrypted tunnel, with no port forwarding. LunaCam also keeps device credentials encrypted and lets the owner rotate them. See [pricing](/pricing) and [how to watch a DVR from your phone](/blog/watch-dvr-from-phone-nepal) for the three methods compared.

## A checklist to keep

1. Recorder: cable in, link light on.
2. System Configuration, Network, Advanced, Platform Access: enabled and showing online.
3. IPv4 address, gateway and DNS filled in. Preferred DNS 8.8.8.8.
4. Date and time correct. A date in the 1970s points at the CMOS battery.
5. Router: recorder not in the blocked devices list.
6. Account: the device is bound to your account only.
7. Phone: push notifications on, and a test on mobile data.
8. Firmware current.
9. Default password changed. See [default passwords](/blog/default-passwords-cctv-cameras).

## Sources

- [Hikvision support: Troubleshooting platform access offline on device](https://supportusa.hikvision.com/support/solutions/articles/17000146654-troubleshooting-platform-access-offline-on-device)
- [Hikvision support: Why is my Platform Access offline?](https://supportusa.hikvision.com/support/solutions/articles/17000128685-why-is-my-platform-access-offline-)
- [Hikvision support: DNS settings for Hik-Connect](https://supportusa.hikvision.com/support/solutions/articles/17000128852-when-using-the-hik-connect-service-what-should-the-preferred-and-alternate-dns-be-set-to-)
- [Hikvision support: How to set up Hik-Connect](https://supportusa.hikvision.com/support/solutions/articles/17000110900-how-to-setup-hikconnect)
- [Hikvision support: Unbinding a recorder you cannot access](https://supportusa.hikvision.com/support/solutions/articles/17000128905-how-do-i-unbind-my-nvr-dvr-from-an-account-i-do-not-have-access-to-)
- [Hikvision support: Will defaulting unbind the device?](https://supportusa.hikvision.com/support/solutions/articles/17000128727-will-defaulting-my-device-unbind-it-from-hikconnect-)
- [Hikvision support: Error 102060](https://supportusa.hikvision.com/support/solutions/articles/17000128896-cannot-unbind-error-code-102060)
- [Hikvision support: 5 minute live view limit](https://supportusa.hikvision.com/support/solutions/articles/17000128663-why-do-my-cameras-time-out-after-5-minutes-when-using-hik-connect-)
- [Hikvision support: Push notifications](https://supportusa.hikvision.com/support/solutions/articles/17000128703-i-am-receiving-notifications-when-my-app-is-open-why-won-t-my-phone-notify-me-when-the-app-is-closed)
- [Hikvision support: Reset the Hik-Connect account password](https://supportusa.hikvision.com/support/solutions/articles/17000128915-how-do-you-reset-the-hik-connect-account-password-)
- [Hikvision support: Port forwards for direct IP access](https://supportusa.hikvision.com/support/solutions/articles/17000128725-what-port-forwards-are-required-for-direct-ip-remote-access-)
- [Hikvision support: Firmware stance](https://supportusa.hikvision.com/support/solutions/articles/17000128914-my-hikvision-devices-are-behind-on-firmware-what-is-hikvision-s-stance-on-firmware-upgrades-)
- [Hikvision support: Playback fast forward](https://supportusa.hikvision.com/support/solutions/articles/17000128684-why-can-t-i-fast-forward-through-playback-on-hik-connect-)
- [Hikvision support: Notification schedule](https://supportusa.hikvision.com/support/solutions/articles/17000146073-hik-connect-notification-schedule-missing)
- [Hikvision support: WiFi kit camera stand-alone](https://supportusa.hikvision.com/support/solutions/articles/17000137768-wifi-kit-camera-not-compatible-stand-alone-hik-connect-wifi)
- [Hikvision support: Hik-Connect FAQ on human and vehicle playback](https://supportusa.hikvision.com/support/solutions/articles/17000143726-human-vehicle-filter-on-hc-app-playback)
- [Hikvision support: iVMS-4200 login](https://supportusa.hikvision.com/support/solutions/articles/17000128728-how-to-log-in-to-hik-connect-on-ivms-4200)
- [Hikvision support: CMOS battery and the 1970s date](https://supportusa.hikvision.com/support/solutions/articles/17000128830-why-does-my-recorder-reset-my-date-to-the-1970s-cmos-battery-cr1220)
- [Learn CCTV: device added by other users](https://learncctv.com/hik-connect-device-added-by-other-users/)
- [SecurityCamCenter: invalid encryption key](https://securitycamcenter.com/fix-invalid-encryption-key-error-hikvision/)
- [SecurityCamCenter: picture loading failed](https://securitycamcenter.com/hik-connect-loading-picture-failed/)
