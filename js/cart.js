let cart = [];
let sum = 0;

$('.card').draggable({
  revert: true
});

$('#put-area').droppable({
  drop: function(event, ui) {
    const item = $(ui.draggable);
    const item_object = {
      product_name : item.find('.card-title').html(),
      brand_name : item.find('.card-text').html(),
      price : item.find('h6').html(),
      photo: item.find('img').attr('src'),
      quantity: 1
    };
    const index = cart.findIndex((e) => e.product_name == item_object.product_name);
    if (index == -1){
      cart.push(item_object);
    } else {
      cart[index].quantity++;
    }
    console.log(cart);
    makeCard(cart, '.cart-items')
    sum = calSum(cart);
    $('.cart-text').html(`총 합계 : ${sum}`);
  }
});

function calSum(arr) {
  let result = 0;
  arr.forEach((e) => {
    result += e.price * e.quantity;
  });
  return result;
}


$('.form-control').on('change', (e) => {
  if ($(e.target).text() <= 0) {
    const idx = cart.findIndex((i) => {
      return i.quantity <= 0
    });
    if (idx != -1) cart.splice(idx, 1);
  } else {
    for (let i = 0; i < cart.length; i++) {
      cart[i].quantity =document.getElementsByClassName('form-control')[i].value;
    }
    console.log(cart);
    makeCard(cart, '.cart-items');
  }
});



$('#purchase').on('click', () => {
  $('.invoice').removeClass('hide').addClass('show');
  invoiceDetail(cart, sum);
});
