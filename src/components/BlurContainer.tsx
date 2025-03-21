
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

const BlurContainer = ({ 
  children, 
  className, 
  intensity = 'medium',
  ...props 
}: BlurContainerProps) => {
  // Simplified styling with basic CSS classes
  const intensityMap = {
    light: 'bg-white/30 border-white/40',
    medium: 'bg-white/50 border-white/40',
    heavy: 'bg-white/70 border-white/50',
  };

  return (
    <div 
      className={cn(
        'rounded-2xl border shadow-md', 
        intensityMap[intensity],
        className
      )}
      style={{backdropFilter: 'blur(10px)'}}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
