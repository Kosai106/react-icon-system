import React, { forwardRef } from 'react';
import iconMap from './lib';

interface IconProps {
  src: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(({ src, ...props }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    aria-hidden="true"
    {...props}
    ref={ref}
  >
    {iconMap[src]}
  </svg>
));

export default Icon;
