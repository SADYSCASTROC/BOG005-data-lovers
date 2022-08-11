import { countryData, genderData, medalData, dataFilter } from "./data.js";
//import data from './data/athletes/athletes.js';

/**Alertas de errores con ventana emergente */
//document.getElementById("decode").addEventListener("click", mialerta);

//function mialerta() {
///swal("Oops!", "Something went wrong on the page!", "error");

console.log(dataFilter("Colombia", "all", "all"));

//CREAR SELECT DE FILTRO DE PAISES
let optionsCountry = '<option selected value="all">Todos</option>';
for (const contry of countryData) {
  optionsCountry += '<option value="' + contry + '">' + contry + "</option>";
}

document.getElementById("selectCountry").innerHTML = optionsCountry;

//CREAR SELECT DE FILTRO DE GENEROS
let optionsGender = '<option selected value="all">Todos</option>';
for (const gender of genderData) {
  optionsGender += "<option value=" + gender + ">" + gender + "</option>";
}

document.getElementById("selectGender").innerHTML = optionsGender;

//CREAR SELECT DE FILTRO DE MEDALLAS
let optionsMedal = '<option selected value="all">Todos</option>';
for (const medal of medalData) {
  optionsMedal += "<option value=" + medal + ">" + medal + "</option>";
}

document.getElementById("selectMedal").innerHTML = optionsMedal;

//BOTON DE FILTRO
document.getElementById("filters").addEventListener("click", filterByCGM);

function filterByCGM() {
  let country = document.getElementById("selectCountry").value;
  let gender = document.getElementById("selectGender").value;
  let medal = document.getElementById("selectMedal").value;

  console.log(dataFilter(country, gender, medal));
  let data = dataFilter(country, gender, medal);

  //FROMA DE CREAR TABLAS
  let table =
    "<tr>" +
    "<th>Nombre</th>" +
    "<th>Genero</th>" +
    "<th>Deporte</th>" +
    "<th>País</th>" +
    "<th>Especialidad</th>" +
    "<th>Medalla</th>" +
    "</tr>";

  for (const reg of data) {
    //reg de registro
    let row = '<tr class="search"><td>';
    row += reg.name; //row = row + reg.name;
    row += "</td>";

    row += "<td>";
    row += reg.gender;
    row += "</td>";

    row += "<td>";
    row += reg.sport;
    row += "</td>";

    row += "<td>";
    row += reg.team;
    row += "</td>";

    row += "<td>";
    row += reg.event;
    row += "</td>";

    row += "<td>";
    row += reg.medal;
    row += "</td></tr>";

    table += row;
  }

  document.getElementById("tbl").innerHTML = table;
  document.getElementById("search").value = "";
  console.log(data);
}

//FILTRO DE BUSQUEDA
document.addEventListener("keyup", (evt) => {
  //keyup, oprimir y soltar una tecla
  if (evt.target.matches("#search")) {
    // target referencia al objeto al cual se lanzo el evento
    document.querySelectorAll(".search").forEach((row) => {
      row.textContent.toLowerCase().includes(evt.target.value.toLowerCase()) //operador de sigo
        ? row.classList.remove("filter") //no oculta
        : row.classList.add("filter"); //oculta
    });
  }
});

window.onload = filterByCGM; //carga la tabla al cargar la pagína por priemra vez
