//map

const numbers = [1, 4, 9];
let roots = numbers.map(num => Math.sqrt(num));
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


//Filter
const words = ['spray', 'limit', 'elite',
    'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);


const arr = [-3, -2, -1, 0, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return num > 1;
}
console.log(arr.filter((num) => { isPrime(num) })); // [2, 3, 5, 7, 11, 13]Ï


//Reduce

const arry = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 1 + 2 + 3 + 4
console.log(arry.reduce(reducer));
// resultado esperado: 10
// 5 + 1 + 2 + 3 + 4
console.log(arry.reduce(reducer, 5));
// resultado esperado: 15


//Find

arry.find(element => element > 2);
//

//find index

arry.findIndex(element => element > 2);


//Some

const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = val => val % 2 === 0;
console.log(arr.some(element => even(element)));
// expected output: true