import { format } from "date-fns";
import { generateHourlyElements } from "./hourly_weather";
import { cachedData, getLocation, storeData } from "./init";
import { getWeatherData } from "./weather";


const dailyHeader = document.querySelector('.forecast-header__daily');
const hourlyHeader = document.querySelector('.forecast-header__hourly');
const dailyBody = document.querySelector('.forecast__daily');
const hourlyBody = document.querySelector('.forecast__hourly');
const forecastScroll = document.querySelector('.forecast-scroll');
const leftScrollArrow = document.querySelector('#arrow-left');
const rightScrollArrow = document.querySelector('#arrow-right');
const searchLocation = document.querySelector('#search-icon');
const tempSwitch = document.querySelector('#unit-toogle');
const locationQueryInput = document.querySelector('#search-bar');

const location = document.querySelector('#location-and-date__location');
const currentDate = document.querySelector('#location-and-date__current-date');
const currentTime = document.querySelector('#location-and-date__current-time');
const weatherIcon = document.querySelector('#weather__temperature__icon');
const currentTemperature = document.querySelector('#weather__temperature__value');
const currentSummary = document.querySelector('#weather__temperature__summary');

const feelsLike = document.querySelector('#feels-like');
const precipitate = document.querySelector('#precipitate');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');

let WeatherData = {};
let tempUnit = 'C';

hourlyBody.insertBefore(generateHourlyElements(), forecastScroll)

function toggleHeader(){
    dailyHeader.classList.toggle('header-selected');
    hourlyHeader.classList.toggle('header-selected');
    dailyBody.classList.toggle('inactive')
    hourlyBody.classList.toggle('inactive')
}

function hourScroll(event) {
    let activeDot = document.querySelector('.dot-active');
    let activeIndex = activeDot.getAttribute('data-id');

    let id = event.target.closest('.scroll-arrow').id;

    if(id == 'arrow-left' && activeIndex != '0'){
        let activeItems = document.querySelectorAll('.forecast__hourly_day:not(.inactive)')
        activeItems.forEach(item => {
            // make hourl element of (n+8) active
            item.classList.toggle('inactive');
            let currentIdx = parseInt(item.getAttribute('data-id'));
            let nextItem = document.querySelector(`.forecast__hourly_day[data-id="${currentIdx-8}"`)
            nextItem.classList.toggle('inactive');
        })

        // move acctive scroll dot to left 
        activeDot.classList.toggle('dot-active')
        document.querySelector(`.dot[data-id="${parseInt(activeIndex)-1}"`).classList.toggle('dot-active')
    }
    else if(id == 'arrow-right' && activeIndex != '2'){
        let activeItems = document.querySelectorAll('.forecast__hourly_day:not(.inactive)')
        activeItems.forEach(item => {
            item.classList.toggle('inactive');
            let currentIdx = parseInt(item.getAttribute('data-id'));
            let nextItem = document.querySelector(`.forecast__hourly_day[data-id="${currentIdx+8}"`)
            nextItem.classList.toggle('inactive');
        })

        activeDot.classList.toggle('dot-active')
        document.querySelector(`.dot[data-id="${parseInt(activeIndex)+1}"]`).classList.toggle('dot-active')
    }
}


dailyHeader.addEventListener('click', toggleHeader)
hourlyHeader.addEventListener('click', toggleHeader)

leftScrollArrow.addEventListener('click', hourScroll)
rightScrollArrow.addEventListener('click', hourScroll)


searchLocation.addEventListener('click', queryWeatherData)
tempSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        tempUnit = 'F';
      } else {
        tempUnit = 'C'
      }

    if(Object.keys(WeatherData).length != 0){
        updateWeatherData(WeatherData)
    }
})

locationQueryInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        queryWeatherData();
    }
})



async function queryWeatherData(event){
    let locationQuery = locationQueryInput.value
    WeatherData = await getWeatherData(locationQuery);
    updateWeatherData(WeatherData)
}

