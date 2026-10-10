// Scripted examples shown in the product demos. They show what the screen
// looks like; they are not customer data.
export interface FeedLine { at: string; text: string; tag?: string }
export interface Feed { title: string; lines: FeedLine[] }

export const feeds: Record<string, Feed> = {
  pairing: {
    title: 'Pairing a LunaCam Box',
    lines: [
      { at: '10:02', text: 'Box connected to LunaCam. No port forwarding needed.', tag: 'Online' },
      { at: '10:02', text: 'Found 4 devices on the network: 1 Hikvision DVR, 2 Dahua cameras, 1 ONVIF camera.' },
      { at: '10:03', text: 'Two cameras still use the default password.', tag: 'Weak password' },
      { at: '10:04', text: 'Passwords changed. Credentials stay on the box.', tag: 'Done' },
      { at: '10:04', text: '12 channels ready. Live view is open on your phone.' },
    ],
  },
  alerts: {
    title: 'Alerts',
    lines: [
      { at: '21:14', text: 'Motion at Back gate, with a snapshot.', tag: 'Motion' },
      { at: '21:40', text: 'Person detected at Main shutter. Armed: Away.', tag: 'Person' },
      { at: '22:05', text: 'Camera 6 went offline. Last seen 22:04.', tag: 'Offline' },
      { at: '22:31', text: 'DVR disk is almost full. Recording stops in about 2 days.', tag: 'Disk' },
      { at: '23:00', text: 'Quiet hours started. Only person alerts come through.' },
    ],
  },
  evidence: {
    title: 'Case 0147, chain of custody',
    lines: [
      { at: 'Mon 09:12', text: 'Bookmark added at Counter 2 with a note.', tag: 'Bookmark' },
      { at: 'Mon 09:30', text: '3 clips and 2 snapshots added to the case.', tag: 'Case' },
      { at: 'Mon 10:05', text: 'Export created. SHA-256 recorded, watermark applied.', tag: 'Export' },
      { at: 'Mon 10:07', text: 'Expiring, password-protected link shared.', tag: 'Shared' },
      { at: 'Tue 11:48', text: 'Link opened once. Export verified against its signed manifest.', tag: 'Verified' },
    ],
  },
  developer: {
    title: 'Event stream',
    lines: [
      { at: '14:20:01', text: 'camera.online  site=branch-12 channel=3', tag: 'Event' },
      { at: '14:20:44', text: 'alarm.created  severity=high zone=vault', tag: 'Event' },
      { at: '14:20:44', text: 'webhook delivered to your endpoint, signed, 200 OK', tag: 'Webhook' },
      { at: '14:21:10', text: 'alarm.acknowledged  reason=guard_sent', tag: 'Event' },
    ],
  },
};
