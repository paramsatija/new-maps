interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'image' | 'button';
  className?: string;
}

const LoadingSkeleton = ({ type = 'card', className = '' }: LoadingSkeletonProps) => {
  const baseClasses = 'skeleton rounded';

  switch (type) {
    case 'card':
      return (
        <div className={`${baseClasses} h-64 w-full ${className}`}>
          <div className="p-6 space-y-4">
            <div className="skeleton h-6 w-3/4 rounded"></div>
            <div className="skeleton h-4 w-1/2 rounded"></div>
            <div className="skeleton h-4 w-full rounded"></div>
            <div className="skeleton h-4 w-2/3 rounded"></div>
          </div>
        </div>
      );
    
    case 'text':
      return (
        <div className={`${baseClasses} h-4 w-full ${className}`}></div>
      );
    
    case 'image':
      return (
        <div className={`${baseClasses} h-48 w-full ${className}`}></div>
      );
    
    case 'button':
      return (
        <div className={`${baseClasses} h-12 w-32 ${className}`}></div>
      );
    
    default:
      return <div className={`${baseClasses} h-4 w-full ${className}`}></div>;
  }
};

export default LoadingSkeleton;
