class Personaje {
    constructor(public id: number, public nombre: string, public primera_ap: string,public anio:number) {
        //Lo dejo vacío porque TS entiende solo que los parámetros los debe poner como valores de atributos al instanciar
    }
}

export { Personaje };