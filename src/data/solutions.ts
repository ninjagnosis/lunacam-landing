import type { Faq } from './products';

export interface Solution {
  slug: string;
  name: string;
  short: string;
  headline: string;
  description: string;
  /** Which demo and photo to show. */
  photo: 'home' | 'shop' | 'street' | 'controlRoom' | 'site';
  /** What people ask of their cameras, and what LunaCam does with each. */
  asks: { q: string; a: string }[];
  does: { h: string; p: string }[];
  products: string[];
  faq: Faq[];
}

export const solutions: Solution[] = [
  {
    slug: 'homes',
    name: 'Homes',
    short: 'Check the gate and the children from your phone, with footage kept in Nepal.',
    headline: 'See your home from anywhere',
    description: 'LunaCam lets Nepali families watch their home cameras and DVR from a phone, share access with relatives and get alerts with a picture.',
    photo: 'home',
    asks: [
      { q: 'Who is at the gate?', a: 'Opens live view, with two-way audio' },
      { q: 'Did anyone come while we were away?', a: 'Shows motion markers on the timeline' },
      { q: 'Can my brother see the cameras too?', a: 'Shares chosen cameras, with access that ends by itself' },
      { q: 'Why did the camera stop?', a: 'Warns you when a camera or disk goes offline' },
    ],
    does: [
      { h: 'Works with the cameras you have', p: 'Hikvision, Dahua and anything on ONVIF or RTSP, on one app.' },
      { h: 'Alerts with a picture', p: 'Home, Away and Disarm on a schedule, with quiet hours.' },
      { h: 'Keeps the footage in Nepal', p: 'Relays and storage are in Nepal, and passwords stay on the box.' },
    ],
    products: ['camera-app', 'lunacam-box', 'alerts'],
    faq: [
      { q: 'Is it free?', a: 'Live view and DVR playback through LunaCam are free to start.' },
      { q: 'Do I need to change my router?', a: 'No. The LunaCam Box connects out, so there is no port forwarding.' },
      { q: 'Can I give a neighbour temporary access?', a: 'Yes. Pick the cameras and a time, and access ends by itself.' },
    ],
  },
  {
    slug: 'shops',
    name: 'Shops and Businesses',
    short: 'Watch the counter and the stockroom, and find the moment when something goes missing.',
    headline: 'Know what happens in your shop',
    description: 'LunaCam gives Nepali shops, warehouses and offices live view of every camera, DVR playback on a timeline and alerts when a camera stops recording.',
    photo: 'shop',
    asks: [
      { q: 'Is the shutter closed?', a: 'Opens the camera, or sends a snapshot' },
      { q: 'What happened at the counter at 3 pm?', a: 'Jumps to the time and cuts a clip' },
      { q: 'Can my manager see only the shop floor?', a: 'Limits each person to chosen cameras' },
      { q: 'Is every camera still recording?', a: 'Alerts when a camera or disk fails' },
    ],
    does: [
      { h: 'Several shops, one app', p: 'Group cameras by site and see all of them in a grid.' },
      { h: 'Staff see what you choose', p: 'Per-camera access for staff and managers, with an audit log.' },
      { h: 'Finds the moment fast', p: 'A timeline with motion, person and vehicle markers, and clips you can download.' },
    ],
    products: ['camera-app', 'playback-clips', 'alerts'],
    faq: [
      { q: 'Does it work with the DVR we already have?', a: 'Yes. Hikvision and Dahua recorders work directly, and others over ONVIF or RTSP.' },
      { q: 'Can staff see only some cameras?', a: 'Yes. You choose the cameras for each person.' },
      { q: 'What if a camera stops recording?', a: 'You get an alert when a camera goes offline or a disk is failing.' },
    ],
  },
  {
    slug: 'banks',
    name: 'Banks and Financial Institutions',
    short: 'Every branch on one console, with evidence ready for the police.',
    headline: 'Every branch, one console',
    description: 'LunaCam gives banks and financial institutions in Nepal one console for all branches: roles, audit logs, evidence export and alarms, with footage kept in Nepal.',
    photo: 'controlRoom',
    asks: [
      { q: 'Which branch cameras are offline?', a: 'Shows offline devices across every site' },
      { q: 'Who exported this footage?', a: 'Answers from the audit log' },
      { q: 'Police need Tuesday evening from the main branch.', a: 'Runs the request, approval and delivery workflow' },
      { q: 'Can a guard see only his branch?', a: 'Scopes access by site and shift' },
    ],
    does: [
      { h: 'Models your organisation', p: 'Head office, provinces, branches, zones and cameras, with roles and permissions per action.' },
      { h: 'Keeps a record of every view', p: 'Sign-ins, live views, playback, exports and configuration changes are logged.' },
      { h: 'Meets the retention rules', p: 'Set the retention floor once. Footage under legal hold cannot be deleted.' },
    ],
    products: ['evidence', 'alerts', 'developer-platform'],
    faq: [
      { q: 'Can we connect our existing systems?', a: 'Yes. The API, webhooks and event stream let you feed alarms and video into your own software.' },
      { q: 'Does footage stay in Nepal?', a: 'Servers, relays and storage are in Nepal, and the data residency commitment is written down.' },
      { q: 'Who can see the audit log?', a: 'The roles you choose, such as owner, admin and auditor.' },
    ],
  },
  {
    slug: 'municipalities',
    name: 'Municipalities and Safe City',
    short: 'Public cameras, operators and police requests on one platform.',
    headline: 'Public cameras that answer to a process',
    description: 'LunaCam helps municipalities and Safe City projects in Nepal run public cameras with roles, a command dashboard, alarms, maps and police feed sharing.',
    photo: 'street',
    asks: [
      { q: 'Which junction cameras are down?', a: 'Shows offline devices on a map' },
      { q: 'Police need a live view of the market.', a: 'Shares a live feed with an expiring link' },
      { q: 'Who watched the camera at the bus park?', a: 'Answers from the audit log' },
      { q: 'Has the CCTV notice been sent?', a: 'Fills in the notice to the police or District Administration Office' },
    ],
    does: [
      { h: 'Command dashboard', p: 'Sites, open alarms and offline devices in one view, with a map of Nepal.' },
      { h: 'Operators with a queue', p: 'Alarms are assigned, with a checklist and a reason when acknowledged.' },
      { h: 'Feed sharing with police', p: 'Share live view with another organisation. Revoking a share stops new access.' },
    ],
    products: ['evidence', 'alerts', 'camera-app'],
    faq: [
      { q: 'Can several departments use one system?', a: 'Yes. Sub-organisations, sites and roles are built in.' },
      { q: 'Does LunaCam do number plate reading?', a: 'Analytics are rolling out next, including number plates in Nepali formats.' },
      { q: 'What does the law ask of public bodies?', a: 'The Privacy Act, 2075 asks public bodies that install CCTV to notify the police or District Administration Office within 15 days. LunaCam fills in the notice.' },
    ],
  },
  {
    slug: 'installers',
    name: 'Installers and Dealers',
    short: 'Manage many customers from one account and hand each site over cleanly.',
    headline: 'Run every customer from one account',
    description: 'LunaCam installer accounts let CCTV installers in Nepal manage many customer sites, approve access with owners and hand sites over at the end of a job.',
    photo: 'site',
    asks: [
      { q: 'Which customer sites have a problem?', a: 'Lists offline cameras and failing disks across customers' },
      { q: 'Can I look at a customer site?', a: 'Requests access, which the owner approves' },
      { q: 'The job is finished.', a: 'Hands the site over to the owner' },
      { q: 'Can I earn on what I install?', a: 'Dealer pricing and recurring revenue are part of the installer program' },
    ],
    does: [
      { h: 'One account, many customers', p: 'See every site you look after, with health and alerts.' },
      { h: 'Owners stay in control', p: 'Each access request is approved by the owner. Privacy mode blocks an installer from seeing cameras.' },
      { h: 'Diagnose remotely', p: 'Ping, stream test, logs and a speed test from the console.' },
    ],
    products: ['lunacam-box', 'camera-app', 'developer-platform'],
    faq: [
      { q: 'Can customers lock me out?', a: 'Yes. Owners approve access and can use privacy mode.' },
      { q: 'How do I add a customer?', a: 'Pair their box from the app and invite the owner. Hand the site over when the job is done.' },
      { q: 'Is there dealer pricing?', a: 'Yes. Contact us about the installer program.' },
    ],
  },
];

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);
