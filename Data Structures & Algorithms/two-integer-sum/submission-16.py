class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numbers = {}

        for index,value in enumerate(nums):
            difference = target - value
            if difference in numbers:
                return [numbers[difference], index]
            numbers[value] = index

        