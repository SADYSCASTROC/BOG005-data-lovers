// estas funciones son de ejemplo

import athletes from "./data/athletes/athletes.js";

export const olimpicos=(sports)=> {
  //const allData = Object.values(athletes.athletes);
  //let filterSport = allData.filter(athletes => athletes.sport == sports);
  //let filterSport = athletes.athletes.filter(athletes => athletes.sport == sports);//con este tengo  que ser mas exacta
  let filterSport = athletes.athletes.filter(
    (athletes) => athletes.sport.toLowerCase().includes(sports.toLowerCase()) //con este toma concidencias
  );
  return filterSport;
}
 
//let arrayathletas=data.filter(obj=>obj.athletes.includes.sport);
//return arrayathletas;

//export const olimpicos=athletes.result; 
//export const filtersport = (criterios)=> {
 //return olimpicos.filter(games=>games.sport===criterios);
  


//let sportfilter = athletes.filter(hletes = athletas(Sport)));
  
//export const Sport_filter = Object.filter (obj=>obj.sport)
//
 
		

  

  



export const anotherExample = () => {
  return 'OMG';
};
