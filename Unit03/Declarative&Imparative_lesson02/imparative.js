const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (let i=0; i< numbers.length; i++) 
    {
        if(numbers[i]%2 === 0)
        {
            evenNumbers.push(numbers[i]);
        }
    }

    console.log(evenNumbers);

// 5 === '5'   // false  (number vs string — types differ)
// 5 == '5'    // true   (string '5' is converted to number 5)

// === checks whether two values are exactly the same, without converting their types.

// == (the loose equality operator) converts types automatically before comparing,