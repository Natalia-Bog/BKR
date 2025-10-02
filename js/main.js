$(function () {
  $('.about__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('about__acc-link--active')) {
      $(this).removeClass('about__acc-link--active')
      $(this).children('.about__acc-text').slideUp()
    } else {
      $('.about__acc-link').removeClass('about__acc-link--active')
      $('.about__acc-text').slideUp()
      $(this).addClass('about__acc-link--active')
      $(this).children('.about__acc-text').slideDown()
    }
  })

  $('.bakers__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('bakers__acc-link--active')) {
      $(this).removeClass('bakers__acc-link--active')
      $(this).children('.bakers__acc-text').slideUp()
    } else {
      $('.bakers__acc-link').removeClass('bakers__acc-link--active')
      $('.bakers__acc-text').slideUp()
      $(this).addClass('bakers__acc-link--active')
      $(this).children('.bakers__acc-text').slideDown()
    }
  })
  $(".header__list a, .header__top-btn").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })

})
