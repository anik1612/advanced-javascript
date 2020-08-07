const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}


map 
function square(element) {
    return element * element;
}

const square = element => element * element;
const square = x => x * x;

const result = numbers.map(function (element) {
    return element * element;
    // console.log(element)
})

const result = numbers.map(x => x * x)

console.log(result);


filter
const bigger = numbers.filter(x => x > 5);

const find = numbers.find(x => x > 5)
 
console.log(find);

foreach
const days = ['mon', 'sun', 'tue', 'wed', 'thr', 'fri', 'sat']

// console.log(days[0]);

days.forEach(function(day, index){
    console.log(day, index)
})

const arr = [10, 20, 30, 40, 50];

arr.forEach(function(num, index){
    console.log(num, index);
})

//arrow function
const result = (x) => x * x;

console.log(result(5));

//square a number using foreach
let arr = [10, 20, 30, 40, 50];
const arrCpy = [];

arr.forEach(function(x){
    arrCpy.push(x*x);
})

arr.forEach(x => arrCpy.push(x*x));

console.log(arrCpy)

arr.forEach(x => arrCpy.push(x*x));
console.log(arrCpy);

const result = arr.map(x => x*x);
console.log(result);
