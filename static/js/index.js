$(function () {
  var headerH,
    banner,
    gameIntrod,
    blockCompetition,
    gameAgent;
  var timer = null;
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500
  );
  setNavLineHeight(0);
  resetHeight();
  var unslider = $(".banner").unslider({
    speed: 500,
    delay: 3000,
    complete: function () { },
    keys: true,
    dots: true,
    fluid: true
  });
  var mUnslider = $(".m_banner").unslider({
    speed: 500,
    delay: 3000,
    complete: function () { },
    keys: true,
    dots: true,
    fluid: true
  });
  $(".m_banner")
    .on("swipeleft", function (e) {
      mUnslider.data("unslider").prev();
    })
    .on("swiperight", function (e) {
      mUnslider.data("unslider").next();
    });
  $(".right_nav a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 80
      },
      500
    );
    return false;
  });

  $(window).resize(function (e) {
    resetHeight();
  });
  $(window).scroll(function (e) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      let scrollTop = $(this).scrollTop();
      if (scrollTop > banner && scrollTop < gameIntrod) {
        setNavLineHeight(0);
      } else if (scrollTop > gameIntrod && scrollTop < blockCompetition) {
        setNavLineHeight(1);
      } else if (scrollTop > blockCompetition && scrollTop < gameAgent) {
        setNavLineHeight(2);
      } else if (scrollTop > gameAgent) {
        setNavLineHeight(3);
      } else {
        setNavLineHeight(3);
      }
    }, 100);
  });
  function setNavLineHeight(index) {
    $(".right_nav")
      .children("a")
      .eq(index)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  function resetHeight() {
    headerH = $("header").height();
    banner = $("#banner").offset().top - 81;
    gameIntrod = $("#gameIntrod").offset().top - 81;
    gameFeature = $("#gameFeature").offset().top - 81;
    blockCompetition = $("#blockCompetition").offset().top - 81;
    gameAgent = $("#gameAgent").offset().top - 81;
  }
});
