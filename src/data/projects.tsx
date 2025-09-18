import { Users, Trophy, Star, Globe } from "lucide-react";
import heroQiaf from "@/assets/projects/qiaf-2025/qiaf-card.jpg";
import heroYouth from "@/assets/projects/youth-platform/youth-card.jpg";
import heroSpace from "@/assets/projects/kssp/kssp-card.jpg";
import colorsDesert from "@/assets/projects/colors-desert/colors-desert-card.jpg";
import qatarLiterature from "@/assets/projects/qatar-literature/qatar-literature-card.jpg";
import astroFair from "@/assets/projects/astro-fair/astro-fair-card.jpg";
import cosmicCanvas from "@/assets/projects/cosmic-canvas/cosmic-card.jpg";
import kataraFootball from "@/assets/projects/katara-football-card/katara-football-card.jpg";

export interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  longDescription?: string;
  stats: {
    editions?: number;
    artists?: number;
    countries?: number;
    engagements?: number;
    youth_engaged?: number;
    focus_areas?: number;
    students?: number;
    agencies?: number;
  };
  heroImage: string;
  gallery?: string[];
  category: string;
  iconType: 'globe' | 'users' | 'star' | 'trophy';
  featured?: boolean; // For legacy projects carousel
}

export const projects: Project[] = [
  {
    id: "qiaf-2025",
    title: "QIAF — Qatar International Art Festival",
    year: 2025,
    description: "International art festivals, artist residencies, curated exhibitions connecting 400+ artists from 70+ countries.",
    longDescription: "The Qatar International Art Festival (QIAF) stands as one of the most prestigious cultural events in the Middle East, bringing together artists, curators, and art enthusiasts from over 70 countries. Since its inception, QIAF has served as a platform for cultural exchange, artistic innovation, and international collaboration. The festival features curated exhibitions, artist residencies, workshops, and performances that celebrate the diversity of global artistic expression while highlighting Qatar's role as a cultural bridge between East and West.",
    stats: { editions: 7, artists: 400, countries: 70, engagements: 54603 },
    heroImage: heroQiaf,
    category: "Arts & Culture",
    iconType: 'globe',
    featured: true
  },
  {
    id: "youth-platform",
    title: "The YOUTH Platform",
    year: 2025,
    description: "The YOUTH platform, hackathons, bootcamps, leadership programs empowering 500+ young innovators across 8 focus areas.",
    longDescription: "The YOUTH Platform represents MAPS International's commitment to nurturing the next generation of leaders and innovators. Through comprehensive programs including hackathons, bootcamps, and leadership development initiatives, we empower over 500 young people across 8 key focus areas: technology, entrepreneurship, cultural exchange, environmental sustainability, social impact, creative arts, scientific research, and community leadership. Our platform provides mentorship, resources, and real-world opportunities for youth to make meaningful contributions to society.",
    stats: { focus_areas: 8, youth_engaged: 500 },
    heroImage: heroYouth,
    category: "Youth & Innovation",
    iconType: 'users',
    featured: true
  },
  {
    id: "kssp",
    title: "Katara Space Science Program",
    year: 2025,
    description: "6 editions • NASA, ISRO, Canadian Space Agency partnerships • 300+ students inspired",
    longDescription: "The Katara Space Science Program (KSSP) is a groundbreaking educational initiative that brings space science education to students across Qatar. Through strategic partnerships with NASA, ISRO, and the Canadian Space Agency, KSSP has inspired over 300 students through hands-on workshops, stargazing sessions, and interactive learning experiences. The program combines theoretical knowledge with practical applications, fostering a new generation of space enthusiasts and potential future scientists.",
    stats: { editions: 6, students: 300, agencies: 4 },
    heroImage: heroSpace,
    category: "Education & STEM",
    iconType: 'star',
    featured: true
  },
      {
        id: "colours-of-desert",
        title: "Colours of Desert",
        year: 2024,
        description: "7 editions of cultural heritage celebration showcasing traditional Qatari culture meets contemporary art",
        longDescription: "Colours of Desert is a unique cultural initiative that bridges traditional Qatari heritage with contemporary artistic expression. Through 7 successful editions, this program has celebrated the rich cultural tapestry of Qatar while introducing modern artistic interpretations. The initiative brings together local and international artists to explore themes of desert life, traditional crafts, and cultural identity in innovative ways.",
        stats: { editions: 7, artists: 150, exhibitions: 25 },
        heroImage: colorsDesert,
        category: "Heritage & Culture",
        iconType: 'trophy',
        featured: false
      },
      {
        id: "bharat-vastram",
        title: "Bharat Vastram",
        year: 2024,
        description: "Textile & fashion heritage showcase celebrating Indian cultural legacy in Doha",
        longDescription: "Bharat Vastram is a celebration of Indian textile heritage and traditional craftsmanship in the heart of Doha. This initiative showcases the intricate art of Indian textiles, from traditional weaving techniques to contemporary fashion design. The program brings together master craftspeople, designers, and cultural enthusiasts to preserve and promote India's rich textile traditions while fostering cross-cultural understanding.",
        stats: { exhibitions: 12, craftspeople: 50, visitors: 2000 },
        heroImage: qatarLiterature,
        category: "Fashion & Heritage",
        iconType: 'trophy',
        featured: false
      },
      {
        id: "astro-fair",
        title: "Astro Fair / Cosmic Canvas",
        year: 2024,
        description: "Art & astronomy fusion where desert sky inspiration meets cultural heritage",
        longDescription: "Astro Fair combines the wonder of astronomy with artistic expression, creating a unique platform where science meets art under the desert sky. This innovative program brings together astronomers, artists, and stargazers to explore the cosmos through both scientific observation and creative interpretation. Participants engage in stargazing sessions, astronomical workshops, and art creation inspired by celestial phenomena.",
        stats: { sessions: 15, participants: 400, artworks: 100 },
        heroImage: astroFair,
        category: "Science & Art",
        iconType: 'star',
        featured: false
      },
      {
        id: "cultural-exchange",
        title: "Cultural Exchange Programs",
        year: 2024,
        description: "International artist residencies, student exchanges, and cross-border academic collaborations",
        longDescription: "Our Cultural Exchange Programs facilitate meaningful connections between artists, students, and cultural practitioners from around the world. Through artist residencies, student exchange programs, and academic collaborations, we create opportunities for cross-cultural learning and creative collaboration. These programs have established lasting partnerships with institutions across 70+ countries.",
        stats: { countries: 70, residencies: 25, exchanges: 150 },
        heroImage: cosmicCanvas,
        category: "International",
        iconType: 'globe',
        featured: false
      },
      {
        id: "workshop-calendar",
        title: "Workshop Calendar",
        year: 2024,
        description: "Comprehensive educational program offering drawing, sketching, clay workshops, and specialized training",
        longDescription: "The Workshop Calendar represents MAPS International's commitment to continuous learning and skill development. Since 2014, we've offered a diverse range of workshops including drawing, sketching, clay modeling, and specialized training programs. These workshops cater to all age groups and skill levels, fostering creativity and artistic development within the community.",
        stats: { workshops: 200, participants: 5000, instructors: 50 },
        heroImage: kataraFootball,
        category: "Education",
        iconType: 'users',
        featured: false
      }
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get featured projects (for legacy carousel)
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Helper function to render icon based on iconType
export const renderIcon = (iconType: Project['iconType'], className: string = "w-6 h-6") => {
  switch (iconType) {
    case 'globe':
      return <Globe className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'star':
      return <Star className={className} />;
    case 'trophy':
      return <Trophy className={className} />;
    default:
      return <Globe className={className} />;
  }
};