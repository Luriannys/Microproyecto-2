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

export const clubConverter = {
    toFirestore: (club) => {
        return {
            nombre: club.nombre,
            description: club.description,
            videojuegos: club.videojuegos
            };
    },
    
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Club(data.nombre, data.description, data.videojuegos);
    }
};
