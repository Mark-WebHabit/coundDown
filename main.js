const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let specificDate = "25 Dec 2022";

function countDown() {
  let bday = new Date(specificDate);
  let currentDate = new Date();

  const secondsBefore = (bday - currentDate) / 1000;

  const day = Math.floor(secondsBefore / 3600 / 24);
  const hour = Math.floor(secondsBefore / 3600) % 24;
  const minute = Math.floor(secondsBefore / 60) % 60;
  const second = Math.floor(secondsBefore) % 60;

  days.innerText = format(day);
  hours.innerText = format(hour);
  minutes.innerText = format(minute);
  seconds.innerText = format(second);
}

function format(value) {
  return value < 10 ? `0${value}` : value;
}

setInterval(countDown, 1000);
