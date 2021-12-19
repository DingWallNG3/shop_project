let dt = new Date();
let now = dt.getFullYear() + '-' + dt.getMonth() + '-' + dt.getDate() + '  ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
$('.invoice-time').html(now);

$('.invoice-close').on('click', () =>{
  $('.invoice').removeClass('show').addClass('hide');
});

function invoiceDetail(cart, sum) {
  let canvas = document.getElementsByClassName('invoice-canvas')[0];
  canvas.innerHTML = '';
  let c = canvas.getContext("2d");
  c.font = '20px serif';
  for (let i = 0; i < cart.length; i++) {
    let total = cart[i].price * cart[i].quantity;
    c.fillText(cart[i].product_name, 30, 30 + i * 150);
    c.fillText(cart[i].brand_name, 30, 50 + i * 150);
    c.fillText('가격: '+cart[i].price, 30, 70 + i * 150);
    c.fillText('수량: '+cart[i].quantity, 30, 90 + i * 150);
    c.fillText('합계: '+String(total), 30, 110 + i * 150);
  }
  c.fillText('총 합계: ' + sum, 30, 170 + cart.length * 150);
}
