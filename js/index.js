const apiKey="2e9a98fc885b5e20f55b664dd457ccaa";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let inp=document.querySelector('input');
let btn=document.querySelector('button');
async function  checkweather(city) {
    const  response=await fetch(apiUrl+ city+`&appid=${apiKey}`);
    var data= await response.json();
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=data.main.humidity +"%";
    document.querySelector('.wind').innerHTML=data.wind.speed +"Km/h";



    console.log(data);
    
}
btn.addEventListener("click",()=>{
    let city=inp.value;
    checkweather(city);
})
