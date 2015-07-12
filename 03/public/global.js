
//using solution for global-solution-1 because document.getElementById("clicker"").onclick = new KMLHttpRequest() worked until step 2 of this atomic.


//  ----------------------------I don't know what this line is for----------------------------------

var myLink = document.getElementById("clicker");

var handleTheClick = function(event){
  var req = new XMLHttpRequest();
  var theLink = this;
  
  req.open("get", theLink.getAttribute("href"));

  req.addEventListener("load", function(){
    theLink.innerText= this.response
  });

  req.send();
  
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

// When the link is clicked, run the above code.
myLink.addEventListener("click", handleTheClick);