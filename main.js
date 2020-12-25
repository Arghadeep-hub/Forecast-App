const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");
// Weather condition check
const tempStatus = "{%tempStatus%}";
if (tempStatus == "Sunny") {
  weathercon.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
} else if (tempStatus == "Clouds") {
  weathercon.innerHTML = "<i class='fas fa-cloud' style='color: #dfe4ea'></i>";
} else if (tempStatus == "Rainy") {
  weathercon.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be'></i>";
} else {
  weathercon.innerHTML = "<i class='fas fa-cloud' style='color: #44c3de'></i>";
}

const getCurrentDay = () => {
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  let getCurrentTime = new Date();
  let day = weekday[getCurrentTime.getDay()];
  return day;
};
const getCurrentTime = () => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let now = new Date();
  var month = months[now.getMonth()];
  var date = now.getDate();

  let hours = now.getHours();
  let mins = now.getMinutes();
  let periods = "AM";

  if (hours > 11) {
    periods = "PM";
    if (hours > 12) hours -= 12;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }

  return `${month} ${date} | ${hours}:${mins}${periods}`;
};
curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();
