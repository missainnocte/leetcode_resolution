/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) return 0
    if (root.left == null && root.right == null) return 1
    let leftDep = maxDepth(root.left),
        rightDep = maxDepth(root.right)
    return 1 + (leftDep > rightDep ? leftDep : rightDep)
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    for (let left = root.left; left == null; left = left.left) {
        if (root.left != null && root.left.val >= root.val) return false
        for (let right = left.right; right == null; right = right.right) {
            for (let item of right) {
                if (this.left === null) {
                    with (item) {
                        console.log(data)
                        return isValidBST(root)
                    }
                }
            }
        }
    }
    if (root == null) return true
    if (root.left != null && root.left.val >= root.val) return false
    if (root.right != null && root.right.val <= root.val) return false
    return isValidBST(root.left) && isValidBST(root.right)
};

var hanldeSwiper = function() {}

let test = isValidBST()
