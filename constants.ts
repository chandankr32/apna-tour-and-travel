
import { Car, Feature, Testimonial } from './types';

export const FLEET: Car[] = [
  {
    id: '1',
    name: 'Maruti Suzuki Ertiga',
    type: 'Compact MPV (Smart Hybrid)',
    description: 'Perfect for family trips and group travels with extra comfort.',
    pricePerKm: 12,
    capacity: 6,
    hasAC: true,
    features: ['2 Bags'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMqxV6VMAJfc5AKyVCGBwqFm6rFgrgUXsL8kmPb0Gk1bq6BbUFlGSvfzElPxbpAw68UYb1_LaraL8AhLtVhWcZ_y576FbDLlGFR9PLpgiJAYFyGeP40yPjJexDUtL4ejGnkkgu0CnDcJIMiz3mhinPdnQ5ay-Kvlfen3ouNPIru6D61GNhuhJeZCzh0Pii7esL4_VHbvi5L3Q2ImNhMzvY0OGstlq8qCZdKj04Ai6HO0RgR5xhUbXlYKzNWjo6bWf7OV3vatK_nYIy',
    badge: 'Customer Favorite'
  },
  {
    id: '2',
    name: 'Toyota Innova Crysta',
    type: 'Luxury MPV',
    description: 'Experience premium comfort and space for your long journeys.',
    pricePerKm: 18,
    capacity: 7,
    hasAC: true,
    features: ['4 Bags'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrbaF3OryukNNNixX4GKZ79VrhNLDcxr-0aP3V35JPrv3FzVbFwDghddpof_1nRHlAMnbsxVpcvpcgWlJxiPr-l9mT7odFiTwVj56ZQp-sOYGTuXgcBjzo28fPogWgPrvpZc0Rx1L1D2A8jZ3f4zVW-nVlSskQxw0pMFjeVWHc0W3mqOO7FbOJNQAp9ANXU8afhqol7C8YTnzm65oc1eR-pQPRiIfI9Qf_xN-QsG3cFJZl5nutVheSSzek0MO3i5YtV7q4VeteHPTs',
    badge: 'Premium Choice'
  },
  {
    id: '3',
    name: 'Tempo Traveller',
    type: 'Force Traveller (12+1)',
    description: 'The ultimate solution for large group tours and corporate events.',
    pricePerKm: 24,
    capacity: 13,
    hasAC: true,
    features: ['Music'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlYv5-pJh-9Hwg-c_3jw0UuNmDL8D2pqJris71XaqcH89fmk2Ge9kku2PdbDBQ8aDD_Ubj5QI3MwCCECogsBfLvGS9qmFHQ2-sFvurL7dcftZV-Oe6ek15XS__b2I74UT_DBIec3AjFKiNANmuQXMGkiueZyp6uQtcUe33AQC-YYo-ldkgNF5ZxyBRbspNtqIEoVED3oafkv-tMgTkOekvUfy6rR5Sr3POUK2JggBjdiz7FSDkvGJvxSIx5zO-6DYwUCtQW3DtAlvj'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Experienced Drivers',
    description: 'Our drivers are verified professionals who know Ranchi’s roads inside out, ensuring you reach your destination safely and on time.',
    icon: 'steering_wheel_heat'
  },
  {
    id: 'f2',
    title: 'Affordable Pricing',
    description: 'Transparent rates starting at ₹1000/day with no hidden costs. We believe in fair pricing for every mile you travel.',
    icon: 'currency_rupee'
  },
  {
    id: 'f3',
    title: '24/7 Support',
    description: 'Stuck somewhere? Our dedicated support team is always just a phone call away, day or night.',
    icon: 'support_agent'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Amit Kumar',
    initials: 'AK',
    trip: 'Traveled to Patratu',
    text: 'The Ertiga we booked was brand new and very clean. Our driver was polite and knew all the shortcuts in Ranchi. Excellent service!',
    rating: 5
  },
  {
    id: 't2',
    author: 'Priya Singh',
    initials: 'PS',
    trip: 'Airport Transfer',
    text: 'Highly recommend for family trips. The Innova Crysta was comfortable for our family of 6. Reasonable pricing and no hidden charges.',
    rating: 5
  },
  {
    id: 't3',
    author: 'Rahul Mishra',
    initials: 'RM',
    trip: 'Group Tour',
    text: 'Great experience with the Tempo Traveller for our office picnic. The music system was a nice touch. Will book again.',
    rating: 4.5
  }
];
