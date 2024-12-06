var reverseWords = function(s) {
    const arr = s.trim().split(" ").filter(el => Boolean(el))
    
    return arr.reverse().join(" ")
};

console.log(reverseWords("a good   example"));

