const targetDate = new Date("December 17, 2026 10:30:00").getTime();

function updateCountdown() {
const now = new Date().getTime();
const difference = targetDate - now;

if (difference <= 0) {
    document.getElementById("months").textContent = "00";
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
}

let totalSeconds = Math.floor(difference / 1000);

const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
totalSeconds %= 30 * 24 * 60 * 60;

const days = Math.floor(totalSeconds / (24 * 60 * 60));
totalSeconds %= 24 * 60 * 60;

const hours = Math.floor(totalSeconds / (60 * 60));
totalSeconds %= 60 * 60;

const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;

document.getElementById("months").textContent =
    String(months).padStart(2, "0");

document.getElementById("days").textContent =
    String(days).padStart(2, "0");

document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");

}

updateCountdown();
setInterval(updateCountdown, 1000);