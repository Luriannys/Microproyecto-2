// Modela el objeto usuario
export class Usuario {

    constructor(nombre, apellido, username, email, videojuegoPref ){
        this.nombre = nombre
        this.apellido = apellido
        this.username = username
        this.email = email
        this.videojuegoPref = videojuegoPref
    }

    toObject(){
        return{
            nombre: this.nombre,
            apellido: this.apellido,
            username: this.username,
            email: this.email,
            videojuegoPref: this.videojuegoPref,
        }
    }
}