// Photos from Unsplash, free for commercial use without attribution; credited
// here out of courtesy. Same files as lunacam-brochures.
import hero from '../assets/photos/hero.jpg';
import shop from '../assets/photos/shop.jpg';
import home from '../assets/photos/home.jpg';
import street from '../assets/photos/street.jpg';
import controlRoom from '../assets/photos/control-room.jpg';
import site from '../assets/photos/site.jpg';

export const photos = {
  hero: { src: hero, credit: 'krzhck', alt: { ne: '', en: 'Two security cameras on a mast at dusk, with mountains behind' } },
  shop: { src: shop, credit: 'Jimmy Liu', alt: { ne: '', en: 'A man sitting at the counter of a crowded shop in Nepal' } },
  home: { src: home, credit: 'Shrish Shrestha', alt: { ne: '', en: 'A house with mountains behind it in Nepal' } },
  street: { src: street, credit: 'Jimmy Liu', alt: { ne: '', en: 'A night street in Thamel, Kathmandu, with shops and a taxi' } },
  controlRoom: { src: controlRoom, credit: 'Tasha Kostyuk', alt: { ne: '', en: 'An operator in front of a wall of camera screens in a control room' } },
  site: { src: site, credit: 'Arum Visuals', alt: { ne: '', en: 'A warehouse aisle with stacked boxes and pallets' } },
} as const;
