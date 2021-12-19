let dt = new Date();
let now = dt.getFullYear() + '-' + dt.getMonth() + '-' + dt.getDate() + '  ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
$('.invoice-time').html(now);

$('.invoice-close').on('click', () =>{
  $('.invoice').css('display', 'none');
});


function productDetail(products) {
  let canvas = document.getElementById('invoice-canvas');
  let c = canvas.getContext("2d");
  c.font = '20px serif';
  for (let i = 0; i < products.length; i++){
    c.fillText('상품이름', 30, 30);
    c.fillText('회사명', 30, 50);
    c.fillText('가격', 30, 70);
    c.fillText('수량', 30, 90);
    c.fillText('합계', 30, 110);
  }
  c.fillText('총합계', 30, 170);
}