function getRelvantTemp(celsius){
    return (tempUnit == 'C') ? Math.round(celsius) + ' &deg C' : Math.round((celsius * 1.8) + 32) + ' &deg F';
}

function getRelvantSpeed(kmh){
    return (tempUnit == 'C') ? kmh+ ' km/h' : (Math.round(kmh * 160.9344) / 100) + ' mph';
}

function capitalize(string){
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

function getIcon(weatherId){
    switch(weatherId){
        case '01d':
            return './images/weather/sun.svg'
        
        case '01n':
            return './images/weather/moon.svg'
        
        case '02d':
            return './images/weather/cloudy-day.svg'
        
        case '02n':
            return './images/weather/cloudy-night.svg'
        
        case '03d':
        case '03n':
            return './images/weather/cloud.svg'
        
        case '04d':
        case '04n':
            return './images/weather/cloudy.svg'
       
        case '9d':
        case '9n':
        case '10d':
        case '10n':
            return './images/weather/rainy.svg'
        
            case '011d':
        case '0112':
            return './images/weather/lightning.svg'
        
            case '13d':
        case '13n':
            return './images/weather/snow.svg'
        
            case '50d':
        case '50n':
            return './images/weather/mist.svg'
    
        default:
            return './images/weather/cloudy.svg'
                                                

    }
}

function updateWeatherData(data){
    if(data){
        document.querySelector('.location-error').style.display = 'none';

        location.textContent = data.location;
        let date = new Date(data.current.dt * 1000)
        currentDate.textContent = format(date, "EEEE, do MMM yy");
        currentTime.textContent = format(date, 'h:mm aaa');
        currentTemperature.innerHTML = getRelvantTemp(data.current.temp);
        currentSummary.textContent = capitalize(data.current.weather[0].description);
        weatherIcon.src = getIcon(data.current.weather[0].icon)

        feelsLike.innerHTML = getRelvantTemp(data.current.feels_like);
        precipitate.textContent = data.hourly[0].pop * 100 + ' %';
        humidity.textContent = data.current.humidity + ' %';
        windSpeed.textContent = getRelvantSpeed(data.current.wind_speed);


        for(let i = 0; i < 7; i++){
            let day = new Date(data.daily[i+1].dt * 1000)
            let dayForecast = document.querySelector(`.forecast__daily_day[data-id="${i}"]`)
            dayForecast.querySelector('.day').textContent = format(day, 'EEEE')
            dayForecast.querySelector('.forecast__daily_high').innerHTML = getRelvantTemp(data.daily[i+1].temp.max);
            dayForecast.querySelector('.forecast__daily_low').innerHTML = getRelvantTemp(data.daily[i+1].temp.min);
            dayForecast.querySelector('.forecast__icon').src = getIcon(data.daily[i+1].weather[0].icon)
            //TODO icon
        }

        for(let i = 0; i < 24; i++){
            let hour = new Date(data.hourly[i+1].dt * 1000)
            let hourForecast = document.querySelector(`.forecast__hourly_day[data-id="${i}"]`)
            hourForecast.querySelector('.hour').textContent = format(hour, 'h:mm aaa')
            hourForecast.querySelector('.forecast__hourly_temperature').innerHTML = getRelvantTemp(data.hourly[i+1].temp);
            hourForecast.querySelector('.forecast__icon').src = getIcon(data.hourly[i+1].weather[0].icon)
            //TODO icon
        }
        storeData(data.location, tempUnit)
    }
    else{
        document.querySelector('.location-error').style.display = 'block';
    }
}

async function init(){
    let initData = cachedData();
    if(initData.location){
        WeatherData = await getWeatherData(initData.location);
        if(initData.unit){
            tempSwitch.checked = initData.unit == 'F' ? true : false;
        }
    }
    else{
        WeatherData = await getWeatherData('bangalore');
    }
    updateWeatherData(WeatherData);
}

init()