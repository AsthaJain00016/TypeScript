// Interface 

interface Chai{
    flavour:string,
    price:number,
    milk?:boolean
}

const masala:Chai={
    flavour:"Masala",
    price:30
}

interface Shop{
    readonly id:number,
    name:string
}

const s:Shop={
    id:1,
    name:"Chai"
}

interface DiscountCalculator{
    (price:number):number // function defination
}
const apply50:DiscountCalculator=(p)=>p*0.5 // function declaration

interface TeaMachine{
    start():void;
    stop():void
}

const machine:TeaMachine={
    start(){
        console.log("Start")
    },
    stop(){
        console.log("Stop")
    }
}

// index 
interface ChaiRatings{
    [flavour:string]:number
}

const ratings:ChaiRatings={
    masala:4.5,
    adarak:5
}

// Interface merge ho jaate hai
interface User{
    name:string
}
interface User{
    age:number
}

const u:User={
    name:"Astha",
    age:21
}

interface A{a:string}
interface B{b:string}
interface C extends A,B{}