const arr1 = [1,2,3,4,5,6,7,8,9,10];

const [a,b, ...rest_args] = arr1; 
//rest operator is used to gather the remaining elements into an array

console.log(a);
console.log(b);
console.log(rest_args);

const obj1 = {one:10 , two:20 , three:30 , four:40 , five:50};

const {one , two : x , ...rest_objects} = obj1; //object destructuring
//two is renamed to x by two : x

console.log(one);
console.log(x);
console.log(rest_objects);