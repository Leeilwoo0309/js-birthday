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
        const _changeRatio = (Math.random() * 0.01) - 0.005;

        this.price += Math.floor(_changeRatio * this.price);
        
        if(Math.floor(_changeRatio * this.price) == 0) {
            this.price += Math.floor(Math.random() * 10);
        }
        this.priceChange.push(this.price);
    }

    public buy(amount: number = 0): void {
        let _price = Number(buySellGatsu.value) * stock[nowInfo[0]].price;

        if(_price <= money) {
            money -= _price;
            this.amount += Number(buySellGatsu.value);
            this.totalPrice += _price;
            alert('구매 완료!!!!!!!!!');
        } else {
            alert('돈이 없어!!!!!!!!!!!');
        }
    }

    public sell(amount: number = null): void {
        if(this.amount > 0) {
            money += this.amount * this.price * 0.94;
            this.amount -= Number(buySellGatsu.value);
            this.totalPrice -= this.amount * this.price;
            
            priceUpdate();

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

    setByManual(obj) {
        this.stock.name = obj.name;
        this.stock.price = obj.price;
        this.stock.totalPrice = obj.totalPrice;
        this.stock.amount = obj.amount;
        this.stock.max = obj.max;
        this.stock.min = obj.min;
        this.stock.priceChange = obj.priceChange;
        this.stock.isArrive = obj.isArrive;
        this.stock.extra = obj.extra;
        
        return this;
    }

    build(): Stock {
        return this.stock;
    }
}

class Bank {
    public name: string = "";
    public debt: { now: number, max: number} = {now: 0, max: 10};
    public interest: number = 1;
    public hasDebt: boolean = false;

    lend(): void {
        let _lendingMoney: number = bank[nowInfo[1]].debt.max;

        if (this.debt.now == 0) {
            this.debt.now += _lendingMoney;
    
            money += _lendingMoney;

            updateBank();
            
            alert("대출 대성공!");
        }

    }
    
    ret(): void {
        let _retMoney: number = this.getLeftReturnMoney();
        
        if (money >= _retMoney) {
            money -= _retMoney;
            this.debt.now = 0;

            updateBank();
            
            alert("상환 완료!");
        } else {
            alert("돈이 없다ㅋ");
        }
        
    }

    getLeftReturnMoney(): number {
        return this.debt.now * (this.interest) + this.debt.now;
    }
}

class BankBuilder {
    private bank: Bank;

    constructor() {
        this.bank = new Bank();
    }

    setBankName(name: string): BankBuilder {
        this.bank.name = name;
        return this;
    }

    setDebtLimitation(maxDebt: number): BankBuilder {
        this.bank.debt.max = maxDebt;
        return this;
    }

    setInterest(inter): BankBuilder {
        this.bank.interest = inter;
        return this;
    }

    setByManual(obj) {
        this.bank.name = obj.name;
        this.bank.debt = obj.debt;
        this.bank.hasDebt = obj.hasDebt;
        this.bank.interest = obj.interest;

        return this;
    }


    build(): Bank {
        return this.bank;
    }
}

class Item {
    public name: string = 'undefined';
    public price: number = 0;
    public description: string = 'undefined';
    public isBought: boolean = false;

    public buy() {
        if (money >= this.price && !this.isBought) {
            money -= this.price;
            this.isBought = true;

            if (this.name == 'YM TV') setNews();
            
            alert("구매 완료!");
        } else if (this.isBought) {
            alert("이미 구매한 상품입니다.");
        } else if (money < this.price) {
            alert("돈이 부족합니다.");
        }

    }
}

class ItemBuilder {
    private item: Item;

    constructor() {
        this.item = new Item();
    }

    setName(name) {
        this.item.name = name;
        return this;
    }

    setPrice(price: number) {
        this.item.price = price;
        return this;
    }

    setDescription(description: string) {
        this.item.description = description;
        return this;
    }

    setByManual(obj) {
        this.item.name = obj.name;
        this.item.price = obj.price;
        this.item.description = obj.description;
        this.item.isBought = obj.isBought;

        return this;
    }


    build() {
        return this.item;
    }
}