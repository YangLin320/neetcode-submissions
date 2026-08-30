class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans: number[] = [];

        for(let x: number=0; x < nums.length; x++){
            ans[x] = nums[x];
            ans[x + nums.length] = nums[x]; 
        }
        return ans;
    }
}
