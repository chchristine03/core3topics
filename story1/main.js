function displayCurrentTime() {
  const now = new Date();
  
  // Extract hours, minutes, seconds, and milliseconds
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Format the time
  const currentTime = `${hours}:${minutes}:${seconds}`;
  
  // Display in the element with id="time"
  document.getElementById("time").innerText = currentTime;
}

// Call the function every 10 milliseconds to update the time dynamically
setInterval(displayCurrentTime, 10);

const divElement = document.querySelector('.backcandle'); 

divElement.addEventListener('click', function() {
  window.location.href = 'https://chchristine03.github.io/core3topics/index.html';
});