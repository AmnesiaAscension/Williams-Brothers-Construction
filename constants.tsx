
import React from 'react';
import { Shield, Hammer, Droplets, Home, Clock, Phone, MapPin, Star, CheckCircle2, Menu, X, ArrowRight } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Williams Brothers Roofing & Construction",
  rating: 4.8,
  reviewCount: 77,
  category: "Roofing contractor",
  address: "3500 Center St, Deer Park, TX 77536",
  phone: "(936) 310-4303",
  hours: "Open 24 hours",
  googleMapsUrl: "https://www.google.com/maps/place/3500+Center+St,+Deer+Park,+TX+77536"
};

export const SERVICES = [
  {
    id: 'res-roofing',
    title: 'Residential Roofing',
    description: 'Expert installation and repair of asphalt shingles, tile, and metal roofs for your home.',
    icon: <Home className="w-8 h-8" />
  },
  {
    id: 'comm-roofing',
    title: 'Commercial Roofing',
    description: 'Specialized roofing solutions for businesses, including flat roofs and TPO systems.',
    icon: <Shield className="w-8 h-8" />
  },
  {
    id: 'repair',
    title: 'Roof Repair',
    description: 'Leaking? Storm damage? We provide quick, reliable repairs to protect your investment.',
    icon: <Hammer className="w-8 h-8" />
  },
  {
    id: 'gutters',
    title: 'Gutter Systems',
    description: 'Custom gutter installation and cleaning to ensure proper drainage away from your foundation.',
    icon: <Droplets className="w-8 h-8" />
  }
];

export const REVIEWS = [
  {
    id: '1',
    author: "Robert Miller",
    rating: 5,
    text: "Williams Brothers did an amazing job on our new roof. They were fast, clean, and professional. Highly recommend!",
    date: "2 months ago"
  },
  {
    id: '2',
    author: "Sarah Jenkins",
    rating: 5,
    text: "Called them for a repair after a heavy storm. They were out the same day and fixed it before more rain came. Excellent service.",
    date: "1 month ago"
  },
  {
    id: '3',
    author: "David Thompson",
    rating: 4,
    text: "Great quality work. The price was competitive and the crew was very respectful of our property.",
    date: "3 weeks ago"
  }
];
