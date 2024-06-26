var startNewBtn = document.querySelector('#startButton');
var startLoadBtn = document.querySelector('#loadButton');
var stockListDiv = document.querySelector('#stockList');
var bankListDiv = document.querySelector('#bank');
var store = document.querySelector('#store');
var stockChart = document.querySelector('#stockChart');
var buyOrSellPriceDisplayer = document.querySelector('#sellOrBuyPrice');
var buySellGatsu = document.querySelector('#buySellGatsu');
var menu = document.querySelectorAll('.menu');
var audio = new Audio('../sounds/bgm1.mp3');
audio.play();
audio.addEventListener('ended', function () {
    if (!isStart)
        audio.play();
});
startNewBtn.addEventListener('click', function () {
    audio.pause();
    var startDiv = document.querySelector('#start');
    var startDived = document.querySelector('#started');
    startDiv.style.display = 'none';
    startDived.style.display = '';
    isStart = true;
});
startLoadBtn.addEventListener('click', function () {
    audio.pause();
    var startDiv = document.querySelector('#start');
    var startDived = document.querySelector('#started');
    startDiv.style.display = 'none';
    startDived.style.display = '';
    fileManage.load();
    isStart = true;
});
// 주식 있는거 그려줌
stock.forEach(function (e, i) {
    var stockList = document.createElement("div");
    stockList.id = "stock-".concat(i);
    stockList.classList.add('stockList');
    stockList.append("".concat(e.name, ": \\").concat(e.price));
    stockListDiv.appendChild(stockList);
});
// 빚지는거 있는거 그려줌
bank.forEach(function (e, i) {
    var bankList = document.createElement("div");
    bankList.id = "bank-".concat(i);
    bankList.classList.add('bankList');
    bankList.append("".concat(e.name, ": \\").concat(e.debt.max));
    bankListDiv.appendChild(bankList);
});
items.forEach(function (e, i) {
    var storeItem = document.createElement("div");
    storeItem.id = "store-".concat(i);
    storeItem.classList.add('storeItem');
    storeItem.append("".concat(e.name, ": \\").concat(e.price));
    store.appendChild(storeItem);
});
var stockListDivs = document.querySelectorAll('.stockList');
var bankListDivs = document.querySelectorAll('.bank');
// 주식 어떤거 보고잇는지
stockListDivs.forEach(function (e, i) {
    e.addEventListener('click', function () {
        //@ts-ignore
        document.querySelector('#chart').style.display = '';
        //@ts-ignore
        document.querySelector('#bankInfo').style.display = 'none';
        //@ts-ignore
        document.querySelector('#itemInfo').style.display = 'none';
        document.querySelector("#stock-".concat(nowInfo[0])).classList.remove('on');
        nowInfo[0] = i;
        charts.push(drawChart(stock[i].priceChange));
        document.querySelector("#stock-".concat(nowInfo[0])).classList.add('on');
        updateText(stock[i]);
    });
});
buySellGatsu.addEventListener("input", function (e) {
    priceUpdate();
});
// 메뉴 바꾸는거
menu.forEach(function (e, i) {
    e.addEventListener('click', function () {
        nowMenu = i;
        if (nowMenu == 0) {
            stockListDiv.classList.remove('off');
            document.querySelector(".stockMk").classList.add('on');
            bankListDiv.classList.add('off');
            document.querySelector(".bank").classList.remove('on');
            store.classList.add('off');
            document.querySelector(".store").classList.remove('on');
        }
        else if (nowMenu == 1) {
            stockListDiv.classList.add('off');
            document.querySelector(".stockMk").classList.remove('on');
            bankListDiv.classList.remove('off');
            document.querySelector(".bank").classList.add('on');
            store.classList.add('off');
            document.querySelector(".store").classList.remove('on');
        }
        else if (nowMenu == 2) {
            stockListDiv.classList.add('off');
            document.querySelector(".stockMk").classList.remove('on');
            bankListDiv.classList.add('off');
            document.querySelector(".bank").classList.remove('on');
            store.classList.remove('off');
            document.querySelector(".store").classList.add('on');
        }
    });
});
var bankListEachDiv = document.querySelectorAll('.bankList');
bankListEachDiv.forEach(function (e, i) {
    e.addEventListener('click', function () {
        document.querySelector("#bank-".concat(nowInfo[1])).classList.remove('on');
        //@ts-ignore
        document.querySelector('#chart').style.display = 'none';
        //@ts-ignore
        document.querySelector('#bankInfo').style.display = '';
        //@ts-ignore
        document.querySelector('#itemInfo').style.display = 'none';
        nowInfo[1] = i;
        document.querySelector("#bank-".concat(nowInfo[1])).classList.add('on');
        updateBank();
    });
});
var itemListEachDiv = document.querySelectorAll('.storeItem');
itemListEachDiv.forEach(function (e, i) {
    e.addEventListener('click', function () {
        if (!items[i].isBought) {
            document.querySelector("#store-".concat(nowInfo[2])).classList.remove('on');
            //@ts-ignore
            document.querySelector('#chart').style.display = 'none';
            //@ts-ignore
            document.querySelector('#bankInfo').style.display = 'none';
            //@ts-ignore
            document.querySelector('#itemInfo').style.display = '';
            nowInfo[2] = i;
            document.querySelector("#store-".concat(nowInfo[2])).classList.add('on');
            updateItem();
        }
        else {
            alert("이미 구매한 상품입니다.");
        }
    });
});
// 1초마다 실행하는거 (주식 가격 바꾸기..)
setInterval(function () {
    if (isStart) {
        stock.forEach(function (e, i) {
            e.priceRefresh();
            var thisDiv = stockListDivs[i];
            // 차트 그리는 거
            if (nowInfo[0] == i) {
                charts.forEach(function (chart) {
                    chart.destroy();
                });
                charts.push(drawChart(e.priceChange));
                updateText(e);
                //@ts-ignore
                priceUpdate();
            }
            //@ts-ignore
            thisDiv.innerHTML = "".concat(e.name, " \\").concat(e.price);
            if (e.amount > 0) {
                var param = Math.floor((e.price * e.amount / e.totalPrice) * 10000 - 10000).toString();
                //@ts-ignore
                thisDiv.innerHTML = "".concat(e.name, " \\").concat(e.price, " (").concat(upOrDownPercenStringReturner(param), ")");
            }
        });
        bank.forEach(function (e, i) {
            //@ts-ignore
            document.querySelector("#bank-".concat(i)).style.color = 'black';
            if (e.debt.now > 0) {
                //@ts-ignore
                document.querySelector("#bank-".concat(i)).style.color = 'red';
                money -= e.debt.max * 0.0001;
                e.debt.now -= e.debt.max * 0.0001;
                updateBank();
            }
        });
        items.forEach(function (e, i) {
            //@ts-ignore
            document.querySelector("#store-".concat(i)).style.color = 'black';
            if (e.isBought) {
                //@ts-ignore
                document.querySelector("#store-".concat(i)).style.color = 'rgb(200, 200, 200)';
                //@ts-ignore
                document.querySelector("#store-".concat(i)).style.backgroundColor = 'rgb(255, 236, 236)';
                updateItem();
            }
        });
    }
}, 1000);
setInterval(function () {
    startScreen();
}, 50);
