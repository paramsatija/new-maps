import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getFeaturedProjects, renderIcon } from "@/data/projects";

const CardDeck = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const navigate = useNavigate();
  const events = getFeaturedProjects();

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % events.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + events.length) % events.length);
  };

  const openProject = (projectId: string) => {
    navigate(`/projects/${projectId}`);
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
                <div className="w-80 rounded-2xl overflow-hidden shadow-card bg-white flex flex-col">
                  <div className="flex-1 min-h-[200px]">
                    <img
                      src={events[(currentCard - 1 + events.length) % events.length].heroImage}
                      alt={events[(currentCard - 1 + events.length) % events.length].title}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border-t border-white/20 p-4">
                    <h4 className="text-dark text-sm font-bold truncate">
                      {events[(currentCard - 1 + events.length) % events.length].title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Current Card */}
              <div className="scale-100 transition-all duration-500 animate-scale-in">
                <div 
                  className="card-event w-96 relative overflow-hidden group cursor-pointer rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                  onClick={() => openProject(events[currentCard].id)}
                >
                  {/* Image Section */}
                  <div className="relative flex-1 min-h-[300px] max-h-[400px]">
                    <img
                      src={events[currentCard].heroImage}
                      alt={events[currentCard].title}
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Glassmorphism Content Section */}
                  <div className="bg-white/10 backdrop-blur-md border-t border-white/20 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-dark/90">{renderIcon(events[currentCard].iconType)}</div>
                      <span className="text-dark/80 text-sm font-medium bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        {events[currentCard].category}
                      </span>
                    </div>
                    
                    <h3 className="text-dark text-lg font-bold mb-2 leading-tight group-hover:text-dark/90 transition-colors">
                      {events[currentCard].title}
                    </h3>
                    <p className="text-dark/80 text-sm leading-relaxed mb-4 line-clamp-2">
                      {events[currentCard].description}
                    </p>
                    
                    <div className="flex gap-4 text-dark mb-4">
                      {Object.entries(events[currentCard].stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-bold">{value}+</div>
                          <div className="text-xs text-dark/70 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-dark/70 text-sm font-medium">View Project</span>
                      <div className="w-8 h-8 bg-dark/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-dark/20 transition-colors duration-300">
                        <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Card Preview */}
              <div className="opacity-50 scale-75 transition-all duration-500">
                <div className="w-80 rounded-2xl overflow-hidden shadow-card bg-white flex flex-col">
                  <div className="flex-1 min-h-[200px]">
                    <img
                      src={events[(currentCard + 1) % events.length].heroImage}
                      alt={events[(currentCard + 1) % events.length].title}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border-t border-white/20 p-4">
                    <h4 className="text-dark text-sm font-bold truncate">
                      {events[(currentCard + 1) % events.length].title}
                    </h4>
                  </div>
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
                className="card-event relative overflow-hidden cursor-pointer rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                onClick={() => openProject(event.id)}
              >
                <div className="relative flex-1 min-h-[250px] max-h-[350px]">
                  <img
                    src={event.heroImage}
                    alt={event.title}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                
                <div className="bg-white/10 backdrop-blur-md border-t border-white/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-dark/90">{renderIcon(event.iconType)}</div>
                    <span className="text-dark/80 text-sm font-medium bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-dark text-lg font-bold mb-2 leading-tight">{event.title}</h3>
                  <p className="text-dark/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex gap-4 text-dark mb-4">
                    {Object.entries(event.stats).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold">{value}+</div>
                        <div className="text-xs text-dark/70 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-dark/70 text-sm font-medium">View Project</span>
                    <div className="w-8 h-8 bg-dark/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default CardDeck;