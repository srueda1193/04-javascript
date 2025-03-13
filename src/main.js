// import { add, f, mult, sub } from './callback';
// import { myDate, onClickInterval } from './dates';
import { details } from './async-js';
import { Estudiante } from './Estudiante';
import { Persona } from './Persona';
// import { init } from './closure';
// import { numbers } from './numbers';
// import { addStudents, english, math } from './functions';
// import { mapFunction } from './map';
// import { setFunction } from './set';
import { User } from './User';

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


// objecto = //instancia de una clase
const damaris = new Persona('damaris', 27, 'casada');

damaris.getEdad();
damaris.setEdad(28);
// console.log(damaris.presentase());

const alvaro = new Persona('alvaro', 30, 'soltero')

// console.log(alvaro.presentase());
const persona1 = new Persona('edwin', 72, 'casado')

// console.log(persona1.presentase());

const estudiante = new Estudiante(12345, false, [10, 9, 7, 10], 'Alex', 33, 'Casado');

// console.log(estudiante.getEdad());

//Abstraccion
//Tomar solo los atributos y metodos necesarios segun corresponda el caso

//Encapsulalcion
//Controlar lo que se muestra fuera de la clase 
// y la manera en que se modifican los atrubitos internos

//Herencia
// Estudiante ES una Persona -> herencia
// Usuario ES una Persona -> herencia
// Persona ES una Estudiante?? -> No hay herencia

//Pasar todos los atributos y metodos de una clase padre a una clasee hijo

//Poliformismo


class Vehiculo {

    moverse() {
        return 'el vehiculo se mueve';
    }
}

class Carro extends Vehiculo {
    moverse() {
        return 'el vehiculo se mueve 120km/h';
    }
}

class Moto extends Vehiculo {
    moverse() {
        return 'el vehiculo se mueve 100km/h';
    }
}

class Bicicleta extends Vehiculo {
    moverse() {
        return 'el vehiculo se mueve 30km/h';
    }
}

const carro = new Carro();
const bicicleta = new Bicicleta();
const vehiculo = new Vehiculo();

// console.log(carro.moverse());
// console.log(bicicleta.moverse());
// console.log(vehiculo.moverse());

// const button = document.getElementById('button');
// button.addEventListener('click', details)

function renderCountry(data) {
    // console.log(data);
    document.getElementById("flag").setAttribute('src', data.flags.png);
    document.getElementById("region").innerHTML = data.region;
    document.getElementById("population").innerHTML = data.population;
    document.getElementById("language").innerHTML = data.languages.spa;
    // document.getElementById("currency").innerHTML = data.currencies[0].name;
}

function getCountry(name) {
    const request = fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            renderCountry(data[0]);
        });
}


async function getCountryAsync(name) {
    const request = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const response = await request.json();
    const data = await response[0];

    renderCountry(data);
}

// getCountry('panama');
// getCountryAsync('panama');


const arr = [7,2,5,6,4];

const ordenar = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


// ordenar(arr);


const factorial = (n) =>{
    // console.log(n)
    //caso base
    if(n === 1){
        return n;
    }

    return factorial(n-1) * n;

}
// console.log(factorial(3));




// localStorage.setItem('nombre', 'Sebastian');

const verifySession = () => {
    const user = localStorage.getItem('actualuser');
    console.log(user);
    if( user == null){
        window.location.href = "./login";
    }

    //redirigir al home de la aplicacion
}


// verifySession();

const usuario = new User('admin', 'admin@mail.com', '12345', 'admin', 'super', '10-03-1996');

console.log(usuario);

let usuarios = [usuario];

console.log(usuarios)

localStorage.setItem('usuariosList', JSON.stringify(usuarios))


const register = () => {
//verificar los datos

    const newUser = new User('pepito', 'pepito@mail.com','12345', 'pepito','perez', '08-06-1995');
    usuarios = [...usuarios, newUser]
    localStorage.setItem('usuariosList', JSON.stringify(usuarios))
}

register();

const login = (email, password) => {
    const usuarios = JSON.parse(localStorage.getItem(usuariosList));
    const usuario = usuarios.find((usuario) => usuario.email === email);

    if(usuario && usuario.email === email && usuario.password === password){
        //Redigir a la pantalla de home
    }
    //Perdile al usuario que ingrese un usuario que exista o que se registre
    
}