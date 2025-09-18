import { ReactNode } from "react";
import { Mail } from "lucide-react";
import { useMagnetic, use3DTilt } from "@/hooks/useAdvancedAnimations";

interface AnimatedContactCardProps {
  id: string;
  title: string;
  subtitle: string;
  email: string;
  icon: ReactNode;
  color: string;
  description: string;
  onClick: () => void;
}

const AnimatedContactCard = ({
  id,
  title,
  subtitle,
  email,
  icon,
  color,
  description,
  onClick
}: AnimatedContactCardProps) => {
  const { ref: magneticRef, position } = useMagnetic(0.2);
  const { ref: tiltRef, tilt } = use3DTilt(10);

  const combinedRef = (node: HTMLDivElement | null) => {
    if (magneticRef.current) magneticRef.current = node;
    if (tiltRef.current) tiltRef.current = node;
  };

  return (
    <div
      ref={combinedRef}
      className="group cursor-pointer glass rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-white/40 card-3d magnetic"
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        '--magnetic-x': `${position.x}px`,
        '--magnetic-y': `${position.y}px`,
        '--rotate-x': `${tilt.x}deg`,
        '--rotate-y': `${tilt.y}deg`,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      } as React.CSSProperties}
    >
      <div className="flex items-start justify-between mb-6">
        <div 
          className={`text-${color} group-hover:scale-110 transition-transform duration-300 group-hover:text-glow`}
          style={{ 
            filter: 'drop-shadow(0 0 8px rgba(233, 30, 99, 0.3))',
            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)'
          }}
        >
          {icon}
        </div>
        <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300 group-hover:scale-110">
          <Mail className="w-5 h-5" />
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-dark group-hover:text-gray-700 transition-colors duration-300 text-morphing">
          {title}
        </h3>
        <h4 className="text-lg text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
          {subtitle}
        </h4>
      </div>
      
      <p className="text-gray-500 text-sm mb-4 group-hover:text-gray-600 transition-colors duration-300">
        {description}
      </p>
      
      <div className="text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300 group-hover:text-shimmer">
        {email}
      </div>

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(233, 30, 99, 0.05) 0%, rgba(0, 188, 212, 0.05) 100%)`,
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
};

export default AnimatedContactCard;
