// Description: Global JS
$(document).ready(function () {
  console.log("Hello World!");

  currentYear();

  $(".nav-link").click(function () {
    activateNavigation(this);
  });
});

function currentYear() {
  const year = new Date().getFullYear();
  console.log(year);
  $("#yearToday").text(year);
}

function activateNavigation(element) {
  $(".nav-link").removeClass("active");
  $(element).addClass("active");
}
