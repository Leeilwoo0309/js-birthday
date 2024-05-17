const fs = require("fs");
const cryptoJS = require("crypto-js");

class FileManager {
    private file: SaveForm;
    private fileForm: SaveForm = {
        money: 100000,
        currentStockMoney: 0,
        boughtStockMoney: 0,
        nowInfo: [0, 0, 0],
        nowMenu: 0,
        stock: [],
        items: [],
        bank: []
    }

    constructor() {
        fs.readFile('./src/saves/save.sj', (err, data) => {
            if (err) throw err;

            const _content = cryptoJS.AES.decrypt(data.toString(), 'jewukseojin').toString(cryptoJS.enc.Utf8);

            this.file = JSON.parse(_content);
        });
    }

    async save() {
        this.fileForm = {
            money: money,
            currentStockMoney: currentStockMoney,
            boughtStockMoney: boughtStockMoney,
            nowInfo: nowInfo,
            nowMenu: nowMenu,
            stock: stock,
            items: items,
            bank: bank
        }
        
        const _saveContent = cryptoJS.AES.encrypt(JSON.stringify(this.fileForm), 'jewukseojin').toString();

        await fs.writeFileSync("./src/saves/save.sj", _saveContent, (err) => {
            console.error(`Err: ${err}`)
        });

        alert("저장 완료!!!!!!!!!!!")
    }

    async load() {
        try {
            const _content: SaveForm = this.file;

        console.log(_content)

        money = _content.money;
        currentStockMoney = _content.currentStockMoney;
        boughtStockMoney = _content.boughtStockMoney;
        nowInfo = _content.nowInfo;
        nowMenu = _content.nowMenu
        stock = [],
        bank = [],
        items = []

        _content.stock.forEach((e, i) => {
            stock.push(
                new StockBuilder().setByManual(e).build()
            )
        });

        _content.bank.forEach((e) => {
            bank.push(
                new BankBuilder().setByManual(e).build()
            )
        });

        _content.items.forEach((e, i) => {
            items.push(
                new ItemBuilder().setByManual(e).build()
            );

            if (i == 0 && e.isBought) setNews();
        })
        } catch (err) {
            alert(`저장 파일 손실됨 (${err})`)
        }
        
    }
}

let fileManage = new FileManager()

document.querySelector("#saveBtn").addEventListener('click', () => {
    fileManage.save();
})