var randomNumber1 = Math.floor(Math.random() *6 ) + 1;
var randomImage="dice" +randomNumber1+ ".png";
var randomSrc = "images/"+randomImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomSrc);



var randomNumber2 = Math.floor(Math.random() *6 ) + 1;
var randomImage2="dice" +randomNumber2+ ".png";
var randomSrc2 = "images/"+randomImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomSrc2);


if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="&#128681 Player 1 wins";
} 
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins &#128681";
}
else{
    document.querySelector("h1").innerHTML="&#128681 It's a Draw &#128681";
}
