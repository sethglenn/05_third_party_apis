
// Variables
var events = document.querySelectorAll(".event");
var current = document.querySelector("#currentDay");
var input = document.querySelector("#data");
var saveButton = document.querySelector(".btn-dark");

var tenEl = document.querySelector("#form1");
var elevenEl = document.querySelector("#form2");
var twelveEl = document.querySelector("#form3");
var oneEl = document.querySelector("#form4");
var twoEl = document.querySelector("#form5");
var threeEl = document.querySelector("#form6");
var fourEl = document.querySelector("#form7");
var fiveEl = document.querySelector("#form8");

// Day.js for time keeping
var current = dayjs().format("MM/DD/YYYY H:mm");


$("#currentDay",).text(current);

// Function to save data

renderData();

function renderData(){
    
    // var stor = localStorage.getItem("data");

     var stor = JSON.parse(localStorage.getItem("data"));

    document.getElementById("data").innerHTML = stor;
}

// on click function

$(".btn-dark").on("click", function(event) {
    event.preventDefault();

    // input = document.getElementById("data");

    var input = document.querySelector("#data").value;

    localStorage.setItem("data", JSON.stringify(input));
  
    // localStorage.getItem(input);

    console.log(input);
    
     renderData();
    
});

//Change Colors of Blocks based on time

if (dayjs().format("H") == $(input).attr("current-day"))
    $(input).addClass("bg-secondary");
else if (dayjs().format("H") > $(input).attr("current-day"))
    $(input).addClass("bg-danger");
else (dayjs().format("H") < $(input).attr("current-day"))
    $(input).addClass("bg-success");