const startNewBtn: HTMLSpanElement = document.querySelector('#startButton');
const startLoadBtn: HTMLSpanElement = document.querySelector('#loadButton');
const stockListDiv: HTMLDivElement = document.querySelector('#stockList');
const bankListDiv: HTMLDivElement = document.querySelector('#bank');
const store: HTMLDivElement = document.querySelector('#store');
const stockChart: HTMLCanvasElement = document.querySelector('#stockChart');
const buyOrSellPriceDisplayer: HTMLSpanElement = document.querySelector('#sellOrBuyPrice');
const buySellGatsu: HTMLInputElement = document.querySelector('#buySellGatsu');
const menu: NodeList = document.querySelectorAll('.menu');
const audio = new Audio('../sounds/bgm1.mp3');

audio.play();

audio.addEventListener('ended', () => {
    if (!isStart) audio.play()
})

startNewBtn.addEventListener('click', () => {
    audio.pause();
    const startDiv: HTMLDivElement = document.querySelector('#start')
    const startDived: HTMLDivElement = document.querySelector('#started')

    startDiv.style.display = 'none';
    startDived.style.display = '';
    isStart = true;

});

startLoadBtn.addEventListener('click', () => {
    audio.pause();
    const startDiv: HTMLDivElement = document.querySelector('#start')
    const startDived: HTMLDivElement = document.querySelector('#started')

    startDiv.style.display = 'none';
    startDived.style.display = '';

    fileManage.load();

    isStart = true;
})

// 주식 있는거 그려줌
stock.forEach((e, i) => {
    let stockList: HTMLDivElement = document.createElement("div");
    stockList.id = `stock-${i}`;
    stockList.classList.add('stockList');

    stockList.append(`${e.name}: \\${e.price}`);

    stockListDiv.appendChild(stockList);
});

// 빚지는거 있는거 그려줌
bank.forEach((e, i) => {
    let bankList: HTMLDivElement = document.createElement("div");
    bankList.id = `bank-${i}`;
    bankList.classList.add('bankList');

    bankList.append(`${e.name}: \\${e.debt.max}`);

    bankListDiv.appendChild(bankList);
});

items.forEach((e, i) => {
    let storeItem: HTMLDivElement = document.createElement("div");
    storeItem.id = `store-${i}`;
    storeItem.classList.add('storeItem');

    storeItem.append(`${e.name}: \\${e.price}`);

    store.appendChild(storeItem);
});

const stockListDivs: NodeList = document.querySelectorAll('.stockList');
const bankListDivs: NodeList = document.querySelectorAll('.bank');

// 주식 어떤거 보고잇는지
stockListDivs.forEach((e, i) => {
    e.addEventListener('click', () => {
        //@ts-ignore
        document.querySelector('#chart').style.display = '';
        //@ts-ignore
        document.querySelector('#bankInfo').style.display = 'none';
        //@ts-ignore
        document.querySelector('#itemInfo').style.display = 'none';

        document.querySelector(`#stock-${nowInfo[0]}`).classList.remove('on');
        nowInfo[0] = i;
        charts.push(drawChart(stock[i].priceChange));

        document.querySelector(`#stock-${nowInfo[0]}`).classList.add('on');
        updateText(stock[i]);
    })
});

buySellGatsu.addEventListener("input", (e) => {
    priceUpdate();
})

