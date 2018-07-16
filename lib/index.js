exports.iconMap = function(dir) {
  require.context(dir, true, /[\s\S]*$/);
  // const fileList = `${process.cwd()}/${dir}/*.svg`;
  let map = {};
  fileList.keys().forEach(fileName => {
    fileName = fileName.replace('./', '');
    map[fileName.replace('.svg', '')] = require(`!svg-inline-loader!${dir}/${fileName}`);
  });

  return map
}