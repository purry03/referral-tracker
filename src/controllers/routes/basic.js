const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", function (req, res) {
  res.render("index.ejs");
});

router.get("/referral/:referralCode", function (req, res) {
  services.links
    .resolveReferralLink(req, res)
    .then((sourceLink) => {
      res.redirect(sourceLink);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

router.post("/generate", function (req, res) {
  services.links
    .generateReferralLink(req, res)
    .then((referralLink) => {
      res.send(referralLink);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;
