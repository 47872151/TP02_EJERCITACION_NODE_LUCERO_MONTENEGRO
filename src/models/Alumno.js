export  default class Alumno 
{
    constructor(user, DNI, edad) { 
    this.user = user;
    this.DNI = DNI;
    this.edad = edad;
    }

    getUser() {
        return this.user;
    }

    getDNI() {
        return this.DNI;
    }

    getEdad() {
        return this.edad;
    }

    toString(){
        return `user:${this.user}, DNI:${this.DNI}, edad:${this.edad}`;
    }
}