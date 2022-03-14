$(document).ready(function () {
  console.log("page loaded.");

  $(".service-card").click(function () {
    //  $()
    $(this).find("p").toggle();

    // $('.card-image').toggle();
  });
});
 