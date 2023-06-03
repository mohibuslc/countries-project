

function  loadCountryApi(){

    fetch("https://restcountries.com/v3.1/all")
    .then(res =>res.json())
    .then(data => displayCountry(data))
}
function   displayCountry(countries){

    console.log(countries)

    const countryHTML = countries.map(countries => getCountry (countries))

 const containerHTML = document.getElementById('country-container');


 containerHTML.innerHTML = countryHTML.join('.') ; 

}

function getCountry(country){  

    console.log(country.length)

    return `  
    <div class="ml-[20px] w-[80px] " id="design">
   
        <h3>${country.name.common}</h3>
        <img src=${country.flags.png} alt="flag page " >
        
    </div>
    
    `
}

loadCountryApi()
