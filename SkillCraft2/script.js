let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;


function stopwatch(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }


    let h = hours < 10 ? "0"+hours : hours;
    let m = minutes < 10 ? "0"+minutes : minutes;
    let s = seconds < 10 ? "0"+seconds : seconds;


    document.getElementById("display").innerHTML =
        h + ":" + m + ":" + s;

}



function start(){

    if(timer !== null)
        return;

    timer = setInterval(stopwatch,1000);

}



function pause(){

    clearInterval(timer);
    timer=null;

}



function reset(){

    clearInterval(timer);
    timer=null;

    hours=0;
    minutes=0;
    seconds=0;

    document.getElementById("display").innerHTML="00:00:00";

    document.getElementById("laps").innerHTML="";

}



function lap(){

    let time=document.getElementById("display").innerHTML;

    let li=document.createElement("li");

    li.innerHTML="Lap: "+time;

    document.getElementById("laps").appendChild(li);

}