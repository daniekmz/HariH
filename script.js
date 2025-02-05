// Set the date we're counting down to
const birthday = new Date("2025-03-19").getTime(); // Ganti dengan tanggal ulang tahun Anda

// Update the countdown every 1 second
const countdown = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the birthday
    const distance = birthday - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Happy Birthday!";
    }
}, 1000);