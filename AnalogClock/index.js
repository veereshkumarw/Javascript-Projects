const hourEle = document.querySelector(".hour");
const minuteEle = document.querySelector(".minute");
const secondEle = document.querySelector(".second");

function timeAnalog () {
    const timee = new Date();
    const hour = timee.getHours();
    const minute = timee.getMinutes();
    const second = timee.getSeconds();

    const hdeg = (hour/12)*360;
    hourEle.style.transform = `rotate(${hdeg}deg)`;
    const mdeg = (minute/60)*360;
    minuteEle.style.transform = `rotate(${mdeg}deg)`;
    const sdeg = (second/60)*360;
    secondEle.style.transform = `rotate(${sdeg}deg)`;

}

setInterval(timeAnalog,1000);
