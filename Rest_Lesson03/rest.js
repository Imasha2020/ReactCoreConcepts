const arr1 = [5,5,5,5,10,10,50];

function sum(...args)//rest operator is used to gather the arguments into an array
{
    let sum = 0;
    for(let arg of args)
    {
        sum += arg;
    }

    console.log(sum)
}

sum(...arr1);//spread operator is used to spread the elements of array