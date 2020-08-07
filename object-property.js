const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 21, name: 'deepjol'},
    {id: 21, name: 'sabnur'},
    {id: 21, name: 'manna'}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 20);
console.log(bigger);