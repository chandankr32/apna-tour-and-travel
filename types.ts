
export interface Car {
  id: string;
  name: string;
  type: string;
  description: string;
  pricePerKm: number;
  capacity: number;
  hasAC: boolean;
  features: string[];
  imageUrl: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  initials: string;
  trip: string;
  text: string;
  rating: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BookingFormData {
  pickup: string;
  dropoff: string;
  date: string;
  vehicleType: string;
}
