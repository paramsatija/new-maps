import { useState, useEffect, useRef } from 'react';

interface AlternatingTextHeroProps {
  texts: string[];
  colors: string[];
  subtitle?: string;
  interval?: number;
}

const AlternatingTextHero = ({ 
  texts, 
  colors, 
  subtitle = "MAPS International WLL",
  interval = 2000 
}: AlternatingTextHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState<'type-left' | 'type-right' | 'type-center' | 'fade-out'>('type-left');
  const [isScrolled, setIsScrolled] = useState(false);
  const subtitleRef = useRef<HTMLDivElement>(null);

  // Scroll detection for subtitle scaling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100; // Start scaling after 100px scroll
      
      if (scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter animation sequence
  useEffect(() => {
    const timer = setInterval(() => {
      // Start fade out
      setAnimationState('fade-out');
      
      setTimeout(() => {
        // Change text and start typing animation
        const newIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(newIndex);
        
        // Determine typing direction based on new index
        const typingDirections = ['type-left', 'type-right', 'type-center'];
        const direction = typingDirections[newIndex % typingDirections.length] as 'type-left' | 'type-right' | 'type-center';
        setAnimationState(direction);
      }, 200); // Very fast transition
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval, currentIndex]);

  const getTextClass = (index: number) => {
    if (index === currentIndex) {
      return `hero-text ${colors[index]} ${animationState}`;
    }
    return `hero-text ${colors[index]} fade-out`;
  };

  return (
    <div className="hero-alternating">
      {/* Floating Particles */}
      <div className="hero-particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Text Container */}
      <div className="hero-text-container">
        {texts.map((text, index) => (
          <div
            key={`${text}-${index}`}
            className={getTextClass(index)}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Scroll-responsive Subtitle */}
      <div 
        ref={subtitleRef}
        className={`hero-subtitle ${isScrolled ? 'scrolled' : ''}`}
        style={{
          opacity: 1,
          visibility: 'visible'
        }}
      >
        {subtitle}
      </div>
    </div>
  );
};

export default AlternatingTextHero;
