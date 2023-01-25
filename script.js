document.querySelector("#searchButton").addEventListener("click", function () {
  const myTrip = {departure: document.querySelector("#departureInput").value,
  arrival: document.querySelector("#arrivalInput").value,
  date: document.querySelector("#dateInput").value,};
  fetch("http://localhost:3000/trips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ myTrip }),
  })
    .then((response) => response.json())
    .then((data) => {
        if(data)
        {for (let i=0; i<data.length; i++)
            document.querySelector("#tripResult").innerHTML += `
              <span id="depart">${data[i].departure}</span>
              <span id="arrivee">${data[i].arrival}</span>
              <span id="heure">${data[i].date.getHours()}+':'${data[i].date.getMinutes()}</span>
              <span id="price">${data[i].price}+'€'}</span>
              <button id="Book">Book</button>
            })`;}
            else {
                document.querySelector("#tripResult").innerHTML = `
                <img src="images/notfound.png"/>
                <span id ="error">${data.error}</span>`
                
                
            }
      
    });
});
