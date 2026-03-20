// Object oriented programming in typescript

// class Chai{
//     flavour:string;
//     price:number
//     constructor(flavour:string,price:number){
//         this.flavour=flavour;
//         this.price=price
//     }
// }

// const masalaChai=new Chai("masala",20)

// Access Modifiers
class Chai{
    public flavour:string="Masala"

    private secretIngredients="Cardamom" // accessible only within the class

    reveal(){
        return this.secretIngredients // ok
    }

    protected shopName="Chai corner" //accessible only within the class and in inherited classes only
}

class Shop{
    protected shopName="Chai"
}

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

class Walet{
    #balance=100  // private

    getBalance(){
        return this.#balance
    }
}

const w=new Walet()

class Cup{
    readonly capacity:number=250

    constructor(capacity:number){
        this.capacity=capacity
    }
}

const c=new Cup(200)

class ModernChai{
    private _sugar=2

    getSugar(){
        return this._sugar;
    }

    setSugar(value:number){
        if(value>5){
            throw new Error("Too Sweet")
        }

        this._sugar=value
    }
}

//  static members are associated with the class itself rather than any instance of the class. This means that you can access static members directly on the class without needing to create an instance of it.
class EkChai{
    static shopName="Chai code cafe"

    constructor(public flavour:string){

    }
}

console.log(EkChai.shopName);

abstract class Drink{
    abstract make():void
}

class MYChai extends Drink{
    make(): void {
        console.log("Brewing Chai")
    }
}


// composition
class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater:Heater){}
    make(){
        this.heater.heat
    }
}