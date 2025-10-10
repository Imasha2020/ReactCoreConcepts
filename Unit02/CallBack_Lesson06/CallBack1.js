//Normally Callback function is used in Asynchronous programming

function openFile(callback){
    setTimeout(()=>{
        console.log("File Opened");
        callback();
    }, 3000);
}

function addSomething(){
    console.log("I am adding something to the file");
}

function removeSomething(){
    console.log("I am removing something from the file");
}

openFile(addSomething);
openFile(removeSomething);