var A = 'a'.charCodeAt(0);
var charArray = function (str) {
    var arr = new Array(26).fill(0);
    for (var i = 0; i < str.length; i++) {
        var key = str.charCodeAt(i) - A;
        arr[key] = arr[key] + 1;
    }
    return arr.join('-');
};
function groupAnagrams(strs) {
    var obj = {};
    for (var i = 0; i < strs.length; i++) {
        var key = charArray(strs[i]);
        if (!obj[key]) {
            obj[key] = [];
        }
        obj[key].push(strs[i]);
    }
    return Object.values(obj);
}
;
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams(["bbbbbbbbbbc"]));
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
