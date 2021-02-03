const api_key = '7930eb19227faa28448ec7f56358ee63';

const city_form = document.getElementById('submit_city');

//hole Daten von openweathermap.com
const fetchWeatherData = async (location)=>{  
        const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;
        // without 'https://' it does not work
        const response = await fetch(baseURL); 
        const data =await response.json();
        console.log(data);
        return data;
}

//Zeigen die geholte Daten
const processWeatherData = async (location)=>{
    const data = await fetchWeatherData(location);
    let icon_id = data.weather[0].icon;
    const image= `http://openweathermap.org/img/wn/${icon_id}@2x.png`;
    document.getElementById('showWeatherData').innerHTML =`
    <h3 style="color:blue">${data.name}</h3>
    <p>Temp: ${data.main.temp} °C</p>
    <p>Humidity: ${data.main.humidity} %</p>
    <p>Wind: ${data.wind.speed} km/h</p>
    <p style="margin-bottom:0px; font-weight:bold">${data.weather[0].description}</p>
    <img src=${image} alt=""/>
    `;
}

//Eingeben die Name einer Stadt 
city_form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const location = e.target.location.value;
    processWeatherData(location);
    e.target.location.value ='';
});



//default Wetter: Berlin
// const fetchWeatherData_Berlin = async ()=>{  
//     const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${api_key}&units=metric`;
//     // without 'https://' it does not work
//     const response = await fetch(baseURL); 
//     const data =await response.json();
//     console.log(data);
//     return data;
// }




