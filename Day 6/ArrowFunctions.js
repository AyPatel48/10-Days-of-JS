/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    var numbers = []
    for (let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            numbers[i] = nums[i] * 2
        }
        else{
            numbers[i] = nums[i] * 3
        }
    }
    return numbers
}