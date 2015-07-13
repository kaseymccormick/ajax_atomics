var finishLinks = document.getElementsByClassName("done_link");

for (var i=0; i < finishLinks.length; i++) {
  // finishLinks[i] represents each of the items in `finishLinks`.
  //loop above created, needs to acheive -> marks task as finished
  var task = document.getElementById("/tasks/mark_as_done/<%= task.id %>")
  var tagContent = document.getElementsByTagName("a")[0].textContent; (returns mark done)
  //
  // function myFunction() {
  //     var x = document.getElementsByTagName("BUTTON")[0].textContent;
  //     document.getElementById("demo").innerHTML = x;  
  //}
}
alert(tagContent)
function finished(){
  document.getElementById("").className = "task finished"
}

when click on mark done
1
2
3
4