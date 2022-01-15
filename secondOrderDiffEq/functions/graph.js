function drawGraph() {
    const ch = document.querySelector('#myChart')
    const myChart = new Chart(ch, {
        type: 'line',
        data: {
            labels: x_vals,
            datasets: [{
                label: method_name,
                data: y_vals,
                borderColor: 'rgba(38,194,255,1)',
                borderWidth: 2,
                lineTension: 0
            }],
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    })

}