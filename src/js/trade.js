var _buyBtn = document.querySelector('#buy');
var _sellBtn = document.querySelector('#sell');
var _lendBtn = document.querySelector('#lend');
var _retBtn = document.querySelector('#ret');
var buyItemBtn = document.querySelector('#itemBuy');
_buyBtn.addEventListener('click', function () {
    stock[nowInfo[0]].buy();
});
_sellBtn.addEventListener('click', function () {
    stock[nowInfo[0]].sell();
});
_lendBtn.addEventListener('click', function () {
    bank[nowInfo[1]].lend();
});
_retBtn.addEventListener('click', function () {
    bank[nowInfo[1]].ret();
});
buyItemBtn.addEventListener('click', function () {
    items[nowInfo[2]].buy();
});
