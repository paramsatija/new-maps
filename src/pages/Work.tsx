import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import CardShuffleGrid from "@/components/CardShuffleGrid";
import Gallery3D from "@/components/Gallery3D";
import ParticleSystem from "@/components/ParticleSystem";
import { useState, useEffect } from "react";

const Work = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    countries: 0,
    artists: 0
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targets = { projects: 8, countries: 70, artists: 400 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateNumber = (key: keyof typeof targets, target: number) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    setTimeout(() => animateNumber('projects', targets.projects), 500);
    setTimeout(() => animateNumber('countries', targets.countries), 700);
    setTimeout(() => animateNumber('artists', targets.artists), 900);
  }, []);

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  // Prepare gallery data
  const galleryItems = projects.slice(0, 5).map(project => ({
    id: project.id,
    title: project.title,
    image: project.heroImage,
    description: project.description
  }));

  return (
    <div className="min-h-screen relative overflow-hidden">
          <img
            src="/src/assets/projects/qiaf-2025/qiaf-card.jpg"
            alt="QIAF Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(3px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magenta/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-teal/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cta/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Particle System Background */}
      <ParticleSystem 
        particleCount={30} 
        colors={['#e91e63', '#00bcd4', '#ff9800', '#4caf50']}
        mouseInteraction={true}
      />

      {/* Enhanced Hero Section */}
      <section className="h-[50vh] bg-teal flex items-center justify-center py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 
              className="font-bold text-white mb-8 text-shimmer text-5xl"
            >
              Our Work
            </h1>
            <p 
              className="text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto text-xl"
            >
              From cultural diplomacy to youth empowerment — discover the projects that have transformed Qatar's cultural landscape and connected communities across 70+ countries.
            </p>
            
            {/* Animated Stats */}
            <div className="flex justify-center gap-12 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                  {animatedStats.projects}+
                </div>
                <div className="text-white/70 text-sm font-medium">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                  {animatedStats.countries}+
                </div>
                <div className="text-white/70 text-sm font-medium">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                  {animatedStats.artists}+
                </div>
                <div className="text-white/70 text-sm font-medium">Artists</div>
              </div>
            </div>

            {/* Glassmorphism CTA Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
              <p className="text-white/90 text-lg mb-6">
                Experience the intersection of art, culture, and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/connect')}
                  className="bg-gradient-to-r from-magenta to-teal text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-magenta/25 transition-all duration-300 hover:scale-105"
                >
                  Partner With Us
                </button>
                <button 
                  onClick={() => {
                    const cardDeck = document.getElementById('projects-section');
                    cardDeck?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Explore Projects
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex flex-col items-center justify-start pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Projects Section with Card Shuffle Animation */}
      <section id="projects-section" className="py-20 relative z-10 min-h-screen">
        <div className="container mx-auto px-6">
          <CardShuffleGrid projects={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6 text-shimmer">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our mission to create meaningful cultural impact across the globe. Let's build something extraordinary together.
            </p>
            <button
              onClick={() => navigate('/connect')}
              className="bg-gradient-to-r from-magenta to-teal text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-magenta/25 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* 3D Gallery Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 text-shimmer">
              Featured Projects Gallery
            </h2>
            <Gallery3D 
              items={galleryItems}
              onItemClick={(item) => handleProjectClick(item.id)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
