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
    document.getElementById('showTemp').innerHTML =`
        <h3 id="city" style="color:blue">${data.name}</h3>
        <p> ${data.main.temp} °C</p>`;
    document.getElementById('showOtherInfo').innerHTML =`
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind: ${data.wind.speed} km/h</p>
        <p style="margin-bottom:0px; font-weight:bold">${data.weather[0].description}</p>
        <img src=${image} alt=""/>
        `;
}


const changeImage =()=>{
    const date = new Date();
    const h = date.getHours();
    console.log(h);
    if(h >= 5 && h <= 18) {
        document.getElementById("wetter-image").src ="img-wetter/day_image.svg";
    } if( h < 5 && h >= 0 || h > 18) {
        document.getElementById("wetter-image").src ="img-wetter/night_image.svg";
    }
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




