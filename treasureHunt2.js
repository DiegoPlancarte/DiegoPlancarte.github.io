//var bowser = document.createElement('img');
//    bowser.src = assets/bowser40.png;
var count = 0
var lives = 3

function treasure(location){
//declares a click count variable
//    var count = 0
//determines a random number
    var randomNum = Math.floor(Math.random() * 100)
    randomNum;
//bowser case
    if (document.getElementById(location).innerHTML !== "<img src=\"assets/block40.png\" alt=\"Mystery block\">") {
    }
    else if (randomNum >= 96) {
        document.getElementById(location).innerHTML = "<img src='assets/bowser40.png' alt='bowser'/>";
        lives = 0
        loser(lives)
            }
//plant case
    else if (randomNum >= 86){
        document.getElementById(location).innerHTML = "<img src='assets/plant40.png' alt='plant'/>"
        lives = lives - 1
        loser(lives)
    }
//peach case
    else if (randomNum >= 76){
        document.getElementById(location).innerHTML = "<img src='assets/peach40.png' alt='peach'/>"
        count = count + 10}
//luigi case
    else if (randomNum >= 66){
        document.getElementById(location).innerHTML = "<img src='assets/luigi40.png' alt='luigi'/>"
        count = count + 5}
// coin case
    else if (randomNum >= 41){
        document.getElementById(location).innerHTML = "<img src='assets/coin40.png' alt='coin'/>"
        count++}
//nothing case
    else {
        document.getElementById(location).innerHTML = ""}
// increase count
//        count++
        document.getElementById("counter").innerHTML = count
        document.getElementById("lifeCounter").innerHTML = lives
}
function loser(lives) {
    if (lives == 0) {
            setTimeout(function(){alert("You lose Sucka! You scored " + count),1000})}
    else {

    }
}
