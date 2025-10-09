function takeShower(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("I take shower");
            resolve("I took a shower");
        } , 3000);
    });
}

function doHomework(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("I do homework");
            resolve("I did homework");
        }, 2000);
    });
}

function playGame(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("I play game");
            resolve("I played game");
        }, 1000);
    });
}

takeShower().then((result)=>{
    console.log(result);
    return doHomework();
}).then((result)=>{
    console.log(result);
    return playGame();
}).then((result)=>{
    console.log(result);
    console.log("All tasks are done");
})