//import { countryData, genderData, medalData, dataFilter } from "./data.js";
//import data from './data/athletes/athletes.js';


//function mialerta() {
///swal("Oops!", "Something went wrong on the page!", "error");


import { dataFilter,countryData,genderData,medalData } from "./data.js";

console.log(countryData());
console.log(genderData());
console.log(medalData());

//selc country
let optionsCountry="<option value=\"all\">Todos</option>";
for (const country of countryData()) {
  optionsCountry += '<option value="'+country+'">'+country+'</option>';

}
document.getElementById("selectCountry").innerHTML = optionsCountry;

//selc gender

let optionsGender = '<option value="all">Todos</option>';
for (const gender of genderData()) {
  optionsGender += '<option value="' + gender + '">' + gender+ "</option>";
}
document.getElementById("selectGender").innerHTML = optionsGender;

//selec medal

let optionsMedal = '<option value="all">Todos</option>';
for (const medal of medalData()) {
  optionsMedal += '<option value="' + medal+ '">' + medal + "</option>";
}
document.getElementById("selectMedal").innerHTML = optionsMedal;

document.getElementById("filters").addEventListener("click", filterByCGM);

//ordenar az
// let arrayOrdenar=dataFilter();
// Array.sort(arrayOrdenar);
// for ( let i = 0; i < arrayOrdenar.length;i++)
//  console.log(arrayOrdenar);


   
//   let optionsOrdenar = '<option value="all">Todos</option>';
//  for (const ordenador of arrayOrdenar) {
//    optionsOrdenar += '<option value="' + ordenador+ '"> '+ "</option>";
//  }
  

// document.getElementById("selecTa-z").innerHTML=optionsOrdenar;
//  document.getElementById("odenar").addEventListener("click",arrayOrdenar);

//tabla
function filterByCGM(){
  let country = document.getElementById("selectCountry").value;
  let gender = document.getElementById("selectGender").value;
  let medal = document.getElementById("selectMedal").value;
  let arrayData = dataFilter(country, gender, medal);
  let table = "";
  for (const reg of arrayData) {
    let row = "<tr class=\"search\"><td>";
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
  document.addEventListener("keyup", (evt) => {//keyup, oprimir y soltar una tecla
    if (evt.target.matches("#search")) {// target referencia al objeto al cual se lanzo el evento
      document.querySelectorAll(".search").forEach((row) => {
        row.textContent.toLowerCase().includes(evt.target.value.toLowerCase()) //operador de sigo
          ? row.classList.remove("filter") //no oculta
          : row.classList.add("filter"); //oculta
      });
    }
  });

  console.log(table);
}
window.onload = filterByCGM();













 



  



