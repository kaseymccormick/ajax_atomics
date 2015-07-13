var myLink = document.getElementById("clicker");

var userInput = document.getElementById("word")

var handleTheClick = function(event){
  var thisLink = this;
 
  var req = new XMLHttpRequest();

  req.open("get", "/" + userInput.value);
  // if Judy you wrote Judy is that someone's name
  //if 40 bleh you wrote 40 is that how old you are
  // else you wrote djfla. whatever

  req.addEventListener("load", function(){    
    thisLink.innerText = this.response;
  });

  req.send();
  
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

// When the link is clicked, run the above code.
myLink.addEventListener("click", handleTheClick);