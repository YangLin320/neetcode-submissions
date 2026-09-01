class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        const sCount = new Map<string, number>();
        const tCount = new Map<string, number>();

        for(let x = 0; x < s.length; x++){
            sCount.set(s[x], (sCount.get(s[x]) ?? 0) + 1);
            tCount.set(t[x], (tCount.get(t[x]) ?? 0) + 1);
        }
        for(const [key, value] of sCount){
            if(tCount.get(key) !== value) return false;
        }
        return true;
    }
}
