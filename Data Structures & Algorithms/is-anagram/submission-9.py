class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if(len(s) != len(t)):
            return False
        
        sMap = {}
        tMap = {}
        for times in range(len(s)):
            sMap[s[times]] = sMap.get(s[times],0) + 1
            tMap[t[times]] = tMap.get(t[times],0) + 1
        
        for x,y in sMap.items():
            if(tMap.get(x,0) != y):
                return False
        return True

        