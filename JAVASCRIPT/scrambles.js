//First
function scramble(str1, str2) {
    let charCount = {};
    for (let char of str1) {
        if (char in charCount) {
            charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }
    }
    for (let char of str2) {
        if (!(char in charCount) || charCount[char] === 0) {
            return false;
        }
        else {
            charCount[char]--;
        }
    }
    return true;
}
//refactored
function scramble(str1, str2) {
    let charCount = {};
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!charCount[char]--) return false;
    }
    return true;
}
//tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Sample Tests', function () {
    it("Tests", () => {
        assert.strictEqual(scramble('rkqodlw', 'world'), true);
        assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'), true);
        assert.strictEqual(scramble('katas', 'steak'), false);
        assert.strictEqual(scramble('scriptjavx', 'javascript'), false);
        assert.strictEqual(scramble('scriptingjava', 'javascript'), true);
        assert.strictEqual(scramble('scriptsjava', 'javascripts'), true);
        assert.strictEqual(scramble('javscripts', 'javascript'), false);
        assert.strictEqual(scramble('jscripts', 'javascript'), false);
        assert.strictEqual(scramble('aabbcamaomsccdd', 'commas'), true);
        assert.strictEqual(scramble('commas', 'commas'), true);
        assert.strictEqual(scramble('sammoc', 'commas'), true)
    });

    it("Large inputs test", () => {
        let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
        let s2 = "zyxcba".repeat(9_000);
        assert.strictEqual(scramble(s1, s2), true);
    });
});