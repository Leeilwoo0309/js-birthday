function updateText(stockData: Stock) {
    const stockNameText: HTMLHeadingElement = document.querySelector('#stockName');
    const stockPriceText: HTMLSpanElement = document.querySelector('#stockPrice');

    stockNameText.innerHTML = `${stockData.name} <span id="stockPrice">${stockData.price}</span>`;
}