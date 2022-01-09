var x1 = document.querySelector('#x1_ip')
var y1 = document.querySelector('#y1_ip')
var xn = document.querySelector('#xn_ip')
var h = document.querySelector('#h_ip')
var eq = document.querySelector('#eq_ip')
const sub_but = document.querySelector('#sub_but')
sub_but.addEventListener('click', () => {
    x1 = x1.value
    y1 = y1.value
    xn = xn.value
    h = h.value
    Euler(x1, y1, xn, h)
})

function Euler(x1, y1, xn, h) {
    x1 = parseFloat(x1)
    y1 = parseFloat(y1)
    xn = parseFloat(xn)
    h = parseFloat(h)
    while (x1 < xn) {
        y1 = ((y1 + h * Equation(x1, y1)) * 100) / 100
        x1 = x1 + h
            // x1 = Equation(x1, 1)
            // y1 = Equation(1, y1)
        console.log('X value:', x1)
        console.log('Y value:', y1)
    }
}

function Equation(x, y) {
    var equation = eval(eq.value)
    return equation
}