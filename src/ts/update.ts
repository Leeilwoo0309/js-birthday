let upDownPerCent: string;
let colorNum: number = 0;

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
            <span id="nowStockInfo">${stock[nowInfo].amount}주 보유중... (\\${stock[nowInfo].amount * stock[nowInfo].price})</span>`;
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

function startScreen() {
    const answer: HTMLSpanElement = document.querySelector("#answer");
    const colorMTE: string[] = ['red', 'orange', 'yellow', 'greenyellow', 'green', 'blue', 'darkblue', 'purple', 'black', 'grey', 'hotpink'];
    answer.style.color = colorMTE[colorNum];


    if (colorNum == colorMTE.length) colorNum = 1;
    else colorNum += 1;
}

document.querySelector('#title').addEventListener('click', () => {
    const titleName: HTMLSpanElement = document.querySelector("#titleName");
    //@ts-ignore

    titleName.innerHTML = titleName.innerText == '서진이'
                            ? '이용명 선생님의' :
                            titleName.innerText == '이용명 선생님의' ? '<span style="font-size: 10px;">청암 김원근 선생과 석정 김영근 선생이 창립한 청석학원에서 근 30년간 근무중인 청석학원의 자랑인 희붕쌤 제자, 약대에 진학해 약사를 하고 있는, 의 와이프이자 주성의 경영학에서 유용하게 사용되는 확률과 통계를 가르치는 <b>윤혜정 선생님</b>의</span>' :'서진이';
})