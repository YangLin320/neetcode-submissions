class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numbers = new Set<number>(nums);
        let longest = 0;

        for(const num of nums){
            if(!numbers.has(num-1)){
                let length = 0;
                while(numbers.has(num + length)) length ++;
                if(length>longest) longest = length;
            }
        }
        return longest;
    }
}
