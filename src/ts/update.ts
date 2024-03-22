let upDownPerCent: string;

function updateText(stockData: Stock) {
    const stockNameText: HTMLHeadingElement = document.querySelector('#stockName');
    const stockPriceText: HTMLSpanElement = document.querySelector('#stockPrice');

    stockNameText.innerHTML = `${stockData.name} <span id="stockPrice">${stockData.price}</span>`;
}

function priceUpdate(): void {
    if (isNaN(Number(buySellGatsu.value))) {
        buyOrSellPriceDisplayer.innerHTML = `${ buySellGatsu.value }가 니눈엔 숫자냐?`;
    } else {
        buyOrSellPriceDisplayer.innerHTML = `${ stock[nowInfo].price * Number(buySellGatsu.value) }`;
    }

    calcCurrentStockMoney();
    upDownPerCent = Math.floor((currentStockMoney / boughtStockMoney) * 10000 - 10000).toString(); 
    document.querySelector('#money').innerHTML = money.toFixed();
    document.querySelector('#stockCurrentPrice').innerHTML = `${currentStockMoney.toFixed()}원 (${upDownPerCent.substring(0, upDownPerCent.length - 2) == '' ? '0' : upDownPerCent.substring(0, upDownPerCent.length - 2)}.${upDownPerCent.substring(upDownPerCent.length - 2)} %)`;
    document.querySelector('#stockBoughtPrice').innerHTML = boughtStockMoney.toFixed();
}

function calcCurrentStockMoney() {
    currentStockMoney = 0;
    boughtStockMoney = 0;




    stock.forEach((e: Stock, i: Number) => {
        currentStockMoney += e.price * e.amount;
        boughtStockMoney += e.totalPrice;
    });
}