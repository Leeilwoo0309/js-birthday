class Stock {
    public name: string;
    public price: number = 0;
    public totalPrice: number = 0;
    public amount: number = 0;
    public max: number = 0;
    public min: number = 0;
    public priceChange: number[];
    public isArrive: boolean = true;
    public extra: StockExtra = {
        crisis: 0,
        type: "none"
    };
    
    public priceRefresh(): void {
        const changeRatio = (Math.random() * 0.01) - 0.005;

        this.price += Math.floor(changeRatio * this.price);
        
        if(Math.floor(changeRatio * this.price) == 0) {
            this.price += Math.floor(Math.random() * 10);
        }
        this.priceChange.push(this.price);
    }

    public buy(amount: number): void {
        let price = Number(buySellGatsu.value) * stock[nowInfo].price;

        if(price <= money) {
            money -= price;
            stock[nowInfo].amount += Number(buySellGatsu.value);
            stock[nowInfo].totalPrice += price;
            alert('구매 완료!!!!!!!!!');
        } else {
            alert('돈이 없어!!!!!!!!!!!');
        }
    }

    public sell(amount: number): void {
        if(amount > 0) {
            money += amount * stock[nowInfo].price * 0.94;
            stock[nowInfo].amount -= Number(buySellGatsu.value);
            stock[nowInfo].totalPrice -= amount * stock[nowInfo].price;

            alert('판매 완료!!!!!!!!!');
        } else {
            alert('가진 주식 없어!!!!!!!!!!!');
        }
    }
}

class StockBuilder {
    private stock: Stock;
    
    constructor() {
        this.stock = new Stock();
    }

    setName(name: string): StockBuilder {
        this.stock.name = name;
        return this;
    }

    setPrice(price: number): StockBuilder {
        this.stock.price = price;
        this.stock.priceChange = [price];
        return this;
    }

    setType(typeName: string): StockBuilder {
        this.stock.extra.type = typeName;
        return this;
    }

    build(): Stock {
        return this.stock;
    }
}