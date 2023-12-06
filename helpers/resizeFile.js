const Jimp = require("jimp");

const resizeFile = async (filePath) => {
  const imageData = await Jimp.read(filePath);
  imageData.resize(250, 250);
  await imageData.writeAsync(filePath);
};

module.exports = resizeFile;
