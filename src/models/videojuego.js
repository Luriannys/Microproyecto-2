// Modela el objeto Videojuego
export class Videojuego {

    constructor(title, genero, description){
        this.title = title
        this.genero = genero
        this.description = description
    }

    toObject(){
        return{
            title: this.title,
            genero: this.genero,
            description: this.description
        }
    }
}