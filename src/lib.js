const fileList = require.context(`../../../${process.env.REACT_APP_ICON_PATH}`, true, /[\s\S]*$/);
let iconMap = {};
fileList.keys().forEach(fileName => {
  fileName = fileName.replace('./', '');
  iconMap[fileName.replace('.svg', '')] = require(`!svg-inline-loader!../../../${process.env.REACT_APP_ICON_PATH}/${fileName}`);
});

module.exports = iconMap