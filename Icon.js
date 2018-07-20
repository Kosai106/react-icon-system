import React from "react";

const Icon = props => (
  <svg
    {...props}
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    dangerouslySetInnerHTML={{ __html: props.src }}
  />
)

export default Icon;
