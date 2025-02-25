export class Persona {

    //Atributos

    nombre;
    #edad;
    estadoCivil;


    //metodos

    //Constructor

    constructor(nombre, edad, estadoCivil){

        this.nombre = nombre;
        this.#edad = edad;
        this.estadoCivil = estadoCivil

    }

    //getters

    getEdad(){
        return this.#edad;
    }

    //setter
    setEdad( edad){
        this.#edad = edad;
    }
    //metodos
    presentase(){
        return `hola, mi nombre es ${this.nombre} y tengo ${this.#edad}`;
    }


}
