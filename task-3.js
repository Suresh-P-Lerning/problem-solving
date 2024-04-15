
const conuntryLoauder = ()=>{
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
    .then(res => res.json())
    .then(data=>countryDisplay(data))
}
const countryDisplay = (countries)=>{    
    const countrySelector = document.getElementById('country-list')

    countries.forEach(country=>{
        // console.log(country)
        const option = document.createElement('option');
        option.innerHTML=`${country.name.common}`
        option.setAttribute('onclick','louadDetails()')
        countrySelector.appendChild(option)
    })        
}
const louadDetails=details=>{
    const url= `https://restcountries.com/v3.1/name/${details}`;
    fetch(url)
    .then(res => res.json())
    .then(data=>displayLoadDetails(data))
}
const displayLoadDetails = displayDetails =>{
    console.log(displayDetails)
}


conuntryLoauder()

// const div = document.createElement('div');
// div.innerHTML=`
// <label for="">Choose the country :</label>
// <select name="country" id="country-list">

// </select>
// `