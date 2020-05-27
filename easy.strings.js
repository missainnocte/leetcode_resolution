
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let ret = parseInt((x > 0 ? '' : '-') + Math.abs(x).toString().split('').reverse().join(''))
    if (ret > 2147483647 || ret < -2147483648) return 0
    else return ret
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    // let set = new Set()
    let barry = Array.from(Array(26), _ => 0),
        codea = 'a'.charCodeAt(0)
    for (let i in s) {
        let target = s.charCodeAt(i) - codea
        barry[target] = barry[target] == 0 ? i + 1 : -1
    }
    console.log(barry)
    for (let n of barry) {
        if (n != 0 && n != -1) return n - 1
        else continue
    }
    return -1
};

let test = firstUniqChar('lleetcode')

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let map = {}
    for (let item of s) {
        map[item] = map[item] == null ? 1 : map[item] + 1
    }
    for (let item of t) {
        if (map[item] == null) return false
        else {
            if (map[item] === 1) delete map[item]
            else map[item]--
        }
    }
    if (Object.keys(map).length === 0) return true
    else return false
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let origin = s.replace(/[\W_]/g, '').toLowerCase()
    return origin === origin.split('').reverse().join('')
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n, s = '1') {
    let ret = ''
    let flag = s.charAt(0)
    let num = 0
    for (let ch of s) {
        if (ch === flag) {
            num++
        } else {
            ret += (num.toString() + flag)
            flag = ch
            num = 1
        }
    }
    ret += (num.toString() + flag)

    console.log(ret)
    if (n === 1) return s
    else return countAndSay(n - 1, ret)
};

console.log(test)
