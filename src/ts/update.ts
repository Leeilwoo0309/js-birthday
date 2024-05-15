let upDownPerCent: string;
let colorNum: number = 0;

function updateText(stockData: StockType) {
    const stockNameText: HTMLHeadingElement = document.querySelector('#stockName');

    stockNameText.innerHTML = `${stockData.name}
        <span id="stockPrice">${stockData.price}</span>
        <span id="stockType">${stockData.extra.type}</span>
    `;
}

function priceUpdate(): void {
    if (isNaN(Number(buySellGatsu.value))) {
        buyOrSellPriceDisplayer.innerHTML = `${ buySellGatsu.value }가 니눈엔 숫자냐?`;
    } else {
        buyOrSellPriceDisplayer.innerHTML = `${ stock[nowInfo[0]].price * Number(buySellGatsu.value) }
            <span id="nowStockInfo">${stock[nowInfo[0]].amount}주 보유중... (\\${stock[nowInfo[0]].amount * stock[nowInfo[0]].price})</span>`;
    }

    calcCurrentStockMoney();
    upDownPerCent = Math.floor((currentStockMoney / boughtStockMoney) * 10000 - 10000).toString(); 
    document.querySelector('#money').innerHTML = money.toFixed();
    document.querySelector('#stockCurrentPrice').innerHTML = `${currentStockMoney.toFixed()}원 (${upOrDownPercenStringReturner()})  `;
    // document.querySelector('#stockBoughtPrice').innerHTML = boughtStockMoney.toFixed();
}

function calcCurrentStockMoney() {
    currentStockMoney = 0;
    boughtStockMoney = 0;




    stock.forEach((e: StockType, i: Number) => {
        currentStockMoney += e.price * e.amount;
        boughtStockMoney += e.totalPrice;
    });
}

function upOrDownPercenStringReturner(upDownPercent: String = Math.floor((currentStockMoney / boughtStockMoney) * 10000 - 10000).toString()) {
    calcCurrentStockMoney();

    let _ret: string;
    let _updownInnerSpan: string = upDownPercent.substring(0, upDownPercent.length - 2) + "." + upDownPercent.substring(upDownPercent.length - 2)

    if (Number(upDownPercent) < 100 && Number(upDownPercent) > 0) {
        _ret = '<span class="red">▲ 0' + _updownInnerSpan + "%</span>"
    } else if (Number(upDownPercent) > -100 && Number(upDownPercent) < 0) {
        _ret = '<span class="blue">▼ -0' + upDownPercent.substring(1, upDownPercent.length - 2) + "." + upDownPercent.substring(upDownPercent.length - 2) + "%</span>"
    } else if (Number(upDownPercent) > 0) {
        _ret = '<span class="red">▲ ' + _updownInnerSpan + "%</span>"
    } else {
        _ret = '<span class="blue">▼ ' + _updownInnerSpan + "%</span>"
    }

    return _ret;

    // return `<span class="${ Number(upDownPerCent) > 1 ? "red" : "blue" }">${upDownPerCent.substring(0, upDownPerCent.length - 2) == ''
    //     ? '▲ 0'
    //     : upDownPerCent.substring(0, upDownPerCent.length - 2) == '-' ? '▼ 0' :
    //     '▲ ' + upDownPerCent.substring(0, upDownPerCent.length - 2)
    //     }.${upDownPerCent.substring(upDownPerCent.length - 2)}%</span>`
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

document.querySelector("#answer").addEventListener('click', () => {
    document.querySelector("#answer").innerHTML = "어 진이 떠 진이";
})

function updateBank() {
    document.querySelector("#bankName").innerHTML = bank[nowInfo[1]].name.toString();
    document.querySelector("#limitation").innerHTML = bank[nowInfo[1]].debt.max.toString();
    document.querySelector("#interest").innerHTML = (bank[nowInfo[1]].interest * 100).toString();
    document.querySelector("#leftDebt").innerHTML = bank[nowInfo[1]].getLeftReturnMoney().toFixed();    
}