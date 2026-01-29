/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")

let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")

convertBtn.addEventListener("click", convertUnits)

function convertUnits() {
  let value = Number(inputEl.value)

  if (value === 0 && inputEl.value === "") {
    alert("Please enter a number")
    return
  }

  // Length
  let metersToFeet = (value * 3.281).toFixed(2)
  let feetToMeters = (value / 3.281).toFixed(2)

  // Volume
  let litersToGallons = (value * 0.264).toFixed(2)
  let gallonsToLiters = (value / 0.264).toFixed(2)

  // Mass
  let kilosToPounds = (value * 2.204).toFixed(2)
  let poundsToKilos = (value / 2.204).toFixed(2)

  lengthResult.textContent =
    `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`

  volumeResult.textContent =
    `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`

  massResult.textContent =
    `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`
}
