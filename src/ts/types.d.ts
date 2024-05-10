interface StockType {
    buy: Function,
    priceRefresh: Function,
    sell: Function,
    name: string,
    price: number,
    totalPrice: number,
    amount: number,
    max: number,
    min: number,
    priceChange: number[],
    isArrive: boolean,
    extra: StockExtra
}

type StockExtra = {
    type: string,
    crisis: number
}

type Item = {
    name: string,
    price: number,
    description: string,
    isBought: boolean,
}

type BankType = {
    lend: Function,
    ret: Function,
    getLeftReturnMoney: Function,
    name: string,
    hasDebt: boolean,
    debt: {
        now: number,
        max: number
    },
    interest: number
}