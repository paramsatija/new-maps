import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import CardShuffleGrid from "@/components/CardShuffleGrid";
import Gallery3D from "@/components/Gallery3D";
import ParticleSystem from "@/components/ParticleSystem";

const Work = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16 relative overflow-hidden">
      {/* Animated Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Magenta Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magenta/20 rounded-full blur-3xl animate-pulse"></div>
        {/* Teal Glow */}
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        {/* CTA Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cta/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Moving Glow Orbs */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-magenta/30 rounded-full blur-2xl animate-float-gentle"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-teal/25 rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Enhanced Particle System Background */}
      <ParticleSystem 
        particleCount={30} 
        colors={['#e91e63', '#00bcd4', '#ff9800', '#4caf50']}
        mouseInteraction={true}
      />

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shimmer">
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              From cultural diplomacy to youth empowerment — discover the projects that have transformed Qatar's cultural landscape and connected communities across 70+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section with Card Shuffle Animation */}
      <section className="py-20 relative z-10 min-h-screen">
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
