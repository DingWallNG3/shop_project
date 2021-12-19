// $.ajax({
//   url: 'json/store.json',
//   dataType: 'json'
//   }).done((data) => {
//     makeCard(data);
// });

let products = [
  {
    "id": 0,
    "product_name": "식기세척기",
    "brand_name": "세척나라",
    "photo": "pr1.jpg",
    "price": 100000
  },
  {
    "id": 1,
    "product_name": "원목 침대 프레임",
    "brand_name": "침대나라",
    "photo": "pr2.jpg",
    "price": 200000
  },
  {
    "id": 2,
    "product_name": "천연 디퓨저 세트",
    "brand_name": "향기나라",
    "photo": "pr3.jpg",
    "price": 300000
  },
  {
    "id": 3,
    "product_name": "시원한 서큘레이터",
    "brand_name": "바람나라",
    "photo": "pr4.jpg",
    "price": 400000
  }
];

makeCard(products);

function clearCard() {
  $('.product-list').html('');
}

function makeCard(list) {
  clearCard();
  list.forEach((i) => {
    let tmp =
      `<div class="card">
        <img src="img/${i.photo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${i.product_name}</h5>
            <p class="card-text">${i.brand_name}</p>
        </div>
        <div class="card-bottom">${i.price}</div>
      </div>`;
    $('.product-list').append(tmp);
  });
}


// 검색창 이벤트리스너
$('#search').on('input', () => {
  let word = $('#search').val();
  let cards = $('.card');

  for (let i = 0; i < cards.length; i++) {
    cards.eq(i).html(cards.eq(i).html().replaceAll('<span class=highlight>',''));
    cards.eq(i).html(cards.eq(i).html().replaceAll('</span>',''));
  }

  for (let i = 0; i < cards.length; i++) {
    $('.card').eq(i).css('display', 'inline-block');
  }

  let tmp = ['card-title', 'card-text', 'card-bottom'];
  for (let i = 0; i < cards.length; i++) {
    if (cards.eq(i).html().indexOf(word) == -1) {
      $('.card').eq(i).css('display', 'none');
    } else {
      tmp.forEach((e) => {
        let title = $('.${e}').eq(i);
        title.html(title.html().replaceAll(word, '<span class=highlight>'+ word + '</span>'));
      });
    }
  }
});