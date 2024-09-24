let hour = document.querySelector(".hour h1 ")
let minute = document.querySelector(".minute h1 ")
let second = document.querySelector(".second h1 ")
let ampm = document.querySelector(".am  h1")
let title = document.querySelector(".content h1")
setInterval(() => {
    let hour2 = new Date().getHours();
    let minute2 = new Date().getMinutes();
    let second2 = new Date().getSeconds();

    let am = (hour2 >= 12) ? "PM!" : "AM!";
    let displayHour = (hour2 % 12) || 12;

    hour.innerHTML = displayHour + ":";
    minute.innerHTML = minute2 + ":";
    second.innerHTML = second2;
    ampm.innerHTML = am;

    if (hour2 >= 6 && hour2 < 12 && am === "AM!") {
        title.innerHTML = "\"Good Morning\"";
    } else if (hour2 >= 12 && hour2 < 18 && am === "PM!") {
        title.innerHTML = "\"Good Afternoon\"";
    } else {
        title.innerHTML = "\"Good Night\"";
    }


}, 1000)



