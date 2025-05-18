const time = document.getElementById("timer");
document.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const fullYear = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const newTime=`${month}/${date}/${fullYear}, ${hours<12?hours:hours-12}:${minutes}:${seconds} ${hours<12?"AM":"PM"}`
    time.textContent=newTime;
  }, 1000);
});
