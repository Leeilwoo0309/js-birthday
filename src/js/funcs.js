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
    stockChartDraw === null || stockChartDraw === void 0 ? void 0 : stockChartDraw.destroy();
    var change = __spreadArray([], changes, true);
    var data = change === null || change === void 0 ? void 0 : change.splice(change.length - 20 > 0 ? change.length - 20 : 0, change.length);
    var label = (_a = Array(data === null || data === void 0 ? void 0 : data.length)) === null || _a === void 0 ? void 0 : _a.fill('');
    // stockChart.width = '800px';
    // stockChart.height = '500px';
    var stockChartDraw = new Chart(stockChart, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                    label: stock[nowInfo[0]].name,
                    data: data,
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
    return stockChartDraw;
}
// function randaaa(start: number, end: number): number {
//     return Math.floor((Math.random() * (end-start+1)) + start);
// }
