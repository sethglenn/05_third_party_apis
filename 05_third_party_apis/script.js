
// Variables
var events = document.querySelectorAll(".event");
var current = document.querySelector("#currentDay");
var input = document.querySelector("#formGroupExampleInput");
var saveButton = document.querySelector(".btn-dark");

// Day.js for time keeping
var current = dayjs().hour(12);


$("#currentDay",).text(current);

// Function to save data

function saveDataRender (){
    var schedule = localStorage.getItem("schedule");

    if (!schedule){
        return;
    }  
}
saveButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    
  });
