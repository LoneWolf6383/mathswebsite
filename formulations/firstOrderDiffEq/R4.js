function R4(x1, y1, xn, h) {
    while (x1 < xn) {
        s1 = h * Equation(x1, y1)
        s2 = h * Equation(x1 + (h / 2), y1 + (s1 / 2))
        s3 = h * Equation(x1 + (h / 2), y1 + (s1 / 2))
        s4 = h * Equation(x1 + h, y1 + s3)
        s = (s1 + (2 * s2) + (2 * s3) + s4) / 6
        y2 = y1 + s
        x1 = x1 + h
        y1 = y2
        x_vals.push(x1)
        y_vals.push(y1)

    }
}