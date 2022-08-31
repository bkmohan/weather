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
        iconDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6.57 32 25.43">
                                        <title>cloudy</title>
                                        <path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"></path>
                                    </svg>`

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