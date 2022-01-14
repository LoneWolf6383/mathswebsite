import { drawGraph } from "./graph";
import { R2 } from "./R2"
import { R4 } from "./R4"
import { Euler } from "./Euler"
import selectMethod from "./radioButtons"
import { x1, y1, xn, h, eq, sub_but, x_vals, y_vals, method_name, s1, s2, s3, s4, y2, flag } from "./variables"
sub_but.addEventListener('click', () => {
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

function Equation(x, y) {
    var equation = eval(eq.value)
    return equation
}