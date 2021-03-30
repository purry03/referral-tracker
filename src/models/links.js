const mongoose = require("mongoose");

module.exports = async (mainDB) => {
  const linkSchema = mongoose.Schema({
    source: String,
    destination: String,
  });

  const Link = mainDB.model("Link", linkSchema);
  return Link;
};
