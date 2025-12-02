let selectedCityInterval;


function updateClocks() {
  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTimeZone = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTimeZone.format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = `${londonTimeZone.format("h:mm:ss")} <small>${londonTimeZone.format("A")}</small>`;
  }

  // New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTimeZone = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTimeZone.format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = `${newYorkTimeZone.format("h:mm:ss")} <small>${newYorkTimeZone.format("A")}</small>`;
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTimeZone = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTimeZone.format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = `${tokyoTimeZone.format("h:mm:ss")} <small>${tokyoTimeZone.format("A")}</small>`;
  }

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "Select a city") {
    alert("Please select a valid city the list.");
    return
  }
   
  if (cityTimeZone === "current") cityTimeZone = moment.tz.guess();

  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  alert(`You selected: ${cityName}`);

  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city" id="selected-city">
      <div>
        <h2>${cityName}</h2>
        <div class="date"></div>
      </div>
      <div class="time"></div>
    </div>
  `;


  let cityElement = document.getElementById("selected-city");
  let cityDateElement = cityElement.querySelector(".date");
  let cityTimeElement = cityElement.querySelector(".time");

  if (selectedCityInterval) clearInterval(selectedCityInterval);

  selectedCityInterval = setInterval(() => {
    let cityTime = moment().tz(cityTimeZone);
    cityDateElement.innerHTML = cityTime.format("MMMM Do, YYYY");
    cityTimeElement.innerHTML = `${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>`;
  }, 1000);
}

updateClocks();
setInterval(updateClocks, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
