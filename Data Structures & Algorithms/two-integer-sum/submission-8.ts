class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let count1: number = 0;
        let count2: number = 1;
        for (count1; count1 < nums.length; count1++) {
            for (count2; count2 < nums.length; count2++) {
                if (target - nums[count2] == nums[count1]) return [count1, count2];
            }
            count2 = count1 + 2;
        }
    }
}
