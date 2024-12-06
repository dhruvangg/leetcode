var reverseVowels = function (s) {
    const vowels = 'aeiou'
    let temp = [], revStr = ''
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            temp.push(s[i])
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (vowels.includes(s[j])) {
            revStr += temp.splice(-1)
        } else {
            revStr += s[j]
        }
    }
    return revStr
};

console.log(reverseVowels("hello"));

console.log(reverseVowels("bbbbbaeiou"));








// for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
//     console.log(s[i], s[j]);
// }