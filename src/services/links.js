const database = require("../database");
const randomToken = require("random-token");

module.exports.generateReferralLink = (req, res) => {
  const promise = new Promise((resolve, reject) => {
    const sourceLink = req.body.link;
    const referralCode = generateReferralCode(12);
    database.links
      .saveNewReferralCode(sourceLink, referralCode)
      .then((isSaved) => {
        var appUrl = req.protocol + "://" + req.get("host");
        resolve(appUrl + "/referral/" + referralCode);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};

module.exports.resolveReferralLink = (req, res) => {
  var promise = new Promise((resolve, reject) => {
    const referralCode = req.params.referralCode;
    database.links
      .findReferralCode(referralCode)
      .then((sourceLink) => {
        resolve(sourceLink);
      })
      .catch((err) => {
        reject(err);
      });
  });
  return promise;
};

const generateReferralCode = (length) => {
  const referralCode = randomToken(12);
  return referralCode;
};
