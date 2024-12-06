/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let filtered = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            filtered.push(arr[i])
        }
    }    
    return filtered;
};


filter([0, 10, 20, 30], function greaterThan10(n) { return n > 10; })