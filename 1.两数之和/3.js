/*
 * @Author: 黄桂彬
 * @Date: 2020-09-14 10:34:16
 * @LastEditTime: 2020-09-14 11:24:10
 * @LastEditors: Please set LastEditors
 * @Description: 两数之和 一遍哈希法
 * @FilePath: \1.两数之和\2.js
 */

var twoSum = function(nums, target) {
    const prevNums = {}
    for(let i=0;i<nums.length;i++){
        const curNum = nums[i]
        const gapNum = target - curNum;
        const gapNumIndex = prevNums[gapNum];
        if(gapNumIndex !== undefined){
            return [gapNumIndex,i]
        }else{
            prevNums[curNum] = i;
        }
    }
};
console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([3,2,4],6));