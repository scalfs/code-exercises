/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const searchInsert = function(nums, target) {
    if(nums === null || nums.length === 0 || target === null) return 0;
    
    let left = 0;
    let right = nums.length - 1;
    
    if(target > nums[right]) return right + 1;
    if(target < nums[0]) return 0;
    
    while (left < right) {
        const pivot = left + Math.trunc((right - left) / 2);

        if (nums[pivot] == target) return pivot;

        if (target < nums[pivot]) right = pivot - 1;
        else left = pivot + 1;
    }
    
    // When pivot doesn't reach target
    return nums[left] < target ? left + 1: left
};