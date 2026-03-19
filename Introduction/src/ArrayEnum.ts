const chaiFlavours:string[]=["Masala","Adarak"]
const price:number[]=[20,30]
const rating: Array<number>=[4.5,5.0]

// Array of objects

type Chai={
    name:string;
    price:number
}

const menu:Chai[]=[
    {name:"Masala",price:15},
    {name:"adarak",price:20}
]

// Read only arrays
const cities: readonly string[]=["Delhi","Jaipur"]

// Multidimensional arrays

const table:number[][]=[
    [1,2,3],
    [2,4,6  ]
]

// Tuples
let chaiTuple:[string,number]
chaiTuple=["Masala",20]

// Readonly tuple
const location: readonly[number,number]=[25.6,53]

// named tuple
const chaiItems:[name:string,price:number]=["Masala",25]

// Enums
enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size=CupSize.LARGE

enum Status{
    PENDING=100, // agar ik ko value  di hai to sbko do agar nhi doge toh vo automatically incremental values lelega
    SERVED, // 101 lelega
    CANCELLED // 102 lelega
}

enum ChaiType{
    MASALA="masala",
    GINGER="ginger"
}

function makeChai(type:ChaiType){
    console.log(`Making ${ChaiType}`)
}

makeChai(ChaiType.GINGER)

enum RandomEnums{
    id=1,
    name="Chai"
}

const enum Sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}