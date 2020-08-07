//slice
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(0, 4);
console.log(part);
console.log(nums);

//splice
const removed = nums.splice(2, 3, 77);
console.log(removed);
console.log(nums);

// join 
console.log(nums);
const together = nums.join(" ")
console.log(together);
