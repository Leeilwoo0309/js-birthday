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
        var changeRatio = (Math.random() * 0.01) - 0.005;
        this.price += Math.floor(changeRatio * this.price);
        if (Math.floor(changeRatio * this.price) == 0) {
            this.price += Math.floor(Math.random() * 10);
        }
        this.priceChange.push(this.price);
    };
    Stock.prototype.buy = function (amount) {
        var price = Number(buySellGatsu.value) * stock[nowInfo].price;
        if (price <= money) {
            money -= price;
            stock[nowInfo].amount += Number(buySellGatsu.value);
            stock[nowInfo].totalPrice += price;
            alert('구매 완료!!!!!!!!!');
        }
        else {
            alert('돈이 없어!!!!!!!!!!!');
        }
    };
    Stock.prototype.sell = function (amount) {
        if (amount > 0) {
            money += amount * stock[nowInfo].price * 0.94;
            stock[nowInfo].amount -= Number(buySellGatsu.value);
            stock[nowInfo].totalPrice -= amount * stock[nowInfo].price;
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
    StockBuilder.prototype.build = function () {
        return this.stock;
    };
    return StockBuilder;
}());
