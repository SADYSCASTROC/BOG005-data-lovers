

import athletes from "./data/athletes/athletes.js";
 
export const dataFilter= (country,gender,medal)=>{
 let filterCountry = athletes.athletes;
 let filterGender =filterCountry;
 let filterMedal=filterGender;

 if (country!="all"){
    filterCountry=filterCountry.filter((athletes)=>athletes.team.includes(country));
   filterGender = filterCountry;
   filterMedal = filterGender;
 }

  if (gender != "all") {
    filterGender = filterGender.filter((athletes) =>
      athletes.gender.includes(gender)
    );
    filterMedal = filterGender;
  }
  if (medal != "all") {
    filterMedal = filterMedal.filter((athletes) =>
      athletes.medal.includes(medal)
    );
  }
 
 return filterMedal;
}
// listas desplegables

export const countryData=()=>{
let countriesArray = [];
for (const country of athletes.athletes) {
  countriesArray.push(country.team);
}

return countriesArray.filter((country,pos)=>{
    return countriesArray.indexOf(country)==pos
}).sort();//permite organizar de menor a mayor un array

};

export const genderData = () => {
  let gendersArray = [];
  for (const gender of athletes.athletes) {
    gendersArray.push(gender.gender);
  }

  return gendersArray.filter((gender, pos) => {
      return gendersArray.indexOf(gender) == pos;
    })
    .sort(); //permite organizar de menor a mayor un array
};
export const medalData = () => {
  let medalsArray = [];
  for (const medal of athletes.athletes) {
    medalsArray.push(medal.medal);
  }

  return medalsArray.filter((medal, pos) => {
     return medalsArray.indexOf(medal) == pos;
    })
    .sort(); //permite organizar de menor a mayor un array
};


