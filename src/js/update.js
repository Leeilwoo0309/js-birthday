var upDownPerCent;
function updateText(stockData) {
    var stockNameText = document.querySelector('#stockName');
    var stockPriceText = document.querySelector('#stockPrice');
    stockNameText.innerHTML = "".concat(stockData.name, " <span id=\"stockPrice\">").concat(stockData.price, "</span>");
}
function priceUpdate() {
    if (isNaN(Number(buySellGatsu.value))) {
        buyOrSellPriceDisplayer.innerHTML = "".concat(buySellGatsu.value, "\uAC00 \uB2C8\uB208\uC5D4 \uC22B\uC790\uB0D0?");
    }
    else {
        buyOrSellPriceDisplayer.innerHTML = "".concat(stock[nowInfo].price * Number(buySellGatsu.value));
    }
    calcCurrentStockMoney();
    upDownPerCent = Math.floor((currentStockMoney / boughtStockMoney) * 10000 - 10000).toString();
    document.querySelector('#money').innerHTML = money.toFixed();
    document.querySelector('#stockCurrentPrice').innerHTML = "".concat(currentStockMoney.toFixed(), "\uC6D0 (").concat(upDownPerCent.substring(0, upDownPerCent.length - 2) == '' ? '0' : upDownPerCent.substring(0, upDownPerCent.length - 2), ".").concat(upDownPerCent.substring(upDownPerCent.length - 2), " %)");
    document.querySelector('#stockBoughtPrice').innerHTML = boughtStockMoney.toFixed();
}
function calcCurrentStockMoney() {
    currentStockMoney = 0;
    boughtStockMoney = 0;
    stock.forEach(function (e, i) {
        currentStockMoney += e.price * e.amount;
        boughtStockMoney += e.totalPrice;
    });
}
