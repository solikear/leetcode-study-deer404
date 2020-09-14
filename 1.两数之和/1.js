/*
 * @Author: 黄桂彬
 * @Date: 2020-09-14 10:34:16
 * @LastEditTime: 2020-09-14 10:51:06
 * @LastEditors: Please set LastEditors
 * @Description: 两数之和 暴力破解法
 * @FilePath: \1.两数之和\1.js
 */
// 查找数组中有无对应的差
// 因为要循环多遍数组 所以性能不太行
var twoSum = function(nums, target) {
    let indexs = [];
    nums.forEach((num,index) => {
        let gap = target - num;
        let numIndex = nums.indexOf(gap,index+1)
        if(numIndex != -1){
            indexs.push(index,numIndex)
        }
    });
    return indexs;
};
// console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));