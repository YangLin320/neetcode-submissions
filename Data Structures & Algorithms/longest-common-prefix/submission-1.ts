class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let pre : string = "";

        for(let i = 0; i < strs[0].length; i++){
            for(const strings of strs ){
                if(strings[i] != strs[0][i]) return pre;
            }
            pre = pre + strs[0][i];
            
        }
        return pre;
    }

}
