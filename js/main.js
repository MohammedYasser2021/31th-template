$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
  })
})

new WOW().init()
