// Modela el objeto club
export class Club {

    constructor(nombre, description, videojuegos){
        this.nombre = nombre
        this.description = description
        this.videojuegos = videojuegos
    }

    toObject(){
        return{
            nombre: this.nombre,
            description: this.description,
            videojuegos: this.videojuegos,
        }
    }
}