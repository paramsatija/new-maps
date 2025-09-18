import { useNavigate } from "react-router-dom";
import { renderIcon } from "@/data/projects";

interface BentoCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  iconType: 'globe' | 'users' | 'star' | 'trophy';
  heroImage: string;
  stats: Record<string, number>;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'xlarge';
}

const BentoCard: React.FC<BentoCardProps> = ({
  id,
  title,
  description,
  category,
  iconType,
  heroImage,
  stats,
  featured = false,
  size = 'medium'
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  };

  const sizeClasses = {
    small: 'col-span-1',
    medium: 'col-span-1 md:col-span-2',
    large: 'col-span-1 md:col-span-2',
    wide: 'col-span-1 md:col-span-3',
    xlarge: 'col-span-1 md:col-span-4'
  };

  return (
    <div
      onClick={handleClick}
      className={`group cursor-pointer ${sizeClasses[size]} relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col`}
    >
      {/* Image Section - Top */}
      <div className="relative flex-1 min-h-[200px] max-h-[400px]">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Glassmorphism Content Section - Bottom */}
      <div className="bg-white/10 backdrop-blur-md border-t border-white/20 p-6">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="text-dark/90">{renderIcon(iconType, "w-4 h-4")}</div>
          <span className="text-dark/80 text-sm font-medium bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
            {category}
          </span>
          {featured && (
            <span className="text-white text-sm font-medium bg-magenta/80 backdrop-blur-sm px-3 py-1 rounded-full">
              Legacy
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-dark text-lg md:text-xl font-bold mb-2 leading-tight group-hover:text-dark/90 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-dark/80 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="flex gap-4 text-dark mb-4">
          {Object.entries(stats).slice(0, 3).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-sm font-bold">{value}+</div>
              <div className="text-xs text-dark/70 capitalize">{key.replace('_', ' ')}</div>
            </div>
          ))}
        </div>

        {/* View Project Button */}
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
  );
};

interface BentoGridProps {
  projects: BentoCardProps[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ projects }) => {
  // Optimize layout based on image dimensions and project importance
  const getOptimalSize = (project: BentoCardProps, index: number): 'small' | 'medium' | 'large' | 'wide' | 'xlarge' => {
    // Featured projects get priority positioning
    if (project.featured) {
      if (index === 0) return 'wide';    // QIAF - 1600x1600 (featured, wide)
      if (index === 1) return 'large';   // Youth Platform - 1600x1600 (featured, large)
      if (index === 2) return 'large';   // Space Science - 2048x2048 (featured, large)
    }
    
    // Non-featured projects based on image quality and content
    if (project.id === 'astro-fair' || project.id === 'cosmic-canvas') {
      return 'medium'; // 2048x2048 - high quality, medium card
    }
    
    if (project.id === 'colours-of-desert') {
      return 'medium'; // 1182x1182 - medium quality, medium card
    }
    
    if (project.id === 'katara-football-card') {
      return 'small'; // 960x960 - smaller image, small card
    }
    
    if (project.id === 'qatar-literature') {
      return 'small'; // 225x225 - very small image, small card
    }
    
    return 'medium'; // Default
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {projects.map((project, index) => {
        const size = getOptimalSize(project, index);

        return (
          <BentoCard
            key={project.id}
            {...project}
            size={size}
          />
        );
      })}
    </div>
  );
};

export default BentoGrid;
