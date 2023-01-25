document.querySelector("#searchButton").addEventListener("click", function () {
    //   récupérer le nom de la ville du champ de saisie
    let myTrips = [document.querySelector("#departure").value,
                   document.querySelector ('#arrival').value,
                   document.querySelector("#date").value]
    // faire la requéte a la route voulu via le fecth
    fetch("http://localhost:3000/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ myTrips }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          document.querySelector("#cityList").innerHTML += `
      <div class="cityContainer">
          <p class="name">${data.weather.cityName}</p>
          <p class="description">${data.weather.description}</p>
          <img class="weatherIcon" src="images/${data.weather.main}.png"/>
          <div class="temperature">
              <p class="tempMin">${data.weather.tempMin}°C</p>
              <span>-</span>
              <p class="tempMax">${data.weather.tempMax}°C</p>
          </div>
          <button class="deleteCity" id="${data.weather.cityName}">Delete</button>
      </div> `;
        }
        deleteCity();
      });
  });

