class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numbers = new Map<number, number>()
        for(let x = 0; x < nums.length; x++){
            const diff = target - nums[x];

            if(numbers.has(diff)) return [numbers.get(diff), x]

            numbers.set(nums[x], x);
        }
    }
}
