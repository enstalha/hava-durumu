const form = document.querySelector("form");
const searchInput = document.querySelector("#searchInput"); 
const row = document.querySelector(".row"); 


const apiKey = "9b72311310dce732ea051d8d5b0a977f";


// ! Hava durumuna göre arka plan resmi getirmek için;
const weatherColors = {
    Clear : "#f1c40f",
    Clouds : "#3498db",
    Rain : "#2ecc71",
    Snow : "#ecf0f1",
    Mist : "#95a5a6",
    Thenderstorm : "#8e44ad",
    Drizzle : "#d35400",
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = searchInput.value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=tr`

    fetch(url)
    .then(function(response){return response.json()})
    .then((data) => {
        const cityName = data.city.name;
        const countryName = data.city.country;

        console.log(data);

        const forecasts = data.list.filter((forecast) => {
            return forecast.dt_txt.includes("12:00:00");
        })
        console.log(forecasts); 
        
        row.innerHTML = "";

        forecasts.forEach((veri) => {

            // ! Tarihi düzenlemek için
            const date  = new Date(veri.dt_txt);

            const formatedDate = date.toLocaleDateString("tr-TR",{
                day : "numeric",
                month : "long",
                year : "numeric",
                weekday : "long"
            })

            const weatherBgColor = weatherColors[veri.weather[0].main];

            row.innerHTML += `      
            <div class="col-4">
                <div class="card m-3" style="background-color:${weatherBgColor}">
                    <img src="https://openweathermap.org/img/wn/${veri.weather[0].icon}@2x.png" class="card-img-top weather-icon" alt="...">
                    <div class="card-body">
                      <h5 class="card-title custom-font">${cityName}, ${countryName}</h5>
                      <p class="card-text">${formatedDate}</p>
                      <p class="card-text">${Math.round(veri.main.temp)}°C</p>
                      <p class="card-text">${(veri.weather[0].description)[0].toLocaleUpperCase() + (veri.weather[0].description).slice(1)}</p>
                    </div>
                  </div>
            </div>

            `
        })
    })
})