function R2(x1, y1, xn, h) {
    while (x1 < xn) {
        sy1 = h * f(x1, y1, z1)
        sz1 = h * g(x1, y1, z1)
        sy2 = h * f(x1 + h, y1 + sy1, z1 + sz1)
        sz2 = h * g(x1 + h, y1 + sy1, z1 + sz1)
        sy = (sy1 + sy2) / 2
        sz = (sz1 + sz2) / 2
        y2 = y1 + sy
        z2 = z1 + sz
        y1 = y2
        z1 = z2
        x1 = x1 + h
        x_vals.push(x1)
        y_vals.push(y1)
    }
    console.log(x_vals)
    console.log(y_vals)
}