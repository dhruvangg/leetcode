var A = 'a'.charCodeAt(0);
var createArray = function (str) {
    var arr = new Array(26).fill(0);
    for (var i = 0; i < str.length; i++) {
        arr[str.charCodeAt(i) - A] += 1;
    }
    return arr.toString();
};
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return createArray(s) === createArray(t);
}
;
// function isAnagram(s: string, t: string): boolean {
//     if(s.length !== t.length) return false
//     for (let i = 0; i < s.length; i++) {
//         if(t.indexOf(s[i]) === -1) {
//             return false
//         } else {
//             t = t.replace(s[i], '')
//         }
//     }
//     if(t.length === 0) {
//         return true
//     } else {
//         return false
//     }
// };
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("ab", "a"));
console.log(isAnagram("a", "ab"));
