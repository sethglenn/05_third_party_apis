// Variables
var events = document.querySelectorAll(".event");
var current = document.querySelector("#currentDay");
var input = document.querySelector("#data");
var saveButton = document.querySelector(".btn-dark");
// Time Variables
var nineEl = document.querySelector("#form0");
var tenEl = document.querySelector("#form1");
var elevenEl = document.querySelector("#form2");
var twelveEl = document.querySelector("#form3");
var oneEl = document.querySelector("#form4");
var twoEl = document.querySelector("#form5");
var threeEl = document.querySelector("#form6");
var fourEl = document.querySelector("#form7");
var fiveEl = document.querySelector("#form8");

// Blocked out, attempt to clean up functions

// var formEl = [nineEl, tenEl, elevenEl, twelveEl, oneEl, twoEl,
//     threeEl, fourEl, fiveEl,];
//     for (var i = 0; i < formEl.length; i++){

//     }

// Day.js for time keeping
var current = dayjs().format("MM/DD/YYYY H:mm");


$("#currentDay",).text(current);

// Function to save data

changeColor();
renderData();

function renderData() {

    // var stor = localStorage.getItem("data");
    var stor = JSON.parse(localStorage.getItem("form0"));

    document.getElementById("form0").value = stor;

    var stor = JSON.parse(localStorage.getItem("form1"));

    document.getElementById("form1").value = stor;

    var stor = JSON.parse(localStorage.getItem("form2"));

    document.getElementById("form2").value = stor;

    var stor = JSON.parse(localStorage.getItem("form3"));

    document.getElementById("form3").value = stor;

    var stor = JSON.parse(localStorage.getItem("form4"));

    document.getElementById("form4").value = stor;

    var stor = JSON.parse(localStorage.getItem("form5"));

    document.getElementById("form5").value = stor;

    var stor = JSON.parse(localStorage.getItem("form6"));

    document.getElementById("form6").value = stor;

    var stor = JSON.parse(localStorage.getItem("form7"));

    document.getElementById("form7").value = stor;

    var stor = JSON.parse(localStorage.getItem("form8"));

    document.getElementById("form8").value = stor;
}
    // on click function

    $(".btn-dark").on("click", function (event) {
        event.preventDefault();


        var form0 = document.querySelector("#form0").value;

        localStorage.setItem("form0", JSON.stringify(form0));

        var form1 = document.querySelector("#form1").value;

        localStorage.setItem("form1", JSON.stringify(form1));

        var form2 = document.querySelector("#form2").value;

        localStorage.setItem("form2", JSON.stringify(form2));

        var form3 = document.querySelector("#form3").value;

        localStorage.setItem("form3", JSON.stringify(form3));

        var form4 = document.querySelector("#form4").value;

        localStorage.setItem("form4", JSON.stringify(form4));

        var form5 = document.querySelector("#form5").value;

        localStorage.setItem("form5", JSON.stringify(form5));

        var form6 = document.querySelector("#form6").value;

        localStorage.setItem("form6", JSON.stringify(form6));

        var form7 = document.querySelector("#form7").value;

        localStorage.setItem("form7", JSON.stringify(form7));

        var form8 = document.querySelector("#form8").value;

        localStorage.setItem("form8", JSON.stringify(form8));


        renderData();
    });

//Change Colors of Blocks based on time
function changeColor() {

        if (dayjs().format("H") == $(nineEl).attr("current-day"))
            $(nineEl).addClass("bg-light");
        else if (dayjs().format("H") > $(nineEl).attr("current-day"))
            $(nineEl).addClass("bg-danger");
        else (dayjs().format("H") < $(nineEl).attr("current-day"))
        $(nineEl).addClass("bg-success");

        if (dayjs().format("H") == $(tenEl).attr("current-day"))
            $(tenEl).addClass("bg-light");
        else if (dayjs().format("H") > $(tenEl).attr("current-day"))
            $(tenEl).addClass("bg-danger");
        else (dayjs().format("H") < $(tenEl).attr("current-day"))
        $(tenEl).addClass("bg-success");

        if (dayjs().format("H") == $(elevenEl).attr("current-day"))
            $(elevenEl).addClass("bg-light");
        else if (dayjs().format("H") > $(elevenEl).attr("current-day"))
            $(elevenEl).addClass("bg-danger");
        else (dayjs().format("H") < $(elevenEl).attr("current-day"))
        $(elevenEl).addClass("bg-success");

        if (dayjs().format("H") == $(twelveEl).attr("current-day"))
            $(twelveEl).addClass("bg-light");
        else if (dayjs().format("H") > $(twelveEl).attr("current-day"))
            $(twelveEl).addClass("bg-danger");
        else (dayjs().format("H") < $(twelveEl).attr("current-day"))
        $(twelveEl).addClass("bg-success");

        if (dayjs().format("H") == $(oneEl).attr("current-day"))
            $(oneEl).addClass("bg-light");
        else if (dayjs().format("H") > $(oneEl).attr("current-day"))
            $(oneEl).addClass("bg-danger");
        else (dayjs().format("H") < $(oneEl).attr("current-day"))
        $(oneEl).addClass("bg-success");

        if (dayjs().format("H") == $(twoEl).attr("current-day"))
            $(twoEl).addClass("bg-light");
        else if (dayjs().format("H") > $(twoEl).attr("current-day"))
            $(twoEl).addClass("bg-danger");
        else (dayjs().format("H") < $(twoEl).attr("current-day"))
        $(twoEl).addClass("bg-success");

        if (dayjs().format("H") == $(threeEl).attr("current-day"))
            $(threeEl).addClass("bg-light");
        else if (dayjs().format("H") > $(threeEl).attr("current-day"))
            $(threeEl).addClass("bg-danger");
        else (dayjs().format("H") < $(threeEl).attr("current-day"))
        $(threeEl).addClass("bg-success");

        if (dayjs().format("H") == $(fourEl).attr("current-day"))
            $(fourEl).addfourElClass("bg-light");
        else if (dayjs().format("H") > $(fourEl).attr("current-day"))
            $(fourEl).addClass("bg-danger");
        else (dayjs().format("H") < $(fourEl).attr("current-day"))
        $(fourEl).addClass("bg-success");

        if (dayjs().format("H") == $(fiveEl).attr("current-day"))
            $(fiveEl).addClass("bg-light");
        else if (dayjs().format("H") > $(fiveEl).attr("current-day"))
            $(fiveEl).addClass("bg-danger");
        else (dayjs().format("H") < $(fiveEl).attr("current-day"))
        $(fiveEl).addClass("bg-success");

    }

