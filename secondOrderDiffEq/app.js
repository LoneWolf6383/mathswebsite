var x1 = document.querySelector('#x1_ip')
var y1 = document.querySelector('#y1_ip')
var z1 = document.querySelector('#z1_ip')
var xn = document.querySelector('#xn_ip')
var h = document.querySelector('#h_ip')
var f_eq = document.querySelector('#f_eq_ip')
var g_eq = document.querySelector('#g_eq_ip')
var sub_but = document.querySelector('#sub_but')
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
    var equation = eval(f_eq.value)
    return equation
}

function g(x, y, z) {
    var equation = eval(g_eq.value)
    return equation
}
sub_but.addEventListener("click", () => {
    x1 = parseFloat(x1.value)
    y1 = parseFloat(y1.value)
    z1 = parseFloat(z1.value)
    xn = parseFloat(xn.value)
    h = parseFloat(xn / h.value)
    if (flag == 1) {
        Euler(x1, y1, xn, h)
        method_name = "Euler"
    } else if (flag == 2) {
        R2(x1, y1, xn, h)
        method_name = "Runge Kutta 2nd Order Method"
    }
    drawGraph()
})