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

pdateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTZ = event.target.value;
  if (cityTZ === "current") {
    cityTZ = moment.tz.guess();
  }
  let cityName = cityTZ.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTZ);
  let citiesElemet = document.querySelector("#cities");

  citiesElemet.innerHTML = `<div class="city" >
                        <div>
                            <h2>${cityName} </h2>
                            <div class= "date">${cityTime.format(
                              "MMMM Do YYYY"
                            )}</div>
                        </div>
                        <div class="time">${cityTime.format("h:mm:ss")} 
                                   <small>${cityTime.format("A")}</small>
                         </div>
                  </div>
                  <a href="/">All Cities</a> `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
