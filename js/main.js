let products = [
  {
    "id": 0,
    "product_name": "식기세척기",
    "brand_name": "세척나라",
    "photo": "img/pr1.jpg",
    "price": 100000
  },
  {
    "id": 1,
    "product_name": "원목 침대 프레임",
    "brand_name": "침대나라",
    "photo": "img/pr2.jpg",
    "price": 200000
  },
  {
    "id": 2,
    "product_name": "천연 디퓨저 세트",
    "brand_name": "향기나라",
    "photo": "img/pr3.jpg",
    "price": 300000
  },
  {
    "id": 3,
    "product_name": "시원한 서큘레이터",
    "brand_name": "바람나라",
    "photo": "img/pr4.jpg",
    "price": 400000
  }
];

// $.ajax({
//   url: 'json/store.json',
//   dataType: 'json'
//   }).done((data) => {
//     console.log(data);
//     for (let i = 0; i < data.length; i++){
//       console.log(data[i]);
//       products.push(data[i]);
//     }
// });

makeCard(products, '.product-list');

function clearCard(area) {
  $(area).html('');
}

function makeCard(list, area) {
  clearCard(area);
  list.forEach((i) => {
    let tmp = '';
    if (area == '.cart-items'){
      tmp = `<div class="card card-view" id="card">
        <img src="${i.photo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${i.product_name}</h5>
            <p class="card-text">${i.brand_name}</p>
        </div>
        <div class="card-bottom">
            <h6>${i.price}</h6>
        </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">수량</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-sm" value="${i.quantity}">
      </div>
      <div>
        <p>합계 : ${i.price * i.quantity}</p>
      </div>
      </div>`;
    } else {
      tmp =
        `<div class="card card-view" id="card">
        <img src="${i.photo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${i.product_name}</h5>
            <p class="card-text">${i.brand_name}</p>
        </div>
        <div class="card-bottom">
            <h6>${i.price}</h6>
        </div>
      </div>`;
    }
    $(area).append(tmp);

  });
}

