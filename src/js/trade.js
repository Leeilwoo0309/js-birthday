var buyBtn = document.querySelector('#buy');
var sellBtn = document.querySelector('#sell');
buyBtn.addEventListener('click', function () {
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
});
sellBtn.addEventListener('click', function () {
    var amount = Number(buySellGatsu.value);
    if (amount > 0) {
        money += amount * stock[nowInfo].price * 0.94;
        stock[nowInfo].amount -= Number(buySellGatsu.value);
        stock[nowInfo].totalPrice -= amount * stock[nowInfo].price;
        alert('판매 완료!!!!!!!!!');
    }
    else {
        alert('가진 주식 없어!!!!!!!!!!!');
    }
});
