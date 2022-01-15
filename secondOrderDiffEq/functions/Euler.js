function Euler(x1, y1, xn, h) {
    let y2 = 0.0
    let x2 = 0.0
    let z2 = 0.0
    while (x1 < xn) {
        x_vals.push(x1)
        y_vals.push(y1)
        y2 = ((y1 + h * f(x1, y1, z1)) * 100) / 100
        z1 = ((z1 + h * g(x1, y1, z1)) * 100) / 100
        x2 = x1 + h
        x1 = x2
        y1 = y2
        z1 = z2
    }
}