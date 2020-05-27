#include <iostream>
#include <list>
#include <vector>

class Solution {
 public:
  int removeDuplicates(vector<int> &nums) {
    int dup;
    for (auto item = nums.begin(); item.next(); item = item.next()) {
      if (*item != dup) {
        dup = *item;
      } else {
        nums.erase(item);
      }
    }
    return nums.size();
  }

  int maxProfit(vector<int> &prices) {
    if (prices.length == 0) return 0;
  }
};