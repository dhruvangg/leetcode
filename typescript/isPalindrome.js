function isPalindrome(s) {
    var sub = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var start = 0, end = sub.length - 1;
    for (var i = start, j = end; i <= Math.ceil(end / 2) && j >= Math.floor(end / 2); i++, j--) {
        if (sub[i] !== sub[j])
            return false;
    }
    return true;
}
;
function isPalindrome2(s) {
    var sub = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var rev = sub.split('').reverse().join('');
    return sub === rev;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
