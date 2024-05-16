const fs = require("fs");

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
        fs.readFile('./src/json/save.json', (err, data) => {
            if (err) throw err;

            const _content = JSON.parse(data);

            console.log(_content)

            this.file = _content;
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

        const _saveContent = JSON.stringify(this.fileForm);

        await fs.writeFileSync("./src/json/save.json", _saveContent, (err) => {
            console.error(`Err: ${err}`)
        });

        alert("저장 완료!!!!!!!!!!!")
    }

    async load() {
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
    }
}

let fileManage = new FileManager()

document.querySelector("#saveBtn").addEventListener('click', () => {
    fileManage.save();
})