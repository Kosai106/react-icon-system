import React from "react";
import iconMap from "./lib";

interface IconProps {
  src: string;
}

const Icon: React.FC<IconProps> = (props) => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
    dangerouslySetInnerHTML={{ __html: iconMap[props.src] }}
  />
);

export default Icon;
