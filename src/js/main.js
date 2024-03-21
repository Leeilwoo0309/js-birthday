var isStart = false;
var money = 12000;
var debt = 1900000000;
var currentStock = undefined;
var nowInfo = 0;
var charts = [];
var stock = [
    {
        name: 'GIA (饑餓)',
        price: 30000,
        totalPrice: 0,
        amount: 0,
        max: 30000,
        min: 30000,
        priceChange: [30000],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    },
    {
        name: '卌┕日 (십L일)',
        price: 5000,
        totalPrice: 0,
        amount: 0,
        max: 5000,
        min: 5000,
        priceChange: [5000],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    },
    {
        name: 'YMT',
        price: 5000,
        totalPrice: 0,
        amount: 0,
        max: 5000,
        min: 5000,
        priceChange: [5000],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    },
    {
        name: '주성 엔지니어링',
        price: 24853,
        totalPrice: 0,
        amount: 0,
        max: 24853,
        min: 24853,
        priceChange: [24853],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    },
    {
        name: 'SAMSUN-GT',
        price: 75000,
        totalPrice: 0,
        amount: 0,
        max: 75000,
        min: 75000,
        priceChange: [75000],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    },
    {
        name: 'SJ약품',
        price: 350,
        totalPrice: 0,
        amount: 0,
        max: 350,
        min: 350,
        priceChange: [350],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    },
    {
        name: 'SJ약품',
        price: 350,
        totalPrice: 0,
        amount: 0,
        max: 350,
        min: 350,
        priceChange: [350],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    },
    {
        name: 'CJ 엔터테인먼트',
        price: 150,
        totalPrice: 0,
        amount: 0,
        max: 150,
        min: 150,
        priceChange: [150],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    },
    {
        name: '더불어민주당',
        price: 1664000,
        totalPrice: 0,
        amount: 0,
        max: 1664000,
        min: 1664000,
        priceChange: [1664000],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    },
    {
        name: '국민의 힘',
        price: 18720000,
        totalPrice: 0,
        amount: 0,
        max: 18720000,
        min: 18720000,
        priceChange: [18720000],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '자동차 제조업'
        }
    }
];
var items = [
    {
        name: 'TV',
        price: 1500000,
        description: '주식에 대한 정보들을 알려줍니다.',
        isBought: false
    }
];
var startBtn = document.querySelector('#startButton');
var stockListDiv = document.querySelector('#stockList');
var stockChart = document.querySelector('#stockChart');
console.log(stockListDiv);
startBtn.addEventListener('click', function () {
    //시작
});
stock.forEach(function (e, i) {
    var stockList = document.createElement("div");
    stockList.id = "stock-".concat(i);
    stockList.classList.add('stockList');
    stockList.append("".concat(e.name, ": \\").concat(e.price));
    stockListDiv.appendChild(stockList);
});
var stockListDivs = document.querySelectorAll('.stockList');
stockListDivs.forEach(function (e, i) {
    e.addEventListener('click', function () {
        nowInfo = i;
        charts.push(drawChart(stock[i].priceChange));
        updateText(stock[i]);
    });
});
setInterval(function () {
    stock.forEach(function (e, i) {
        var changeRatio = (Math.random() * 0.04) - 0.0195;
        var thisDiv = stockListDivs[i];
        e.price += Math.floor(changeRatio * e.price);
        if (Math.floor(changeRatio * e.price) == 0) {
            e.price += Math.floor(Math.random() * 10);
        }
        e.priceChange.push(e.price);
        if (nowInfo == i) {
            charts.forEach(function (chart) {
                chart.destroy();
            });
            charts.push(drawChart(e.priceChange));
            updateText(e);
        }
        //@ts-ignore
        thisDiv.innerHTML = "".concat(e.name, " \\").concat(e.price);
    });
    console.log(stock[0].priceChange);
}, 1000);
