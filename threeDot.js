const ages = [15, 16, 17, 18, 19, 20];
const ages2 = [25, 26, 27, 28, 29, 30];

const allAges = ages.concat(ages2);

const allAges2 = [...ages, ...ages2]

console.log(allAges);
console.log(allAges2);