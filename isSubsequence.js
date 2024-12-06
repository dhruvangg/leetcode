var isSubsequence = function(s, t) {
    let sp = 0;
    let tp = 0;
    while (sp < s.length && tp < t.length) {
        for (let j = 0; j < t.length; j++) {
            if (s[sp] === t[tp]) {
                sp++;
            }
            tp++;
        }    
    }    
    return sp === s.length; 
};

console.log(isSubsequence("abc", "ahbgdc"));

console.log(isSubsequence("axc", "ahbgdc"));

console.log(isSubsequence("acb", "ahbgdc"));

