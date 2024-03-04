const apikey="863242cfb2b1d357e6093d9a4df19a4b";
const apiurl="https://goweather.herokuapp.com/weather";

const city=document.querySelector(".input_field input")
const btn=document.querySelector(".input_field button")

async function checkweather(city){
    const response=await fetch(apiurl+"/"+city);
    var data=await response.json();

    console.log(data)

    document.getElementById("temp").innerHTML=data.temperature;
    document.getElementById("des").innerHTML=data.description;
    document.getElementById("wind_speed").innerHTML=data.wind ;

    if(data.description=='Light snow'){
        document.getElementById("sun_rain_img").src="images.png/light_snow.png"
    }
    if(data.description=='Light snow shower'){
        document.getElementById("sun_rain_img").src="images.png/light_snow.png"
    }
    if(data.description=='Moderate snow'){
        document.getElementById("sun_rain_img").src="images.png/light_snow.png"
    }
    else if(data.description=='Clear'){
        document.getElementById("sun_rain_img").src="images.png/rain_symbol_final2.png"
    }
    else if(data.description=='Patchy rain possible'){
        document.getElementById("sun_rain_img").src="images.png/cloudy.png"
    }
    else if(data.description=='Thundershower'){
        document.getElementById("sun_rain_img").src="images.png/Thundershower.png"
    }
    else if(data.description=='Scattered Thunderstorms'){
        document.getElementById("sun_rain_img").src="images.png/Scattered Thunderstorms.png"
    }

}


btn.addEventListener("click",()=>{
    checkweather(city.value);
})
