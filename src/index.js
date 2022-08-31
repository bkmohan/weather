const dailyHeader = document.querySelector('.forecast-header__daily');
const hourlyHeader = document.querySelector('.forecast-header__hourly');


function toggleHeader(){
    dailyHeader.classList.toggle('header-selected');
    hourlyHeader.classList.toggle('header-selected');
}


dailyHeader.addEventListener('click', toggleHeader)
hourlyHeader.addEventListener('click', toggleHeader)
    