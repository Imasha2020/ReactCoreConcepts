function sum(a , b , c)
{
    console.log(a+b+c);
}

const numbers = [1,2,3];
const obj = {first : 10 , second : 20 , third : 30};

sum(...numbers); //spread operator is used to spread the elements of array
sum(...Object.values(obj)); //spread operator is used to spread the values of object
