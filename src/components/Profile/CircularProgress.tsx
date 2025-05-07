'use client';

import type { CircularProgressProps } from '@/types/profile';

export default function CircularProgress({ progress, className = '' }: CircularProgressProps) {
  const strokeWidth = 5;
  const radius = 47.5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <div className={`${className}`}>
      <svg className="w-full h-full transform rotate-60" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} stroke="#cbd5e1" strokeWidth={strokeWidth} fill="none" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#14b8a6"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          className="animate-progress"
          style={
            {
              '--level-progress-final-offset': offset, // set global variable for animation
            } as React.CSSProperties
          }
        />
      </svg>
    </div>
  );
}

CircularProgress.defaultProps = {
  className: '',
};
