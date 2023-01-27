//mine
function domainName(url) {
    const re = /http:\/\/|www.|https:\/\//gm
    let str = url.replace(re, "")
    let dot = str.indexOf('.')
    return str.slice(0, dot)
}
//refactored
function domainName(url) {
    return new URL(url).hostname.split('.')[0];
}
//test
const { assert } = require("chai");

describe("Sample test", () => {
    it("Should pass sample tests", () => {
        assert.equal(domainName("http://google.com"), "google");
        assert.equal(domainName("http://google.co.jp"), "google");
        assert.equal(domainName("www.xakep.ru"), "xakep");
        assert.equal(domainName("https://youtube.com"), "youtube");
    })
})
