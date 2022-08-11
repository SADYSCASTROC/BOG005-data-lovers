
// pais
export const country = (data, country) => {
    const countryFilterData = data.filter(item => item.team === country);

    
    console.log(countryFilterData)
    
  };

  // genero
  export const gender = (data,gender) => {
    const genderFilterData = data.filter(item => item.gender === gender);
      console.log(genderFilterData)
  };
  


  
  