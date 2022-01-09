var x1 = document.querySelector('#x1_ip')
var y1 = document.querySelector('#y1_ip')
var xn = document.querySelector('#xn_ip')
var h = document.querySelector('#h_ip')
var eq = document.querySelector('#eq_ip')
const sub_but = document.querySelector('#sub_but')
var x_vals = []
var y_vals = []
sub_but.addEventListener('click', () => {
    x1 = x1.value
    y1 = y1.value
    xn = xn.value
    h = h.value
    Euler(x1, y1, xn, h)
    drawGraph()
})

function Euler(x1, y1, xn, h) {
    x1 = parseFloat(x1)
    y1 = parseFloat(y1)
    xn = parseFloat(xn)
    h = parseFloat(h)
    while (x1 < xn) {
        x_vals.push(x1)
        y_vals.push(y1)
        y1 = ((y1 + h * Equation(x1, y1)) * 100) / 100
        x1 = x1 + h
            // x1 = Equation(x1, 1)
            // y1 = Equation(1, y1)
        console.log('X value:', x1)
        console.log('Y value:', y1)
    }
    console.log(x_vals)
    console.log(y_vals)
}

function Equation(x, y) {
    var equation = eval(eq.value)
    return equation
}


function drawGraph() {
    const ch = document.querySelector('#myChart')
    const myChart = new Chart(ch, {
        type: 'line',
        data: {
            labels: x_vals,
            datasets: [{
                label: 'Dummy',
                data: y_vals,
                backgroundColor: [
                    'rgba(0,255,247,1)',
                    'rgba(0,255,95,1)',
                    'rgba(56,0,255,1)',
                    'rgba(255,0,4,1)',
                    'rgba(154,0,255,1)'
                ],
                borderColor: [
                    'rgba(0,0,0,1)',
                    'rgba(0,0,0,1)',
                    'rgba(0,0,0,1)',
                    'rgba(0,0,0,1)',
                    'rgba(0,0,0,1)'
                ],
                borderWidth: 2,
                lineTension: 0.8
            }],
            options: {
                scales: {
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