import type { Term } from "../types";

const term: Term = {
  slug: "varifocal-lens",
  term: "Varifocal lens",
  aka: ["Vari-focal lens", "Motorised zoom lens", "2.8-12mm lens", "VF lens"],
  updated: "2026-10-19",
  published: "2026-11-02",
  title: "Varifocal lens: what it is and when to choose one for CCTV",
  description: "A varifocal lens lets you adjust the view angle and zoom of a camera at install. What it means, manual vs motorised, 2.8 to 12 mm ranges and the trade-offs.",
  short: "A varifocal lens has an adjustable focal length, so the installer can set the view angle and zoom of a camera on site. It replaces guessing with adjusting.",
  body: [
    "A fixed lens gives one view. If you chose wrong, you replace the camera. A varifocal lens covers a range, for example 2.8 to 12 mm, so you can widen or tighten the view while watching the picture.",
    "It is popular with installers because one model suits a doorway, a corridor and a gate, and a mistake in the plan can be fixed on the ladder.",
  ],
  sections: [
    {
      id: "meaning",
      h: "Varifocal lens meaning",
      p: [
        "Vari means varying and focal refers to [focal length](/glossary/focal-length). Moving the lens elements changes the focal length and the [field of view](/glossary/field-of-view). Because zooming also shifts focus, the lens must be refocused after each change.",
        "It is not the same as optical zoom on a [PTZ camera](/glossary/ptz). A varifocal lens is set once at install. A PTZ zoom is changed any time by remote control.",
      ],
    },
    {
      id: "manual-vs-motor",
      h: "Manual vs motorised varifocal",
      p: [
        "Two versions exist.",
      ],
      list: [
        "Manual varifocal: two small levers or rings on the camera. You open the housing, loosen them, adjust and tighten. Cheaper and common in domes.",
        "Motorised varifocal (motorised zoom): a motor moves the lens and you adjust it from the recorder, browser or app. No climbing again if you need to change it later, and no opening of the weather seal.",
        "Motorised units cost more but save a second site visit when the view needs a tweak.",
      ],
    },
    {
      id: "ranges",
      h: "Common ranges",
      p: [
        "Typical ranges are 2.8 to 12 mm (about 100 down to 30 degrees) and 3.6 to 10 mm, with longer lenses for distance. Wider range gives more flexibility, but the cheapest models pair a wide range with a small aperture, which hurts night performance. Check the lens aperture at the long end.",
      ],
    },
    {
      id: "vs-fixed",
      h: "Varifocal vs fixed lens",
      p: [
        "A fixed 2.8 mm or 4 mm lens is cheaper, has a wider aperture and fewer parts to fail. It is a good choice for standard shop interiors. Choose varifocal when the distance is unclear, when you stock one model for many jobs, or when exact framing matters for plates and faces.",
      ],
    },
    {
      id: "set-up",
      h: "How to set one up",
      p: [
        "Mount the camera, view the picture on a monitor or phone, then set the zoom to frame the area you want. Refocus. In low light, focus at night too, since the infrared light shifts focus slightly on some lenses. Seal the housing again to keep out dust and monsoon rain. See [IP rating](/glossary/ip-rating).",
      ],
    },
    {
      id: "focus",
      h: "Focus tips",
      p: [
        "Zoom first, then focus. Set the zoom so the scene fills the picture, then adjust focus until text or a pattern in the distance is sharp. Use a focus chart or a newspaper held at the subject distance. If the camera has auto focus on a motorised lens, press it after each zoom change and check at the edges.",
        "Many varifocal cameras focus well in daylight and then lose focus at night, because infrared light focuses at a slightly different point. Cameras made for IR have lenses corrected for that. Check the night picture on the first visit, or check again after dark.",
      ],
    },
    {
      id: "cost",
      h: "Cost and aperture",
      p: [
        "A varifocal lens costs more than a fixed one, and the aperture often drops as you zoom in. A lens listed as f/1.6 at the wide end may be f/2.8 at the long end. A smaller aperture lets in less light, so a zoomed camera has a darker night picture. For night sites, check the aperture at the setting you will use. See [low-light cameras](/glossary/low-light-camera).",
      ],
    },
    {
      id: "when",
      h: "When to carry varifocal as stock",
      p: [
        "An installer who carries one varifocal model for most jobs avoids having 2.8 mm, 4 mm and 6 mm versions of every shape. The trade is a slightly higher price per camera against fewer returns and no second trip. For a shop with ten identical cameras at similar distances, fixed lenses are cheaper.",
      ],
    },
    {
      id: "lunacam",
      h: "Varifocal and LunaCam",
      p: [
        "LunaCam shows the live picture on your phone, so you can check the framing while someone adjusts the lens. The adjustment itself is done on the camera or in its own settings.",
      ],
    },
  ],
  faq: [
    { q: "What is a varifocal lens?", a: "A lens whose focal length can be changed, so the view angle and zoom can be set at install." },
    { q: "What does 2.8-12mm mean?", a: "The lens can be adjusted from a wide 2.8 mm view to a narrow, zoomed 12 mm view." },
    { q: "Is a varifocal lens the same as PTZ zoom?", a: "No. A varifocal lens is set once at install. PTZ zoom can be changed remotely at any time." },
    { q: "Are varifocal cameras worse at night?", a: "Not always, but some have a smaller aperture than fixed lenses. Check the aperture." },
    { q: "Do I need to refocus after zooming?", a: "On manual varifocal lenses yes. Motorised lenses often autofocus." },
  ],
  related: ["focal-length", "field-of-view", "ptz", "dome-camera"],
  product: "camera-app",
};

export default term;
