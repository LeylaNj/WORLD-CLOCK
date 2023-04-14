function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");
    romeDateElement.innerHTML = moment()
      .tz("Europe/Rome")
      .format("MMMM Do YYYY");
    romeTimeElement.innerHTML = moment()
      .tz("Europe/Rome")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    newyorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
          <small>${cityTime.format("A")}</small></div>
        </div>
        `;
}

let citiesSelectedElement = document.querySelector("#city");
citiesSelectedElement.addEventListener("change", updateCity);
