function Clock() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let timePeriod;

    // Format hours, minutes, and seconds to two digits
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Determine AM/PM
    if (hours >= 12) {
        timePeriod = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else {
        timePeriod = "AM";
        if (hours == 0) {
            hours = 12;
        }
    }

    // Format hours to two digits
    hours = (hours < 10) ? "0" + hours : hours;

    // Display current time
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds} ${timePeriod}`;
}

// Update clock every second
setInterval(Clock, 1000);

// Initialize clock
Clock();

