const mongoose = require("mongoose");

module.exports = async (mainDB) => {
  const linkSchema = mongoose.Schema({
    sourceLink: String,
    referralCode: String,
  });

  const Link = mainDB.model("Link", linkSchema);
  return Link;
};
