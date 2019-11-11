
//tells a funny joke
alert("Why did the chicken cross the road? To get to the other side.")

//promts the user for their name and returns a greeting
var yourName = prompt("What is your name?")
alert("Hello, " + yourName)

//prompts the user for inputs before returning a funny story
function funStory(){
    var adjective = prompt("Please enter an adjective");
    var noun = prompt("Please enter a noun");
    var liquid = prompt("Please enter a liquid");
    var bodyPart = prompt("Please enter a body part");
    var verb = prompt("Please enter a verb");
    var anotherNoun = prompt("Please enter another noun");
    var place = prompt("Please enter a place");

    alert(`Piranhas are more ${(adjective)} during the day, so make sure you cross the ${(noun)} at night. Piranhas are attracted to fresh ${(liquid)} and will most likely take a bite out of your ${(bodyPart)} if you ${(verb)}. Whatever you do, if you have an open ${(anotherNoun)} try and find another way to get back to ${(place)}. Good luck!`);}
funStory()

//premium knock-knock joke
function knockKnock(){
    prompt("Knock knock!");
    prompt("Mikey");
    alert("Mikey isn't working, can you let me in?");}
knockKnock()

//prompts the user for their name and if they can code and returns an alert
function worldDom(){
    var yourName = prompt("What is your name?");
    var codeSkill = prompt("Can you code?");
    var codeSkillLower = codeSkill.toLowerCase();
    if (codeSkillLower === "yes") {
        alert("You will rule the world " + yourName); }
    else {
        alert("Well, good luck with that.");
    }}
worldDom()

//Magic 8 Ball
function magicEight(){
    var answerOne = "Better not tell you now";
    var answerTwo = "It is decidedly so";
    var answerThree = "Don't count on it";
    var answerFour = "Signs point to yes";
    var answerFive = "Outlook not so good";

    prompt("Ask away!");

    var randomNum = Math.floor(Math.random() * 5);

    if (randomNum === 1) {
        alert(answerOne)}
    else if (randomNum === 2) {
        alert(answerTwo)}
    else if (randomNum === 3) {
        alert(answerThree)}
    else if (randomNum === 4) {
        alert(answerFour)}
    else if (randomNum === 5) {
        alert(answerFive)}
    else {
        alert("Please try again later")
    }
}

magicEight();
