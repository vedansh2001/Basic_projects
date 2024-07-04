window.onload = function() {
    
    async function checkWeather() {
      const weatherIcon = document.querySelector("image");
      const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=dc6c89506259bba6341b34829695d43f&units=metric";
      const res = await fetch(apiURL);
      let data = await res.json();
      console.log(data);
      document.querySelector('#locndiv').innerHTML = data.name;
      document.querySelector('#tempdiv').innerHTML = data.main.temp + "C";
      document.querySelector('#hmdtval').innerHTML = data.main.humidity + "%";
      document.querySelector('#windval').innerHTML = data.wind.speed + "Km/hr";

      if(data.weather[0].main == "Clouds"){
        image.src = "photos/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
        image.src = "photos/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
        image.src = "photos/rain.png";
        }
        else if(data.weather[0].main == "Rain"){
        image.src = "photos/rain.png";
        }
        else if(data.weather[0].main == "<Mist>"){
        image.src = "photos/mist.png";
        }
    }
    checkWeather();
  }


document.getElementById('searchbutton').addEventListener('click', function() {
    const text = document.getElementById('searchbar').value;
    const apiKey = "dc6c89506259bba6341b34829695d43f";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=dc6c89506259bba6341b34829695d43f&units=metric`;

const weatherIcon = document.querySelector("image");


async function checkWeather(){
    const res = await fetch(apiURL);
    let data = await res.json();
    console.log(data);
    document.querySelector('#locndiv').innerHTML = data.name;
    document.querySelector('#tempdiv').innerHTML = data.main.temp + "C";
    document.querySelector('#hmdtval').innerHTML = data.main.humidity + "%";
    document.querySelector('#windval').innerHTML = data.wind.speed + "Km/hr";

if(data.weather[0].main == "Clouds"){
    image.src = "photos/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
    image.src = "photos/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
    image.src = "photos/rain.png";
    }
    else if(data.weather[0].main == "Rain"){
    image.src = "photos/rain.png";
    }
    else if(data.weather[0].main == "<Mist>"){
    image.src = "photos/mist.png";
    }

}

checkWeather();
})



