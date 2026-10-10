export type DemoKind = 'live' | 'timeline' | 'feed';

export interface Faq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  /** One line, used in lists and meta. */
  short: string;
  /** Search title: what people type, e.g. "Hik-Connect alternative in Nepal". */
  seoTitle: string;
  /** The page's h1. */
  headline: string;
  description: string;
  demo: { kind: DemoKind; feed?: string };
  problem: { heading: string; body: string[] };
  gets: string[];
  /** How it works, in order: what you do and what it does. */
  how: { h: string; p: string }[];
  /** Plain facts: label and value. */
  specs: [string, string][];
  faq: Faq[];
}

export const products: Product[] = [
  {
    slug: 'camera-app',
    name: 'Camera App',
    short: 'Watch any DVR or camera from your phone, with the video kept in Nepal.',
    seoTitle: 'Camera app in Nepal for any DVR: a Hik-Connect alternative',
    headline: 'Watch any camera from your phone',
    description: 'LunaCam is a camera app for Nepal. Watch Hikvision, Dahua, ONVIF and RTSP cameras and DVRs live, with video, passwords and recordings kept in Nepal.',
    demo: { kind: 'live' },
    problem: {
      heading: 'Your footage should not leave the country',
      body: [
        'Most camera apps send your video and your DVR password through servers abroad. You cannot say where your footage goes, or who can see it.',
        'LunaCam runs on servers, relays and storage in Nepal. It works with the cameras you already own, so nothing needs replacing.',
      ],
    },
    how: [
      { h: 'Add your cameras', p: 'Scan the box with the app, or add a DVR, NVR or camera by address.' },
      { h: 'Pick the cameras to show', p: 'Choose grids from 1 to 64 cameras and save views you use often.' },
      { h: 'Watch live', p: 'HD on Wi-Fi, and snapshots at a low frame rate on mobile data.' },
      { h: 'Share with family or staff', p: 'Choose which cameras each person sees. Temporary access ends by itself.' },
    ],
    specs: [['Brands', 'Hikvision, Dahua, and anything on ONVIF or RTSP'], ['Live grids', '1 to 64 cameras'], ['Quality', 'HD and SD, with a low-data mode'], ['Controls', 'PTZ, snapshots and two-way audio'], ['Languages', 'Nepali and English, with BS dates'], ['Cost', 'Live view and DVR playback are free to start']],
    gets: [
      'Live view for any brand, in grids from 1 to 64 cameras',
      'PTZ, snapshots and two-way audio',
      'Sharing with family and staff, with access that ends by itself',
      'Nepali and English, with Nepali (BS) dates',
    ],
    faq: [
      { q: 'Do I need to buy new cameras?', a: 'No. LunaCam works with the Hikvision, Dahua and ONVIF or RTSP cameras and recorders you already have.' },
      { q: 'Where does my video go?', a: 'Through relays and storage in Nepal. Your DVR password is never kept in the cloud in plain form.' },
      { q: 'Does it work on mobile data?', a: 'Yes. Low-data mode sends snapshots and a low frame rate when you are not on Wi-Fi.' },
    ],
  },
  {
    slug: 'lunacam-box',
    name: 'LunaCam Box',
    short: 'A small box on your network that connects your cameras without router settings.',
    seoTitle: 'LunaCam Box: connect DVRs and cameras without port forwarding',
    headline: 'Connect your cameras without router settings',
    description: 'The LunaCam Box sits on your network, finds your cameras and connects out to LunaCam. No port forwarding, so it works behind a shared or CGNAT connection.',
    demo: { kind: 'feed', feed: 'pairing' },
    problem: {
      heading: 'Router settings are the hard part',
      body: [
        'Remote viewing usually means port forwarding, a static IP or a vendor cloud. Many homes and shops have none of these, or share one connection with the whole building.',
        'The LunaCam Box connects out to LunaCam, so there is nothing to open on your router. It also keeps your camera passwords on the box.',
      ],
    },
    how: [
      { h: 'Plug in the box', p: 'It sits on your network. You can also install the agent on a PC or NVR host.' },
      { h: 'Scan the code', p: 'Pair from the app with a QR code. The box finds your cameras on its own.' },
      { h: 'Fix weak passwords', p: 'It lists cameras still on the default password and helps you change them.' },
      { h: 'Leave it running', p: 'Updates are signed by LunaCam and can roll back.' },
    ],
    specs: [['Form', 'A small box, or software on a PC, Windows, Linux or NVR host'], ['Connection', 'Outbound only, no port forwarding'], ['Pairing', 'QR code from the app'], ['Passwords', 'Stored on the box'], ['Updates', 'Signed releases with rollback'], ['Offline', 'Last seen time and an alert for every camera']],
    gets: [
      'Pairing with a QR code',
      'Camera discovery on your network',
      'No port forwarding, works behind CGNAT',
      'A weak password check',
      'Signed updates that can roll back',
    ],
    faq: [
      { q: 'What if my internet drops?', a: 'You see the last time each camera was seen, and LunaCam alerts you when one goes offline.' },
      { q: 'Can I use a PC instead of the box?', a: 'Yes. The same agent runs as software on Windows or Linux, or on an NVR host.' },
      { q: 'Are my camera passwords safe?', a: 'They stay on the box. They are not kept in the cloud in plain form.' },
    ],
  },
  {
    slug: 'playback-clips',
    name: 'Playback and Clips',
    short: 'Search your DVR on a timeline and cut a clip you can share.',
    seoTitle: 'DVR playback and clips from your phone in Nepal',
    headline: 'Find the moment and cut the clip',
    description: 'LunaCam plays back your DVR recordings on a timeline with motion, person and vehicle markers, and lets you cut and download a clip.',
    demo: { kind: 'timeline' },
    problem: {
      heading: 'Finding one minute in a day of video',
      body: [
        'When something happens you need the right minute, now. Scrubbing through hours of recording on a DVR screen is slow.',
        'LunaCam shows the timeline with markers for motion, people and vehicles, so you jump straight to the event and cut it.',
      ],
    },
    how: [
      { h: 'Pick a camera and a day', p: 'The timeline loads from your DVR or the box.' },
      { h: 'Jump to a marker', p: 'Motion, person and vehicle markers show where something happened.' },
      { h: 'Cut a clip', p: 'Mark the start and end, then download or share it.' },
      { h: 'Choose how long to keep', p: 'Retention runs from 7 to 365 days, per camera or per site.' },
    ],
    specs: [['Source', 'Your DVR, NVR or SD card'], ['Timeline', 'Motion, person and vehicle markers'], ['Clips', 'Cut and download'], ['Retention', '7 to 365 days'], ['Watermark', 'User, time and site on exports']],
    gets: [
      'A timeline with motion, person and vehicle markers',
      'Clip cutting and download',
      'Retention from 7 to 365 days',
      'Playback from the DVR you already have',
    ],
    faq: [
      { q: 'Is playback free?', a: 'Live view and DVR playback through LunaCam are free to start.' },
      { q: 'Does it replace my DVR?', a: 'No. Your DVR keeps recording. LunaCam is how you search and watch it from anywhere.' },
      { q: 'Can I share a clip?', a: 'Yes. Download it, or send an expiring link.' },
    ],
  },
  {
    slug: 'alerts',
    name: 'Alerts and Alarms',
    short: 'Alerts with a picture, and an alarm queue with checklists for your operators.',
    seoTitle: 'Camera alerts and alarm management in Nepal',
    headline: 'Know when something happens',
    description: 'LunaCam sends alerts with a snapshot, warns you when a camera or disk fails, and gives operators an alarm queue with checklists and escalation.',
    demo: { kind: 'feed', feed: 'alerts' },
    problem: {
      heading: 'Alerts nobody can act on',
      body: [
        'A bare notification tells you little. A camera that went offline last week tells you nothing until you need its footage.',
        'LunaCam sends the picture with the alert, warns you about offline cameras and failing disks, and lets you arm on a schedule with quiet hours.',
      ],
    },
    how: [
      { h: 'Choose what to watch', p: 'Motion, person, vehicle, camera offline and disk health.' },
      { h: 'Set Home, Away or Disarm', p: 'Alerts on a schedule, with quiet hours and zones you choose.' },
      { h: 'Get the picture', p: 'Each push notification carries a snapshot.' },
      { h: 'Escalate when nobody answers', p: 'No acknowledgement in 5 minutes calls the next person, by phone call.' },
    ],
    specs: [['Alerts', 'Push with a snapshot'], ['Health', 'Camera offline and DVR disk warnings'], ['Schedules', 'Home, Away, Disarm, quiet hours, zones'], ['Alarm queue', 'Priority, assignment and acknowledgement reasons'], ['Escalation', 'Phone call to the next person']],
    gets: [
      'Push notifications with a snapshot',
      'Offline camera and disk failure warnings',
      'Arming schedules with quiet hours',
      'An alarm queue with checklists for operators',
      'Escalation by phone call',
    ],
    faq: [
      { q: 'Can I turn alerts off at night?', a: 'Yes. Set quiet hours and zones, or arm Home, Away and Disarm on a schedule.' },
      { q: 'What does an operator see?', a: 'The alarm, the steps to follow beside it, and the related cameras with the video before and after.' },
      { q: 'Are person and vehicle alerts available now?', a: 'Person and vehicle detection is rolling out next. Motion, offline and disk alerts work today.' },
    ],
  },
  {
    slug: 'evidence',
    name: 'Evidence and Compliance',
    short: 'Bookmarks, cases and verified exports with every step logged.',
    seoTitle: 'CCTV evidence export and Privacy Act compliance in Nepal',
    headline: 'Evidence you can hand to the police',
    description: 'LunaCam helps banks, municipalities and businesses in Nepal bookmark footage, build cases and export evidence with a hash, signed manifest and audit log.',
    demo: { kind: 'feed', feed: 'evidence' },
    problem: {
      heading: 'Footage is only evidence if you can prove it',
      body: [
        'A clip copied to a pen drive has no history. Nobody can show who exported it, or that it was not changed.',
        'LunaCam logs every view, export and share, hashes each export and signs a manifest anyone can verify.',
      ],
    },
    how: [
      { h: 'Bookmark', p: 'Mark the moment with a note and tags.' },
      { h: 'Build a case', p: 'Group clips, snapshots, notes and the people involved.' },
      { h: 'Export', p: 'A SHA-256 hash, a signed manifest and a visible watermark with user, time and site.' },
      { h: 'Hand over', p: 'An expiring, password-protected, view-only link.' },
    ],
    specs: [['Integrity', 'SHA-256 hash and signed manifest'], ['Watermark', 'User, time and site'], ['Custody', 'Every view, export and share logged'], ['Hold', 'Legal hold blocks deletion'], ['Retention', 'Floor and plans, 7 to 365 days'], ['Law', 'Built around the Privacy Act, 2075']],
    gets: [
      'Bookmarks and cases',
      'Hashed, watermarked exports with a signed manifest',
      'A verifier anyone can use',
      'Legal hold and retention floors',
      'Police request, approval and delivery workflow',
    ],
    faq: [
      { q: 'Who can see the audit log?', a: 'Roles you choose, such as owner, admin and auditor. It records sign-ins, live views, playback, exports, PTZ moves and configuration changes.' },
      { q: 'Can footage be deleted during a case?', a: 'Not while it is under legal hold.' },
      { q: 'Does this make us compliant?', a: 'It gives you the tools the Privacy Act, 2075 asks for, such as notice, retention and delivery to police. The legal duty stays with the operator.' },
    ],
  },
  {
    slug: 'developer-platform',
    name: 'Developer Platform',
    short: 'REST API, signed webhooks, a live event stream, an embeddable player and SDKs.',
    seoTitle: 'Camera API, webhooks and SDKs for Nepal',
    headline: 'Build on LunaCam',
    description: 'LunaCam has a REST API with an OpenAPI spec, signed webhooks, a live event stream, an embeddable player and SDKs for TypeScript, Dart, Python and Go.',
    demo: { kind: 'feed', feed: 'developer' },
    problem: {
      heading: 'Cameras should fit your own software',
      body: [
        'A bank, a municipality or an installer often has its own dashboard. Camera events and video should show up there, not in a separate app.',
        'LunaCam exposes the same platform the apps use: an API, events, an embeddable player and a sandbox with virtual cameras.',
      ],
    },
    how: [
      { h: 'Create an app', p: 'Get keys from the developer portal.' },
      { h: 'Try the sandbox', p: 'Build against virtual cameras before you touch a real site.' },
      { h: 'Subscribe to events', p: 'Signed webhooks or the live event stream.' },
      { h: 'Embed the player', p: 'Show live video inside your own page.' },
    ],
    specs: [['API', 'REST with an OpenAPI spec'], ['Events', 'Signed webhooks and a live stream'], ['Player', 'Embeddable'], ['SDKs', 'TypeScript, Dart, Python and Go'], ['Sandbox', 'Virtual cameras']],
    gets: [
      'REST API with an OpenAPI spec',
      'Signed webhooks and a live event stream',
      'An embeddable player',
      'SDKs for TypeScript, Dart, Python and Go',
      'A sandbox with virtual cameras',
    ],
    faq: [
      { q: 'Where do I start?', a: 'In the developer portal at developers.lunacam.app, with keys and the sandbox.' },
      { q: 'Can I test without a real camera?', a: 'Yes. The sandbox has virtual cameras.' },
      { q: 'Are webhooks signed?', a: 'Yes. Verify the signature before you trust a delivery.' },
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
