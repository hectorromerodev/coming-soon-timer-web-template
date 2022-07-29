// Setup end date for countdown 
let launchDate = new Date('Jan 1, 2028 12:00:00').getTime();

// Setup timer to tick every second.
let timer = setInterval(tick, 1000);

function tick() {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches zero.
  let timeLeft = launchDate - now;
  // Check if time is above 0
  if (timeLeft > 0) {
    // Setup Days, hours, seconds and minutes

    // 1. Calculate days...
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    if (days < 10) days = "0" + days;

    // 2. Calculate hours...
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    if (hours < 10) hours = "0" + hours;

    // Calculate minutes...
    let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) mins = "0" + mins;

    // Calculate seconds...
    let secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if (secs < 10) secs = "0" + secs;


    // Create time string;
    let time = `${days}d : ${hours}h : ${mins}m : ${secs}s`

    // Set time on document
    document.querySelector('.countdown').innerText = time;
  }
}