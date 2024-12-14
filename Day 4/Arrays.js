/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var secondLargest = 0
    var largest = 0
    
    for(let i = 0; i < nums.length; i++){
        if (nums[i] > largest){
            secondLargest = largest
            largest = nums[i]
        }
        else if(nums[i] > secondLargest && nums[i] < largest){
            secondLargest = nums[i]
        }
    }
    return secondLargest
}

