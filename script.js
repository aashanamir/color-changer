// Varibale Declaration
var redBtn = document.getElementById("redBtn");
var yellBtn = document.getElementById("yelBtn");
var grnBtn = document.getElementById("grnBtn");
var myBody = document.body;

// Styling by using js
redBtn.style.background = "red";
yellBtn.style.background = "yellow";
grnBtn.style.background = "green";

// Event Listen

redBtn.addEventListener("click", function(){
    document.body.style.background = "red";
});

grnBtn.addEventListener("click", function(){
    document.body.style.background = "green";

});

yellBtn.addEventListener("click", function(){
    document.body.style.background = "yellow";
});