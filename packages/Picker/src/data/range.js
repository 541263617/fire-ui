export default function (n, m, polyfill = false) {
    let arr = []
    for (let i = n; i <= m; i++) {
        let value = (polyfill && i < 10 ? '0' + i : i + '')
        arr.push(value)
    }
    return arr
}
