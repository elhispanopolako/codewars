function narcissistic(value) {
    var digitsArray = String(value).split('').map(Number)
    var digitsLenght = digitsArray.length
    var sum = digitsArray.map(x => Math.pow(x, digitsLenght)).reduce((a, b) => a + b)
    return sum === value
}