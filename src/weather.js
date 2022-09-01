export async function getWeatherData(location){
    const coordinatesURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=20f7632ffc2c022654e4093c6947b4f4`

    try{
        let response = await fetch(coordinatesURL);
        let locationData = await response.json();

        const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.coord.lat}&lon=${locationData.coord.lon}&exclude=minutely,alerts&units=metric&appid=20f7632ffc2c022654e4093c6947b4f4`

        response = await fetch(weatherURL);
        let weatherData = await response.json();

        let data = {}
        data.location = locationData.name
        data.lat = locationData.coord.lat
        data.lon = locationData.coord.lon
        data.current = weatherData.current
        data.hourly = weatherData.hourly
        data.daily = weatherData.daily

        return data
    }
    catch{
        return ''
    }
    
}


