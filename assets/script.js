var searchbutton= document.getElementById("search")
const apikey="f94df6e9e239910196e39d5e3081678c"

function get5dayforcast (cityName){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apikey}&units=imperial`)
    .then(function(data){
        return data.json()
    }).then(function(apiresults){
        console.log(apiresults)
        var htmlstring = `
        <div class="card" style="width: 18rem;">
        <h2>${cityName}</h2>
        <img src="http://openweathermap.org/img/wn/${apiresults.list[0].weather[0].icon}@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Temperature: ${apiresults.list[0].main.temp}</p>
          <p class="card-text">Temperature: ${apiresults.list[0].wind.speed}</p>
          <p class="card-text">Temperature: ${apiresults.list[0].weather[0].description}</p>
          <p class="card-text">Temperature: ${apiresults.list[0].main.humidity}</p>
        </div>
      </div>`
      document.getElementById("current").innerHTML = htmlstring
      var html = ""
        for(let i=8; i<apiresults.list.length;i=i+8){
            html += `<div class="card" style="width: 18rem;">
          
            <img src="http://openweathermap.org/img/wn/${apiresults.list[i].weather[0].icon}@2x.png" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Temperature: ${apiresults.list[i].main.temp}</p>
              <p class="card-text">Temperature: ${apiresults.list[i].wind.speed}</p>
              <p class="card-text">Temperature: ${apiresults.list[i].weather[0].description}</p>
              <p class="card-text">Temperature: ${apiresults.list[i].main.humidity}</p>
            </div>
          </div>
            
            `
            document.getElementById ("five").innerHTML = html

        }
    })

}


searchbutton.addEventListener ("click",function(event){
    event.preventDefault()
    var cityName = document.getElementById("city-name").value
    console.log(cityName)
    get5dayforcast(cityName)
}
)

