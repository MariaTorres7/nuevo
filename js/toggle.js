let choiceBox = document.getElementById("choiceBox"); 
let toggleBox = document.getElementById("toggleBox"); 
choiceBox.addEventListener("click", function(){
  if (choiceBox.classList.contains("choiceBox")) {
    choiceBox.classList.add("choice-box-on")
    choiceBox.classList.remove("choiceBox")
    toggleBox.classList.add("toggle-box-on")
   
  }
  else{
    choiceBox.classList.add("choiceBox")
    choiceBox.classList.remove("choice-box-on")
    toggleBox.classList.remove("toggle-box-on")
  }
})


