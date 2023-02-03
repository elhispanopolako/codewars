function score(dice) {
    let filter1 = dice.filter(x => x == 1)
    let filter2 = dice.filter(x => x == 2)
    let filter3 = dice.filter(x => x == 3)
    let filter4 = dice.filter(x => x == 4)
    let filter5 = dice.filter(x => x == 5)
    let filter6 = dice.filter(x => x == 6)
    let result = 0
    if (filter1.length >= 3) {
        result += 1000
        filter1.pop()
        filter1.pop()
        filter1.pop()
    } else if (filter6.length >= 3) {
        result += 600
    } else if (filter5.length >= 3) {
        result += 500
        filter5.pop()
        filter5.pop()
        filter5.pop()
    } else if (filter4.length >= 3) {
        result += 400
    } else if (filter3.length >= 3) {
        result += 300
    } else if (filter2.length >= 3) {
        result += 200
    }
    if (filter1.length > 0) {
        result += filter1.length * 100
    }
    if (filter5.length > 0) {
        result += filter5.length * 50
    }
    return result
}
//tests
const Test = require('@codewars/test-compat');

describe("Scorer Function", function () {
    it("should value this as worthless", function () {
        Test.expect(score([2, 3, 4, 6, 2]) == 0, "Should be 0 :-(");
    });

    it("should value this triplet correctly", function () {
        Test.expect(score([4, 4, 4, 3, 3]) == 400, "Should be 400");
    });

    it("should value this mixed set correctly", function () {
        Test.expect(score([2, 4, 4, 5, 4]) == 450, "Should be 450");
    });
    it('should value this mixed set correctly', () => {
        Test.expect(score([1, 1, 1, 1, 3]) == 1100, "Should be 1150");

    })
});