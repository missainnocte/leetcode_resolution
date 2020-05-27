#include "utils.h"

// No.1138@20200414
class Solution {
 public:
  string alphabetBoardPath(string target) {
    string result = "";
    return result;
  }

  int maximalSquare(vector<vector<char>>& matrix) { return 1; }

  // No.69@20200509
  int mySqrt(int x) {}

  // No.50@20200511
  double myPow(double x, int n) {}

  // No.102@20200513
  vector<vector<int>> levelOrder(TreeNode* root) {
    // initlize val data
    vector<vector<int>> result = vector<vector<int>>();
    if (!root) return result;
    // initlize level vector
    list<list<TreeNode>> levels = list<list<TreeNode>>();
    list<TreeNode> first = list<TreeNode>();
    first.push_back(*root);
    levels.push_back(first);
    for (auto level : levels) {
      auto next_level = list<TreeNode>();
      auto val_vector = vector<int>();
      for (auto i : level) {
        if (i.left) next_level.push_back(*i.left);
        if (i.right) next_level.push_back(*i.right);
        val_vector.push_back(i.val);
      }
      result.push_back(val_vector);
      if (next_level.size() > 0) levels.push_back(next_level);
    }
    return result;
  }

  // No.136@20200514
  int singleNumber(vector<int>& nums) {
    auto clear = unordered_set<int>(), waste = unordered_set<int>();
    for (auto item : nums) {
      const auto c_flag = clear.find(item) != clear.end(),
                 w_flag = waste.find(item) != waste.end();
      if (!c_flag && !w_flag)
        clear.insert(item);
      else if (c_flag) {
        clear.erase(item);
        waste.insert(item);
      }
    }
    return *clear.begin();
  }

  // No.560@20200515
  int subarraySum(vector<int>& nums, int k) {
    int result = 0, sum = 0;
    auto map = unordered_map<int, int>();
    map[0] = 1;
    for (auto i : nums) {
      sum += i;
      if (map[sum - k]) result += map[sum - k];
      map[sum] = map[sum] ? map[sum] + 1 : 1;
    }
    return result;
  }

  // No.25@20200516
  ListNode* reverseKGroup(ListNode* head, int k) {
    int count = 0;
    ListNode *result, *group_start = head, *group_end, *cut_start, *cut_end;
    for (auto i = head; i != NULL; i = i->next) {
      count++;
      if (count % k == 1) group_start = i;
      if (count % k == 0) {
        group_end = i;
        ListNode *cur, *pre = new ListNode(group_end->val), *start = pre;
        for (auto j = group_start->next; j != group_end; j = j->next) {
          cur = new ListNode(j->val);
          cur->next = pre;
          pre = cur;
        }
        if (result && cut_end) {
          cut_end->next = cut_start = cur;
          cut_end = start;
        } else {
          result = cut_start = cur;
          cut_end = start;
        }
      }
    }
    return result;
  }

  int findTheLongestSubstring(string s) {
    // [a, e, i ,o, u]
    int vowels[5] = {0, 0, 0, 0, 0};
    // dont repeat yourself
    for (auto i = s.begin(); i != s.end(); ++i) {
    }
  }

  // No.105@20200522
  TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    if (preorder.size() == 0) return nullptr;
    TreeNode* result;
    auto i = preorder.begin(), j = inorder.begin();
    buildTree(vector<int>(&preorder[0], &preorder[1]),
              vector<int>(&inorder[0], &inorder[1]));

    return result;
  }

  // No.76@20200523
  string minWindow(string s, string t) {}

  // No.4@20200524
  double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    int mid_1 = nums1.size() / 2, mid_2 = nums2.size() / 2;
    int left_1, left_2, right_1, right_2;
    if (mid_1) {
      left_1 = nums1.at(mid_1);
      right_1 = nums1.at(mid_1 + 1);
    }
    if (mid_2) {
      left_2 = nums2.at(mid_2);
      right_2 = nums2.at(mid_2+1);
    }
  }
};

// No.105@20200512
class MinStack {
 private:
  stack<int>* _minStack;
  stack<int>* _valueStack;

 public:
  /** initialize your data structure here. */
  MinStack() {
    _minStack = new stack<int>;
    _minStack->push(INT_MAX);
    _valueStack = new stack<int>;
  }

  void push(int x) {
    auto _min = _minStack->top();
    if (_min >= x) {
      _minStack->push(x);
    }
    _valueStack->push(x);
  }

  void pop() {
    auto delCache = _valueStack->top();
    if (delCache == _minStack->top()) _minStack->pop();
    _valueStack->pop();
  }

  int top() { return _valueStack->top(); }

  int getMin() { return _minStack->top(); }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */

int main() {
  Solution sl = Solution();
  ListNode* test;
  for (int item : vector<int>({1, 2, 3, 4, 5})) {
    if (test)
      test->next = new ListNode(item);
    else
      test = new ListNode(item);
  }
  cout << sl.reverseKGroup(test, 2);
}
