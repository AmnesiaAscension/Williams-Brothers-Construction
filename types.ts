
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface BusinessInfo {
  name: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  hours: string;
  location: string;
}
