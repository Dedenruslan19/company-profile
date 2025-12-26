// Site Configuration - Update these values as needed

export const siteConfig = {
  name: "Rumah Pilihan",
  tagline: "Premium Properties",
  description: "Rasakan hunian eksklusif yang dirancang untuk kebutuhan keluarga modern. Pilihan tepat untuk kenyamanan hidup hari ini dan investasi bernilai di masa depan.",
  
  contact: {
    phone: "+62 813-8253-0252",
    whatsapp: "https://wa.me/6281382530252",
    email: "info@rumahpilihan.id",
    address: "Kota Bekasi, Jawa Barat, Indonesia",
  },

  social: {
    instagram: "#",
    whatsapp: "https://wa.me/6281382530252",
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
  land?: number; // luas tanah (LT)
  building?: number; // luas bangunan (LB)
  floors?: number;
}

export interface PropertyConfig {
  id: string;
  slug: string;
  title: string;
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
  featuresDescription?: string;
  siteplan?: string;
}

import treResidenceImg from "@/assets/tre-residence-assets/1-min.webp";
import treResidenceSiteplan from "@/assets/tre-residence-assets/tre-residence-siteplan.webp";
import theMansaImg from "@/assets/the-mansa-assets/1-min.webp";
import theMansaSiteplan from "@/assets/the-mansa-assets/the-mansa-siteplan.webp";
import grandManzilImg from "@/assets/grand-manzil-assets/1-min.webp";
import grandManzilSiteplan from "@/assets/grand-manzil-assets/grand-manzil-siteplan.webp";
import theAvalonImg from "@/assets/the-avalon-assets/1-min.webp";
import theAvalonSiteplan from "@/assets/the-avalon-assets/the-avalon-siteplan.webp";

export const propertiesConfig: PropertyConfig[] = [
  {
    id: "tre-residence",
    slug: "tre-residence",
    title: "Tre Residence",
    location: "Kota Bekasi, Jawa Barat",
    longDescription:
      "Tre Residence merepresentasikan gaya hidup urban masa kini. Setiap unit dirancang cermat untuk memaksimalkan ruang tanpa mengorbankan kenyamanan. Garis desain bersih, jendela besar, dan interior minimalis menciptakan suasana modern yang inspiratif.",
    price: "Rp1.454.200.000",
    image: treResidenceImg,
  siteplan: treResidenceSiteplan,
    specs: { bedrooms: 3, bathrooms: 2, area: 75 },
  featured: false,
  featuresDescription: "Komitmen kami adalah menghadirkan hunian terbaik dengan fasilitas unggulan dan nilai lebih untuk masa depan keluarga Anda.",
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
        id: "tr-block-a-b1",
        name: "Blok A & B1",
        type: "Type A/B1",
        bedrooms: 3,
        bathrooms: 2,
        area: 72,
        land: 66,
        building: 72,
        floors: 2,
        price: "Rp1.454.200.000",
        image: treResidenceImg,
        description:
          "LT 66, LB 72 (5.5x12) — 3 Kamar Tidur, 2 Kamar Mandi, 2 Lantai."
      },
      {
        id: "tr-block-b2",
        name: "Blok B2",
        type: "Type B2",
        bedrooms: 3,
        bathrooms: 2,
        area: 72,
        land: 71.5,
        building: 72,
        floors: 2,
        price: "Rp1.493.900.000",
        image: treResidenceImg,
        description:
          "LT 71.5, LB 72 (5.5x13) — 3 Kamar Tidur, 2 Kamar Mandi, 2 Lantai."
      },
      {
        id: "tr-block-c",
        name: "Blok C",
        type: "Type C",
        bedrooms: 3,
        bathrooms: 2,
        area: 72,
        land: 78,
        building: 72,
        floors: 2,
        price: "Rp1.552.900.000",
        image: treResidenceImg,
        description:
          "LT 78, LB 72 (6x13) — 3 Kamar Tidur, 2 Kamar Mandi, 2 Lantai."
      },
      {
        id: "tr-block-d",
        name: "Blok D",
        type: "Type D",
        bedrooms: 3,
        bathrooms: 2,
        area: 72,
        land: 72,
        building: 72,
        floors: 2,
        price: "Rp1.503.800.000",
        image: treResidenceImg,
        description:
          "LT 72, LB 72 (6x12) — 3 Kamar Tidur, 2 Kamar Mandi, 2 Lantai."
      }
    ]
  },
  {
    id: "the-mansa",
    slug: "the-mansa",
    title: "The Mansa",
    location: "Kota Depok, Jawa Barat",
    longDescription:
      "The Mansa adalah langkah awal sempurna untuk memiliki hunian berkualitas dari Rumah Pilihan. Desain cerdas, material pilihan, dan detail yang matang membuktikan bahwa kenyamanan optimal dapat diraih tanpa harus berlebihan.",
    price: "Rp1.407.500.000",
    image: theMansaImg,
  siteplan: theMansaSiteplan,
    specs: { bedrooms: 3, bathrooms: 2, area: 79 },
  featured: false,
  featuresDescription: "The Mansa mengutamakan kenyamanan, fleksibilitas, dan kemudahan perawatan untuk keluarga modern masa kini.",
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
        id: "mansa-blok-a",
        name: "Blok A",
        type: "Type A",
        bedrooms: 3,
        bathrooms: 2,
        area: 79,
        land: 94,
        building: 79,
        floors: 2,
        price: "Rp1.571.600.000",
        image: theMansaImg,
        description:
          "LT 94, LB 79 — 3 Kamar Tidur, 2 Kamar Mandi, 2 Lantai."
      },
      {
        id: "mansa-blok-b",
        name: "Blok B",
        type: "Type B",
        bedrooms: 3,
        bathrooms: 2,
        area: 79,
        land: 79,
        building: 79,
        floors: 2,
        price: "Rp1.407.500.000",
        image: theMansaImg,
        description:
          "LT 79, LB 79 — 3 Kamar Tidur, 2 Kamar Mandi, 2 Lantai."
      },
      {
        id: "mansa-blok-c",
        name: "Blok C",
        type: "Type C",
        bedrooms: 3,
        bathrooms: 2,
        area: 79,
        land: 132,
        building: 79,
        floors: 2,
        price: "Rp2.096.400.000",
        image: theMansaImg,
        description:
          "LT 132, LB 79 — 3 Kamar Tidur, 2 Kamar Mandi, 2 Lantai."
      }
    ]
  },
  {
    id: "grand-manzil",
    slug: "grand-manzil",
    title: "Grand Manzil",
    location: "Kabupaten Bogor, Jawa Barat",
    longDescription:
      "Grand Manzil menghadirkan standar tertinggi dalam kehidupan mewah. Setiap unit dibangun dengan material premium, tata ruang lapang, plafon tinggi, serta koneksi ruang dalam dan luar yang harmonis. Arsitektur Mediterania yang ikonik menciptakan kesan elegan dan tak lekang waktu.",
    price: "Rp250.000.000",
    image: grandManzilImg,
  siteplan: grandManzilSiteplan,
    specs: { bedrooms: 5, bathrooms: 4, area: 78 },
  featured: true,
  featuresDescription: "Grand Manzil menawarkan kemewahan, ruang luas, dan fasilitas premium untuk gaya hidup eksklusif.",
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
    location: "Kabupaten Bogor, Jawa Barat",
    longDescription:
      "The Avalon menghadirkan standar tertinggi dalam kehidupan mewah. Setiap unit dibangun dengan material premium, tata ruang lapang, plafon tinggi, serta koneksi ruang dalam dan luar yang harmonis. Arsitektur Mediterania yang ikonik menciptakan kesan elegan dan tak lekang waktu.",
    price: "",
    image: theAvalonImg,
  siteplan: theAvalonSiteplan,
    specs: { bedrooms: 0, bathrooms: 0, area: 0 },
  featured: true,
  featuresDescription: "The Avalon menghadirkan hunian mewah dengan desain elegan dan fasilitas kelas atas di lingkungan asri.",
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
        id: "av-type-a",
        name: "The Meridian",
        type: "Type A",
        bedrooms: 5,
        bathrooms: 4,
        area: 320,
        land: 220,
        building: 200,
        floors: 2,
        price: "Rp420.000.000",
        image: theAvalonImg,
        description: "Unit flagship dengan desain mediterania dan fasilitas mewah."
      },
      {
        id: "av-type-b",
        name: "The Horizon",
        type: "Type B",
        bedrooms: 4,
        bathrooms: 3,
        area: 280,
        land: 180,
        building: 160,
        floors: 2,
        price: "Rp360.000.000",
        image: theAvalonImg,
        description: "Keseimbangan sempurna antara ruang keluarga dan area privat."
      },
      {
        id: "av-type-c",
        name: "The Crest",
        type: "Type C",
        bedrooms: 3,
        bathrooms: 2,
        area: 210,
        land: 130,
        building: 120,
        floors: 2,
        price: "Rp300.000.000",
        image: theAvalonImg,
        description: "Pilihan ideal untuk keluarga yang menginginkan kenyamanan dan gaya."
      }
    ]
  }
];

// Navigation
export const navigationConfig = {
  main: [
    { name: "Home", href: "/" },
    { name: "Properties", href: "#properties" },
  { name: "Features", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ],
  cta: "Login"
};

// Footer Links
export const footerConfig = {
  properties: [
    { name: "Tre Residence", href: "/property/tre-residence" },
    { name: "The Mansa", href: "/property/the-mansa" },
    { name: "Grand Manzil", href: "/property/grand-manzil" },
    { name: "The Avalon", href: "/property/the-avalon" },
    { name: "Semua Properti", href: "#properties" },
  ],
  company: [
    { name: "Tentang Kami", href: "#" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ],
};
