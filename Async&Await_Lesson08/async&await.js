function takeShower(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const shower = true;
            if(shower){
                console.log("I take shower");
                resolve("I took a shower");
            }else {
                reject("I didn't take a shower");
            }
            
        } , 3000);
    });
}

function doHomework(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const homework = false;
            if(homework){
                console.log("I do homework");
                resolve("I did homework");
            }else {
                reject("I didn't do homework");
            }
        }, 2000);
    });
}

function playGame(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const game = true;
            if(game){
                console.log("I play game");
                resolve("I played game");
            }else {
                reject("I didn't play game");
            }
        }, 1000);
    });
}

async function doAll(){
    try{
        await takeShower();
        await doHomework();
        await playGame();
    }catch(error){
        console.log(error)
    }
   
}

doAll();