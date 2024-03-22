let isStart: boolean = false;
let money: number = 12000;
let debt: number = 1900000000;
let currentStockMoney: number = 0;
let boughtStockMoney: number = 0;
let nowInfo: number = 0;
let charts = [];
let stock: Stock[] = [
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
let items: Item[] = [
    {
        name: 'TV',
        price: 1500000,
        description: '주식에 대한 정보들을 알려줍니다.',
        isBought: false
    }
]

const startBtn: HTMLSpanElement = document.querySelector('#startButton');
const stockListDiv: HTMLDivElement = document.querySelector('#stockList');
const stockChart: HTMLCanvasElement = document.querySelector('#stockChart');
const buyOrSellPriceDisplayer: HTMLSpanElement = document.querySelector('#sellOrBuyPrice');
const buySellGatsu: HTMLInputElement = document.querySelector('#buySellGatsu');

startBtn.addEventListener('click', () => {
    // 시작
});

stock.forEach((e, i) => {
    let stockList: HTMLDivElement = document.createElement("div");
    stockList.id = `stock-${i}`;
    stockList.classList.add('stockList');

    stockList.append(`${e.name}: \\${e.price}`);

    stockListDiv.appendChild(stockList);
});

const stockListDivs: NodeList = document.querySelectorAll('.stockList');

// 주식 어떤거 보고잇는지
stockListDivs.forEach((e, i) => {
    e.addEventListener('click', () => {
        document.querySelector(`#stock-${nowInfo}`).classList.remove('on');
        nowInfo = i;
        charts.push(drawChart(stock[i].priceChange));

        document.querySelector(`#stock-${nowInfo}`).classList.add('on');
        updateText(stock[i]);
    })
});

buySellGatsu.addEventListener("input", (e) => {
    priceUpdate();
})


// 1초마다 실행하는거 (주식 가격 바꾸기..)
setInterval(() => {
    stock.forEach((e, i) => {
        const changeRatio = (Math.random() * 0.01) - 0.005;
        const thisDiv = stockListDivs[i];
        e.price += Math.floor(changeRatio * e.price);

        if(Math.floor(changeRatio * e.price) == 0) {
            e.price += Math.floor(Math.random() * 10);
        }

        e.priceChange.push(e.price)
        
        // 차트 그리는 거
        if (nowInfo == i) {
            charts.forEach(chart => {
                chart.destroy();
            });
            charts.push(drawChart(e.priceChange))
            updateText(e);

            //@ts-ignore
            priceUpdate();
            }

        //@ts-ignore
        thisDiv.innerHTML = `${e.name} \\${e.price}`;
    });

}, 1000);