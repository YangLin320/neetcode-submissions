class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let p1 = 0;
        let p2 = numbers.length - 1;

        while(numbers[p1] + numbers[p2] != target){
            let currentSum = numbers[p1] + numbers[p2];
            if(currentSum > target) p2--;
            else p1++;
        }
        return [p1 + 1, p2 + 1]
    }
}
