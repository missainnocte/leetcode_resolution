import sys

class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        pass

class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.__min_stack__ :list[int] = [sys.maxsize]
        self.__value_stack :list[int] = []


    def push(self, x: int) -> None:
        if self.__min_stack__[-1] >= x:
            self.__min_stack__.append(x)
        self.__value_stack.append(x)


    def pop(self) -> None:
        pass


    def top(self) -> int:
        pass


    def getMin(self) -> int:
        pass



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()