const buyBtn: HTMLSpanElement = document.querySelector('#buy');
const sellBtn: HTMLSpanElement = document.querySelector('#sell');
const lendBtn: HTMLSpanElement = document.querySelector('#lend');
const retBtn: HTMLSpanElement = document.querySelector('#ret');

buyBtn.addEventListener('click', () => {
    stock[nowInfo[0]].buy();
});

sellBtn.addEventListener('click', () => {
    stock[nowInfo[0]].sell();
});

lendBtn.addEventListener('click', () => {
    bank[nowInfo[1]].lend();
});

retBtn.addEventListener('click', () => {
    bank[nowInfo[1]].ret();
});