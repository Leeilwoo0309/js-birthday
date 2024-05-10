let isStart: boolean = false;
let money: number = 100000;
let debt: number = 1900000000;
let currentStockMoney: number = 0;
let boughtStockMoney: number = 0;
let nowInfo: number[] = [0, 0, 0];
let nowMenu: number = 0;
let charts = [];
let stock: StockType[] = [
    new StockBuilder().setName("SJ's 톡킹").setPrice(50000).setType("서비스업").build(),
    new StockBuilder().setName("㈜ 천국김밥").setPrice(4500).setType("종교").build(),
    new StockBuilder().setName("어진전자").setPrice(380000).setType("첨단 제조업").build(),
    new StockBuilder().setName("YMT 수학 교습소").setPrice(35000).setType("교육").build(),
    new StockBuilder().setName("아두노이").setPrice(7900).setType("반도체 사업").build(),
    new StockBuilder().setName("농사법인회사(주) 주성").setPrice(32000).setType("농업").build(),
    new StockBuilder().setName("리엇 가메즈").setPrice(14500).setType("서비스업").build(),
    new StockBuilder().setName("미크로소테").setPrice(564094).setType("서비스업").build(),
    new StockBuilder().setName("Eng-Vidia").setPrice(1200000).setType("반도체 사업").build(),
    new StockBuilder().setName("비상(Emergency)교육").setPrice(5000).setType("출판사/교과서").build(),
    new StockBuilder().setName("킬로스터디").setPrice(59900).setType("인터넷 강의").build(),
    new StockBuilder().setName("대한민국").setPrice(1000000000000000).setType("국가 (國家)").build(),
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

let bank: BankType[] = [
    new BankBuilder().setBankName("신안은행 ─ 언제나 소금같은 마음으로").setDebtLimitation(5900).setInterest(0.04).build(),
    new BankBuilder().setBankName("㈜ 어진 (사시미)사채").setDebtLimitation(38000000).setInterest(0.3).build(),
    new BankBuilder().setBankName("KB우리국민하나SC제일은행").setDebtLimitation(39900).setInterest(0.1).build(),
    new BankBuilder().setBankName("한화머니").setDebtLimitation(1000).setInterest(0.65).build(),
    new BankBuilder().setBankName("조선민주주의인민공화국 중앙은행").setDebtLimitation(300).setInterest(30).build(),
]