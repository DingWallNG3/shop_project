$('.nav-link').on('click', (e) => {
  $('.active').removeClass('active');
  $(e.target).addClass('active');
  // e.target.classList.add('active');
});