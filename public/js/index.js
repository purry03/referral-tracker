function getReferralLink() {
  var link = $(".link-field").val().toString();
  $.post("/generate", { link: link }, function (data) {
    $(".referral-link").html(data);
  });
}
