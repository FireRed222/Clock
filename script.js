
setInterval(() => {
    let clock = document.querySelector("#clock");
    let day = document.querySelector("#day");
    let month = document.querySelector("#month");
    let year = document.querySelector("#year");
    let amPm = document.querySelector("#am_pm");
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if (minutes <= 9) {
        minutes = `0${minutes}`;
    }
    if (hours <= 9) {
        hours = `0${hours}`;
    }
    if (seconds <= 9) {
        seconds = `0${seconds}`;
    }
    
    if (hours < 12) {
        amPm.innerHTML = 'AM';
    }
    else {
        amPm.innerHTML = 'PM';
    }
    
    if (hours > 12) {
        hours -= 12;
        hours = `0${hours}`;
    
    }
    
    let cDate = date.getDate();
    let cMonths = date.getMonth() + 1;
    let cYear = date.getFullYear();
    let cDay = date.getDay();
    
    if (cDate <= 9) {
        cDate = `0${cDate}`;
    }
    
    if (cMonths <= 9) {
        cMonths = `0${cMonths}`;
    }
    
    let daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
    
    day.innerHTML = daysNames[cDay] + " | " + cDate + " -";
    month.innerHTML = cMonths + "   -";
    year.innerHTML = cYear;
    
}, 1000);











