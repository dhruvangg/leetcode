var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function lengthOfLongestSubstring(s) {
    var longest = 0, substring = [];
    for (var i = 0; i < s.length; i++) {
        var el = s[i];
        if (substring.indexOf(el) === -1) {
            substring.push(el);
            if (substring.length > longest)
                longest = substring.length;
        }
        else {
            var start = s.indexOf(el) + 1;
            var pre = s.substring(start, i).split('');
            console.log(pre);
            substring = __spreadArray(__spreadArray([], pre, true), [el], false);
        }
    }
    return longest;
}
console.log(lengthOfLongestSubstring("bbtablud"));
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("T_T"))
// console.log(lengthOfLongestSubstring(" "))
// console.log(lengthOfLongestSubstring("dvcdf"))
// console.log(lengthOfLongestSubstring("ckilbkd"))
// console.log(lengthOfLongestSubstring("tmmzuxt"))
