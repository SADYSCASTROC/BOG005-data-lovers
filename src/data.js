

import athletes from "./data/athletes/athletes.js";

let arrayGlobar=[]
export const dataFilter = (country, gender, medal) => {
  let filterCountry = athletes.athletes;
  let filterGender = filterCountry;
  let filterMedal = filterGender;
  if (country != "all") {
    filterCountry = filterCountry.filter(
      (athletes) => athletes.team.toLowerCase().includes(country.toLowerCase()) //con este toma concidencias
    );
    filterGender = filterCountry;
    filterMedal = filterGender;
  }

  if (gender != "all") {
    filterGender = filterGender.filter(
      (athletes) => athletes.gender.toLowerCase().includes(gender.toLowerCase()) //con este toma concidencias
    );
    filterMedal = filterGender;
  }

  if (medal != "all") {
    filterMedal = filterGender.filter(
      (athletes) => athletes.medal.toLowerCase().includes(medal.toLowerCase()) //con este toma concidencias
    );
  }

  arrayGlobar=filterMedal

  return filterMedal;
};


let countriesArray = []; //vector

for (let athlete of athletes.athletes) {

  countriesArray.push(athlete.team);
}

export const countryData = countriesArray
  .filter((country, pos) => {
    //array de strings
    return countriesArray.indexOf(country) == pos; //me retorna el primer indice en el se encuntra un elemento
  })
  .sort(); // organiza por orden alfabetico

let gendersArray = [];

for (let gender of athletes.athletes) {
  
  gendersArray.push(gender.gender);
}


export const genderData = gendersArray
  .filter((gender, pos) => {
    return gendersArray.indexOf(gender) == pos;
  })
  .sort();

let medalArray = [];

for (let medal of athletes.athletes) {
  medalArray.push(medal.medal);
}

export const medalData = medalArray


  .filter((medal, pos) => {
    return medalArray.indexOf(medal) == pos;
  })
  .sort();

// funcion calcular
export const percentage = () => {
  let auxWomen=0;
  arrayGlobar.map((index) => {
  if(index.gender==="F"){
    auxWomen++;
  }
 })

 let porWomen= (auxWomen*100)/arrayGlobar.length;
 let stringOfPaid=porWomen.toFixed(1);
 return stringOfPaid;

};



  
  