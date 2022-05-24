$(window).resize(function(event){
  adaptive_function();
});
function adaptive_header(w,h) {
    var headerMenu=$('.header__fixed');
    var headerLangs=$('.header__langs');
  if (w<768) {
    if (!headerLangs.hasClass('done')) {
      headerLangs.addClass('done').appendTo(headerMenu);
      $('.header__menu_l').addClass('done').appendTo(headerMenu);
      $('.header__menu_r').addClass('done').appendTo(headerMenu);
    }
  } else {
    if (headerLangs.hasClass('done')) {
      headerLangs.removeClass('done').appendTo($('.header__main'));
      $('.header__menu_l').removeClass('done').appendTo($('.header__main'));
      $('.header__menu_r').removeClass('done').appendTo($('.header__main'));
    }
  }
}
export function adaptive_function() {
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w,h);
}
adaptive_function();