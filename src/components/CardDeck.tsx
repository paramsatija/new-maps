import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Trophy, Star, Globe } from "lucide-react";
import heroQiaf from "@/assets/hero-qiaf-festival.jpg";
import heroYouth from "@/assets/hero-youth-platform.jpg";
import heroSpace from "@/assets/hero-space-science.jpg";

interface Event {
  id: string;
  title: string;
  year: number;
  description: string;
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
  category: string;
  icon: React.ReactNode;
}

const events: Event[] = [
  {
    id: "qiaf-2025",
    title: "QIAF — Qatar International Art Festival",
    year: 2025,
    description: "International art festivals, artist residencies, curated exhibitions connecting 400+ artists from 70+ countries.",
    stats: { editions: 7, artists: 400, countries: 70, engagements: 54603 },
    heroImage: heroQiaf,
    category: "Arts & Culture",
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: "youth-platform",
    title: "The YOUTH Platform",
    year: 2025,
    description: "The YOUTH platform, hackathons, bootcamps, leadership programs empowering 500+ young innovators across 8 focus areas.",
    stats: { focus_areas: 8, youth_engaged: 500 },
    heroImage: heroYouth,
    category: "Youth & Innovation",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: "kssp",
    title: "Katara Space Science Program",
    year: 2025,
    description: "6 editions • NASA, ISRO, Canadian Space Agency partnerships • 300+ students inspired",
    stats: { editions: 6, students: 300, agencies: 4 },
    heroImage: heroSpace,
    category: "Education & STEM",
    icon: <Star className="w-6 h-6" />
  }
];

const CardDeck = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % events.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + events.length) % events.length);
  };

  const openModal = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <section id="card-deck" className="py-20 bg-gradient-to-br from-light to-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-dark mb-4">Our Legacy Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our flagship initiatives that have transformed Qatar's cultural landscape and connected communities across 70+ countries.
            </p>
          </div>

          {/* Desktop Card Deck */}
          <div className="hidden md:block relative">
            <div className="flex items-center justify-center space-x-8">
              {/* Previous Card Preview */}
              <div className="opacity-50 scale-75 transition-all duration-500">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={events[(currentCard - 1 + events.length) % events.length].heroImage}
                    alt={events[(currentCard - 1 + events.length) % events.length].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Current Card */}
              <div className="scale-100 transition-all duration-500 animate-scale-in">
                <div 
                  className="card-event w-96 h-[500px] relative overflow-hidden group"
                  onClick={() => openModal(events[currentCard])}
                >
                  <div className="absolute inset-0">
                    <img
                      src={events[currentCard].heroImage}
                      alt={events[currentCard].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-white">{events[currentCard].icon}</div>
                      <span className="text-white/80 text-sm font-medium">{events[currentCard].category}</span>
                    </div>
                    
                    <h3 className="text-white mb-4 leading-tight">{events[currentCard].title}</h3>
                    <p className="text-white/90 text-base leading-relaxed mb-6">
                      {events[currentCard].description}
                    </p>
                    
                    <div className="flex gap-4 text-white">
                      {Object.entries(events[currentCard].stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold">{value}+</div>
                          <div className="text-xs text-white/70 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Card Preview */}
              <div className="opacity-50 scale-75 transition-all duration-500">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={events[(currentCard + 1) % events.length].heroImage}
                    alt={events[(currentCard + 1) % events.length].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevCard}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-dark rounded-full p-3 transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextCard}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-dark rounded-full p-3 transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Card Stack */}
          <div className="md:hidden space-y-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="card-event relative overflow-hidden"
                onClick={() => openModal(event)}
              >
                <div className="aspect-video relative">
                  <img
                    src={event.heroImage}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-dark">{event.icon}</div>
                    <span className="text-muted-foreground text-sm font-medium">{event.category}</span>
                  </div>
                  
                  <h3 className="text-dark mb-3">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex gap-4 text-dark">
                    {Object.entries(event.stats).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold">{value}+</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              <img
                src={selectedEvent.heroImage}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-dark">{selectedEvent.icon}</div>
                <span className="text-muted-foreground font-medium">{selectedEvent.category}</span>
              </div>
              
              <h2 className="text-dark mb-4">{selectedEvent.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {selectedEvent.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {Object.entries(selectedEvent.stats).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-light rounded-xl">
                    <div className="text-2xl font-bold text-dark mb-1">{value}+</div>
                    <div className="text-sm text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="btn-hero">Learn More</button>
                <button className="px-6 py-3 border border-dark text-dark rounded-xl hover:bg-dark hover:text-white transition-colors">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDeck;