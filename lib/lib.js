'use strict';

var fileList = require.context('../../../' + process.env.REACT_APP_ICON_PATH, true, /[\s\S]*$/);
var iconMap = {};
fileList.keys().forEach(function (fileName) {
  fileName = fileName.replace('./', '');
  iconMap[fileName.replace('.svg', '')] = require('!svg-inline-loader!../../../' + process.env.REACT_APP_ICON_PATH + '/' + fileName);
});

module.exports = iconMap;