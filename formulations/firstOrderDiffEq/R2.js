function R2(x1, y1, xn, h) {
    while (x1 < xn) {
        s1 = h * Equation(x1, y1)
        s2 = h * Equation(x1 + h, y1 + s1)
        s = (s1 + s2) / 2
        y2 = y1 + s
        x1 = x1 + h
        y1 = y2
        x_vals.push(x1)
        y_vals.push(y1)
    }
}
// export default R2