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
    
        let trElement: HTMLElement = document.createElement("tr");

        
        trElement.innerHTML = `<td style="font-weight: bold">${perrillo.id}</td>
        <td style="color: rgb(36, 129, 211)">${perrillo.nombre}</td>
        <td>${perrillo.primera_ap}</td>`;
        trElement.onclick = function() {crear_card(perrillo);};

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

function crear_card(perrillo:Personaje):void{
  
    let cardContainer = document.getElementById('card')!;
    cardContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${perrillo.linkIMG}" class="card-img-top img-fluid" alt="${perrillo.nombre}">
      <div class="card-body">
        <h5>${perrillo.nombre}</h5>
        <p>${perrillo.infor}</p>
        <a href = ${perrillo.link}>${perrillo.link}</a>
      </div>
    </div>
  `;
}