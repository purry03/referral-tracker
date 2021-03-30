const modelLoader = require("../models");
const randomToken = require("random-token");
const { model } = require("mongoose");

module.exports.getNewLink = async function (link, callbackFn) {
  const shortenedLink = randomToken(12);

  var referralLink = modelLoader.models.links({
    source: link,
    destination: shortenedLink,
  });

  referralLink.save(function (err) {
    if (err) {
      callbackFn(err, null);
    } else {
      callbackFn(null, shortenedLink);
    }
  });
};

module.exports.findLink = async function (link, callbackFn) {
  modelLoader.models.links.findOne(
    { destination: link },
    function (err, document) {
      if (err) {
        callbackFn(err, null);
      } else {
        callbackFn(null, document.source);
      }
    }
  );
};
