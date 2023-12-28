// YYYY-MM-DDTHH:MM:SS"
let userInputDate = prompt("Enter Date in this format '2023-09-06'");
let userInputTime = prompt("Enter Time in this format '13:00:00'");
let endDate = new Date(`${userInputDate}T${userInputTime}`);
console.log(endDate);
console.log(returnHms(endDate));

function returnHms(endDate) {
  let today = new Date();
  milliseconds = endDate - today;
  let seconds = Math.floor((milliseconds / 1000) % 60),
    minutes = Math.floor((milliseconds / (1000 * 60)) % 60),
    hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds;
}
// 2023-09-05
// 13:00:00
