const apikey = "66db29ab0412c504f14adbe2f9048c27";

function weather(){
    const cityName = document.getElementById('name-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`)
    .then(resp => resp.json())
    .then(data => {
        displayWeather(data);
    })
}

function displayWeather(state){
    if(state.name == undefined){
        document.getElementById('city-name').innerText = "Please provide a city Name";
        document.getElementById('city-temp').innerText = "0.00C";
        document.getElementById('status').innerText = "";
    }
    else {
        document.getElementById('city-name').innerText = state.name;
        document.getElementById('city-temp').innerText = state.main.temp;
        document.getElementById('status').innerText = state.weather[0].main;
        const imgUrl = `https://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`;
        document.getElementById('weathericon').setAttribute('src', imgUrl);
    }
}

document.getElementById('weatherbtn').addEventListener('click', function(){
    weather();
});
