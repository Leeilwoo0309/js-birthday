const _buyBtn: HTMLSpanElement = document.querySelector('#buy');
const _sellBtn: HTMLSpanElement = document.querySelector('#sell');
const _lendBtn: HTMLSpanElement = document.querySelector('#lend');
const _retBtn: HTMLSpanElement = document.querySelector('#ret');
const buyItemBtn: HTMLSpanElement = document.querySelector('#itemBuy');

_buyBtn.addEventListener('click', () => {
    stock[nowInfo[0]].buy();
});

_sellBtn.addEventListener('click', () => {
    stock[nowInfo[0]].sell();
});

_lendBtn.addEventListener('click', () => {
    bank[nowInfo[1]].lend();
});

_retBtn.addEventListener('click', () => {
    bank[nowInfo[1]].ret();
});

buyItemBtn.addEventListener('click', () => {
    items[nowInfo[2]].buy();
})