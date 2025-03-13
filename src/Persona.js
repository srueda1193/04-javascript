export class Persona {

    //Atributos
    #nombre; // publico  
    #edad; // privado
    #estadoCivil;

    //Constructor inicializar un objeto con los valores que se reciben
    constructor(nombre, edad, estadoCivil){

        this.#nombre = nombre;
        this.#edad = edad;
        this.#estadoCivil = estadoCivil;

    }

    //getters  obtener los datos fuera de la clase

    getEdad(){
        return this.#edad;
    }

    //setter cambiar los datos fuera de la clase
    setEdad(edad){
        // validar que el atributo cambie sin que me cause errores
        if(typeof(edad) === 'number'){
            this.#edad = edad;
        }
        
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    //metodos
    presentase(){
        return `hola, mi nombre es ${this.nombre} y tengo ${this.#edad}`;
    }

}
