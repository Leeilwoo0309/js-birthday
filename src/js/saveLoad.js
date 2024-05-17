var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fs = require("fs");
var cryptoJS = require("crypto-js");
var FileManager = /** @class */ (function () {
    function FileManager() {
        var _this = this;
        this.fileForm = {
            money: 100000,
            currentStockMoney: 0,
            boughtStockMoney: 0,
            nowInfo: [0, 0, 0],
            nowMenu: 0,
            stock: [],
            items: [],
            bank: []
        };
        fs.readFile('./src/saves/save.sj', function (err, data) {
            if (err)
                throw err;
            var _content = cryptoJS.AES.decrypt(data.toString(), 'jewukseojin').toString(cryptoJS.enc.Utf8);
            _this.file = JSON.parse(_content);
        });
    }
    FileManager.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _saveContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fileForm = {
                            money: money,
                            currentStockMoney: currentStockMoney,
                            boughtStockMoney: boughtStockMoney,
                            nowInfo: nowInfo,
                            nowMenu: nowMenu,
                            stock: stock,
                            items: items,
                            bank: bank
                        };
                        _saveContent = cryptoJS.AES.encrypt(JSON.stringify(this.fileForm), 'jewukseojin').toString();
                        return [4 /*yield*/, fs.writeFileSync("./src/saves/save.sj", _saveContent, function (err) {
                                console.error("Err: ".concat(err));
                            })];
                    case 1:
                        _a.sent();
                        alert("저장 완료!!!!!!!!!!!");
                        return [2 /*return*/];
                }
            });
        });
    };
    FileManager.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _content;
            return __generator(this, function (_a) {
                try {
                    _content = this.file;
                    console.log(_content);
                    money = _content.money;
                    currentStockMoney = _content.currentStockMoney;
                    boughtStockMoney = _content.boughtStockMoney;
                    nowInfo = _content.nowInfo;
                    nowMenu = _content.nowMenu;
                    stock = [],
                        bank = [],
                        items = [];
                    _content.stock.forEach(function (e, i) {
                        stock.push(new StockBuilder().setByManual(e).build());
                    });
                    _content.bank.forEach(function (e) {
                        bank.push(new BankBuilder().setByManual(e).build());
                    });
                    _content.items.forEach(function (e, i) {
                        items.push(new ItemBuilder().setByManual(e).build());
                        if (i == 0 && e.isBought)
                            setNews();
                    });
                }
                catch (err) {
                    alert("\uC800\uC7A5 \uD30C\uC77C \uC190\uC2E4\uB428 (".concat(err, ")"));
                }
                return [2 /*return*/];
            });
        });
    };
    return FileManager;
}());
var fileManage = new FileManager();
document.querySelector("#saveBtn").addEventListener('click', function () {
    fileManage.save();
});
