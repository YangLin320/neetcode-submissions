class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numbers = new Set<number>();

        for(let x = 0; x < nums.length; x++){
            if(numbers.has(nums[x])) return true;
            numbers.add(nums[x]);
        }
        return false;

    }
}
