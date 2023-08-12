
const apiKey = "511758b210dbab2e67e9600b6af3ba16";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.getElementById("src-box");
let searchButton = document.getElementById("src-button");
let weatherIcon =  document.getElementById("weather-icon");

async function getData(city){
    var response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
       document.getElementById("error").style.display = "block"; 
       document.getElementById("info-show").style.display = "none"; 
    }else{
        var data = await response.json();

        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = data.main.temp + "&deg;C";
        document.getElementById("weather-condition").innerHTML = data.weather[0].main;
        document.getElementById("temp-feel").innerHTML = "Feel Like " + data.main.feels_like + "&deg;C";


        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
    }

    // console.log(data.weather[0].main);
}

// default
getData("dhaka"); 

searchButton.addEventListener("click", ()=>{
    getData(searchBox.value);
})

