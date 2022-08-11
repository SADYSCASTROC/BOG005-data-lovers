// estas funciones son de ejemplo


import athletes from "./data/athletes/athletes.js";
 
export const dataFilter = (country, gender, medal) => {
  //const allData = Object.values(athletes.athletes);
  //let filterSport = allData.filter(athletes => athletes.sport == sports);
  //let filterSport = athletes.athletes.filter(athletes => athletes.sport == sports);//con este tengo  que ser mas exacta
  // let filterSport = athletes.athletes.filter(
  //   (athletes) => athletes.sport.toLowerCase().includes(sports.toLowerCase()) //con este toma concidencias
  // );
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

  return filterMedal;
};

let countriesArray = []; //vector

for (let country of athletes.athletes) {
  countriesArray.push(country.team);
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