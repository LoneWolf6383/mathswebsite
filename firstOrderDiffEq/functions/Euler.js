function Euler(x1, y1, xn, h) {
    while (x1 < xn) {
        x_vals.push(x1)
        y_vals.push(y1)
        y1 = ((y1 + h * Equation(x1, y1)) * 100) / 100
        x1 = x1 + h
    }
}