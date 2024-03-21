function updateText(stockData) {
    var stockNameText = document.querySelector('#stockName');
    var stockPriceText = document.querySelector('#stockPrice');
    stockNameText.innerHTML = "".concat(stockData.name, " <span id=\"stockPrice\">").concat(stockData.price, "</span>");
}