// 메뉴 바꾸는거
menu.forEach((e, i) => {
    e.addEventListener('click', () => {
        nowMenu = i;
        
        if(nowMenu == 0) {
            stockListDiv.classList.remove('off');
            document.querySelector(".stockMk").classList.add('on');
            
            bankListDiv.classList.add('off');
            document.querySelector(".bank").classList.remove('on');
            
            store.classList.add('off');
            document.querySelector(".store").classList.remove('on');
        } else if (nowMenu == 1) {
            stockListDiv.classList.add('off');
            document.querySelector(".stockMk").classList.remove('on');
            
            bankListDiv.classList.remove('off');
            document.querySelector(".bank").classList.add('on');
            
            store.classList.add('off');
            document.querySelector(".store").classList.remove('on');
        } else if (nowMenu == 2) {
            stockListDiv.classList.add('off');
            document.querySelector(".stockMk").classList.remove('on');
            
            bankListDiv.classList.add('off');
            document.querySelector(".bank").classList.remove('on');

            store.classList.remove('off');
            document.querySelector(".store").classList.add('on');
        }
    });
});

const bankListEachDiv: NodeList = document.querySelectorAll('.bankList');
bankListEachDiv.forEach((e: HTMLDivElement, i: number) => {
    e.addEventListener('click', () => {
        document.querySelector(`#bank-${nowInfo[1]}`).classList.remove('on');
        //@ts-ignore
        document.querySelector('#chart').style.display = 'none';
        //@ts-ignore
        document.querySelector('#bankInfo').style.display = '';
        //@ts-ignore
        document.querySelector('#itemInfo').style.display = 'none';
        
        nowInfo[1] = i;
        document.querySelector(`#bank-${nowInfo[1]}`).classList.add('on');
        updateBank();
    })
});

const itemListEachDiv: NodeList = document.querySelectorAll('.storeItem');
itemListEachDiv.forEach((e: HTMLDivElement, i: number) => {
    e.addEventListener('click', () => {
        if (!items[i].isBought) {
            document.querySelector(`#store-${nowInfo[2]}`).classList.remove('on');
            //@ts-ignore
            document.querySelector('#chart').style.display = 'none';
            //@ts-ignore
            document.querySelector('#bankInfo').style.display = 'none';
            //@ts-ignore
            document.querySelector('#itemInfo').style.display = '';
            
            nowInfo[2] = i;
            document.querySelector(`#store-${nowInfo[2]}`).classList.add('on');
            updateItem();
        } else {
            alert("이미 구매한 상품입니다.");
        }
    })
})

// 1초마다 실행하는거 (주식 가격 바꾸기..)
setInterval(() => {
    if (isStart) {
        stock.forEach((e, i) => {
            e.priceRefresh();
            const thisDiv = stockListDivs[i];
            
            // 차트 그리는 거
            if (nowInfo[0] == i) {
                charts.forEach(chart => {
                    chart.destroy();
                });
                charts.push(drawChart(e.priceChange))
                updateText(e);
    
                //@ts-ignore
                priceUpdate();
            }
    
            //@ts-ignore
            thisDiv.innerHTML = `${e.name} \\${e.price}`;
    
            if (e.amount > 0) {
                let param = Math.floor((e.price * e.amount / e.totalPrice) * 10000 - 10000).toString(); 
                //@ts-ignore
                thisDiv.innerHTML = `${e.name} \\${e.price} (${upOrDownPercenStringReturner(param)})`;
            }
        });

        bank.forEach((e: Bank, i: number) => {
            //@ts-ignore
            document.querySelector(`#bank-${i}`).style.color = 'black';
            if (e.debt.now > 0) {
                //@ts-ignore
                document.querySelector(`#bank-${i}`).style.color = 'red'
                
                money -= e.debt.max * 0.0001;
                e.debt.now -= e.debt.max * 0.0001;

                updateBank();
            }
        });

        items.forEach((e: ItemType, i: number) => {
            //@ts-ignore
            document.querySelector(`#store-${i}`).style.color = 'black';
            if (e.isBought) {
                //@ts-ignore
                document.querySelector(`#store-${i}`).style.color = 'rgb(200, 200, 200)'
                //@ts-ignore
                document.querySelector(`#store-${i}`).style.backgroundColor = 'rgb(255, 236, 236)'

                updateItem();
            }
        });

    }

}, 1000);

setInterval(() => {
    startScreen();
}, 50)