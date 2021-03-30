const linkModelLoader = require("./links.js");

module.exports = async (mongooseDB) => {
  const links = await linkModelLoader(mongooseDB.linksDB);
  module.exports.models = { links };
};
