//Solution
function queueTime(customers, n) {
    if (customers.length == 0 || n.length == 0) { return 0 }
    let res = []
    let sum = 0
    const tills = new Array(n).fill(0)
    for (let i of customers) {
        if (n == 1) {
            res.push(i)
            sum = res.reduce((a, b) => a + b)
        } else if (customers.length < n) {
            res.push(i)
            sum = Math.max(...res)
        } else {
            const lowestWait = tills.indexOf(Math.min(...tills))
            tills[lowestWait] += i
            sum = Math.max(...tills)
        }
    }
    return sum
}
//tests
const { assert } = require('chai');

describe("Sample tests", function () {

    it("Simple tests", () => {
        assert.strictEqual(queueTime([1, 2, 3, 4, 5], 100), 5);
        assert.strictEqual(queueTime([], 1), 0);
        assert.strictEqual(queueTime([1, 2, 3, 4], 1), 10);
        assert.strictEqual(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
    });

    it("Examples", () => {
        assert.strictEqual(queueTime([5, 3, 4], 1), 12);
        assert.strictEqual(queueTime([10, 2, 3, 3], 2), 10);
        assert.strictEqual(queueTime([2, 3, 10, 2], 2), 12);
    });

});