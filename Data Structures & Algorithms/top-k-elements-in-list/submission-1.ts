class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numbers : Map<number, number> = new Map();
        for(let num of nums){
            numbers.set(num, 1 + (numbers.get(num) || 0));
        }

        const arr = new Map([...numbers.entries()].sort((a,b) => b[1] - a[1]));

        return Array.from(arr.keys()).slice(0,k);
    }
}
