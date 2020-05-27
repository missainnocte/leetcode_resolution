from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        pass

    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) is 0:
            return 0
        ret = 0
        minp = prices[0]
        maxp = prices[0]
        for item in prices:
            if item < minp:
                minp = item
                maxp = item
            if item > maxp:
                maxp = item
            profit = maxp - minp
            if profit > 0:
                minp = item
                maxp = item
                ret += profit
        return ret

    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return [i for i in nums1 for j in nums2 if i is j]

if __name__ == "__main__":
    Solution().removeDuplicates([1])