var moveZeroes = function (nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     if(nums[i] === 0) {
    //         nums.splice(i, 1)
    //         nums.push(0)
    //         --i;
    //         console.log(i);
    //     }
    // }
    // return nums
    let i = 0;
    let loopCount = nums.length
    while (i < loopCount) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            loopCount--;
        } else {
            i++;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 0, 1]));



class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] answer = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            int newEl = 1;
            for (int j = 0; j < nums.length; j++) {
                if(i != j) {
                    newEl = newEl * nums[j];
                }
            }
            answer[i] = newEl;
        }
        return answer;
    }
}