
const countdown = document.querySelector('.countdown');

// When I think I will be done with this
const launchDate = new Date('September 30, 2018 00:00:00').getTime();

// Update is every second
const intvl = setInterval(() => {
 // Get Todays date and time in millisec
 const now = new Date().getTime();

 // Get Distance til launch date
 const distance = launchDate - now;

// Time Calculations 
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display Result

countdown.innerHTML = `
<center>
<div style=" width:600px;">
<div style="font-size: 50px; width:600px;">
<div style="height:70px; float:left; width:150px;">${days}</div>
<div style="height:70px; float:left; width:150px;">${hours}</div>
<div style="height:70px; float:left; width:150px;">${mins} </div>
<div style="height:70px; float:right; width:150px;">${seconds}</div>
</div>

<div style="font-size: 15px; width:600px;">
<div style="height:25px; float:left; width:150px;">Days</div>
<div style="height:25px; float:left; width:150px;">Hours</div>
<div style="height:25px; float:left; width:150px;">Minutes </div>
<div style="height:25px; float:right; width:150px;">Seconds</div> 
</div>
<div>
</center>
  `;

 


// checking if launch date has passed
if(distance < 0) {
  //stop the countdown
  clearInterval(intvl);
  // STyle and ooutput text
  countdown.style.color = '#17a2b8';
  countdown.innerHTML = 'Launched!';
}
}, 1000);




/*------------------------------------------------------------




function countTimeSJS(){
    var now = new Date();
    var eventDate = new Date(2018, 05, 18);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remainderTime = eventTime - currentTime;

    var s = Math.floor(remainderTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;

    setTimeout(coundown, 1000);**/