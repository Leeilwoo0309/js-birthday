//@ts-nocheck
function drawChart(changes: number[]) {
    stockChartDraw?.destroy();
    console.log(changes.length, changes.length-20 > 0 ? changes.length - 20 : 0);
    let change = [...changes]
    const data = change?.splice(change.length-20 > 0 ? change.length - 20 : 0, change.length);
    const label = Array(data?.length)?.fill('')

    let stockChartDraw = new Chart(stockChart, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: stock[nowInfo].name,
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

    return stockChartDraw
}