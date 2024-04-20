import { familia } from './info.js';
var tablaSnoopy = document.getElementById('familia');
function crearTabla(familia) {
    var tbodySeries = tablaSnoopy.querySelector('tbody');
    if (!tbodySeries) {
        tbodySeries = document.createElement('tbody');
        tablaSnoopy.appendChild(tbodySeries);
    }
    var _loop_1 = function (perrillo) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bold\">".concat(perrillo.id, "</td>\n        <td style=\"color: rgb(36, 129, 211)\">").concat(perrillo.nombre, "</td>\n        <td>").concat(perrillo.primera_ap, "</td>");
        trElement.onclick = function () { crear_card(perrillo); };
        tbodySeries.appendChild(trElement);
    };
    for (var _i = 0, familia_1 = familia; _i < familia_1.length; _i++) {
        var perrillo = familia_1[_i];
        _loop_1(perrillo);
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
function crear_card(perrillo) {
    var cardContainer = document.getElementById('card');
    cardContainer.innerHTML = "\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"".concat(perrillo.linkIMG, "\" class=\"card-img-top img-fluid\" alt=\"").concat(perrillo.nombre, "\">\n      <div class=\"card-body\">\n        <h5>").concat(perrillo.nombre, "</h5>\n        <p>").concat(perrillo.infor, "</p>\n        <a href = ").concat(perrillo.link, ">").concat(perrillo.link, "</a>\n      </div>\n    </div>\n  ");
}
