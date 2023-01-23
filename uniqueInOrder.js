//Mine
var uniqueInOrder = function (iterable) {
    let result = []
    let items = typeof (iterable) == 'string' ? iterable.split('') : iterable
    items.forEach((item, i) => {
        if (item !== items[i + 1]) {
            result.push(item)
        }
    });
    return result
}
//Refactored
const uniqueInOrder = iterable => {
    let items = typeof (iterable) == 'string' ? iterable.split('') : iterable;
    return items.filter((item, i) => item !== items[i + 1]);
}

//tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
        assert.deepEqual(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
        assert.deepEqual(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3])
    });
});
