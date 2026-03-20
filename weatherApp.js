

//Confirm button action
const confirmBtn = document.getElementById("confirmBtn");

confirmBtn.addEventListener("click",function(){
    
    
    const country = document.getElementById("countryInput").value;
    const city = document.getElementById("cityInput").value;

    const apiKey = "0e7c6c0869ffc850f201935aca99ff9c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    const temp = data.main.temp;
    const weather = data.weather[0].description; 
     const resultTxt = document.getElementById("resultTxt");
    resultTxt.innerText = `It is currently ${temp}°C and ${weather}`;

    resultTxt.style.visibility = "visible";
    

    //picture

    const weatherPic = {
        Clouds:"cloudy.jpg",
        Thunderstorm:"thunder.jpg",
        Drizzle:"rain",
        Rain:"shower.jpg",
        Snow:"snow.jpg",
        Clear:"sunny.jpg"
    }

const resultImg = document.getElementById("resultImg");
const introText = document.querySelector(".introText");
const nowWeather = data.weather[0].main;

resultImg.src=weatherPic[nowWeather];
resultImg.style.visibility="visible";
introText.style.visibility="hidden";


});

});

