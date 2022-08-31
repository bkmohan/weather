function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


export function cachedData(){
    if (storageAvailable('localStorage')) {
        let cache = {location: '', unit: ''};
        if (localStorage.getItem('weather_location')) {
            cache.location = localStorage.getItem("weather_location");
        } 
        if (localStorage.getItem('weather_unit')) {
            cache.unit = localStorage.getItem("weather_unit");
        } 

        return cache
      }

    return ''
}

export function storeData(location, unit){
    if (storageAvailable('localStorage')) {
        localStorage.setItem('weather_location', location)
        localStorage.setItem('weather_unit', unit)
      }
}