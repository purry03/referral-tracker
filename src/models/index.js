const linkModelLoader = require("./links.js");

module.exports.init = async (mongooseDB) => {
  const Link = await linkModelLoader(mongooseDB.linksDB);
  models = { Link };
  module.exports.models = models;
};
