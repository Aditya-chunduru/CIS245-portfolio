function buttonreveal() {
   document.getElementById("About_me").innerHTML = "Hello, my name is Aditya chunduru"
}


function colorchange() {
   document.getElementById("goals").style.color='red'
}
function colorchangeback() {
   document.getElementById("goals").style.color='black'
}

function bestpart() {
   document.getElementById("solve").innerHTML = "The satisfaction of solving a certain problem that you were stuck on for a few days that you were frustrated about. The cycle goes on but it is so satisfying when you finally do it. "
}
function linkedin() { 
   document.getElementById("")
}

function toggleText() {

   var text = document.getElementById("first_collapsible")
   if (text.style.maxHeight) {
      text.style.maxHeight = null;
   } else {
      text.style.maxHeight = text.scrollHeight + "px"
   }
}

function details() {

   var second_text = document.getElementById("Aditya")
   if (second_text.style.maxHeight) {
      second_text.style.maxHeight = null; 

   } else {
      second_text.style.maxHeight = second_text.scrollHeight + "px"
   }
   }