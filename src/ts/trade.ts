const buyBtn: HTMLSpanElement = document.querySelector('#buy');
const sellBtn: HTMLSpanElement = document.querySelector('#sell');

buyBtn.addEventListener('click', () => {
    stock[nowInfo].buy();
});

sellBtn.addEventListener('click', () => {
    stock[nowInfo].sell(Number(buySellGatsu.value));
});