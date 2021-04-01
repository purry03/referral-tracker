const expressLoader = require("./express-loader.js");
const mongooseLoader = require("./mongoose-loader.js");
const modelLoader = require("../models");

module.exports.init = async (expressApp) => {
  await expressLoader(expressApp);
  console.log("Express Initialized");
  const mongooseDB = await mongooseLoader();
  console.log("MongoDB Connected");
  const models = await modelLoader.init(mongooseDB);
  console.log("Mongoose Models Ready");
};
