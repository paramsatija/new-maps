import { useEffect, useState } from 'react';

interface CustomCursorProps {
  children: React.ReactNode;
}

const CustomCursor = ({ children }: CustomCursorProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {children}
      
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: cursorPosition.x - 12,
          top: cursorPosition.y - 12,
          transform: isClicking ? 'scale(0.8)' : 'scale(1)',
        }}
      >
        {/* Main cursor dot */}
        <div
          className={`w-6 h-6 rounded-full transition-all duration-300 ${
            isHovering 
              ? 'bg-magenta scale-150' 
              : 'bg-dark scale-100'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 20px rgba(233, 30, 99, 0.5)' 
              : '0 0 10px rgba(0, 0, 0, 0.3)'
          }}
        />
        
        {/* Outer ring */}
        <div
          className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
            isHovering 
              ? 'border-magenta scale-200 opacity-30' 
              : 'border-gray-400 scale-150 opacity-50'
          }`}
          style={{
            animation: isHovering ? 'pulse 2s infinite' : 'none'
          }}
        />
        
        {/* Click ripple effect */}
        {isClicking && (
          <div
            className="absolute inset-0 rounded-full border-2 border-magenta animate-ping"
            style={{
              animation: 'ripple 0.6s ease-out'
            }}
          />
        )}
      </div>

      {/* Cursor trail particles */}
      <div className="fixed pointer-events-none z-40">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-magenta rounded-full opacity-50"
            style={{
              left: cursorPosition.x - 2,
              top: cursorPosition.y - 2,
              animation: `particle-trail ${0.5 + i * 0.1}s ease-out forwards`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CustomCursor;
