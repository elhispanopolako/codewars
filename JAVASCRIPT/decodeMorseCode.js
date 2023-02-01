//mine
decodeMorse = function (morseCode) {
    let chars = morseCode.split(' ')
    let decArr = []
    for (let char of chars) {
        let dec = MORSE_CODE[char]
        if (dec == undefined) { dec = ' ' }
        decArr.push(dec)
    }
    return decArr.join('').replace(/\s+/g, ' ').trim()
}
//tests
const { assert } = require('chai');

describe("Sample tests", function () {

    it("Example from description", () => {
        assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
    });

    it("Leading and trailing spaces", () => {
        assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
    });

});
