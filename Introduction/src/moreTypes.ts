// Assertions

let response:any="42"

let numericLength:number=(response as string).length // forcefull type assertion

type Book={
    name:string
};

let bookString='{"name":"who moved my cheese"}'
let bookObject=JSON.parse(bookString) as Book

const inputElement=document.getElementById("username") as HTMLInputElement

let value:any

value="Chai"
value=[1,2,3]
value=2.5
value.toUpperCase()
let newValue:unknown

newValue="Chai"
newValue=[1,2,3]
newValue=2.5

if(typeof newValue==="string"){
    newValue.toUpperCase();
}

try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error",error)
}

type Role="admin" | "user"

function redirectBasedOnRole(role:Role):void{
    if(role==="admin"){
        console.log("Redirecting to admin dashboard")
        return
    }
    if(role==="user"){
        console.log("Redirecting to user dashboard")
        return
    }
    role;
}