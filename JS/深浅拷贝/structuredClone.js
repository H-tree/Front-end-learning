let tool = {name:'bicycle'}
let person = {name: 'hu', tool };
let man = structuredClone(person);
person.tool.name = 'car'
console.log(man) //{name: 'hu', {name:'bicycle'}}