require("dotenv").config();

module.exports.init = () => {
  global.DB_SRV = process.env.DB_SRV;
};
