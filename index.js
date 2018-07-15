import React, { Component } from "react";

export const iconMap = dir => {
  const fileList = require.context(dir, true, /[\s\S]*$/);
  let map = {};
  fileList.keys().forEach(fileName => {
    fileName = fileName.replace('./', '');
    map[fileName.replace('.svg', '')] = require(`!svg-inline-loader!${dir}/${fileName}`);
  });

  return map
}

class Icon extends Component {
  render() {
    return (
      <svg
        {...props}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: props.src }}
      />
    );
  }
}

export default Icon;
