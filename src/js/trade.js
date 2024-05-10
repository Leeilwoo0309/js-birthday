var buyBtn = document.querySelector('#buy');
var sellBtn = document.querySelector('#sell');
var lendBtn = document.querySelector('#lend');
var retBtn = document.querySelector('#ret');
buyBtn.addEventListener('click', function () {
    stock[nowInfo[0]].buy();
});
sellBtn.addEventListener('click', function () {
    stock[nowInfo[0]].sell(Number(buySellGatsu.value));
});
lendBtn.addEventListener('click', function () {
    bank[nowInfo[1]].lend();
});
retBtn.addEventListener('click', function () {
    bank[nowInfo[1]].ret();
});
