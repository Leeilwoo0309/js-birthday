let isStart: boolean = false;
let money: number = 12000;
let debt: number = 1900000000;
let currentStockMoney: number = 0;
let boughtStockMoney: number = 0;
let nowInfo: number = 0;
let nowMenu: number = 0;
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
    },
    {
        name: '고 바이오 랩',
        price: 8500,
        totalPrice: 0,
        amount: 0,
        max: 8500,
        min: 8500,
        priceChange: [8500],
        isArrive: true,
        extra: {
            crisis: 0,
            type: '연예 소속사'
        }
    }
];
let items: Item[] = [
    {
        name: 'TV',
        price: 1500000,
        description: '주식에 대한 정보들을 알려줍니다. (실제 TV 아님)',
        isBought: false
    },
    {
        name: '빅맥',
        price: 3860000000000,
        description: "맥도날드가 지금껏 빅맥 팔아서 번 돈",
        isBought: false
    },
    {
        name: '강남에 빌딩',
        price: 9743200000000000000,
        description: "강남 빌딩 가격 × 대한민국 인구 수",
        isBought: false
    },
    {
        name: '초코송이',
        price: 4320000000,
        description: "초코송이 가격 * 초코송이 상품 사진 크기²",
        isBought: false
    },
    {
        name: '의문의 동영상',
        price: 10000000000000000000,
        description: "직박구리",
        isBought: false
    }
]

let bank: Bank[] = [
    {
        name: "㈜ 어진 (사시미)사채",
        debt: {
            now: 0,
            max: 1500000
        },
        interest: 0.50,
        hasDebt: false
    },
    {
        name: "신안은행 ─ 언제나 소금같은 마음으로",
        debt: {
            now: 0,
            max: 5900
        },
        interest: 0.04,
        hasDebt: false
    },
    {
        name: "KB우리국민하나SC제일은행",
        debt: {
            now: 0,
            max: 39900
        },
        interest: 0.1,
        hasDebt: false
    },
    {
        name: "산화머니",
        debt: {
            now: 0,
            max: 1000
        },
        interest: 0.65,
        hasDebt: false
    },
    {
        name: "조선민주주의인민공화국 중앙은행",
        debt: {
            now: 0,
            max: 300
        },
        interest: 30,
        hasDebt: false
    },
]