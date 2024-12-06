const A = 'a'.charCodeAt(0)

const charArray = (str: string) => {
    const arr = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
        const key = str.charCodeAt(i) - A
        arr[key] = arr[key] + 1
    }
    return arr.join('-')
}

function groupAnagrams(strs: string[]): string[][] {
    const obj = {}
    for (let i = 0; i < strs.length; i++) {
        const key = charArray(strs[i])        
        if (!obj[key]) {
            obj[key] = []
        }
        obj[key].push(strs[i])
    }
    return Object.values(obj)
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams(["bbbbbbbbbbc"]));
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
