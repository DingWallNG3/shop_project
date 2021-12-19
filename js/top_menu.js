$('nav-item').on('click', (e) => {
  $('.active').removeClass('active');
  e.target.addClass('active');
});