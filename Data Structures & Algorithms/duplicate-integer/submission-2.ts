class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dups = new Set<number>();

        for(let i = 0; i < nums.length; i++){
            if(dups.has(nums[i])) return true;
            dups.add(nums[i]);
        }
        return false;
    }
}
