const modelLoader = require("../models");

module.exports.saveNewReferralCode = async function (sourceLink, referralCode) {
  var promise = new Promise((resolve, reject) => {
    var referralLink = modelLoader.models.Link({
      sourceLink: sourceLink,
      referralCode: referralCode,
    });

    referralLink.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.findReferralCode = async function (referralCode) {
  var promise = new Promise((resolve, reject) => {
    modelLoader.models.Link.findOne(
      { referralCode: referralCode },
      function (err, document) {
        if (err) {
          reject(err);
        } else {
          resolve(document.sourceLink);
        }
      }
    );
  });
  return promise;
};
