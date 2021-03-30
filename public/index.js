function getReferralLink() {
  var link = $(".link").val().toString();
  $.post("/generate", { link: link }, function (data) {
    $(".referralLink").html(data);
  });
}
