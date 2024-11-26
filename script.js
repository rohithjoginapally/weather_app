// API Endpoint
// http://api.weatherapi.com/v1/current.json?key=4eafff526fee48f4840181756242511&q=Hyderabad&aqi=no

const temperatureField = document.querySelector(".temp p"); // Select the <p> directly
const locationField = document.querySelector(".time_location p:first-child"); // First <p> inside .time_location
const dateAndTimeField = document.querySelector(".time_location p:last-child"); // Second <p> inside .time_location
const conditionField = document.querySelector(".condition p:last-child"); // First <p> inside .condition
const conditionIcon = document.querySelector(".weather-icon");
const searchField = document.querySelector(".search_area");

const form = document.querySelector("form")

form.addEventListener('submit', searchForLocation)


const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=4eafff526fee48f4840181756242511&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    let locationName = data.location.name

    let localTime = data.location.localtime

    let temp = data.current.temp_c

    let condition = data.current.condition.text

    let iconUrl = `https:${data.current.condition.icon}`;

    updateDetails(temp, locationName, localTime, condition, iconUrl)
}

function searchForLocation(e){
    e.preventDefault()

    target = searchField.value 

    fetchResults(target)
}

function updateDetails(temp, locationName, time, condition, iconURL){

    // let splitDate = time.split(' ')[0]
    // let splitTime = time.split(' ')[1]
    // let currentDay = new Date(splitDate).getDay()

    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateAndTimeField.innerText = time;
    conditionField.innerText = condition;
    conditionIcon.src = iconURL; 
}

