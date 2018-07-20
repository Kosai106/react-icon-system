import React from "react";

const fileList = require.context(process.env.REACT_APP_ICON_PATH, true, /[\s\S]*$/);
let iconMap = {};
fileList.keys().forEach(fileName => {
  fileName = fileName.replace('./', '');
  iconMap[fileName.replace('.svg', '')] = require(`!svg-inline-loader!${process.env.REACT_APP_ICON_PATH}/${fileName}`);
});

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

module.exports = {
  Icon,
  iconMap
}