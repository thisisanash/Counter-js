let log = (num) => {
    console.log("hey" + num);
}

const monthsName = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const weekdaysName = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
];

zeroNeed = (num) => {
    if (num < 10) {
        num = `0${num}`;
    }
    // else {no need to add 0}
    return num;
}

let formatHours = (num) => {
    if (num > 12) {
        num = num - 12;
        zeroNeed(num);
    }
    return num;
}


// let cur = Current

let curDate = new Date();

// Navbar today date and time
function getTime() {

    let today = document.querySelector(".current-date");
    let todayTime = document.querySelector(".current-time");

    today.textContent = `${curDate.getDate()} ${monthsName[curDate.getMonth()]}, ${weekdaysName[curDate.getDay()]}`;

    let now = new Date();
    let nowTime = now.getHours();

    if (nowTime > 12) {
        nowTime = nowTime - 12;
        todayTime.textContent = zeroNeed(nowTime) + " : " + zeroNeed(now.getMinutes()) + " PM"
    }
    else {
        todayTime.textContent = zeroNeed(nowTime) + " : " + zeroNeed(now.getMinutes()) + " AM"
    }
}
setInterval(getTime, 1000);
getTime();



// ---------------------------
//
// Countdown
//
// ---------------------------



let dashBoard = document.querySelector(".dashBoard").textContent;

mins.value = `25`;

let CountdownRun = false;

function Countdown() {

    if(!CountdownRun){
        clearInterval(CountdownInterval);
    }

    let hours = document.querySelector("#hours");
    let mins = document.querySelector("#mins");
    let secs = document.querySelector("#secs");


    if (secs.value == '00') {
        if (mins.value == '00') {
            if (hours.value == '00') {
                dashBoard = "The Countdown is end";

                CountdownRun = false;
            }
            else {
                hours.value = parseInt(mins.value) - 1;
                hours.value = zeroNeed(parseInt(hours.value));

                mins.value = '59    '
                log(' hours else')
            }
        }
        else {
            mins.value = parseInt(mins.value) - 1;
            mins.value = zeroNeed(parseInt(mins.value));

            secs.value = '59'

            log(' mins else')
        }
    }
    else {
        secs.value = parseInt(secs.value) - 1;
        secs.value = zeroNeed(parseInt(secs.value));

        log(' secs else')
    }

}


let startFunction = () => {

}

let btns = document.querySelector(".main .btns");

let start = btns.querySelector("#start");
let pause = btns.querySelector("#pause");
let restart = btns.querySelector("#restart");

let CountdownInterval;

start.addEventListener("click", function () {
    if (!CountdownRun) {
        CountdownInterval = setInterval(Countdown, 1000);

        restart.classList.remove("disable");
        pause.classList.remove("disable");

        start.classList.add("in-action");
        pause.classList.remove("in-action");

        CountdownRun = true;
    }
})

pause.addEventListener("click", function () {
    if (CountdownRun) {
        clearInterval(CountdownInterval);

        if (restart.classList.contains("disable")) {
            restart.classList.remove("disable");
        }
        pause.classList.add("in-action");
        start.classList.remove("in-action");

        CountdownRun = false;
    }
})

restart.addEventListener("click", function () {
    document.querySelector("#hours").value = '00';
    document.querySelector("#mins").value = '00';
    document.querySelector("#secs").value = '00';

    start.classList.remove("in-action");
    pause.classList.remove("in-action");

    restart.classList.add("disable");
    pause.classList.add("disable");

    clearInterval(CountdownInterval);
    CountdownRun = false;

    document.querySelector(".dashBoard").textContent = 'Set Countdown in Below Boxes';
})