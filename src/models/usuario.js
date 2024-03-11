// Modela el objeto usuario
export default class Usuario {

    constructor(nombre, apellido, username, email, videojuegofav ){
        this.nombre = nombre
        this.apellido = apellido
        this.username = username
        this.email = email
        this.videojuegofav = videojuegofav
    }

    toObject(){
        return{
            nombre: this.nombre,
            apellido: this.apellido,
            username: this.username,
            email: this.email,
            videojuegofav: this.videojuegofav,
        }
    }
}