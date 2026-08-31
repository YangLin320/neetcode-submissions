class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sCount = new Map<string, number>();
        const tCount = new Map<string, number>();

        if(s.length != t.length) return false;

        for(let x = 0; x < s.length; x++){
            sCount.set(s[x], (sCount.get(s[x])?? 0) + 1);
            tCount.set(t[x], (tCount.get(t[x])?? 0) + 1);
        }

        for (const [char, count] of sCount) {
            if (count !== tCount.get(char)) {
                return false;
            }
        }

        return true;
    }
}
