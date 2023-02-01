function XO(str) {
    let xLength = (str.match(/[xX]/gm) || []).length
    let oLength = (str.match(/[oO]/gm) || []).length
    return xLength == oLength
}


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(XO('XO'), true);
        Test.assertEquals(XO("xxOo"), true);
        Test.assertEquals(XO("xxxm"), false);
        Test.assertEquals(XO("Oo"), false);
        Test.assertEquals(XO("ooom"), false);
        Test.assertEquals(XO("xo0"), true);
    });
});
