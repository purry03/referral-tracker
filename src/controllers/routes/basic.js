const express = require("express");
const router = express.Router();
const database = require("../../database");

router.get("/", function (req, res) {
  res.render("index.ejs");
});

router.get("/referral/:shortenedLink", function (req, res) {
  const linkToOpen = req.params.shortenedLink;
  if (linkToOpen == null) {
    res.redirect("/");
  } else {
    database.link.findLink(linkToOpen, function (err, source) {
      if (err) {
        res.send(500);
      } else {
        res.redirect(source);
      }
    });
  }
});

router.post("/generate", function (req, res) {
  database.link.getNewLink(req.body.link, function (err, link) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      var baseUrl = req.protocol + "://" + req.get("host");
      console.log(baseUrl);
      res.send(baseUrl + "/referral/" + link);
    }
  });
});
module.exports = router;
