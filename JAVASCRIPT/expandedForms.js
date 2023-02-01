//mine 
function expandedForm(num) {
    let numLength = String(num).length
    let numArr = String(num).split('').map(num => Number(num))
    let powArr = []
    for (let i = numLength - 1; i >= 0; i--) {
        powArr.push(Math.pow(10, i))
    }
    let multArr = []
    for (let i = 0; i < powArr.length; i++) {
        multArr.push(numArr[i] * powArr[i])
    }
    let result = multArr.filter(x => x > 0).join(' + ')
    return result
}
//refactored
function expandedForm(num) {
    let numArr = String(num).split('').map(num => Number(num));
    return numArr.map((digit, i) => digit * Math.pow(10, numArr.length - i - 1))
        .filter(x => x > 0)
        .join(' + ');

}
//Tests
const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
        assert.strictEqual(expandedForm(12), '10 + 2');
        assert.strictEqual(expandedForm(42), '40 + 2');
    });
});


