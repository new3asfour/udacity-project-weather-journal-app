/* Define Global Variables */
// personal api key for open weather map api 
const apiKey = "42f644b15641f0cb41900d401efdde0d";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?appid=" + apiKey;
const backendUrl = "http://localhost:3000"

/* Helper Functions */
// Converting the temperature from Kelvin on the site to degrees Celsius
const kelvinToCelsius = kelvins => Math.round(Number(kelvins) - 273.15);
const kelvinToFahrenheit = kelvins => Math.round((Number(kelvins) - 273.15) * 9 / 5 + 32);
const convertTemp = num => document.getElementById('temp').checked ? kelvinToFahrenheit(num) + " F" : kelvinToCelsius(num) + " C";

// Get current date 
function getCurrentDate() {
    let d = new Date();
    // return (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();
    return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
}

// Get zip code
function getZipCode() {
    const zipCode = document.getElementById('zip');
    return zipCode.value
}

// Get user response
function getUserResponse() {
    const userResponse = document.getElementById('feelings');
    return userResponse.value
}

// Gets weather data
const getWeather = async(url = '', zipCode = '') => {
    const weatheQquery = url + "&zip=" + zipCode
    const request = await fetch(weatheQquery);
    try {
        const weatherData = await request.json();
        return weatherData;
    } catch (error) {
        console.log(`Don't worry, but something is wrong !`);
        console.log("error", error);
    }
}

// Update UI
function updateUI(date, temperature, content) {
    document.getElementById('date').innerText = date;
    document.getElementById('temp').innerText = convertTemp(temperature);
    document.getElementById('content').innerText = content;
}

// Post data
const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// Get weather data and posts 
function getPostWeather(url = '', zipCode = '', userResponse = '') {
    getWeather(url, zipCode)
        .then(function(weatherData = {}) {
            const data = {
                'temperature': weatherData.main.temp,
                'date': getCurrentDate(),
                'user_response': getUserResponse()
            }
            return data;
        })
        .then(function(data = {}) {
            console.log(data);
            postData(backendUrl + '/', data);
            return data;
        })
        .then(function(data = {}) {
            updateUI(data.date, data.temperature, data.user_response);
        });
}

// event listener to add function to existing HTML Dom element
window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('generate');
    console.log(form);
    form.addEventListener("click", function() {
        getPostWeather(baseUrl, getZipCode(), getUserResponse());
    });
});