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


