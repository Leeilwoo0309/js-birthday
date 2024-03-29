let upDownPerCent: string;

function updateText(stockData: Stock) {
    const stockNameText: HTMLHeadingElement = document.querySelector('#stockName');
    const stockPriceText: HTMLSpanElement = document.querySelector('#stockPrice');

    stockNameText.innerHTML = `${stockData.name}
        <span id="stockPrice">${stockData.price}</span>
        <span id="stockType">${stockData.extra.type}</span>
    `;
}

function priceUpdate(): void {
    if (isNaN(Number(buySellGatsu.value))) {
        buyOrSellPriceDisplayer.innerHTML = `${ buySellGatsu.value }가 니눈엔 숫자냐?`;
    } else {
        buyOrSellPriceDisplayer.innerHTML = `${ stock[nowInfo].price * Number(buySellGatsu.value) }
            <span id="nowStockInfo">${stock[nowInfo].amount}주 보유중... (\\${stock[nowInfo].amount * stock[nowInfo].price} - ${upOrDownPercenStringReturner()})</span>`;
    }

    calcCurrentStockMoney();
    upDownPerCent = Math.floor((currentStockMoney / boughtStockMoney) * 10000 - 10000).toString(); 
    document.querySelector('#money').innerHTML = money.toFixed();
    document.querySelector('#stockCurrentPrice').innerHTML = `${currentStockMoney.toFixed()}원 (${upOrDownPercenStringReturner()})  `;
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

function upOrDownPercenStringReturner(upDownPerCent: String = Math.floor((currentStockMoney / boughtStockMoney) * 10000 - 10000).toString()) {
    calcCurrentStockMoney();

    return `<span class="${ Number(upDownPerCent) > 1 ? "red" : "blue" }">${upDownPerCent.substring(0, upDownPerCent.length - 2) == ''
        ? '▲ 0'
        : upDownPerCent.substring(0, upDownPerCent.length - 2) == '-' ? '▼ 0' :
        '▲ ' + upDownPerCent.substring(0, upDownPerCent.length - 2)
        }.${upDownPerCent.substring(upDownPerCent.length - 2)}%</span>`
}