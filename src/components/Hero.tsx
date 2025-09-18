import { useState, useEffect, useRef } from "react";
import backgroundImage from "@/assets/background.jpg";
import mapsLogo from "@/assets/maps-logo.jpg";
import heroRashmi from "@/assets/hero-rashmi-diplomacy.jpg";
import heroQiaf from "@/assets/projects/qiaf-2025/qiaf-card.jpg";
import heroYouth from "@/assets/hero-youth-platform.jpg";
import heroSpace from "@/assets/projects/kssp/kssp-card.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    artists: 0,
    countries: 0,
    years: 0
  });
  const [isNumbersVisible, setIsNumbersVisible] = useState(false);
  const numbersRef = useRef<HTMLDivElement>(null);
  
  const heroImages = [
    { src: heroRashmi, alt: "Rashmi Agarwal engaging with international dignitaries at cultural diplomacy event" },
    { src: heroQiaf, alt: "Qatar International Art Festival showcasing 70+ countries cultural celebration" },
    { src: heroYouth, alt: "Young innovators from Qatar engaged in space science and cultural programs" },
    { src: heroSpace, alt: "Katara Space Science Program with students learning astronomy under desert sky" }
  ];

  // Scroll tracking for responsive sizing
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Number ticker animation
  useEffect(() => {
    if (!isNumbersVisible) return;

    const targets = { artists: 400, countries: 70, years: 11 };
    const duration = 2000; // 2 seconds
    const steps = 60; // 60fps
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
        setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    // Stagger the animations
    setTimeout(() => animateNumber('artists', targets.artists), 0);
    setTimeout(() => animateNumber('countries', targets.countries), 200);
    setTimeout(() => animateNumber('years', targets.years), 400);
  }, [isNumbersVisible]);

  // Intersection Observer for numbers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNumbersVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Particle Canvas Placeholder */}
      <canvas className="particle-canvas" id="hero-particles" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* MAPS Logo at Top */}
        <div className="mb-12 animate-fade-in">
          <div className="w-64 h-64 bg-white/10 backdrop-blur-md border-4 border-white/30 rounded-3xl p-4 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
            <img
              src={mapsLogo}
              alt="MAPS International Logo"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Company Name - Scroll Responsive */}
        <h1 
          className="text-white font-bold mb-8 animate-slide-up transition-all duration-500" 
          style={{ 
            animationDelay: '0.1s',
            fontSize: Math.max(45, 100 - scrollY * 0.2) + 'px',
            lineHeight: 1.1
          }}
        >
          MAPS International WLL
        </h1>

        {/* Main Tagline */}
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Where Cultures <span className="text-gradient">Converge</span>
        </h2>

        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12 max-w-4xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
          The world's artists are coming to Qatar.<br />
          Be part of something extraordinary.
        </p>

        {/* Event Details */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-12 max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-white text-lg font-semibold mb-4">QIAF 2025 • December 7-12 • Katara Cultural Village</p>
          <button 
            onClick={openSponsorModal}
            className="bg-gradient-to-r from-magenta to-teal text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-magenta/25 transition-all duration-300 hover:scale-105"
          >
            Join QIAF 2025
          </button>
        </div>

        {/* Stats Row - Animated Numbers */}
        <div 
          ref={numbersRef}
          className="flex flex-wrap justify-center gap-12 animate-scale-in" 
          style={{ animationDelay: '0.5s' }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 text-glow">
              {animatedNumbers.artists}+
            </div>
            <div className="text-white/70 text-sm">Artists</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 text-glow">
              {animatedNumbers.countries}+
            </div>
            <div className="text-white/70 text-sm">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 text-glow">
              {animatedNumbers.years}+
            </div>
            <div className="text-white/70 text-sm">Years</div>
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