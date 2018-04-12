var timeStopped = 0;
var totalBags = 0;
var x = 0;

var button = document.getElementById("clickme"),
 totalBags = 0;
button.onclick = function() {
    x++;
    document.getElementById("totalbags").innerHTML = "Total Bags: " + x;
 totalBags -= 1;
 ctx.fillRect(0,300,100,totalBags*4);
};
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0, 89, 179)";

window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMinutes = document.getElementById("mins");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;

  
    buttonStart.onclick = function() {
      
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
          timeStopped = seconds;
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        location.reload();
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens < 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      

      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    

}


function submit(){
    var lbs = x * 17;
    var sub = "Here are your statistics: " + "Total Bags = " + x + "| Time = " + timeStopped + "|" + "Approximate Pounds of Algae = " + lbs;
    alert(sub);
    
};

