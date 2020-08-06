export type fileList = {
  [key: string]: string;
};

export const computeIconList = (): fileList => {
  if (!process.env.REACT_APP_ICON_PATH) {
    throw new Error("REACT_APP_ICON_PATH environment variable is not set!");
  }

  if (typeof require.context === "undefined") {
    const fs = require("fs");
    const path = require("path");

    require.context = (
      base: string,
      deep?: boolean,
      filter?: RegExp
    ): __WebpackModuleApi.RequireContext => {
      const files = {};

      function readDirectory(directory) {
        fs.readdirSync(directory).forEach((file) => {
          const fullPath = path.resolve(directory, file);

          if (fs.statSync(fullPath).isDirectory()) {
            if (deep) readDirectory(fullPath);

            return;
          }

          if (!filter.test(fullPath)) return;

          files[fullPath] = true;
        });
      }

      readDirectory(path.resolve(__dirname, base));

      function Module(file) {
        return require(file);
      }

      Module.keys = () => Object.keys(files);

      // @ts-ignore
      return Module;
    };
  }

  const fileList = require
    .context(`${process.env.REACT_APP_ICON_PATH}`, true, /[\s\S]*$/)
    .keys();

  return fileList.reduce((acc: fileList, cur) => {
    const fileName = cur.replace("./", "");
    const iconName = fileName.replace(".svg", "");
    console.log(
      `!svg-inline-loader!../../../${process.env.REACT_APP_ICON_PATH}/${fileName}`
    );
    acc[iconName] = require(`!svg-inline-loader!./${fileName}`);

    return acc;
  }, {});
};

export default computeIconList();
