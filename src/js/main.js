var isStart = false;
var money = 12000;
var debt = 1900000000;
var stock = [
    {
        name: 'GIA (饑餓)',
        price: 30000,
        amount: 0,
        max: 30000,
        min: 30000,
        type: '자동차 제조업'
    },
    {
        name: '卌┕日 (십L일)',
        price: 5000,
        amount: 0,
        max: 5000,
        min: 5000,
        type: '가내 수공업'
    },
    {
        name: 'YMT',
        price: 5000,
        amount: 0,
        max: 5000,
        min: 5000,
        type: '수학 교습소'
    },
    {
        name: '주성 엔지니어링',
        price: 24853,
        amount: 0,
        max: 24853,
        min: 24853,
        type: '서비스업'
    },
    {
        name: 'SAMSUN-GT',
        price: 75000,
        amount: 0,
        max: 75000,
        min: 75000,
        type: '이혼 전문 법률 사무소'
    },
    {
        name: 'SJ약품',
        price: 350,
        amount: 0,
        max: 350,
        min: 350,
        type: '김치 제조업'
    },
    {
        name: 'SJ약품',
        price: 350,
        amount: 0,
        max: 350,
        min: 350,
        type: '김치 제조업'
    },
    {
        name: 'CJ 엔터테인먼트',
        price: 150,
        amount: 0,
        max: 150,
        min: 150,
        type: '키 성장 영양제 제조업'
    },
    {
        name: '더불어민주당',
        price: 1664000,
        amount: 0,
        max: 1664000,
        min: 1664000,
        type: '여당'
    },
    {
        name: '국민의 힘',
        price: 18720000,
        amount: 0,
        max: 18720000,
        min: 18720000,
        type: '야당'
    }
];
var startBtn = document.querySelector('#startButton');
var stockListDiv = document.querySelector('#stockList');
console.log(stockListDivW);
startBtn.addEventListener('click', function () {
    console.log('김치');
});
stock.forEach(function (e, i) {
    stockListDiv.innerHTML('김치');
});
