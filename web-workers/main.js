
 function fibonacciCount() {
    var f;
    var n = document.getElementById("n").value;
    if(typeof(Worker) !== "undefined") {
      f = new Worker("fibonacci.js");
      f.postMessage(n);
      f.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } 
 }

 function silniaCount() {
   var silnia;
   var s = document.getElementById("s").value;
   if (typeof(Worker) !== "undefined") {
       silnia = new Worker("silnia.js");
       console.log(s)
       silnia.postMessage(s);
       console.log(s)
       silnia.onmessage = function(event) {
       document.getElementById("resultsilnia").innerHTML = event.data;
       };
   } 
 }
