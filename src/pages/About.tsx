import { useEffect, useRef, useState } from "react";
import { Globe, Users, Award, Zap, Heart, Star, Trophy, Calendar, MapPin, Mail, Camera, Image } from "lucide-react";
import FounderSection from "@/components/FounderSection";
import ParticleSystem from "@/components/ParticleSystem";

const About = () => {
  const leadRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    countries: 0,
    people: 0
  });

  // What We Do - Services
  const services = [
    "Cultural Diplomacy",
    "Youth Programs", 
    "Art Festivals",
    "Space Science",
    "Community Building"
  ];

  // Our Values with Rashmi's photos
  const values = [
    {
      title: "Cultural Excellence",
      text: "We believe in the transformative power of culture to bridge divides and create meaningful connections. Every project we undertake is driven by our commitment to cultural excellence and authentic representation.",
      image: "/rashmi-photos/cultural-excellence.jpg",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Youth Empowerment",
      text: "The next generation is our greatest asset. We create platforms and opportunities for young people to lead, innovate, and shape the future of cultural exchange and community development.",
      image: "/rashmi-photos/youth-empowerment.jpg",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Global Collaboration",
      text: "From Qatar to 70+ countries worldwide, we believe in the power of international collaboration. Our partnerships span continents, bringing together diverse perspectives to create something truly extraordinary.",
      image: "/rashmi-photos/global-collaboration.jpg",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Innovation & Creativity",
      text: "We constantly push boundaries, exploring new ways to connect cultures and communities. Our approach combines traditional wisdom with cutting-edge innovation to create lasting impact.",
      image: "/rashmi-photos/innovation-creativity.jpg",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Community First",
      text: "Every decision we make is guided by what's best for our communities. We listen, learn, and adapt to ensure our work truly serves the people and places we're privileged to work with.",
      image: "/rashmi-photos/community-first.jpg",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  // Team Members
  const team = [
    { name: "Rashmi Agarwal", role: "Founder & CEO" },
    { name: "Cultural Ambassadors", role: "70+ Countries" },
    { name: "Youth Leaders", role: "500+ Engaged" },
    { name: "Artists & Creatives", role: "400+ Collaborators" },
    { name: "Community Partners", role: "Global Network" },
    { name: "Space Science Team", role: "Educational Leaders" }
  ];

  // Scroll tracking for responsive sizing
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated numbers for hero stats
  useEffect(() => {
    const targets = { years: 11, countries: 70, people: 5000 };
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
        setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    setTimeout(() => animateNumber('years', targets.years), 300);
    setTimeout(() => animateNumber('countries', targets.countries), 500);
    setTimeout(() => animateNumber('people', targets.people), 700);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add reveal class to the section
            entry.target.classList.add('reveal');
            
            // For services section, animate individual items
            if (entry.target === servicesRef.current) {
              const serviceItems = entry.target.querySelectorAll('.service-item');
              serviceItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('reveal');
                }, index * 100);
              });
            }
            
            // For values section, animate individual cards
            if (entry.target === valuesRef.current) {
              const valueCards = entry.target.querySelectorAll('.value-card');
              valueCards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('reveal');
                }, index * 150);
              });
            }
            
            // For team section, animate individual items
            if (entry.target === teamRef.current) {
              const teamItems = entry.target.querySelectorAll('.team-item');
              teamItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('reveal');
                }, index * 100);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    [leadRef, servicesRef, valuesRef, teamRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Fallback: Show all elements after 2 seconds if they haven't been revealed
    const fallbackTimeout = setTimeout(() => {
      const allServiceItems = document.querySelectorAll('.service-item');
      const allValueCards = document.querySelectorAll('.value-card');
      const allTeamItems = document.querySelectorAll('.team-item');
      
      allServiceItems.forEach(item => item.classList.add('reveal'));
      allValueCards.forEach(card => card.classList.add('reveal'));
      allTeamItems.forEach(item => item.classList.add('reveal'));
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/src/assets/Rashmi-founder/rashmi-agarwal-professional.jpg"
            alt="Rashmi Agarwal Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(4px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/70 to-black/95" />
        </div>
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-magenta/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cta/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Particle System */}
      <ParticleSystem 
        particleCount={25} 
        colors={['#e91e63', '#00bcd4', '#ff9800', '#4caf50']}
        mouseInteraction={true}
      />

      {/* Hero Section with Scroll-Responsive Sizing */}
      <section className="min-h-screen flex items-center justify-center py-20 relative z-10" ref={leadRef}>
        <div className="container mx-auto px-6 w-full">
          <div className="text-center max-w-6xl mx-auto">
            <h1 
              className="font-bold mb-8 text-shimmer transition-all duration-500 leading-none"
              style={{
                fontSize: Math.max(60, 140 - scrollY * 0.2) + 'px',
                lineHeight: 1.1
              }}
            >
              MAPS International WLL
            </h1>
            
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-semibold text-magenta mb-6">
                Where Cultures Converge
              </h2>
            </div>
            
            <p 
              className="text-white/90 leading-relaxed max-w-4xl mx-auto transition-all duration-500 mb-12"
              style={{
                fontSize: Math.max(18, 28 - scrollY * 0.05) + 'px'
              }}
            >
              We are a cultural & creative enterprise specializing in transformative experiences. From moments to movements, our work breaks through cultural barriers connecting communities across 70+ countries. We conjure cultural magic for the world's most meaningful initiatives.
            </p>
            
            {/* Hero Stats */}
            <div className="flex justify-center gap-12 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                  {animatedNumbers.years}+
                </div>
                <div className="text-white/70 text-sm font-medium">Years Impact</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                  {animatedNumbers.countries}+
                </div>
                <div className="text-white/70 text-sm font-medium">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                  {animatedNumbers.people}K+
                </div>
                <div className="text-white/70 text-sm font-medium">Lives Touched</div>
              </div>
            </div>

            {/* Glassmorphism Mission Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Award className="w-6 h-6 text-magenta" />
                <h3 className="text-xl font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Transforming the global cultural landscape through innovative art programs, youth empowerment initiatives, and strategic partnerships that create lasting social impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const founderSection = document.querySelector('#founder-section') || document.querySelector('.founder-section');
                    founderSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-magenta to-teal text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-magenta/25 transition-all duration-300 hover:scale-105"
                >
                  Meet Our Founder
                </button>
                <button 
                  onClick={() => {
                    const servicesSection = servicesRef.current;
                    servicesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  What We Do
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

      {/* What We Do Section */}
      <section className="py-20 relative z-10" ref={servicesRef}>
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-shimmer">What We Do</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {services.map((service, index) => (
              <div
                key={service}
                className="service-item bg-gradient-to-r from-magenta/20 to-teal/20 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-gradient-to-r hover:from-magenta/30 hover:to-teal/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-magenta/25"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section with Rashmi's Photos */}
      <section className="py-20 relative z-10" ref={valuesRef}>
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-shimmer">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="value-card group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-magenta/20"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={`Rashmi ${value.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  {/* Placeholder when image fails to load */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-teal/20 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-white/60 mx-auto mb-2" />
                      <p className="text-white/80 text-sm font-medium">Rashmi {value.title}</p>
                      <p className="text-white/60 text-xs">Photo Coming Soon</p>
                    </div>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-white/90 group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-magenta group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg group-hover:text-white/90 transition-colors">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Team Section */}
      <section className="py-20 relative z-10" ref={teamRef}>
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">This is MAPS International</h2>
          <p className="text-xl text-white/80 text-center mb-12 max-w-4xl mx-auto">
            MAPS International is proudly led by visionary cultural leaders. Our diverse and versatile team is made up of cultural ambassadors, youth advocates, creative strategists, and community builders who love creating cultural magic. Meet our community:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="team-item bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <h4 className="font-bold text-white mb-2">{member.name}</h4>
                <p className="text-white/70 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6 text-shimmer">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're an artist, youth leader, or cultural enthusiast, there's a place for you in the MAPS International community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-magenta to-teal text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-magenta/25 transition-all duration-300 hover:scale-105">
                Partner With Us
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;