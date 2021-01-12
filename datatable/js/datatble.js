
$(document).ready(function () {
  $("#view-res").click(function () {
    let req = $.ajax({
      type: "GET",
      url: "booking1.html",
    });
    req.done(function (data) {
      $("#swap-tables").html(data);
    });
    req.fail(function (err) {
      $("#swap-tables").text(err.statusText);
    });
  });
});

