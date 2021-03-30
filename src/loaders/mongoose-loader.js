const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);

  const linksDB = await mongoose.createConnection(
    "mongodb+srv://admim:ZdNdbkNG6fcONGvE@cluster0.cr66t.mongodb.net/mainDB"
  );

  return { linksDB };
};
