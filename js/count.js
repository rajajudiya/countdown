let weeks = document.getElementById('weeks');
let days = document.getElementById('days');
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

    let week = 0;
    let day = 0;
    let hr = 0;
    let min = 0;
    let sec = 0;
    setInterval(() => {
        sec++;
        
        // second
        if (sec < 10) {
            seconds.innerHTML = "0" + sec;
        } else {
            seconds.innerHTML = sec;
        }
        if (sec > 59) {
            min++;
            sec = 0;
        }

        
        // minutes
        if (min < 10) {
            minutes.innerHTML = "0" + min;
        } else {
            minutes.innerHTML = min;
        }
        if (min > 59) {
            hr++;
            min = 0;
        }


        // hours
        if (hr < 10) {
            hours.innerHTML = "0" + hr;
        } else {
            hours.innerHTML = hr;
        }
        if (hr > 23) {
            day++;
            hr = 0;
        }
        
        // days
        if (day < 10) {
            days.innerHTML = "0" + day;
        } else {
            days.innerHTML = day;
        }

        if (day > 7) {
            week++;
            day = 0;
        }

        // if (week < 10) {
        //     weeks.innerHTML = "0" + week;
        // } else {
        //     weeks.innerHTML = week;
        // }

        // if (week > 1) {
        //     month++;
        //     week = 0;
        // }
    }, 1000);
        
        



