// Site Configuration - Update these values as needed

export const siteConfig = {
  name: "Nando Properties",
  tagline: "Premium Properties",
  description: "Discover exclusive homes designed for modern families. The best investment for a brighter future.",
  
  contact: {
    phone: "+62 812-3456-7890",
    email: "info@nandoproperties.id",
    address: "South Jakarta, Indonesia",
  },

  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
    twitter: "#",
  },
};

// Stats Configuration - Update these values when metrics change
export const statsConfig = {
  unitsSold: 150,
  propertyTypes: 3,
  satisfactionRate: 98,
  yearsExperience: 9, // Since 2015
};

// Properties Configuration
export interface HouseType {
  id: string;
  name: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: string;
  image: string;
  description: string;
}

export interface PropertyConfig {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  specs: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  featured: boolean;
  highlights: string[];
  houses: HouseType[];
}

import grandManzilImg from "@/assets/grand-manzil.jpg";
import treResidenceImg from "@/assets/tre-residence.jpg";
import otherResidenceImg from "@/assets/other-residence.jpg";

export const propertiesConfig: PropertyConfig[] = [
  {
    id: "grand-manzil",
    slug: "grand-manzil",
    title: "Grand Manzil",
    subtitle: "Luxury Collection",
    description: "Luxurious Mediterranean-style homes with expansive gardens. Designed for families seeking ultimate comfort and elegance.",
    longDescription: "Grand Manzil represents the pinnacle of luxury living. Each residence is meticulously crafted with premium materials, featuring spacious layouts, high ceilings, and seamless indoor-outdoor living spaces. The Mediterranean-inspired architecture creates a timeless aesthetic that stands apart.",
    price: "From $250,000",
    image: grandManzilImg,
    specs: { bedrooms: 5, bathrooms: 4, area: 350 },
    featured: true,
    highlights: [
      "Mediterranean Architecture",
      "Private Garden & Pool",
      "Smart Home System",
      "Premium Finishes",
      "Double Height Ceiling",
      "Gated Community"
    ],
    houses: [
      {
        id: "gm-type-a",
        name: "The Sovereign",
        type: "Type A",
        bedrooms: 6,
        bathrooms: 5,
        area: 450,
        price: "$350,000",
        image: grandManzilImg,
        description: "Our flagship residence with unparalleled luxury and space."
      },
      {
        id: "gm-type-b",
        name: "The Monarch",
        type: "Type B",
        bedrooms: 5,
        bathrooms: 4,
        area: 380,
        price: "$290,000",
        image: grandManzilImg,
        description: "Perfect balance of grandeur and functional living."
      },
      {
        id: "gm-type-c",
        name: "The Regent",
        type: "Type C",
        bedrooms: 5,
        bathrooms: 4,
        area: 350,
        price: "$250,000",
        image: grandManzilImg,
        description: "Elegant design with premium amenities throughout."
      }
    ]
  },
  {
    id: "tre-residence",
    slug: "tre-residence",
    title: "Tre Residence",
    subtitle: "Modern Living",
    description: "Contemporary 3-story townhouses with modern design. Ideal for young professionals and urban families.",
    longDescription: "Tre Residence embodies modern urban living at its finest. These thoughtfully designed townhouses maximize every square meter while maintaining an open, airy feel. Clean lines, floor-to-ceiling windows, and minimalist interiors create spaces that inspire.",
    price: "From $180,000",
    image: treResidenceImg,
    specs: { bedrooms: 4, bathrooms: 3, area: 200 },
    featured: false,
    highlights: [
      "Contemporary Design",
      "Rooftop Terrace",
      "Energy Efficient",
      "Modern Kitchen",
      "Home Office Space",
      "Secure Parking"
    ],
    houses: [
      {
        id: "tr-type-a",
        name: "The Apex",
        type: "Type A",
        bedrooms: 4,
        bathrooms: 4,
        area: 250,
        price: "$220,000",
        image: treResidenceImg,
        description: "Premium corner unit with extra natural light."
      },
      {
        id: "tr-type-b",
        name: "The Vertex",
        type: "Type B",
        bedrooms: 4,
        bathrooms: 3,
        area: 200,
        price: "$180,000",
        image: treResidenceImg,
        description: "Optimized layout for modern family living."
      },
      {
        id: "tr-type-c",
        name: "The Edge",
        type: "Type C",
        bedrooms: 3,
        bathrooms: 3,
        area: 180,
        price: "$160,000",
        image: treResidenceImg,
        description: "Compact luxury for urban professionals."
      }
    ]
  },
  {
    id: "other-residences",
    slug: "other-residences",
    title: "Other Residences",
    subtitle: "Smart Choice",
    description: "Comfortable homes in various types and sizes. The ideal solution for growing young families.",
    longDescription: "Other Residences offers the perfect entry point into the Nando family. These thoughtfully designed homes prove that quality living doesn't require compromise. Smart layouts, quality materials, and attention to detail make these homes punches above their weight.",
    price: "From $85,000",
    image: otherResidenceImg,
    specs: { bedrooms: 3, bathrooms: 2, area: 120 },
    featured: false,
    highlights: [
      "Affordable Luxury",
      "Flexible Layouts",
      "Community Facilities",
      "Quality Materials",
      "Future-Proof Design",
      "Easy Maintenance"
    ],
    houses: [
      {
        id: "or-type-a",
        name: "The Haven",
        type: "Type A",
        bedrooms: 4,
        bathrooms: 3,
        area: 150,
        price: "$120,000",
        image: otherResidenceImg,
        description: "Spacious family home with room to grow."
      },
      {
        id: "or-type-b",
        name: "The Nest",
        type: "Type B",
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        price: "$95,000",
        image: otherResidenceImg,
        description: "Perfect starter home for young families."
      },
      {
        id: "or-type-c",
        name: "The Nook",
        type: "Type C",
        bedrooms: 2,
        bathrooms: 2,
        area: 90,
        price: "$85,000",
        image: otherResidenceImg,
        description: "Efficient living for couples and small families."
      }
    ]
  }
];

// Navigation
export const navigationConfig = {
  main: [
    { name: "Home", href: "/" },
    { name: "Properties", href: "#properties" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ],
  cta: "Schedule a Visit"
};

// Footer Links
export const footerConfig = {
  properties: [
    { name: "Grand Manzil", href: "/property/grand-manzil" },
    { name: "Tre Residence", href: "/property/tre-residence" },
    { name: "Other Residences", href: "/property/other-residences" },
    { name: "All Properties", href: "#properties" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#" },
    { name: "News", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
};
