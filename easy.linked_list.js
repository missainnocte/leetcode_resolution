/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let tgt = head,
        cur = 0,
        pre = head
    for (let node = head; node.next != null; node = node.next) {
        if (++cur >= n) {
            pre = tgt
            tgt = tgt.next
        }
    }
    if (pre != tgt) {
        pre.next = tgt.next
    } else {
        head = tgt.next
    }
    delete tgt
    return head
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let result = new ListNode()
    result.next = head
    return reverseList(head.next)
};
