const api_key = '7930eb19227faa28448ec7f56358ee63';

const city_form = document.getElementById('submit_city');
console.log(city_form);

const fetchWeatherData = async (location)=>{  
        const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;
        // without 'https://' it does not work
        const response = await fetch(baseURL); 
        const data =await response.json();
        console.log(data);
        return data;
}

const processWeatherData = async (location)=>{
    const data = await fetchWeatherData(location);
    document.getElementById('showWeatherData').innerHTML =`
    <h1>Temp: ${data.main.temp} °C</h1>
    <p>Humidity: ${data.main.humidity} %</p>
    <p>Wind: ${data.wind.speed} km/h</p>
    `;
}

city_form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const location = e.target.location.value;
    console.log (location);
    processWeatherData(location);
    e.target.location.value ='';
});




