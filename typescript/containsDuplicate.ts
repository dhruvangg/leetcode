function containsDuplicate(nums: number[]): boolean {
    let unique = new Set<number>()
    for (const num of nums) {
        if (unique.has(num)) return true
        unique.add(num)
    }
    return false
};


containsDuplicate([1,2,3,1]) // true
containsDuplicate([1,2,3,4]) // false