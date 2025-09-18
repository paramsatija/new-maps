import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isTransitioning 
          ? 'opacity-0 transform translate-y-4' 
          : 'opacity-100 transform translate-y-0'
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
