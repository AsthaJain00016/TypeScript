// Type Narrrowing:-TypeScript provides a powerful feature called type narrowing that allows you to refine or narrow down the type of a variable within a certain block of code. This feature helps you write safer and more maintainable code by leveraging TypeScript's static type checking.

function getChai(kind: string | number){
    if(typeof(kind==='string')){
        return `Making ${kind} chai...`
    }

    return `Chai order: ${kind}`
}

function serverChai(msg?:string){
    if(msg){
        return `Serving ${msg}`;
    }

    return `Serving default masala chai`;
}


function orderChai(size:"medium" | "small" | "large" | number){
    if(size==="small"){
        return  `small cutting chai...`
    }
    if(size==="medium" || size==="large"){
        return `make extra chai`
    }

    return `chai order ${size}`
}

class kulhadChai{
    serve(){
        return `serving kulhad chai`
    }
}
class CuttingChai{
    serve(){
        return `serving cutting chai`
    }
}


function serve(chai:kulhadChai | CuttingChai){
    if(chai instanceof kulhadChai){
        return chai.serve()
    }

}

type ChaiOrder={
    type:string,
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj==="object" && obj !==null && typeof obj.type==='string' && typeof obj.sugar==="number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar}`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai={type:"Masala" ; spiceLevel:number}
type GingerChai={type:"Ginger" ; spiceLevel:number}
type ElaichiChai={type:"Elaichi" ; spiceLevel:number}

type Chai=MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai){
    switch(order.type){
        case "Masala":
            return "Masala Chai"
            break;
        case "Ginger":
            return "Ginger Chai"
            break;
        case "Elaichi":
            return "Elaichi Chai"
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){
        return `Masala Chai`
    }
}

// function isStringArray(arr:unknown): arr is string[]{

// }