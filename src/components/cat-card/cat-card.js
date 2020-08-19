$(document).ready(() => {
  $(".header__button-toggle").click(function () {
    $(".header__menu, .header__button-login, .header__button-register").toggleClass("header__active");

    let $icon = $(".header__button-toggle").html();
    if ($icon == 'dehaze') {
      $(".header__button-toggle").html('clear');
    } else {
      $(".header__button-toggle").html('dehaze');
    }

  });
});