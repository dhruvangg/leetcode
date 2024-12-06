var maxVowels = function (s, k) {
    let max = 0, count = 0;
    const vowel = ['a', "e", "i", "o", "u"]
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);

        if (vowel.includes(s[i])) count++;

        if (i >= k && vowel.includes(s[i - k])) count--

        if (count === k) return k;

        if (max < count) {
            max = count
        }

        console.log({ count, max });

    }
    return max;
};

console.log(maxVowels("abciiidef", 3));
