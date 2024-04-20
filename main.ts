import { familia } from './info.js';
import { Personaje } from './personaje.js';

const tablaSnoopy: HTMLElement = document.getElementById('familia')!;
function crearTabla(familia: Personaje[]): void {
    let tbodySeries: HTMLElement | null = tablaSnoopy.querySelector('tbody');
    if (!tbodySeries) {
        tbodySeries = document.createElement('tbody');
        tablaSnoopy.appendChild(tbodySeries);
    }

    for (let perrillo of familia) {
        //Mi fila
        let trElement: HTMLElement = document.createElement("tr");

        //Columnas
        trElement.innerHTML = `<td style="font-weight: bold">${perrillo.id}</td>
        <td style="color: rgb(36, 129, 211)">${perrillo.nombre}</td>
        <td>${perrillo.primera_ap}</td>`;

        tbodySeries.appendChild(trElement);
    }
}

crearTabla(familia);

function promedio_anios(familia: Personaje[]):void{
    let trElement: HTMLElement = document.createElement("tr");
    let tdElement: HTMLTableCellElement = document.createElement("td");

    let sumaAnios: number = 0;
    familia.forEach(n=> sumaAnios+=n.anio);
    let promedio: number =Math.floor(sumaAnios / familia.length);
    tdElement.colSpan = 3;
    tdElement.textContent = `Promedio de años de aparición: ${promedio}`;

    trElement.appendChild(tdElement);
    tablaSnoopy.appendChild(trElement);

}
promedio_anios(familia);
