//normally javascript run synchronously

function oneTofive(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

console.log("Start");

setTimeout(oneTofive, 3000); //asynchronous function //after 3000 milliseconds it will call oneTofive function

for(let i=6 ; i<=100 ; i++){
    console.log(i);
}