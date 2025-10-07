const numbers1 = [1, 2];
const numbers2 = [ 6, 7, 8];

const allNumbers = [...numbers1, ...numbers2];

console.log(allNumbers); 

const obj1 = {first : 10 , second : 20};
const obj2 = {third : 30 , fourth : 40};

const allValues = {...obj1, ...obj2};
console.log(allValues);

//[] is used for arrays 
//{} is used for objects