import { Persona } from "./Persona";

export class Estudiante extends Persona{

    idMatricula;
    tieneUniforme;
    calificaciones;

    constructor(idMatricula, tieneUniforme, calificaciones, nombre, edad, estadoCivil){
        super(nombre, edad, estadoCivil);
        this.idMatricula = idMatricula;
        this.tieneUniforme = tieneUniforme;
        this.calificaciones = calificaciones;
    }

    estudiar(){

    };

    rendirExament(){

    };

}