// Site Configuration - Update these values as needed

export const siteConfig = {
  name: "Nando Properties",
  tagline: "Premium Properties",
  description: "Rasakan hunian eksklusif yang dirancang untuk kebutuhan keluarga modern. Pilihan tepat untuk kenyamanan hidup hari ini dan investasi bernilai di masa depan.",
  
  contact: {
    phone: "+62 812-3456-7890",
    email: "info@nandoproperties.id",
    address: "South Jakarta, Indonesia",
  },

  social: {
    instagram: "#",
    whatsapp: "#",
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
  location: string;
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

import treResidenceImg from "@/assets/tre-residence-assets/1.svg";
import theMansaImg from "@/assets/the-mansa-assets/1.svg";
import grandManzilImg from "@/assets/grand-manzil-assets/1.svg";
import theAvalonImg from "@/assets/the-avalon-assets/1.svg";

export const propertiesConfig: PropertyConfig[] = [
  {
    id: "tre-residence",
    slug: "tre-residence",
    title: "Tre Residence",
    subtitle: "Modern Living",
    location: "Kota Bekasi, Jawa Barat",
    longDescription:
      "Tre Residence merepresentasikan gaya hidup urban masa kini. Setiap unit dirancang cermat untuk memaksimalkan ruang tanpa mengorbankan kenyamanan. Garis desain bersih, jendela besar, dan interior minimalis menciptakan suasana modern yang inspiratif.",
    price: "Rp180.000.000",
    image: treResidenceImg,
    specs: { bedrooms: 3, bathrooms: 2, area: 75 },
    featured: false,
    highlights: [
      "Desain Kontemporer",
      "Teras Rooftop",
      "Hemat Energi",
      "Dapur Modern",
      "Ruang Kerja di Rumah",
      "Parkir Aman"
    ],
    houses: [
      {
        id: "tr-type-a",
        name: "The Apex",
        type: "Type A",
        bedrooms: 4,
        bathrooms: 4,
        area: 250,
        price: "Rp220.000.000",
        image: treResidenceImg,
        description:
          "Unit sudut premium dengan pencahayaan alami maksimal."
      },
      {
        id: "tr-type-b",
        name: "The Vertex",
        type: "Type B",
        bedrooms: 4,
        bathrooms: 3,
        area: 200,
        price: "Rp180.000.000",
        image: treResidenceImg,
        description:
          "Tata ruang efisien untuk kebutuhan keluarga modern."
      },
      {
        id: "tr-type-c",
        name: "The Edge",
        type: "Type C",
        bedrooms: 3,
        bathrooms: 3,
        area: 180,
        price: "Rp160.000.000",
        image: treResidenceImg,
        description:
          "Hunian kompak berkelas untuk profesional perkotaan."
      }
    ]
  },
  {
    id: "the-mansa",
    slug: "the-mansa",
    title: "The Mansa",
    subtitle: "Smart Choice",
    location: "Kota Depok, Jawa Barat",
    longDescription:
      "The Mansa adalah langkah awal sempurna untuk memiliki hunian berkualitas dari Nando Properties. Desain cerdas, material pilihan, dan detail yang matang membuktikan bahwa kenyamanan optimal dapat diraih tanpa harus berlebihan.",
    price: "Rp85.000.000",
    image: theMansaImg,
    specs: { bedrooms: 3, bathrooms: 2, area: 79 },
    featured: false,
    highlights: [
      "Kemewahan Terjangkau",
      "Tata Ruang Fleksibel",
      "Fasilitas Komunitas",
      "Material Berkualitas",
      "Desain Siap Masa Depan",
      "Perawatan Mudah"
    ],
    houses: [
      {
        id: "or-type-a",
        name: "The Haven",
        type: "Type A",
        bedrooms: 4,
        bathrooms: 3,
        area: 150,
        price: "Rp120.000.000",
        image: theMansaImg,
        description:
          "Rumah keluarga luas dengan ruang untuk berkembang."
      },
      {
        id: "or-type-b",
        name: "The Nest",
        type: "Type B",
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        price: "Rp95.000.000",
        image: theMansaImg,
        description:
          "Pilihan ideal sebagai rumah pertama bagi keluarga muda."
      },
      {
        id: "or-type-c",
        name: "The Nook",
        type: "Type C",
        bedrooms: 2,
        bathrooms: 2,
        area: 90,
        price: "Rp85.000.000",
        image: theMansaImg,
        description:
          "Hunian efisien dan nyaman untuk pasangan atau keluarga kecil."
      }
    ]
  },
  {
    id: "grand-manzil",
    slug: "grand-manzil",
    title: "Grand Manzil",
    subtitle: "Luxury Collection",
    location: "Kabupaten Bogor, Jawa Barat",
    longDescription:
      "Grand Manzil menghadirkan standar tertinggi dalam kehidupan mewah. Setiap unit dibangun dengan material premium, tata ruang lapang, plafon tinggi, serta koneksi ruang dalam dan luar yang harmonis. Arsitektur Mediterania yang ikonik menciptakan kesan elegan dan tak lekang waktu.",
    price: "Rp250.000.000",
    image: grandManzilImg,
    specs: { bedrooms: 5, bathrooms: 4, area: 78 },
    featured: true,
    highlights: [
      "Arsitektur Mediterania",
      "Taman & Kolam Renang Pribadi",
      "Sistem Smart Home",
      "Finishing Premium",
      "Plafon Double Height",
      "Kawasan Berpagar"
    ],
    houses: [
      {
        id: "gm-type-a",
        name: "The Sovereign",
        type: "Type A",
        bedrooms: 6,
        bathrooms: 5,
        area: 450,
        price: "Rp350.000.000",
        image: grandManzilImg,
        description:
          "Unit unggulan dengan ruang ekstra luas dan kemewahan tanpa kompromi."
      },
      {
        id: "gm-type-b",
        name: "The Monarch",
        type: "Type B",
        bedrooms: 5,
        bathrooms: 4,
        area: 380,
        price: "Rp290.000.000",
        image: grandManzilImg,
        description:
          "Perpaduan ideal antara kemegahan desain dan fungsi ruang keluarga."
      },
      {
        id: "gm-type-c",
        name: "The Regent",
        type: "Type C",
        bedrooms: 5,
        bathrooms: 4,
        area: 350,
        price: "Rp250.000.000",
        image: grandManzilImg,
        description:
          "Desain elegan dengan fasilitas premium di setiap sudutnya."
      }
    ]
  },
  {
    id: "the-avalon",
    slug: "the-avalon",
    title: "The Avalon",
    subtitle: "Luxury Collection",
    location: "Kabupaten Bogor, Jawa Barat",
    longDescription:
      "The Avalon menghadirkan standar tertinggi dalam kehidupan mewah. Setiap unit dibangun dengan material premium, tata ruang lapang, plafon tinggi, serta koneksi ruang dalam dan luar yang harmonis. Arsitektur Mediterania yang ikonik menciptakan kesan elegan dan tak lekang waktu.",
    price: "",
    image: theAvalonImg,
    specs: { bedrooms: 0, bathrooms: 0, area: 0 },
    featured: true,
    highlights: [
      "Arsitektur Mediterania",
      "Taman & Kolam Renang Pribadi",
      "Sistem Smart Home",
      "Finishing Premium",
      "Plafon Double Height",
      "Kawasan Berpagar"
    ],
    houses: []
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
  cta: "Login"
};

// Footer Links
export const footerConfig = {
  properties: [
    { name: "Tre Residence", href: "/property/tre-residence" },
    { name: "The Mansa", href: "/property/the-mansa" },
    { name: "Grand Manzil", href: "/property/grand-manzil" },
    { name: "All Properties", href: "#properties" },
  ],
  company: [
    { name: "Tentang Kami", href: "#about" },
    { name: "Tim Kami", href: "#" },
    { name: "Berita", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
};
