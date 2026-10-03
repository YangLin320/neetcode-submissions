class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longestString = ""
        for times in range(len(strs[0])):
            for each in strs:
                if(len(each) == times or each[times] != strs[0][times]):
                    return longestString
            longestString += strs[0][times]
        return longestString
