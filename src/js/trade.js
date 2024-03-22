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
