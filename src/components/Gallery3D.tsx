import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface Gallery3DProps {
  items: Array<{
    id: string;
    title: string;
    image: string;
    description: string;
  }>;
  onItemClick?: (item: any) => void;
}

const Gallery3D = ({ items, onItemClick }: Gallery3DProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const galleryRef = useRef<HTMLDivElement>(null);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating, items.length]);

  // Mouse tracking for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;
    
    const rect = galleryRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    
    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoRotating(false);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoRotating(false);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  return (
    <div className="relative w-full h-96 gallery-3d">
      <div
        ref={galleryRef}
        className="relative w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* 3D Gallery Container */}
        <div
          className="relative w-full h-full"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Current Item */}
          <div
            className="absolute inset-0 gallery-item-3d cursor-pointer"
            onClick={() => onItemClick?.(items[currentIndex])}
            style={{
              transform: 'translateZ(0px)',
              zIndex: 2,
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={items[currentIndex].image}
                alt={items[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{items[currentIndex].title}</h3>
                <p className="text-white/90 text-sm">{items[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Previous Item (Left) */}
          <div
            className="absolute inset-0 gallery-item-3d opacity-50"
            style={{
              transform: 'translateZ(-100px) translateX(-200px) rotateY(45deg)',
              zIndex: 1,
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src={items[(currentIndex - 1 + items.length) % items.length].image}
                alt={items[(currentIndex - 1 + items.length) % items.length].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Next Item (Right) */}
          <div
            className="absolute inset-0 gallery-item-3d opacity-50"
            style={{
              transform: 'translateZ(-100px) translateX(200px) rotateY(-45deg)',
              zIndex: 1,
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src={items[(currentIndex + 1) % items.length].image}
                alt={items[(currentIndex + 1) % items.length].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevItem}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={toggleAutoRotate}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isAutoRotating 
                ? 'bg-magenta/80 text-white' 
                : 'bg-white/20 backdrop-blur-sm text-white'
            }`}
          >
            <RotateCcw className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextItem}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoRotating(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-magenta scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery3D;
