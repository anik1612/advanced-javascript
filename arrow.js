//function expression
//ES6 new version modification

const doubleIt = num => num * 2;
const add = (x,y) => x+y;
const give5 = () => 5;
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const multi = sum * diff;
    return multi;
}
const result = doubleIt(5);
const result2 = add(5,5);
const result3 = give5();
const result4 = doMath(5,4);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);