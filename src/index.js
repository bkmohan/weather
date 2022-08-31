import { format } from "date-fns";
import { generateHourlyElements } from "./hourly_weather";
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
const dailtForecast = document.querySelectorAll('.forecast__daily_day');

const location = document.querySelector('#location-and-date__location');
const currentDate = document.querySelector('#location-and-date__current-date');
const currentTime = document.querySelector('#location-and-date__current-time');
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


// let currentDateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
// let currentTimeOptions = { hour: 'numeric', minute: '2-digit' };
// let dailyDayOptions = { weekday: 'long' };
// let dailyDayOptions = { weekday: 'long' };


async function queryWeatherData(event){
    let locationQuery = document.querySelector('#search-bar').value
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

function updateWeatherData(data){
    if(data){
        location.textContent = data.location;
        let date = new Date(data.current.dt * 1000)
        currentDate.textContent = format(date, "EEEE, do MMM 'yy");
        currentTime.textContent = format(date, 'h:mm aaa');
        currentTemperature.innerHTML = getRelvantTemp(data.current.temp);
        currentSummary.textContent = capitalize(data.current.weather[0].description);
        
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

            //TODO icon
        }

        for(let i = 0; i < 24; i++){
            let hour = new Date(data.hourly[i+1].dt * 1000)
            let hourForecast = document.querySelector(`.forecast__hourly_day[data-id="${i}"]`)
            hourForecast.querySelector('.hour').textContent = format(hour, 'h:mm aaa')
            hourForecast.querySelector('.forecast__hourly_temperature').innerHTML = getRelvantTemp(data.hourly[i+1].temp);
        
            //TODO icon
        }
    }
    else{
        document.querySelector('.location-error').style.display = 'block';
    }
}