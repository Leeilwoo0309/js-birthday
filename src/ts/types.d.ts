type Stock = {
    name: string,
    price: number,
    totalPrice: number,
    amount: number,
    max: number,
    min: number,
    priceChange: number[],
    isArrive: boolean,
    extra: {
        type: string,
        crisis: number
    }
}

type Item = {
    name: string,
    price: number,
    description: string,
    isBought: boolean
}