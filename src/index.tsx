import React, { forwardRef } from 'react';
import computeIconList from './lib';

export type IconProps = {
  src: string;
  className?: string;
} & React.SVGAttributes<SVGElement>;

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ src, ...props }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    aria-hidden="true"
    {...props}
    ref={ref}
    dangerouslySetInnerHTML={{ __html: computeIconList[src] }}
  />
));

export default Icon;
