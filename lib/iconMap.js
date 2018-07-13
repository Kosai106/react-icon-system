const fileList = require.context(process.env.IMAGE_PATH, true, /[\s\S]*$/);
let iconMap = {};
fileList.keys().forEach(fileName => {
  fileName = fileName.replace('./', '');
  iconMap[fileName.replace('.svg', '')] = require(`!svg-inline-loader!${process.env.IMAGE_PATH}/${fileName}`);
});

export default iconMap