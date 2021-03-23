const async = require("async");


//  CALLBACKS

// var driftCar = () => {
//     ignition((err, res1) => {
//         console.log(res1);
//         driftMode((err, res2) => {
//             console.log(res2);
//             tractionControlOff((err, res3) => {
//                 console.log(res3);
//                 console.log("INSANE DRIFTING !!");
//             })
//         })
//     })
// }


//  ASYNC WATERFALL


//  passes on the value returned by the first function's callback and passes it to the next function in the array
const driftCar = () => {
    console.log("Starting drift sequence !!");

    async.waterfall([ignition, driftMode, tractionControlOff], (err, data) => {
        if(err){
            console.log(`Error in the Sequence : ${err}`);
        }
        else{
            console.log(data);
        }        
    })
}


var ignition = (callback) => {
    console.log("Turning ignition on !!");
    
    setTimeout(() => {
        console.log("Engine Firing up !!");
    }, 2000)

    console.log("Pistons are Firing !!");

    callback(null, "The car engine has started !!");
}

var driftMode = (ignitionData, callback) => {
    console.log(`${ignitionData} & Turning drift mode on !!`);

    setTimeout(() => {  
        console.log("Differential coming in play !!");
    },3000)

    callback(null, "The car can now drift but is restricted !!");
}

var tractionControlOff = (driftModeData, callback) => {
    console.log(`${driftModeData} Turning traction control off !!`);

    setTimeout(() => {
        console.log("Drift angle can be tweaked !!");
    }, 4000);

    console.log("Traction Control Off !!");

    callback(null, "Insane drifts can be performed !!")
}

driftCar()