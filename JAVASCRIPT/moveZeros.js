//mine
function moveZeros(arr) {
    let filterArr = arr.filter(x => x !== 0)
    let zerosArr = arr.filter(x => x === 0)
    return filterArr.concat(zerosArr)
}
//refactored
function moveZeros(arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}
//tests
const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
        assert.deepEqual(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]), [false, 1, 1, 2, 1, 3, "a", 0, 0]);
    });
});