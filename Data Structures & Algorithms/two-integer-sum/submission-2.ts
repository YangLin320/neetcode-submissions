class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numMap = new Map<number, number>();
        for(let x = 0; x < nums.length; x++){
            if(numMap.has(target - nums[x])) return [x, nums.indexOf(target - nums[x])]
            else{
                numMap.set(nums[x], x);
            }
        }
    }
}
