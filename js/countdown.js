// Set the target date and time for the countdown
const targetDate = new Date("2025-12-03T00:00:00").getTime();

// Get references to the digit elements
const daysHundreds = document.getElementById('days-hundreds');
const daysTens = document.getElementById('days-tens');
const daysOnes = document.getElementById('days-ones');
const hoursTens = document.getElementById('hours-tens');
const hoursOnes = document.getElementById('hours-ones');
const minutesTens = document.getElementById('minutes-tens');
const minutesOnes = document.getElementById('minutes-ones');
const secondsTens = document.getElementById('seconds-tens');
const secondsOnes = document.getElementById('seconds-ones');

// Update the countdown every second
setInterval(function() {
  // Get the current time
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    // If the countdown reaches zero, stop the timer
    clearInterval();
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the flipdown digits
  updateDigit(daysHundreds, Math.floor(days / 100));  // Hundreds place for days
  updateDigit(daysTens, Math.floor((days % 100) / 10));  // Tens place for days
  updateDigit(daysOnes, days % 10);  // Ones place for days

  updateDigit(hoursTens, Math.floor(hours / 10));
  updateDigit(hoursOnes, hours % 10);
  updateDigit(minutesTens, Math.floor(minutes / 10));
  updateDigit(minutesOnes, minutes % 10);
  updateDigit(secondsTens, Math.floor(seconds / 10));
  updateDigit(secondsOnes, seconds % 10);
}, 1000);

// Function to update the digit with a flip effect
function updateDigit(digitElement, newValue) {
  const currentValue = parseInt(digitElement.textContent);

  if (currentValue !== newValue) {
    // Add flip class to start animation
    digitElement.classList.add('flip');
    setTimeout(function() {
      // Set the new value and remove the flip class after animation
      digitElement.textContent = newValue;
      digitElement.classList.remove('flip');
    }, 500); // Flip duration time
  }
}
