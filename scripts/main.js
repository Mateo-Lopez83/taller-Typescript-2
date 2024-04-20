import { familia } from './info.js';
var tablaSnoopy = document.getElementById('familia');
function crearTabla(familia) {
    var tbodySeries = tablaSnoopy.querySelector('tbody');
    if (!tbodySeries) {
        tbodySeries = document.createElement('tbody');
        tablaSnoopy.appendChild(tbodySeries);
    }
    for (var _i = 0, familia_1 = familia; _i < familia_1.length; _i++) {
        var perrillo = familia_1[_i];
        //Mi fila
        var trElement = document.createElement("tr");
        //Columnas
        trElement.innerHTML = "<td style=\"font-weight: bold\">".concat(perrillo.id, "</td>\n        <td style=\"color: rgb(36, 129, 211)\">").concat(perrillo.nombre, "</td>\n        <td>").concat(perrillo.primera_ap, "</td>");
        tbodySeries.appendChild(trElement);
    }
}
crearTabla(familia);
function promedio_anios(familia) {
    var trElement = document.createElement("tr");
    var tdElement = document.createElement("td");
    var sumaAnios = 0;
    familia.forEach(function (n) { return sumaAnios += n.anio; });
    var promedio = Math.floor(sumaAnios / familia.length);
    tdElement.colSpan = 3;
    tdElement.textContent = "Promedio de a\u00F1os de aparici\u00F3n: ".concat(promedio);
    trElement.appendChild(tdElement);
    tablaSnoopy.appendChild(trElement);
}
promedio_anios(familia);
