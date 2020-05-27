/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((fst, scd) => fst > scd)
    // console.log(nums)
    let result = [],
        needZero = []
    for (let i = 0; nums[i] <= 0; i++) {
        // console.log(i > 0 && nums[i] === nums[i - 1])
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = nums.length - 1; nums[j] >= 0; j--) {
            if (i === j) continue
            // console.log(nums[i], nums[j])
            let pre = nums[i] + nums[j]
            if (pre > 0) {
                for (let k = i + 1; nums[k] < 0; k++) {
                    console.log(nums[i], nums[j], nums[k])
                    if (pre + nums[k] === 0) result.push([nums[i], nums[j], nums[k]])
                }
            } else if (pre < 0) {
                for (let k = j - 1; nums[k] > 0; k--) {
                    console.log(nums[i], nums[j], nums[k])
                    if (pre + nums[k] === 0) result.push([nums[i], nums[j], nums[k]])
                }
            } else {
                console.log(nums[i], nums[j])
                needZero.push([nums[i], nums[j]])
            }
        }
        if (nums[i] === 0) {
            result.push(...needZero.map(v => ([v[0], nums[i], v[1]])))
            break
        }
    }
    return result
};


let test = threeSum([0, 0, 0, 4, 2, -1, -56, 3, 3])