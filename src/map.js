
export const mapFunction = () => {

    const map1 = new Map();

    map1.set('a', 1);
    map1.set('b', 2);
    map1.set('c', 3);
    map1.set('d', 4);

    map1.set('a', 100);
    map1.delete('d');


    // const contacts = new Map();
    // contacts.set('Jessie', { phone: "213-555-1234", address: "123 N 1st Ave" });
    // contacts.has('Jessie'); // true
    // contacts.get('Hilary'); // undefined
    // contacts.set('Hilary', { phone: "617-555-4321", address: "321 S 2nd St" });
    // contacts.get('Jessie'); // { phone: "213-555-1234", address: "123 N 1st Ave" }
    // contacts.delete('Raymond'); // false
    // contacts.delete('Jessie'); // true
    // console.log(contacts.size); // 1

    // // Usando el objeto map
    // const myMap = new Map();
    // const keyString = 'a string';
    // const keyObj = {};
    // const keyFunc = function () { };

    // // configurando los valores
    // myMap.set(keyString, "valor asociado con ' string'");
    // myMap.set(keyObj, 'valor asociado con keyObj');
    // myMap.set(keyFunc, 'valor asociado con keyFunc');
    // myMap.size; // 3

    // console.log(myMap);

    // console.log(myMap.get(keyObj));
    // console.log(myMap.get({}));

    // console.log(myMap.get(keyString));
    // console.log(myMap.get('a string'));


    // myMap.set(NaN, 'not a number');
    // myMap.get(NaN);

    const myMap = new Map();
    myMap.set(0, 'zero');
    myMap.set(1, 'one');


    for (const [key, value] of myMap) {
        console.log(key + ' = ' + value);
    }// 0 = zero// 1 = one

    for (const key of myMap.keys()) {
        console.log(key);
    }// 0// 1

    for (const value of myMap.values()) {
        console.log(value);
    }// zero// one

    for (const [key, value] of myMap.entries()) {
        console.log(key + ' = ' + value);
    } // 0 = zero// 1 = one

    const kvArray = [['key1', 'value1'], ['key2', 'value2']];

    const mapFromArray = new Map(kvArray);

    console.log(mapFromArray);

    const myNewArray = Array.from(mapFromArray);
    console.log(myNewArray);

    // const mapClone = new Map(mapFromArray);
    const mapClone = mapFromArray;

    console.log(mapClone);

    console.log(mapFromArray === mapClone);

    const first = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three']
    ]);

    const second = new Map([
        [1, 'uno'],
        [2, 'dos']
    ]);

    const third = new Map([...first, ...second]);

    console.log(third);



}