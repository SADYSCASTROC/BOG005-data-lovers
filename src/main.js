
import athletes from "./data/athletes/athletes.js";

//function mialerta() {
///swal("Oops!", "Something went wrong on the page!", "error");


import { dataFilter,countryData,genderData,medalData } from "./data.js";

 console.log(countryData(athletes));
// console.log(genderData(athletes));
// console.log(medalData(athletes));
// console.log(dataFilter(athletes));

//selc country
let optionsCountry="<option value=\"all\">Todos</option>";
for (const country of countryData(athletes)) {
  optionsCountry += '<option value="' + country + '">' + country + "</option>";
}
document.getElementById("selectCountry").innerHTML = optionsCountry;

//selc gender

let optionsGender = '<option value="all">Todos</option>';
for (const gender of genderData(athletes)) {
  optionsGender += '<option value="' + gender + '">' + gender + "</option>";
}
document.getElementById("selectGender").innerHTML = optionsGender;

//selec medal

let optionsMedal = '<option value="all">Todos</option>';
for (const medal of medalData(athletes)) {
  optionsMedal += '<option value="' + medal + '">' + medal + "</option>";
}
document.getElementById("selectMedal").innerHTML = optionsMedal;

document.getElementById("btn").addEventListener("click", orderByName);

function orderByName() {
  let btnValue = document.getElementById("btn").value;
  let order = "";/*inicializo la variable */
  if (btnValue == "1") {
    order = "1";
    document.getElementById("btn").value = "2";
  } else {
    order = "2";
    document.getElementById("btn").value = "1";
  }
  filterByCGM(order);
}



//tabla
document.getElementById("filters").addEventListener("click", filterByCGM);

function filterByCGM(order) {
  let country = document.getElementById("selectCountry").value;
  let gender = document.getElementById("selectGender").value;
  let medal = document.getElementById("selectMedal").value;
 
  let arrayData = dataFilter(athletes, country, gender, medal);
   console.log(arrayData);

  if (order == "1") {
    arrayData.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (order == "2") {
    arrayData.sort((a, b) => a.name.localeCompare(b.name)).reverse();
  }

  let table = "";

  for (const reg of arrayData) {
    let row = '<tr class="search"><td>';
    row += reg.name;
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
    row += "</td> </tr>";

    table += row;
  }
  document.getElementById("tbl").innerHTML = table;
  document.getElementById("search").value = "";

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

   console.log(table);
}
window.onload = filterByCGM("0");













 



  



