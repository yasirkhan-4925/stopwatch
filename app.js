var hrs=0;
var min=0;
var sec=0;
var milisec=0;
var intervel;
var hrsHeading=document.getElementById("hrs");
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var milisecHeading=document.getElementById("milisec");

function timer()
{
    milisec++
    milisecHeading.innerHTML=milisec;
    if(milisec==100)
    {
        milisec=0;
        sec++;
        secHeading.innerHTML=sec;
    } else if(sec==60)
    {
         sec=0;
         min++;
         minHeading.innerHTML=min;
    }
    else if(min==60)
    {
         min=0;
         hrs++;
         hrsHeading.innerHTML=hrs;
    }
}

function start()
{
intervel= setInterval(timer,10);
 var startbtn=document.getElementById("startbtn");
 startbtn.disabled=true;
 startbtn.innerHTML="running";
}

function stop()
{
     clearInterval(intervel);
     var startbtn=document.getElementById("startbtn");
     startbtn.disabled=false;
     startbtn.innerHTML="START"
   


}

function reset()
{
     
     hrs=0;
     sec=0;
     min=0;
     milisec=0;
     hrsHeading.innerHTML=hrs;
     minHeading.innerHTML=min;
     secHeading.innerHTML=sec;
     milisecHeading.innerHTML=milisec;
     var startbtn=document.getElementById("startbtn");
     startbtn.innerHTML="START";
     startbtn.disabled=false;
     clearInterval(intervel);
}