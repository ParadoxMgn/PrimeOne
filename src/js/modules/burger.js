export function isBurger() {
  $(document).ready(function () {
    $('.header__burger').click(function (event) {
      $('.header__fixed').toggleClass('header__fixed_active');
      $('.header__burger').toggleClass('header__burger_active');
      $('body').toggleClass('lock');
    });
  });
}