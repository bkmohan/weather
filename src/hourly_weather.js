export function generateHourlyElements(){
    let container = document.createElement('div')
    container.classList.add('forecast__hourly_container')

    for(let i = 0; i < 24; i++){
        let hourItem = document.createElement('div');
        hourItem.classList.add('forecast__hourly_day')
        if(i > 7) hourItem.classList.add('inactive')

        hourItem.setAttribute('data-id', i);

        let hourDiv = document.createElement('div');
        hourDiv.classList.add('hour');
        hourDiv.textContent = `${i+1} am`

        let temperatureDiv = document.createElement('div');
        temperatureDiv.classList.add('forecast__hourly_temperature');
        temperatureDiv.innerHTML = `21 &degC`

        let iconDiv = document.createElement('div');
        iconDiv.classList.add('forecast_hourly_icon');
        let icon = document.createElement('img');
        icon.classList.add('forecast__icon')
        icon.src = './images/weather/cloudy.svg';
        iconDiv.appendChild(icon);

        hourItem.appendChild(hourDiv)
        hourItem.appendChild(temperatureDiv)
        hourItem.appendChild(iconDiv)

        container.appendChild(hourItem)
    }

    return container
}

// export function hourlyScroller(){
//     let scrollerContainer = document.createElement('div');
//     scrollerContainer.classList.add('forecast-scroll');

//     let scroller = document.createElement('div');
//     scroller.classList.add('scroll');

//     let leftArrow = document.createElement('div');
//     leftArrow.classList.add('scroll-arrow');
//     leftArrow.id = 'arrow-left';
//     leftArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="8.02 6 7.41 12" fill="#f5f5f5"><title>arrow_left</title><path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path></svg>';
//     scroller.appendChild(leftArrow);

//     for(let i = 0; i < 3; i++){
//         let dot = document.createElement('div');
//         dot.classList.add('dot');
//         if(i == 0) dot.classList.add('dot-active');
//         scroller.appendChild(dot);
//     }
    

//     let rightArrow = document.createElement('div');
//     rightArrow.classList.add('scroll-arrow');
//     rightArrow.id = 'arrow-right';
//     rightArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="8.58 6 7.41 12" fill="#f5f5f5"><title>arrow_right</title><path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path></svg>';
//     scroller.appendChild(rightArrow);

//     scrollerContainer.appendChild(scroller);

//     return scrollerContainer;
// }