import { assert } from "chai";
//Start 
// function getCount(str) {
//     const rg = /[aeiou]/gm
//     var matches = str.match(rg)
//     if (matches == null) {
//         return 0
//     }
//     return matches.length
// }
//refactor
function getCount(str) {
    const rg = /[aeiou]/gm
    return (str.match(rg) || []).length
}

//tests
describe("Vowels Count Tests", function () {
    it("should return 5 for 'abracadabra'", function () {
        assert.strictEqual(getCount("abracadabra"), 5);
    });
    it("should return 6 for 'ewagelizacja'", function () {
        assert.strictEqual(getCount("ewagelizacja"), 6);
    });
    it("should return 0 for 'my pyx'", function () {
        assert.strictEqual(getCount("my pyx"), 0);
    });
});
