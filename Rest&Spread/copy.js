const arr1 = [1,2,3];
const arr2 = [...arr1];//copy arr1 to arr2

arr1[0] = 10;

console.log(arr1 , arr2);

const obj1 = {one:10 , two:20 , three:30};//copy obj1 to obj2
const obj2 = {...obj1};

obj1['one'] = 15;

console.log(obj1 , obj2);
