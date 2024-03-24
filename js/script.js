let $ = document;

let hourElem = $.querySelector("#hour");
let minuteElem = $.querySelector("#minute");
let secondsElem = $.querySelector("#seconds");

function clock() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  hourElem.innerHTML = hour;
  minuteElem.innerHTML = minute;
  if (seconds < 10) {
    secondsElem.innerHTML = "0" + seconds;
  } else {
    secondsElem.innerHTML = seconds;
  }
}

setInterval(clock, 1000);
