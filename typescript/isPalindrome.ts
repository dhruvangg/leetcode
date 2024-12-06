function isPalindrome(s: string): boolean {
    const sub: string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let start: number = 0, end: number = sub.length - 1
    for (let i = start, j = end; i <= Math.ceil(end / 2) && j >= Math.floor(end / 2); i++, j--) {
        if (sub[i] !== sub[j]) return false;
    }
    return true

};

function isPalindrome2(s: string): boolean {
    const sub: string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    const rev: string = sub.split('').reverse().join('')
    return sub === rev
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
console.log(isPalindrome("0P"));