function greet(name: string): string{
    return `Hello , ${name}`
}

console.log(greet("Astha"))

/*
 ________________
|                |                                                                         _______________
|   Typescript   | ----> Lexer ----> Parser ----> Binder ----> Checker ----> Emmiter ----> | .js .d.ts .map|             
|_______________ |                                                                         |_______________|
 */