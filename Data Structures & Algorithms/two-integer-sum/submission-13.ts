class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const prevMap = new Map();

        for(let x = 0; x < nums.length; x++){
            const diff = target - nums[x];
            if(prevMap.has(diff)) return [prevMap.get(diff), x];
            prevMap.set(nums[x], x);
        }

    }
}
