const printMatrix = function (matrix, handle = _ => _) {
    console.log(matrix.map(element => element.map(handle).join('\t')).join('\n'))
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    if (nums.length < 2) { return false; }
    for (let i = 0; i < nums.length; i++) {
        const base = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const targ = nums[j];
            if (targ === base) { return true; }
        }
    }

    return false;
};

const containsDuplicatteX = (nums) => {
    if (nums.length < 2) { return false; }
    // for (let i = 0)
    return false;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    if (prices.length === 0) { return 0; }
    let sum = 0;
    let minp = prices[0];
    let maxp = prices[0];

    // for (let item of prices) {
    // for (let i = 0; i < prices.length; i++) {
    for (const item of prices) {
        // const item = prices[i];
        if (item < minp) {
            minp = item;
            maxp = item;
        }
        if (item > maxp) { maxp = item; }
        const profit = maxp - minp;
        // console.log(maxp, minp, profit)
        if (profit > 0) {
            minp = item;
            maxp = item;
            sum += profit;
        }
    }

    return sum;
};

const maxProfitX = (prices) => {
    if (prices.length === 0) { return 0; }
    let sum = 0;
    let minp = prices[0];
    let maxp = prices[0];
    for (const item of prices) {
        if (item < minp) {
            minp = item;
            maxp = item;

        }
        if (item > maxp) {
            maxp = item;
        }
        const profit = maxp - minp;
        if (profit > 0) {
            minp = item;
            maxp = item;
            sum += profit;
        }
    }
    return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let clear = new Set,
        waste = new Set
    for (let item of nums) {
        const c_flag = clear.has(item),
            w_flag = waste.has(item)
        // console.log(c_flag, w_flag)
        if (!c_flag && !w_flag) clear.add(item)
        else if (c_flag) {
            clear.delete(item)
            waste.add(item)
        }
    }
    return clear.entries().next().value[0]
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    return nums1.filter(v1 => (nums2.findIndex((v2, k) => {
        if (v2 == v1) {
            nums2[k] = null
            return true
        } else return false
    }) != -1))
};

var removeTthFromEnd = function (head, n) {
    let tgt = head,
        cur = 0
    for (let node = head; node.next != null; node = node.next) {
        if (++cur >= n) {
            pre = tgt
            tgt = tgt.next
        }

    }

}

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
var reverseList = function (head) {
    let node = new ListNode(head.val)
    node.next = reverseList(head.next)
    return node
};

/**
 * @param {number[]} digits
 * @return {number[] }
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1
        if (digits[i] === 10) digits[i] = 0
        else break
        if (i === 0) digits.unshift(1)
    }
    return digits
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let pStartZero, length = nums.length
    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            if (pStartZero == null) pStartZero = i
        } else if (pStartZero != null) {
            nums[pStartZero] = nums[i]
            nums[i] = 0
            ++pStartZero
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};

/**
 * @param {string[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let sieve = Array.from(Array(9), v => (Array(9).fill(0b000)))
    for (let i = 0; i < board.length; i++) {
        let row = board[i]
        for (let j = 0; j < row.length; j++) {
            let item = row[j]
            if (item == '.') continue
            let num = Number.parseInt(item.charAt(0)) - 1,
                block = Number.parseInt(i / 3) * 3 + Number.parseInt(j / 3)
            console.log('i:', i, '\tj:', j, '\tnum:', num, '\tblock:', block)
            if (sieve[i][num] & 0b010
                || sieve[num][j] & 0b100
                || sieve[block][num] & 0b001) {
                console.log('row:', sieve[i][num].toString(2),
                    '\tcol:', sieve[num][j].toString(2),
                    '\tblock:', sieve[block][num].toString(2))
                return false
            }
            sieve[i][num] |= 0b010
            sieve[num][j] |= 0b100
            sieve[block][num] |= 0b001
            printMatrix(sieve, val => val.toString(2))
        }
    }
    return true
};


const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", "8", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
// let test = isValidSudoku(board)


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const length = matrix.length
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            let tmp = matrix[j][length - 1 - i]
            matrix[j][length - 1 - i] = matrix[i][j]
            matrix[j][length - 1 - j] = tmp
        }
    }
    exchangeByCenter()
    exchangeByYAxis()
        (async () => { })()
    printMatrix(matrix)
};

let test = rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

// const nums = [4, 9, 5, 0, 0, 0, 6, 6]
// const matrix = [
//     [5, 1, 9],
//     [2, 4, 8],
//     [13, 3, 6],
// ]
// 5   1   9  |    13  2   5
// 2   4   8  |    3   4   1
// 13  3   6  |    6   8   9

// |0  -1|
// |1   0|

// |1 2 3|  |7 4 1|
// |4 5 6|->|8 5 2|
// |7 8 9|  |9 6 3|
// exchange(matrix[i][j], matrix[j][length - i - 1])
// (0,0) -> (0,length-0-1)
// (1,0) -> (0,length-1-1)
// (1,1) -> (1,length-1-1)
// (1,2) -> (2,length-1-1)
// 6   3   9
// 8   4   2
// 13  1   5

// 6   1   13
// 2   4   8
// 9   3   5

// let test = rotate(matrix)
// printMatrix(matrix)

console.log(test)
