function makeChai(type:string , cups:number){ // tells what types of values does the function accepts
    console.log(`Making ${cups} cups of ${type} Chai`)
}

function getChaiPrice():number{ // this tells what type of data the function will return
    return 25;
}

function logChai():void{
    console.log("Chai is ready")
}

// optional parameter
// function orderChai(type?:string){

// }

// default parameter
function orderChai(type:string="Masala"){

}

function createChai(order:{
    type:string;
    sugar:number;
    size:"small" | "large"
}):number{
    return 4
}