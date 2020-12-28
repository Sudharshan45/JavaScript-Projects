const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const newYears='1 Jan 2021';

function countdown(){
    const newYearDate=new Date(newYears);
    const currentDate=new Date();
    const totalseconds=(newYearDate-currentDate)/1000;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const minutes=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;
  daysEl.innerHTML = days;
  hoursEl.innerHTML=formatTime(hours);
  minsEl.innerHTML=formatTime(minutes)
  secondsEl.innerHTML=formatTime(seconds);
    console.log(days,hours,minutes,seconds);
   
}
//intial call
countdown();
function formatTime(time)
{
    return time<10 ? `0${time}`:time;
}
setInterval(countdown,1000);

