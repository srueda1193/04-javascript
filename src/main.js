// import { add, f, mult, sub } from './callback';
// import { myDate, onClickInterval } from './dates';
import { Persona } from './Persona';
// import { init } from './closure';
// import { numbers } from './numbers';
// import { addStudents, english, math } from './functions';
// import { mapFunction } from './map';
// import { setFunction } from './set';

// const days = ['monday', 'tuesday', 'wednesday', 'thursday',
//   'friday', 'saturday', 'sunday'];

// const restaurant = {
//   timeShift1: '8:00-16:00',
//   timeShift2: '16:00-00:00',
//   shiftsWorkers: [
//     ['Mike', 'James', 'John', 'Michael', 'William', 'David'],
//     ['Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Mark'],
//   ],
//   totalTipShift1: 4000,
//   totalTipShift2: 5000,
//   tipped: ['Mike', 'James', 'Michael', 'David', 'Thomas'],
//   date: '12/12/2021',
//   address: {
//     city: "NY",
//     street: "Arguban 6"
//   },
//   opendays: [days[0], days[3], days[4]]
// };

// const properties = Object.keys(restaurant);

// // setFunction();
// // mapFunction();

// const resultadoResta = f(1, 50, sub);
// const resultadoSuma = f(30, 50, add);

// const cambiarDato = () => {
//   console.log(cambiarDato)
// }

// addEventListener('onclick', cambiarDato);

// document.getElementById('button').addEventListener('click', onClickInterval);
// const inicializar = init(1,5);


const damaris = new Persona('damaris',27,'casada')
damaris.getEdad();
damaris.setEdad(28)
console.log(damaris.presentase());

const alvaro = new Persona('alvaro',30,'soltero')

console.log(alvaro.presentase());
const persona1 = new Persona('edwin',72,'casado')

console.log(persona1.presentase());