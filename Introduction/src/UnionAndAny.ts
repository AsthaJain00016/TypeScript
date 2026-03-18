// Union and Any
let subs:number | string=10  // this is union

let apiRequest: 'pending' | 'success' | 'error'='pending'

// apiRequest="astha" // This is wrong

// apiRequest='success' // This is correct

const orders=['10', '20', '30', '40']

let currentOrder:string | undefined;

for (let order of orders){
    if(order==='20'){
        currentOrder=order
        break;
    }
}

console.log(currentOrder)