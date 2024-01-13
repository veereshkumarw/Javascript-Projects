const monthInd = new Date().getMonth();
const todate = new Date().toDateString();

const lastday = new Date(new Date().getFullYear(), monthInd+1, 0).getDate();
//this will give current month last date. new Date(year,month,date,hours,minutes,.......); index starts with 0--jan 
//if date = 0, then it will give previous month last date i.e., if curr mon = march, then it will give 28 bcoz last mon feb has 28 days

const firstday = new Date(new Date().getFullYear(), monthInd, 1).getDay();
// it gives day number 3 i.e., mon tues wed, => 1 date comes on wed, 

const dmonth = document.querySelector(".tdate h1");
const ddate = document.querySelector(".tdate p");
const dday = document.querySelector(".days");

const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

console.log(firstday);
dmonth.innerHTML = months[monthInd];
ddate.innerHTML = todate;

let days="";

for(let i=firstday; i>1; i--){
    days += `<div class="empty"></div>`;
    
}

for(let i=1; i<=lastday; i++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    }else{
        days += `<div>${i}</div>`;
}
    
}



dday.innerHTML = days;

