function wrapInArray<T>(item:T):T[]{
    return [item]
}

const m=wrapInArray("masala")
console.log(m)
wrapInArray(40)
const c=wrapInArray({flavor:"Ginger"})
console.log(c)

function pair<A,B>(a:A , b:B):[A,B]{
    return [a,b]
}

interface Box<T>{
    content:T
}

const newBox:Box<number>={content:10}
const newBox2:Box<string>={content:"10"}

interface ApiPromise<T>{
    status:number,
    data:T
}
