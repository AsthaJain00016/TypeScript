const chai={
    name:"Masala Chai",
    price:20,
    isHot:true
}

let tea:{
    name:string;
    price:number;
    isHot:boolean
}

tea={
    name:"Ginger",
    price:25,
    isHot:true
}

type Tea={
    name:string;
    price:number;
    ingredients:string[]
}

const adrakChai:Tea={
    name:"Adarak Chai",
    price:25,
    ingredients:["Ginger","Tea leaves"]
}
// if it looks like a duck , it walks like a duck , it might be a duck
type Cup={size:string};
let smallCup:Cup={size:"200ml"}

let bigCup={size:"500ml", material:"Steel"}
smallCup=bigCup

type Brew={brewTime:number}
const coffee={brewTime:5,beans:"Arabica"}
const chaiBrew:Brew=coffee;

// split out the datatypes
type Item={name:string,quantity:number}
type Address={street:string,pin:number}

type Order={
    id:string;
    items:Item[];
    address:Address
}

type Chai={
    name:string;
    price:number;
    isHot:boolean
}

const updateChai=(updates:Partial<Chai>)=>{ // Partial makes all values optional
    console.log("Updating chai with ",updates)
}

updateChai({price:25})
updateChai({isHot:false})
updateChai({})

type ChaiOrder={
    name?:string;
    quantity?:number
}
const placeOrder=(order:Required<ChaiOrder>)=>{
    console.log(order)
}

placeOrder({name:"Ginger", quantity:25})

type  chai={
    name:string,
    price:number,
    isHot:boolean,
    ingredients:string[]
}

type BasicChaiInfo=Pick<chai,"name" | "price">;

const chaiInfo:BasicChaiInfo={
    name:"Lemon",
    price:30
}

type  newChai={
    name:string,
    price:number,
    isHot:boolean,
    secretIngredients:string
}

type PublicChai=Omit<newChai,"secretIngredients">