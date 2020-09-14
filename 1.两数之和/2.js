/*
 * @Author: 黄桂彬
 * @Date: 2020-09-14 10:34:16
 * @LastEditTime: 2020-09-14 11:27:28
 * @LastEditors: Please set LastEditors
 * @Description: 两数之和 一遍哈希法
 * @FilePath: \1.两数之和\2.js
 */
// 在遍历中 一边存一边比较 哈希🐂！
// 最高打败了百分之93的人 ^^
var twoSum1 = function(nums, target) {
    let indexs = [];
    let map = new Map();
    nums.forEach((num,index) => {
        let gap = target - num;
        if(map.has(gap)){
            indexs.push(map.get(gap),index)
        }
        map.set(num,index);
    });
    return indexs;
};
var twoSum2 = function(nums, target) {
    let map = new Map();
    for(let i =0;i<nums.length;i++){
        let gap = target - nums[i];
        if(map.has(gap)){
            return [map.get(gap),i]
        }
        map.set(nums[i],i);
    }
};
console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([3,2,4],6));