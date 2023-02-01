//First version
function nextBigger(n) {
    let arr = n.toString().split('')
    let l = arr.length
    let sort = n.toString().split('').sort().reverse()
    if (sort.join('') == n || l == 1) {
        return -1
    } else if (l == 2) {
        return +sort.join('')
    }

    let i = 0
    for (i = n - 1; i > 0; i--) {
        if (arr[i] > arr[i - 1]) {
            break
        }
    }
    if (i != 0) {
        for (let j = l - 1; j >= i; j--) {
            if (arr[i - 1] < arr[j]) {
                let temp = arr[i - 1]
                arr[i - 1] = arr[j]
                arr[j] = temp
                break
            }
        }
    }
    arr = arr.slice(0, i).concat(arr.slice(i, l).reverse());
    return +arr.join('')
}
//refactored
function nextBigger(n) {
    const arr = n.toString().split("")
    const sort = n.toString().split("").sort().reverse();
    if (sort.join("") === n.toString() || n < 10) return -1;
    let i = arr.length - 1;
    while (i > 0 && arr[i] <= arr[i - 1]) i--;
    if (i === 0) return -1;
    let j = i;
    while (j < arr.length && arr[j] > arr[i - 1]) j++;
    [arr[i - 1], arr[j - 1]] = [arr[j - 1], arr[i - 1]];
    return +(arr.slice(0, i).concat(arr.slice(i).reverse()).join(""));
}
//tests

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(nextBigger(2), -1)
        Test.assertEquals(nextBigger(12), 21)
        Test.assertEquals(nextBigger(513), 531)
        Test.assertEquals(nextBigger(2017), 2071)
        Test.assertEquals(nextBigger(414), 441)
        Test.assertEquals(nextBigger(144), 414)
    });
});
