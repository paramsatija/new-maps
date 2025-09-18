import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

interface BrandAmbassador {
  id: string;
  name: string;
  title: string;
  country: string;
  image: string;
  bio: string;
}

const BrandAmbassadors = () => {
  const [currentAmbassador, setCurrentAmbassador] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // QIAF Brand Ambassadors - Real Data
  const ambassadors: BrandAmbassador[] = [
    {
      id: "1",
      name: "Ksenia Grigoryan",
      title: "Founder & CEO, Gallery p.s.Grigart",
      country: "Russia",
      image: "/ambassadors/ksenia-grigoryan.jpg",
      bio: "Founder and CEO of the gallery p.s.Grigart, boasting 20 years of experience in the art industry. As a philologist, art critic, and antique dealer, she specializes in promoting Russian artists globally. Her mission includes introducing emerging talents and established figures to the international art market while fostering cross-cultural artistic exchanges."
    },
    {
      id: "2",
      name: "Li Yueying",
      title: "Global Art Leader",
      country: "China",
      image: "/ambassadors/li-yueying.jpg",
      bio: "Distinguished global leader in art, with a rich background spanning art trading, cultural tourism, education, and art clubs. Ms. Li steers strategic planning and art trading, drawing in diverse art enthusiasts and collectors. With a focus on cultural tourism and education, she spearheads various educational initiatives, cementing her status as an exceptional leader driving forward the cultural and art industry's growth."
    },
    {
      id: "3",
      name: "Minoo Kazem Khalaj",
      title: "QIAF Ambassador & Curator",
      country: "Iran",
      image: "/ambassadors/minoo-kazem-khalaj.jpg",
      bio: "Versatile artist engaged in painting, curating, and art collections. As the ambassador of the Qatar International Art Festival, she spearheads the organization of exhibitions and fosters collaborations with renowned artists, enhancing international cultural relations. With numerous exhibitions, festival participations, and accolades to her credit, Minoo champions the unifying power of art, believing it transcends linguistic and cultural barriers, fostering global unity and peace."
    },
    {
      id: "4",
      name: "Tessema Temtime Asrate",
      title: "QIAF Brand Ambassador",
      country: "Ethiopia",
      image: "/ambassadors/tessema-temtime-asrate.jpg",
      bio: "Brand ambassador of QIAF, hailing from Ethiopia and residing in Qatar. A dedicated advocate since the festival's inception in 2018, Tessema's artistic focus celebrates nature's beauty and Ethiopian coffee culture. As a talented curator, he has received numerous global awards, recognizing his exceptional contributions to the art world. Tessema embodies QIAF's essence, bridging cultures through creativity with his unique blend of artistry and cultural significance."
    },
    {
      id: "5",
      name: "Victoria De La Serna",
      title: "Contemporary Artist",
      country: "Argentina",
      image: "/ambassadors/victoria-de-la-serna.jpg",
      bio: "Allows materials to take center stage, imbuing her work with accumulative depth. Her thematic inclinations range from industrial structuralism to inspiring portrait scenes. Possessing excellent technique, a keen sense of color, and adept at balancing light and shadow, she crafts a style uniquely her own. With a rich and controlled palette, De La Serna's art exudes unwavering strength and value, promising a journey marked by continued growth and steadfast determination."
    },
    {
      id: "6",
      name: "Martina Szilagyi",
      title: "Abstract Artist",
      country: "Slovakia",
      image: "/ambassadors/martina-szilagyi.jpg",
      bio: "Abstract artist from Slovakia, discovered her passion for painting during the challenging times of the COVID-19 pandemic. Graduating in business management, she found solace and expression through art, viewing it as a response to the negativity surrounding the global crisis. Her work reflects a unique blend of personal introspection and artistic exploration."
    },
    {
      id: "7",
      name: "Nidia Corneli",
      title: "Magical Realism Artist",
      country: "Mexico",
      image: "/ambassadors/nidia-corneli.jpg",
      bio: "Versatile artist known for her captivating blend of magical realism and abstract figurative styles. Her influence extends globally, with exhibitions in North America, Europe, and Asia. With over 30 solo exhibitions, 120 national and international showcases, and features on book covers, including 'Levántate, Sacúdete y Vuela' and 'Mujeres Mexicanas en el Arte,' Nidia's work resonates worldwide. Recognized with prestigious awards such as the Emozzioni Prize in India and the International Prize CARAVAGGIO-Great Master of Art in Italy."
    },
    {
      id: "8",
      name: "Claudia Perez",
      title: "Equine & Sports Artist",
      country: "Mexico",
      image: "/ambassadors/claudia-perez.jpg",
      bio: "Contemporary artist renowned for her dedication to equine art and portraiture of soccer players. Her works have graced prestigious exhibitions in middle-east and international shows featuring Arab horses. With a distinctive style that captures the essence of her subjects, Perez continues to garner acclaim for her unique fusion of sports and artistry."
    },
    {
      id: "9",
      name: "Mónica Cardozo",
      title: "Director, Monarca Gallery",
      country: "Mexico",
      image: "/ambassadors/monica-cardozo.jpg",
      bio: "Versatile artist specializing in portraiture, serves as the director of Monarca Gallery. Her expertise in the realm of plastic arts encompasses a diverse range of mediums and techniques. Through her leadership, Monarca Gallery has become a hub for showcasing captivating artwork, reflecting Cardozo's commitment to promoting artistic expression and cultural dialogue."
    },
    {
      id: "10",
      name: "Diego Real",
      title: "Artist-Owner, Artes Reales Gallery",
      country: "Argentina",
      image: "/ambassadors/diego-real.jpg",
      bio: "Argentine artist-owner of Artes Reales Gallery in Argentina for 15 years and also work for Artshopping, Carrousel del Louvre, Paris for 10 years. Shows through his work the energy and abundance of the universe captured in wavy shapes, spirals, and gold inspired by Gustav Klimt. He seeks in the viewer an encounter and a dialogue with his work that invites him to reflect, meditate, and lose himself in the infinity of each spiral."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentAmbassador((prev) => (prev + 1) % ambassadors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, ambassadors.length]);

  const nextAmbassador = () => {
    setCurrentAmbassador((prev) => (prev + 1) % ambassadors.length);
    setIsAutoPlaying(false);
  };

  const prevAmbassador = () => {
    setCurrentAmbassador((prev) => (prev - 1 + ambassadors.length) % ambassadors.length);
    setIsAutoPlaying(false);
  };

  const goToAmbassador = (index: number) => {
    setCurrentAmbassador(index);
    setIsAutoPlaying(false);
  };

  const current = ambassadors[currentAmbassador];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">QIAF Brand Ambassadors</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the incredible individuals who make QIAF possible. Our diverse team of cultural ambassadors brings together expertise from around the world.
          </p>
        </div>

        {/* Main Ambassador Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-80 md:h-[500px] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-center transition-opacity duration-300"
                  style={{
                    aspectRatio: '1/1',
                    objectPosition: 'center center'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-ambassador.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{current.country}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{current.name}</h3>
                  <p className="text-white/90">{current.title}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12">
                <div className="h-full flex flex-col justify-between">
                  {/* Bio */}
                  <div>
                    <h4 className="text-2xl font-bold text-dark mb-4">About {current.name.split(' ')[0]}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {current.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevAmbassador}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label="Previous ambassador"
            >
              <ChevronLeft className="w-6 h-6 text-dark" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {ambassadors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToAmbassador(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentAmbassador 
                      ? 'bg-magenta scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to ambassador ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextAmbassador}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label="Next ambassador"
            >
              <ChevronRight className="w-6 h-6 text-dark" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-magenta text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Start Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAmbassadors;
