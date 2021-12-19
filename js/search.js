
// 검색창 이벤트리스너
$('#search').on('change', () => {
  let word = $('#search').val();
  let cards = $('.card');
  let title = $('.card-title');
  let text = $('.card-text');
  let bottom = $('.card-bottom');
  for (let i = 0; i < cards.length; i++) {
    $('.card').eq(i).addClass('card-view');
  }

  function makeHighlight(){
    for (let i = 0; i < cards.length; i++) {
      if (title.eq(i).html().indexOf(word) == -1 && text.eq(i).html().indexOf(word) == -1) {
        cards.eq(i).removeClass('card-view').addClass('card-hide');
      } else if (word != '') {
        console.log(title.eq(i).html().replace(word, '<span class=highlight>' + word + '</span>'));
        title.eq(i).html(title.eq(i).html().replace(word, '<span class=highlight>' + word + '</span>'));
        text.eq(i).html(text.eq(i).html().replace(word, '<span class=highlight>' + word + '</span>'));

      }
    }
  }
  function clearHighlight(){
    for (let i = 0; i < cards.length; i++) {
      title.eq(i).html(title.eq(i).html().replace('<span class=highlight>',''));
      text.eq(i).html(text.eq(i).html().replace('<span class=highlight>',''));
      bottom.eq(i).html(bottom.eq(i).html().replace('<span class=highlight>',''));
      title.eq(i).html(title.eq(i).html().replace('</span>',''));
      text.eq(i).html(text.eq(i).html().replace('</span>',''));
      bottom.eq(i).html(bottom.eq(i).html().replace('</span>',''));
    }
  }

  clearHighlight();
  makeHighlight();
});