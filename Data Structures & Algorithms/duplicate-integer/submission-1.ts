class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let dups: number[] = [];

        for(let x: number = 0; x < nums.length; x++){
            if(dups.includes(nums[x])) return true
            else{dups.push(nums[x])}
        }
        return false;
    }
}
