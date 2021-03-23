const async = require("async")


//  returns whatever is passed to the callbacks of the functions run parallely !!
var driftCar = () => {
    console.log("Starting drift sequence !!");  
    
    async.parallel([ignition, driftMode, tractionControlOff], (err, result) => {
        if(err){
            console.log(`err : ${err}`);
        }        
        else{
            console.log(`result : ${result}`);
        }
    })
}


var ignition = (callback) => {
    console.log("Turning ignition on !!");
    
    setTimeout(() => {
        console.log("Engine Firing up !!");
    }, 2000)

    console.log(" Pistons are Firing !!");

    callback(null, "The car engine has started !!");
}

var driftMode = (callback) => {
    console.log(`Turning drift mode on !!`);

    setTimeout(() => {  
        console.log("Differential coming in play !!");
    },3000)

    callback(null, "The car can now drift but is restricted !!");
}

var tractionControlOff = (callback) => {
    console.log(`Turning traction control off !!`);

    setTimeout(() => {
        console.log("Drift angle can be tweaked !!");
    }, 4000);

    console.log("Traction Control Off !!");

    callback(null, "Insane drifts can be performed !!")
}

driftCar()
    