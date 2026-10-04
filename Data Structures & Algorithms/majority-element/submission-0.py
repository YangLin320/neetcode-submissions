class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        mydict = defaultdict(int)
        for num in nums:
            mydict[num] += 1
        
        return max(mydict, key=mydict.get)
        

        