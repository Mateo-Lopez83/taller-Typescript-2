var Personaje = /** @class */ (function () {
    function Personaje(id, nombre, primera_ap, anio) {
        this.id = id;
        this.nombre = nombre;
        this.primera_ap = primera_ap;
        this.anio = anio;
        //Lo dejo vacío porque TS entiende solo que los parámetros los debe poner como valores de atributos al instanciar
    }
    return Personaje;
}());
export { Personaje };
