type ChaiOrder={type:string ; sugar:number ; strong:boolean}

function makeChai(order:ChaiOrder){
    console.log(order)
}

function serveChai(order:ChaiOrder){
    console.log(order)
}

// type TeaRecipe={
//     water:number;
//     milk:number
// }


// Converting TeaRecipe to interface
interface TeaRecipe{
    water:number;
    milk:number
}

class MasalaChai implements TeaRecipe{
    water=100;
    milk=50
}
// Class 'MasalaChai' incorrectly implements interface 'TeaRecipe'.
//  Type 'MasalaChai' is missing the following properties from type 'TeaRecipe': water, milkts(2420)

// Creating interface with hard coded values

// this is the example of union
interface CupSize{
    size:"small" | "large"
}


class Chai implements CupSize{
    size: "small" | "large"="large"  // literal types
}

// This is giving error we have to make it interface
// type Response={ok:true} | {ok:false}
// class myRes implements Response{
//     ok:boolean=true
// }


// this is the example of intersection
type BaseChai={teaLeaves:number}
type Extra={masala:number}

type masalaChai=BaseChai & Extra

const  cup: masalaChai={
    teaLeaves:2,
    masala:1
}

type User={
    username:string;
    bio?:string
}
const u1={
    username:"Astha"
}

const u2={
    username:"Astha",
    bio:"Hello"
}

type Config={
    readonly Appname:string;
    version:number
}

const cfg: Config={
    Appname:"Master",
    version:1
}