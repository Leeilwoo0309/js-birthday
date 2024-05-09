var upDownPerCent;
var colorNum = 0;
function updateText(stockData) {
    var stockNameText = document.querySelector('#stockName');
    var stockPriceText = document.querySelector('#stockPrice');
    stockNameText.innerHTML = "".concat(stockData.name, "\n        <span id=\"stockPrice\">").concat(stockData.price, "</span>\n        <span id=\"stockType\">").concat(stockData.extra.type, "</span>\n    ");
}
function priceUpdate() {
    if (isNaN(Number(buySellGatsu.value))) {
        buyOrSellPriceDisplayer.innerHTML = "".concat(buySellGatsu.value, "\uAC00 \uB2C8\uB208\uC5D4 \uC22B\uC790\uB0D0?");
    }
    else {
        buyOrSellPriceDisplayer.innerHTML = "".concat(stock[nowInfo].price * Number(buySellGatsu.value), "\n            <span id=\"nowStockInfo\">").concat(stock[nowInfo].amount, "\uC8FC \uBCF4\uC720\uC911... (\\").concat(stock[nowInfo].amount * stock[nowInfo].price, ")</span>");
    }
    calcCurrentStockMoney();
    upDownPerCent = Math.floor((currentStockMoney / boughtStockMoney) * 10000 - 10000).toString();
    document.querySelector('#money').innerHTML = money.toFixed();
    document.querySelector('#stockCurrentPrice').innerHTML = "".concat(currentStockMoney.toFixed(), "\uC6D0 (").concat(upOrDownPercenStringReturner(), ")  ");
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
function upOrDownPercenStringReturner(upDownPerCent) {
    if (upDownPerCent === void 0) { upDownPerCent = Math.floor((currentStockMoney / boughtStockMoney) * 10000 - 10000).toString(); }
    calcCurrentStockMoney();
    return "<span class=\"".concat(Number(upDownPerCent) > 1 ? "red" : "blue", "\">").concat(upDownPerCent.substring(0, upDownPerCent.length - 2) == ''
        ? '▲ 0'
        : upDownPerCent.substring(0, upDownPerCent.length - 2) == '-' ? '▼ 0' :
            '▲ ' + upDownPerCent.substring(0, upDownPerCent.length - 2), ".").concat(upDownPerCent.substring(upDownPerCent.length - 2), "%</span>");
}
function startScreen() {
    var answer = document.querySelector("#answer");
    var colorMTE = ['red', 'orange', 'yellow', 'greenyellow', 'green', 'blue', 'darkblue', 'purple', 'black', 'grey', 'hotpink'];
    answer.style.color = colorMTE[colorNum];
    if (colorNum == colorMTE.length)
        colorNum = 1;
    else
        colorNum += 1;
}
document.querySelector('#title').addEventListener('click', function () {
    var titleName = document.querySelector("#titleName");
    //@ts-ignore
    titleName.innerHTML = titleName.innerText == '서진이'
        ? '이용명 선생님의' :
        titleName.innerText == '이용명 선생님의' ? '<span style="font-size: 10px;">청암 김원근 선생과 석정 김영근 선생이 창립한 청석학원에서 근 30년간 근무중인 청석학원의 자랑인 희붕쌤 제자, 약대에 진학해 약사를 하고 있는, 의 와이프이자 주성의 경영학에서 유용하게 사용되는 확률과 통계를 가르치는 <b>윤혜정 선생님</b>의</span>' : '서진이';
});
document.querySelector("#answer").addEventListener('click', function () {
    document.querySelector("#answer").innerHTML = "어 진이 떠 진이";
});
