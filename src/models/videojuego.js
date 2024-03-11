// Modela el objeto Videojuego
export default class Videojuego {

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