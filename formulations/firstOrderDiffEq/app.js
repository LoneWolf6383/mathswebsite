// import { drawGraph } from "./graph";
// import { R2 } from "./R2"
// import { R4 } from "./R4"
// // import { Euler } from "./Euler"
// import selectMethod from "./radioButtons"
// import { x1, y1, xn, h, eq, sub_but, x_vals, y_vals, method_name, s1, s2, s3, s4, y2, flag } from "./variables"
var x1 = document.querySelector('#x1_ip')
var y1 = document.querySelector('#y1_ip')
var xn = document.querySelector('#xn_ip')
var h = document.querySelector('#h_ip')
var eq = document.querySelector('#eq_ip')
var sub_but = document.querySelector('#sub_but')
var x_vals = [0]
var y_vals = [0]
var method_name = "None"
var s1 = 0.0
var s2 = 0.0
var s3 = 0.0
var s4 = 0.0
var y2 = 0.0
var flag = 0

function selectMethod(methodName) {
    if (methodName == 1) {
        flag = 1
    } else if (methodName == 2) {
        flag = 2
    } else if (methodName == 3) {
        flag = 3
        a
    }
}

function Equation(x, y) {
    var equation = eval(eq.value)
    return equation
}
sub_but.addEventListener("click", () => {
    x1 = parseFloat(x1.value)
    y1 = parseFloat(y1.value)
    xn = parseFloat(xn.value)
    h = parseFloat(xn / h.value)
    if (flag == 1) {
        Euler(x1, y1, xn, h)
        method_name = "Euler"
    } else if (flag == 2) {
        R2(x1, y1, xn, h)
        method_name = "Runge Kutta 2nd Order Method"
    } else if (flag == 3) {
        R4(x1, y1, xn, h)
        method_name = "Runge Kutta 4th Order Method"
    }
    drawGraph()
})

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