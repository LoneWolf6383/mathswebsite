var x1 = document.querySelector('#x1_ip')
var y1 = document.querySelector('#y1_ip')
var xn = document.querySelector('#xn_ip')
var h = document.querySelector('#h_ip')
var eq = document.querySelector('#eq_ip')
var sub_but = document.querySelector('#sub_but')
var eulerBut = document.querySelector('#methodEuler')
var sample_input_but = document.querySelector('#sample-inputs')
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
    }
}

function Equation(x, y) {
    var equation = eval(eq.value)
    return equation
}

function Execution(x1, y1, xn, h) {
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
}

sub_but.addEventListener("click", () => {
    x1 = parseFloat(x1.value)
    y1 = parseFloat(y1.value)
    xn = parseFloat(xn.value)
    h = parseFloat(xn / h.value)
    Execution(x1, y1, xn, h)
})
sample_input_but.addEventListener('click', () => {
    x1.value = 0
    y1.value = 0.2
    xn.value = 1
    h.value = 5
    eq.value = "y - x"
    x1 = parseFloat(x1.value)
    y1 = parseFloat(y1.value)
    xn = parseFloat(xn.value)
    h = parseFloat(xn / h.value)
    eulerBut.checked = true
    flag = 1
    Execution(x1, y1, xn, h)

})