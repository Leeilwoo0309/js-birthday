//@ts-nocheck
function drawChart(changes: number[]) {
    _stockChartDraw?.destroy();
    let _change = [...changes]
    const _data = _change?.splice(_change.length-20 > 0 ? _change.length - 20 : 0, _change.length);
    const _label = Array(_data?.length)?.fill('')

    // stockChart.width = '800px';
    // stockChart.height = '500px';

    let _stockChartDraw = new Chart(stockChart, {
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

    return _stockChartDraw
}