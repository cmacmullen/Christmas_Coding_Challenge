const christmas = new Date("December 25, 2025 00:00:00")
function updateCountdown() {
    const now = new Date();
    const diff = christmas - now; 

    //converst milliseconds into toal seconds
    const totalSeconds = Math.floor(diff / 1000);

    //figure out days, hrs, minuts, seconds
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // update the HTML elements 
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}


updateCountdown(); // Initial call to display immediately

setInterval(updateCountdown, 1000);

const jokes = [
    "Why did Santa's helper see the doctor? Because he had low 'elf' esteem!",
    "What do you call an old snowman? Water!",
    "Why was the math book sad at Christmas? Because it had too many problems.",
    "What do you get if you cross a snowman and a dog? Frostbite!",
    "Why don't you ever see Santa in hospital? Because he has private elf care!"
];

function showRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeElement = document.getElementById("joke-text");
    jokeElement.textContent = jokes[randomIndex];
}

//Make sure the button works after the DOM is loaded
 document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("joke-btn");
    jokeButton.addEventListener("click", showRandomJoke);
 });


 //Weather logic flow 
 // 1) get the user's zip code
 // 2) Build an API URL with zip, country code and API key. 
 // 3) create the action to fetch the weather API forecast
 // 4) loop through forecasts
 // 5) For each one, check if weather desc includes snow. ToLowerCase
 // 6) Build a function that if the weather mentions snow -> dispalay "Snow is in the Forecast"
 //    otherwise -> display "No Snow yet!"

document.getElementById("check-weather-btn").addEventListener("click", function() {
    const zip = document.getElementById("zip-input").value;
    
    if (zip !=="") {
        const apiKey = "0d16b3b46c2a0cfc4a98b5b63d49dad2";
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
             let description = data.weather[0].description;
             let message = "The forecast says: " + description + ".";

             if (description.includes("snow")) {
                message += "☃️ A white Christmas could be coming!";

             }else{
                message += "🥶 No snow yet!"; 

             }
             document.getElementById("weather-result").textContent = message;
        });

    } else {
        console.log('Please enter a zip code');    
    }

});