var buyBtn = document.querySelector('#buy');
var sellBtn = document.querySelector('#sell');
buyBtn.addEventListener('click', function () {
    stock[nowInfo].buy();
});
sellBtn.addEventListener('click', function () {
    stock[nowInfo].sell(Number(buySellGatsu.value));
});
