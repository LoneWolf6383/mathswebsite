var x1 = document.querySelector('#x1_ip')
var y1 = document.querySelector('#y1_ip')
var z1 = document.querySelector('#z1_ip')
var xn = document.querySelector('#xn_ip')
var h = document.querySelector('#h_ip')
var f_eq = document.querySelector('#f_eq_ip')
var g_eq = document.querySelector('#g_eq_ip')
var sub_but = document.querySelector('#sub_but')
var eulerBut = document.querySelector('#methodEuler')
var sample_input_but = document.querySelector('#sample-inputs')

var x_vals = [0]
var y_vals = [0]
var method_name = "None"
var sy1 = 0.0
var sy2 = 0.0
var sz1 = 0.0
var sz2 = 0.0
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

function f(x, y, z) {
    console.log(f_eq.value)
    let equation = eval(f_eq.value)
    return equation
}

function g(x, y, z) {
    console.log(g_eq.value)
    let equation = eval(g_eq.value)
    return equation
}

sub_but.addEventListener("click", () => {
    x1 = parseFloat(x1.value)
    y1 = parseFloat(y1.value)
    z1 = parseFloat(z1.value)
    xn = parseFloat(xn.value)
    h = parseFloat(xn / h.value)
    Execution(x1, y1, z1, xn, h)
})

function Execution(x1, y1, z1, xn, h) {
    if (flag == 1) {
        Euler(x1, y1, z1, xn, h)
        method_name = "Euler"
    } else if (flag == 2) {
        R2(x1, y1, z1, xn, h)
        method_name = "Runge Kutta 2nd Order Method"
    }
    drawGraph()
}
sample_input_but.addEventListener('click', () => {
    x1.value = 0
    z1.value = 0
    y1.value = 5
    xn.value = 10
    h.value = 5
    f_eq.value = "z"
    g_eq.value = "(-2*z-10*y)/2"
    x1 = parseFloat(x1.value)
    z1 = parseFloat(z1.value)
    y1 = parseFloat(y1.value)
    xn = parseFloat(xn.value)
    h = parseFloat(xn / h.value)
    eulerBut.checked = true
    flag = 1
    Execution(x1, y1, z1, xn, h)
})