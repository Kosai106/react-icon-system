export type fileList = {
  [key: string]: string;
};

export const computeIconList = (): fileList => {
  if (!process.env.REACT_APP_ICON_PATH) {
    throw new Error("REACT_APP_ICON_PATH environment variable is not set!");
  }

  const fileList = require
    .context(`../../../${process.env.REACT_APP_ICON_PATH}`, true, /[\s\S]*$/)
    .keys();

  return fileList.reduce((acc: fileList, cur) => {
    const fileName = cur.replace("./", "");
    const iconName = fileName.replace(".svg", "");
    acc[
      iconName
    ] = require(`!svg-inline-loader!../../../${process.env.REACT_APP_ICON_PATH}/${fileName}`);

    return acc;
  }, {});
};

export default computeIconList();
