class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0
        for times in range(len(nums)):
            if(nums[times] != val):
                nums[k] = nums[times]
                k+=1
        return k