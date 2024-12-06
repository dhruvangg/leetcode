function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) return ""

    

    return gcd(str1, str2)
};

function gcd(str1, str2) {
    let l1 = str1.length
    let l2 = str2.length
    if (l1 > l2) {
        let nstr1 = str1.replace(str2, '')
        return gcd(nstr1, str2)
    } else if (l2 > l1) {
        let nstr2 = str2.replace(str1, '')
        return gcd(str1, nstr2)
    } else if (l1 === l1) {
        return str1
    }
}

str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX"
str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"

console.log(gcdOfStrings(str1, str2));
