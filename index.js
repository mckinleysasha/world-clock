function updateTime() {
  let londonElement = document.querySelector("#london");

  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
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
  let cityTimezone = event.target.value;

  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector("#cities");
  let cityName = cityTimezone.split("/")[1].replace("_", " ");

  cityElement.innerHTML = `<div class="city">
          <div class="city-time">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:mm:ss [<small>]A[</small>]"
          </div>
                  </div>
                  <a href="/">All Cities</a> `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
