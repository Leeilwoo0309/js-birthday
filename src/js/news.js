function setNews() {
    news = ['-', '-', '-'];
    var _ret = "<p>".concat(news[news.length - 3], "</p><p>").concat(news[news.length - 2], "</p><p>").concat(news[news.length - 1], "</p>");
    document.querySelector("#news").innerHTML = _ret;
    setInterval(function () {
        var _newsStock = _random(0, stock.length - 1);
        var _newsContent = _random(0, 3);
        var _stockPredict = [
            [
                ["JS's \uD1A1\uD0B9 \uC0AC\uC7A5 \uC724 \uB300\uD45C, \uD3C9\uC18C \uCE5C\uD588\uB358 \uCE5C\uAD6C \uC2A4\uD1A0\uD0B9\uD574.. \"\uCDA9\uACA9\"", -1],
                ["JS's \uD1A1\uD0B9 \uC0AC\uC7A5 \uC724 \uB300\uD45C, \uD3C9\uC18C \uCE5C\uD588\uB358 \uCE5C\uAD6C \uC2A4\uD1A0\uD0B9\uD574.. \"\uCDA9\uACA9\"", -1],
                ["JS's \uD1A1\uD0B9, \uB180\uB77C\uC6B8 \uC815\uB3C4\uB85C \uD3C9\uD654\uB85C\uC6CC..", 0],
                ["JS's \uD1A1\uD0B9, \uD574\uC678 \uC9C4\uCD9C \uB300\uC131\uACF5 \uAC70\uB46C", 1],
            ],
            [
                ["\u321C \uCC9C\uAD6D\uAE40\uBC25\uC5D0\uC11C COVID-19 \uC9D1\uB2E8 \uAC10\uC5FC\uB3FC..", -1],
                ["\u321C \uCC9C\uAD6D\uAE40\uBC25, 360\u00BA \uB2EC\uB77C\uC9C4 \uBAA8\uC2B5 \uBCF4\uC5EC\uC918", 0],
                ["\u321C \uCC9C\uAD6D\uAE40\uBC25, \uC2E0\uB3C4\uC790 \uC218 \uC791\uB144\uC5D0 \uBE44\uD574 17.4% \uC0C1\uC2B9\uD574.. \"\uB300\uBC15~\"", 1],
            ],
            [
                ["\uC5B4\uC9C4\uC804\uC790 \uC2E0\uC81C\uD488\uC5D0\uC11C \uCE58\uBA85\uC801 \uACB0\uD568 \uBC1C\uACAC", -1],
                ["\uC5B4\uC9C4\uC804\uC790, \uC5B4\uC81C \uC800\uB141\uC73C\uB85C \uC11D\uAC08\uBE44 \uBA39\uC5B4..", 0],
                ["\uC5B4\uC9C4\uC804\uC790, \uC5B4\uC81C \uC800\uB141\uC73C\uB85C \uC11D\uAC08\uBE44 \uBA39\uC5B4..", 0],
                ["\uC5B4\uC9C4\uC804\uC790, \uC218\uCD9C \uC601\uC5C5\uC774\uC775 \"\uC5ED\uB300 \uCD5C\uACE0\"", 1],
            ],
            [
                ["YMT \uC218\uD559 \uAD50\uC2B5\uC18C \uC11C \uC131\uAD50\uC721 \uD558\uB2E4\uAC00 \uAC78\uB824.. \uD559\uBD80\uBAA8\uB4E4 \"\uACBD\uC545\"", -1],
                ["YMT \uC218\uD559 \uAD50\uC2B5\uC18C \uC11C \uC131\uAD50\uC721 \uD558\uB2E4\uAC00 \uAC78\uB824.. \uD559\uBD80\uBAA8\uB4E4 \"\uACBD\uC545\"", -1],
                ["YMT \uC218\uD559 \uAD50\uC2B5\uC18C \uC6D0\uC7A5, \uC5F4\uC560\uC124 \uD130\uC838.. \uC0C1\uB300\uB294 18\uC138 \"\uC2E0\uC7AC\uC6B1\"", 1],
                ["YMT \uC218\uD559 \uAD50\uC2B5\uC18C \uC11C \uBAA8\uB4E0 \uD559\uC0DD 1\uB4F1\uAE09 \uB2EC\uC131.. \uADF8 \uBE44\uACB0\uC740?", 1],
            ],
            [
                ["\uC544\uB450\uB178\uC774, \uAD50\uC721\uC6A9 \uAE30\uAE30\uC5D0\uC11C \uCCB4\uB974\uB178\uBE4C\uC758 300\uBC30 \uBC29\uC0AC\uB2A5 \uAC80\uCD9C.. \"\uB3C4\uB300\uCCB4 \uBB54 \uC9D3\uC744 \uD55C \uAC70\uB0D0\"", -1],
                ["\uC544\uB450\uB178\uC774, \uAD50\uC721\uC6A9 \uAE30\uAE30\uC5D0\uC11C \uCCB4\uB974\uB178\uBE4C\uC758 300\uBC30 \uBC29\uC0AC\uB2A5 \uAC80\uCD9C.. \"\uB3C4\uB300\uCCB4 \uBB54 \uC9D3\uC744 \uD55C \uAC70\uB0D0\"", -1],
                ["\uC544\uB450\uB178\uC774\uC5D0\uC11C \uAC10\uC790 \uB18D\uC0AC\uB85C \uC5F0 \uB9E4\uCD9C 50\uC5B5\uC6D0 \uB2EC\uC131..", 1],
                ["\uC544\uB450\uB178\uC774\uC758 \uC815\uCC45\uC774 \uC9C1\uC6D0\uB4E4\uC758 \"\uC774\uAC83\"\uC744 \uC0C1\uC2B9\uC2DC\uCF30\uB2E4.", 1],
            ],
            [
                ["\uB18D\uC0AC\uBC95\uC778\uD68C\uC0AC(\uC8FC) \uC8FC\uC131 \uC0AC\uC7A5 \uAE40\uC8FC\uC131 \uB300\uD45C \uBE44\uB9AC \uC801\uBC1C.. \"\uC644\uC804 \uC5C4\uCCAD \uCDA9\uACA9\"", -1],
                ["\uB18D\uC0AC\uBC95\uC778\uD68C\uC0AC(\uC8FC) \uC8FC\uC131 \uC0AC\uC7A5 \uAE40\uC8FC\uC131 \uB300\uD45C \uBE44\uB9AC \uC801\uBC1C.. \"\uC644\uC804 \uC5C4\uCCAD \uCDA9\uACA9\"", -1],
                ["[\uB2E8\uB3C5] \uB18D\uC0AC\uBC95\uC778\uD68C\uC0AC(\uC8FC) \uC8FC\uC131, SJ's \uD1A1\uD0B9\uC758 \uC724 \uB300\uD45C\uC640 \uD611\uC5C5..", 1],
                ["\uB18D\uC0AC\uBC95\uC778\uD68C\uC0AC(\uC8FC) \uC8FC\uC131, \uC9C0\uAD6C\uB97C \uAD6C\uD560 \uC0C8\uB85C\uC6B4 \uD488\uC885 \uAC1C\uBC1C \uB300\uC131\uACF5.. \uADF8 \uC601\uD5A5\uC740?", 1],
            ],
            [
                ["\uB9AC\uC5C7 \uAC00\uBA54\uC988, \uACC4\uC18D\uB41C \uCE68\uD32C\uCE58\uC2DD \uD328\uCE58\uC5D0 \uC720\uC800\uB4E4 \"\uD53C\uACE4\"", -1],
                ["\uB9AC\uC5C7 \uAC00\uBA54\uC988 \uBCF8\uC0AC\uC5D0 \uBE44 \uB0B4\uB824.. 3\uC77C\uAC04 \"\uD750\uB9BF\"", 0],
                ["\uB9AC\uC5C7 \uAC00\uBA54\uC988 \uBCF8\uC0AC\uC5D0 \uBE44 \uB0B4\uB824.. 3\uC77C\uAC04 \"\uD750\uB9BF\"", 0],
                ["\uB9AC\uC5C7 \uAC00\uBA54\uC988, \uC2E0\uC791 \uAC8C\uC784 \"\uB300\uC131\uACF5\"", 1],
            ],
            [
                ["Eng-Vidia, \uC0C8 \uADF8\uB798\uD53D\uCE74\uB4DC 10\uB144\uC804 \uC81C\uD488\uBCF4\uB2E4 \uB354 \uB290\uB824.. \uB204\uB9AC\uAFBC\uB4E4 \"\uBD84\uB178\"", -1],
                ["Eng-Vidia\uB294 NVidia\uC758 \uBAA8\uBC29\uC785\uB2C8\uB2E4. \uB180\uB78D\uC8E0?\u314B", -1],
                ["Eng-Vidia, \uC0C8 \uADF8\uB798\uD53D\uCE74\uB4DC \uACF5\uAC1C\uC5D0 \"\uB300\uBC15 \uC608\uAC10\"", 1],
                ["Eng-Vidia, \uC0C8 \uADF8\uB798\uD53D\uCE74\uB4DC \uACF5\uAC1C\uC5D0 \"\uB300\uBC15 \uC608\uAC10\"", 1],
            ],
            [
                ["\uBBF8\uD06C\uB85C\uC18C\uD14C, \uBE4C \uAC8C\uC774 \uB300\uD45C \uBD88\uB95C \uC2A4\uCF04\uB4E4 \uBC1D\uD600\uC838.. \"\uC77C\uBCF8\uC774 \uACBD\uC545\"", -1],
                ["\uBBF8\uD06C\uB85C\uC18C\uD14C, \uC5B4\uC81C dow-won \uC5C5\uB370\uC774\uD2B8 \uC9C4\uD589\uD574..", 0],
                ["\uBBF8\uD06C\uB85C\uC18C\uD14C, \uC5B4\uC81C dow-won \uC5C5\uB370\uC774\uD2B8 \uC9C4\uD589\uD574..", 0],
                ["\uBBF8\uD06C\uB85C\uC18C\uD14C, \uC0C8\uB85C\uC6B4 \uC6B4\uC601\uCCB4\uC7AC \uACF5\uAC1C.. \uBC18\uC751 \"\uC5ED\uB300\uAE09\"", 1],
            ],
            [
                ["\uBE44\uC0C1(Emergency)\uAD50\uC721, \uAD50\uACFC\uC11C \uCD9C\uD310.. \uB300\uD45C \"\uB2C8\uC5BC\uAD74\"", 1],
                ["\uBE44\uC0C1(Emergency)\uAD50\uC721, \uC774\uBC88 \uBD84\uAE30 \"\uC5B4? \uC911\uC774? \uB5A0? \uC911\uC774?\".. \uADF8 \uC774\uC720\uB294?", -1],
                ["\uBE44\uC0C1(Emergency)\uAD50\uC721, \uC774\uBC88 \uBD84\uAE30 \"\uC5B4? \uC911\uC774? \uB5A0? \uC911\uC774?\".. \uADF8 \uC774\uC720\uB294?", -1],
                ["\uBE44\uC0C1(Emergency)\uAD50\uC721\uC5D0\uC11C \uACF5\uAC1C\uD55C \uC0C8 \uBB38\uC81C\uC9D1, \"\uB300\uC131\uACF5\"", 1],
            ],
            [
                ["\uD0AC\uB85C\uC2A4\uD130\uB514, \uBC30\uAE30\uAC00\uC2A4 \uAC15\uC0AC\uC758 \uAC15\uC758\uC5D0\uC11C \"\uCE58\uBA85\uC801\" \uC624\uB958 \uBC1C\uACAC..", -1],
                ["\uD0AC\uB85C\uC2A4\uD130\uB514, \uBC30\uAE30\uAC00\uC2A4 \uAC15\uC0AC\uC758 \uAC15\uC758\uC5D0\uC11C \"\uCE58\uBA85\uC801\" \uC624\uB958 \uBC1C\uACAC..", -1],
                ["\uD0AC\uB85C\uC2A4\uD130\uB514, \uBA54\uAC00\uC2A4\uD130\uB514 \uC790\uD68C\uC0AC\uB85C \uBC1D\uD600\uC838.. \"\uACBD\uC545\"", 1],
                ["\uD0AC\uB85C\uC2A4\uD130\uB514 \uC218\uAC15\uC0DD 1500\uB9CC\uBA85 \uB3CC\uD30C.. \"\uC138\uACC4\uC801 \uAD50\uC721 \uD50C\uB7AB\uD3FC\uC73C\uB85C \uBC1C\uB3CB\uC6C0\"", 1],
            ],
            [
                ['野 새로운 정책에 대국민 환호.. 김어진 "흐믓"', 1],
                ['與 정권 잡아.. 김어진 "역대급 분노"', 0],
                ['與 정권 잡아.. 김어진 "역대급 분노"', 0],
                ['中, 習近平 尹과 멋진 소주 한잔 마셔..', 0]
            ]
        ];
        news.push(_stockPredict[_newsStock][_newsContent][0]);
        var _ret = "<p>".concat(news[news.length - 3], "</p><p>").concat(news[news.length - 2], "</p><p>").concat(news[news.length - 1], "</p>");
        document.querySelector("#news").innerHTML = _ret;
        var _priceChagne = Math.floor(stock[_newsStock].price * _random(0.05, 0.13) * _stockPredict[_newsStock][_newsContent][1]);
        stock[_newsStock].price += _priceChagne;
        var audio = new Audio("../sounds/alert".concat(_stockPredict[_newsStock][_newsContent][1], ".mp3"));
        audio.play();
    }, _random(1000, 3000)); //_random(10000, 300000)
}
function _random(min, max) {
    var date = new Date();
    date.getSeconds;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
