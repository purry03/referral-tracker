const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);

  const linksDB = await mongoose.createConnection(DB_SRV);

  return { linksDB };
};
