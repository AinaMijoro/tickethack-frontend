/* SELECT trip by departure, arrival and date */
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
                const newRow = document.createElement("div");

                document.querySelector("#right-card").innerHTML += `
                <div class="tripRow">
                  <div class="trip-info">
                    <h3>
                    <span>Paris</span> >
                    <span>Lyon</span>
                    <span>18h48</span>
                    <span>81€</span>
                    </h3>
                  </div>
                  <span><button class="book">Book</button></span>
                </div>`;
            }
        });
});

/* ADD trip to cart */
document.querySelectorAll(".book").forEach((button) => {
    button.addEventListener("click", function () {
        const trip = {
            departure: document.querySelector("#departureInput").value,
            arrival: document.querySelector("#arrivalInput").value,
            date: document.querySelector("#dateInput").value,
        };

        fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trip),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    });
});
