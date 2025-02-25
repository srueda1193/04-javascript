console.log(90 === 90.0); // true
console.log(Number('125')); // 125
console.log(+'125'); // 125
console.log(Number.parseInt('50px')); // 50
console.log(Number.parseFloat('2.5')); // 2.5
console.log(Number.parseFloat('5.4')); // 5.4
console.log("========Number.isNaN37==========")
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("23")); // false
console.log(Number.isNaN(4 / 0)); // false
console.log("========isFinite==========")
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("23")); // false
console.log(Number.isFinite(4 / 0)); // false
console.log("=======isInteger==========")
console.log(Number.isInteger(30)); // true
console.log(Number.isInteger(30.0)); // true
console.log(Number.isInteger(30 / 0)); // false


console.log(Math.sqrt(49)); // 7
console.log(5 * 5); // 25
console.log(5 ** 2); // 25
console.log(8 ** (1 / 3)); // 2
console.log(Math.max(2, 10)); // 10
console.log(Math.min(2, 10)); // 2
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 3.141592653589793
console.log(Math.random()); // 0-1
console.log(Math.trunc(Math.random() * 10 + 1)); // 1-10

console.log("===========rounding==========")
console.log(Math.round(40.7)); // 40
console.log(Math.ceil(23.2)); // 24
console.log(Math.floor(23.7)); // 24 esto es para negativos también
// decimal redondeado
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3)); // 2.700
console.log((1.768).toFixed(2)); // 1.77
console.log((2.876).toFixed(2)); // 2.88
// Números grandes
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

const Persona = () =>{

    const isMale = () => {

    } 
}




export const numbers = () =>{

}