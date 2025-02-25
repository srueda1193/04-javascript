// Set

export const setFunction = () => {

    const myArray = [1, 2, 4, 4, 5, 5, 6, 7, 8, 9, 1];
    myArray.sort();
    console.log(myArray);

    const mySet = new Set(myArray);
    // console.log(mySet);

    mySet.add(10);
    // console.log(mySet);

    console.log(mySet.has(12));

    mySet.has(1); // true
    mySet.has(3); // false, ya que el 3 no ha sido agregado al set
    mySet.has(5); // true
    mySet.has(Math.sqrt(25)); // true
    mySet.has('Some Text'.toLowerCase()); //false

    mySet.delete(5);
    console.log(mySet);
    console.log(mySet.size);



    const text = 'India';
    const mySet2 = new Set(text); // Set(5) { 'I', 'n', 'd', 'i', 'a' }
    mySet2.size; // 5

    const firefox = 'firefox'
    //sensible a mayúsculas y minúsculas y omisión de duplicados
    new Set("Firefox"); // Set(7) { "F", "i", "r", "e", "f", "o", "x" }
    const firefoxSinFRepetida = new Set(firefox); // Set(6) { "f", "i", "r", "e", "o", "x" }
}