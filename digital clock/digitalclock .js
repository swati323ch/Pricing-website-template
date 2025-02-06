const hourE1 = document.getElementById("hours");//to get these elements from HTML page
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm"); // Typo corrected
//create a function to get data from our computer
function updateClock(){
 //get hour using dates constructor
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h= h<10 ? "0" + h : h;
    m=m<10 ? "0" + m : m;
    s=s<10 ?"0" + s : s;


    hourE1.innerText = h;
    minutesE1.innerText = m;
    secondsE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(() =>{
        updateClock()
    }, 1000)

}
updateClock();
