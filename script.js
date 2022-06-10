var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imageSource1 = "dice"+randomNumber1+".png";
var imageSource2 = "dice"+randomNumber2+".png";

// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src",imageSource);

var image1 = document.getElementById("dice1");
image1.setAttribute("src",imageSource1);

var image2 = document.getElementById("dice2");
image2.setAttribute("src",imageSource2);

var header = document.getElementById("heading");

if(randomNumber1>randomNumber2){
    header.innerHTML = "Player1 Won";
}else if(randomNumber1<randomNumber2){
    header.innerHTML = "Player2 Won";
}else{
    header.innerHTML = "It's a Draw";
}
