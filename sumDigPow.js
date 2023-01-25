//mine
function sumDigPow(a, b) {
    let final = []
    for (let i = a; i <= b; i++) {
        let arr = i.toString().split('')
        let res = []
        let idx = 1
        for (let j of arr) {
            res.push(Math.pow(j, idx))
            idx++
        }
        let sum = res.reduce((a, b) => a + b)
        if (sum == i) {
            final.push(sum)
        }
    }
    return final
}
//tests
const chai = require("chai");
const assert = chai.assert;

function dotest(a, b, expected) {

    assert.deepEqual(sumDigPow(a, b), expected, `Test failed with a = ${a}, b = ${b}`)
}
describe("Tests", function () {
    it("Fixed tests", function () {
        dotest(1, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9])
        dotest(1, 100, [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
        dotest(10, 100, [89])
        dotest(90, 100, [])
        dotest(90, 150, [135])
        dotest(50, 150, [89, 135])
        dotest(10, 150, [89, 135])
    });
})