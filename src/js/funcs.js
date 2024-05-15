var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//@ts-nocheck
function drawChart(changes) {
    var _a;
    _stockChartDraw === null || _stockChartDraw === void 0 ? void 0 : _stockChartDraw.destroy();
    var _change = __spreadArray([], changes, true);
    var _data = _change === null || _change === void 0 ? void 0 : _change.splice(_change.length - 20 > 0 ? _change.length - 20 : 0, _change.length);
    var _label = (_a = Array(_data === null || _data === void 0 ? void 0 : _data.length)) === null || _a === void 0 ? void 0 : _a.fill('');
    // stockChart.width = '800px';
    // stockChart.height = '500px';
    var _stockChartDraw = new Chart(stockChart, {
        type: 'line',
        data: {
            labels: _label,
            datasets: [{
                    label: stock[nowInfo[0]].name,
                    data: _data,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0
                }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                },
                y: {
                    beginAtZero: false
                }
            },
            legend: {
                display: false
            },
            animation: {
                duration: 0 // 애니메이션의 지속 시간을 0으로 설정하여 애니메이션을 끕니다.
            }
        }
    });
    return _stockChartDraw;
}
