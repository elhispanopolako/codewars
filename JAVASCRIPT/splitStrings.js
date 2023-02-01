//mine
function solution(str) {
    let result = str.split(/(.{2})/).filter(x => x != '')
    if (str.length % 2 !== 0) {
        result[result.length - 1] = result[result.length - 1] + '_'
    }
    return result
}
//refactored
function solution(str) {
    let result = str.match(/(.{2})/g);
    if (str.length % 2 !== 0) {
        result[result.length - 1] = result[result.length - 1] + '_';
    }
    return result;
}
//tests  
const { assert } = require('chai');

describe("Split Strings", () => {
    it("Basic tests", () => {
        assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
        assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
        assert.deepEqual(solution(""), []);
    });
});