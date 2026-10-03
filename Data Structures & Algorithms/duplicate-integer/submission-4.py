class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        numbers = {}

        for each in nums:
            if each in numbers:
                return True
            numbers.update({each: 1})
        return False
        