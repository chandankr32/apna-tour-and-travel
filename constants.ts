
import { Car, Feature, Testimonial } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Expert Drivers',
    description: 'Our drivers have at least 10 years of professional experience, are strictly non-alcoholic, and verified for your safety.',
    icon: 'verified_user'
  },
  {
    id: 'f2',
    title: 'Your Comfort First',
    description: 'We assure that your comfort and safety are our highest priorities. Every vehicle is maintained to premium standards.',
    icon: 'health_and_safety'
  },
  {
    id: 'f3',
    title: 'Transparent Pricing',
    description: 'No hidden costs. Affordable daily rentals with clear per-km fuel charges for outstation and local trips.',
    icon: 'payments'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Vikash Mahto',
    initials: 'VM',
    trip: 'Local Ranchi Tour',
    text: 'Best car rental in Ranchi. The driver was very professional and the Ertiga was in great condition. 5 stars for the service!',
    rating: 5
  },
  {
    id: 't2',
    author: 'Anjali Sharma',
    initials: 'AS',
    trip: 'Ranchi to Jamshedpur',
    text: 'Booked an Innova Crysta for a family wedding. The driver had 15 years experience and was very helpful with luggage. Highly recommended.',
    rating: 5
  },
  {
    id: 't3',
    author: 'Sandeep Oraon',
    initials: 'SO',
    trip: 'Patratu Valley Trip',
    text: 'Very safe driving. As they promised, the driver was non-alcoholic and polite. Pricing is very reasonable compared to others.',
    rating: 5
  }
];
