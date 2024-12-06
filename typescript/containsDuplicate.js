function containsDuplicate(nums) {
    var unique = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (unique.has(num))
            return true;
        unique.add(num);
    }
    return false;
}
;
containsDuplicate([1, 2, 3, 1]); // true
containsDuplicate([1, 2, 3, 4]); // false
