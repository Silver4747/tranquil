
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
  const intensityMap = {
    light: 'backdrop-blur-sm bg-white/30 border-white/40',
    medium: 'backdrop-blur-md bg-white/50 border-white/40',
    heavy: 'backdrop-blur-lg bg-white/70 border-white/50',
  };

  return (
    <div 
      className={cn(
        'rounded-2xl border shadow-glass animate-fade-in', 
        intensityMap[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
