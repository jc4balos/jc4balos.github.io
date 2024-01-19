// Description: Global JS
$(document).ready(function () {
  console.log("Hello World!");

  currentYear();

  $(".nav-link").click(function () {
    activateNavigation(this);
  });

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).scroll(function () {
    $("#home").isInViewport() ? activateNavigation("#home-nav") : null;
    $("#socials").isInViewport() ? activateNavigation("#socials-nav") : null;
    $("#skills").isInViewport() ? activateNavigation("#skills-nav") : null;
    $("#credentials").isInViewport()
      ? activateNavigation("#credentials-nav")
      : null;
    $("#projects").isInViewport() ? activateNavigation("#projects-nav") : null;
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

// function isOnScreen(element) {
//   var curPos = element.offset();
//   var curTop = curPos.top;
//   var screenHeight = $(window).height();
//   return curTop > screenHeight ? false : true;
// }
