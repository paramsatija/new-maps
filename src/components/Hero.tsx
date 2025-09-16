import { useState, useEffect } from "react";
import heroRashmi from "@/assets/hero-rashmi-diplomacy.jpg";
import heroQiaf from "@/assets/hero-qiaf-festival.jpg";
import heroYouth from "@/assets/hero-youth-platform.jpg";
import heroSpace from "@/assets/hero-space-science.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    { src: heroRashmi, alt: "Rashmi Agarwal engaging with international dignitaries at cultural diplomacy event" },
    { src: heroQiaf, alt: "Qatar International Art Festival showcasing 70+ countries cultural celebration" },
    { src: heroYouth, alt: "Young innovators from Qatar engaged in space science and cultural programs" },
    { src: heroSpace, alt: "Katara Space Science Program with students learning astronomy under desert sky" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToCardDeck = () => {
    const cardDeck = document.getElementById('card-deck');
    cardDeck?.scrollIntoView({ behavior: 'smooth' });
  };

  const openSponsorModal = () => {
    // This would open a modal in a real implementation
    window.open('mailto:info@mapsinternational.qa?subject=Cultural%20Partnership%20Inquiry', '_blank');
  };

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Images with Transition */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>
        ))}
      </div>

      {/* Particle Canvas Placeholder */}
      <canvas className="particle-canvas" id="hero-particles" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl animate-fade-in">
          {/* Micro Tagline */}
          <p className="text-white/80 text-lg mb-4 font-medium tracking-wide animate-slide-up">
            Mapping Possibilities. Building Impact.
          </p>

          {/* Main Headline */}
          <h1 className="text-white mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Rashmi Agarwal: Building Cultural Bridges Across{' '}
            <span className="text-gradient">70+ Nations</span>
          </h1>

          {/* Subhead */}
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            From local workshops to international diplomacy — 11 years of transforming Qatar's cultural landscape through art, youth empowerment, and government-backed cultural diplomacy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={openSponsorModal}
              className="btn-hero"
              aria-label="Join the Cultural Revolution - Contact MAPS International"
            >
              Join the Cultural Revolution
            </button>
            <button 
              onClick={scrollToCardDeck}
              className="btn-secondary"
              aria-label="Explore Our Legacy - View MAPS projects"
            >
              Explore Our Legacy
            </button>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">70+</div>
              <div className="text-white/70 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">11+</div>
              <div className="text-white/70 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">54,603+</div>
              <div className="text-white/70 text-sm">Engagements</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">400+</div>
              <div className="text-white/70 text-sm">Artists</div>
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
  );
};

export default Hero;