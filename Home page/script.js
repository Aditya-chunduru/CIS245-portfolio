function buttonreveal() {
   document.getElementById("About_me").innerHTML = "Hello, my name is Aditya chunduru"
}


function colorchange() {
   document.getElementById("goals").style.color='red'
}
function colorchangeback() {
   document.getElementById("goals").style.color='black'
}






function details() {

   var second_text = document.getElementById("Aditya")
   if (second_text.style.maxHeight) {
      second_text.style.maxHeight = null; 

   } else {
      second_text.style.maxHeight = second_text.scrollHeight + "px"
   }
   }

function bestpart() {

   var second_text = document.getElementById("part")
   if (second_text.style.maxHeight) {
         second_text.style.maxHeight = null; 
   
   } else {
      second_text.style.maxHeight = second_text.scrollHeight + "px"
   }
   }

