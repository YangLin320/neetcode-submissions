class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numbers = new Map<number, number>();

        for(let x = 0; x < nums.length; x++){
            const complement = target - nums[x];

            if( numbers.has(complement)) return [numbers.get(complement), x];
            numbers.set(nums[x], x);
        }
        
    }
}
