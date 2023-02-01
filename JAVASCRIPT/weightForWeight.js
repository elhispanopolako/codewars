//mine
function orderWeight(strng) {
    if (strng == '') {
        return ''
    }
    let arr = strng.split(' ')
    let weight = []
    for (let num of arr) {
        let y = num.split('').map(Number).reduce((a, b) => a + b)
        weight.push(y)
    }
    let sortable = arr.map((x, i) => [x, weight[i]])
    sortable.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] > b[0] ? 1 : -1;
        }
        return a[1] - b[1];
    })
    let result = []
    sortable.forEach(el => {
        result.push(el[0])
    })
    return result.join(' ')
}
//refactored
function orderWeight(strng) {
    if (strng === '') {
        return '';
    }

    let arr = strng.split(' ');
    let sortable = arr.map(num => {
        let weight = num.split('').map(Number).reduce((a, b) => a + b);
        return [num, weight];
    });

    sortable.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return a[1] - b[1];
    });

    return sortable.map(el => el[0]).join(' ');
}

//tests
const Test = require('@codewars/test-compat');

describe("Order Weights", function () {
    it("Basic tests", function () {
        Test.assertEquals(orderWeight(""), "")
        Test.assertEquals(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
        Test.assertEquals(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
    })
})