function lengthOfLongestSubstring(s: string): number {
    let longest: number = 0, substring: string[] = []

    for (let i = 0; i < s.length; i++) {
        const el: string = s[i];
        if (substring.indexOf(el) === -1) {
            substring.push(el)

            if (substring.length > longest)
                longest = substring.length
        } else {
            const start = s.indexOf(el) + 1
            const pre = s.substring(start, i).split('')
            console.log(pre);
            
            substring = [...pre, el]
        }
    }
    return longest
}

console.log(lengthOfLongestSubstring("bbtablud"))
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("T_T"))
// console.log(lengthOfLongestSubstring(" "))
// console.log(lengthOfLongestSubstring("dvcdf"))
// console.log(lengthOfLongestSubstring("ckilbkd"))
// console.log(lengthOfLongestSubstring("tmmzuxt"))