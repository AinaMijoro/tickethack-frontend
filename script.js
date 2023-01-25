/* Select trip by departure, arrival and date */ 
document.querySelector("#searchButton").addEventListener("click", function () {
    const myTrip = {
        departure: document.querySelector("#departureInput").value,
        arrival: document.querySelector("#arrivalInput").value,
        date: document.querySelector("#dateInput").value,
    };

    fetch("http://localhost:3000/trips", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(myTrip),
    })
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.Data.length; i++) {
                const trip = data.Data[i];
                //console.log(trip.departure)

                const newRow = document.createElement("div")

                document.querySelector("#right-card").innerHTML += `
                <div class="tripRow">
                  <div class="trip-info">
                    <h3>
                    <span id="depart">${trip.departure}</span>
                    <span id="arrivee">${trip.arrival}</span>
                    <span id="heure">${trip.date}: ${trip.date}</span>
                    <span id="price">${trip.price}€</span>
                    </h3>
                  </div>
                <button id="Book">Book</button>
                </div>`;
            }
        });
});
