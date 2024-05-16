var Stock = /** @class */ (function () {
    function Stock() {
        this.price = 0;
        this.totalPrice = 0;
        this.amount = 0;
        this.max = 0;
        this.min = 0;
        this.isArrive = true;
        this.extra = {
            crisis: 0,
            type: "none"
        };
    }
    Stock.prototype.priceRefresh = function () {
        var _changeRatio = (Math.random() * 0.01) - 0.005;
        this.price += Math.floor(_changeRatio * this.price);
        if (Math.floor(_changeRatio * this.price) == 0) {
            this.price += Math.floor(Math.random() * 10);
        }
        this.priceChange.push(this.price);
    };
    Stock.prototype.buy = function (amount) {
        if (amount === void 0) { amount = 0; }
        var _price = Number(buySellGatsu.value) * stock[nowInfo[0]].price;
        if (_price <= money) {
            money -= _price;
            this.amount += Number(buySellGatsu.value);
            this.totalPrice += _price;
            alert('구매 완료!!!!!!!!!');
        }
        else {
            alert('돈이 없어!!!!!!!!!!!');
        }
    };
    Stock.prototype.sell = function (amount) {
        if (amount === void 0) { amount = null; }
        if (this.amount > 0) {
            money += this.amount * this.price * 0.94;
            this.amount -= Number(buySellGatsu.value);
            this.totalPrice -= this.amount * this.price;
            priceUpdate();
            alert('판매 완료!!!!!!!!!');
        }
        else {
            alert('가진 주식 없어!!!!!!!!!!!');
        }
    };
    return Stock;
}());
var StockBuilder = /** @class */ (function () {
    function StockBuilder() {
        this.stock = new Stock();
    }
    StockBuilder.prototype.setName = function (name) {
        this.stock.name = name;
        return this;
    };
    StockBuilder.prototype.setPrice = function (price) {
        this.stock.price = price;
        this.stock.priceChange = [price];
        return this;
    };
    StockBuilder.prototype.setType = function (typeName) {
        this.stock.extra.type = typeName;
        return this;
    };
    StockBuilder.prototype.setByManual = function (obj) {
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
    };
    StockBuilder.prototype.build = function () {
        return this.stock;
    };
    return StockBuilder;
}());
var Bank = /** @class */ (function () {
    function Bank() {
        this.name = "";
        this.debt = { now: 0, max: 10 };
        this.interest = 1;
        this.hasDebt = false;
    }
    Bank.prototype.lend = function () {
        var _lendingMoney = bank[nowInfo[1]].debt.max;
        if (this.debt.now == 0) {
            this.debt.now += _lendingMoney;
            money += _lendingMoney;
            updateBank();
            alert("대출 대성공!");
        }
    };
    Bank.prototype.ret = function () {
        var _retMoney = this.getLeftReturnMoney();
        if (money >= _retMoney) {
            money -= _retMoney;
            this.debt.now = 0;
            updateBank();
            alert("상환 완료!");
        }
        else {
            alert("돈이 없다ㅋ");
        }
    };
    Bank.prototype.getLeftReturnMoney = function () {
        return this.debt.now * (this.interest) + this.debt.now;
    };
    return Bank;
}());
var BankBuilder = /** @class */ (function () {
    function BankBuilder() {
        this.bank = new Bank();
    }
    BankBuilder.prototype.setBankName = function (name) {
        this.bank.name = name;
        return this;
    };
    BankBuilder.prototype.setDebtLimitation = function (maxDebt) {
        this.bank.debt.max = maxDebt;
        return this;
    };
    BankBuilder.prototype.setInterest = function (inter) {
        this.bank.interest = inter;
        return this;
    };
    BankBuilder.prototype.setByManual = function (obj) {
        this.bank.name = obj.name;
        this.bank.debt = obj.debt;
        this.bank.hasDebt = obj.hasDebt;
        this.bank.interest = obj.interest;
        return this;
    };
    BankBuilder.prototype.build = function () {
        return this.bank;
    };
    return BankBuilder;
}());
var Item = /** @class */ (function () {
    function Item() {
        this.name = 'undefined';
        this.price = 0;
        this.description = 'undefined';
        this.isBought = false;
    }
    Item.prototype.buy = function () {
        if (money >= this.price && !this.isBought) {
            money -= this.price;
            this.isBought = true;
            if (this.name == 'YM TV')
                setNews();
            alert("구매 완료!");
        }
        else if (this.isBought) {
            alert("이미 구매한 상품입니다.");
        }
        else if (money < this.price) {
            alert("돈이 부족합니다.");
        }
    };
    return Item;
}());
var ItemBuilder = /** @class */ (function () {
    function ItemBuilder() {
        this.item = new Item();
    }
    ItemBuilder.prototype.setName = function (name) {
        this.item.name = name;
        return this;
    };
    ItemBuilder.prototype.setPrice = function (price) {
        this.item.price = price;
        return this;
    };
    ItemBuilder.prototype.setDescription = function (description) {
        this.item.description = description;
        return this;
    };
    ItemBuilder.prototype.setByManual = function (obj) {
        this.item.name = obj.name;
        this.item.price = obj.price;
        this.item.description = obj.description;
        this.item.isBought = obj.isBought;
        return this;
    };
    ItemBuilder.prototype.build = function () {
        return this.item;
    };
    return ItemBuilder;
}());
