class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const noSpaces: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let startPointer = 0;
        let endPointer = noSpaces.length - 1;

        while(startPointer < endPointer){
            if(noSpaces[startPointer] != noSpaces[endPointer]) return false;
            startPointer ++;
            endPointer --;
        }
        return true;
        
    }
}
