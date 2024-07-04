// alert("heloo");

var level=0;
var start=false;

$(document).keypress(function(event){
    // console.log(event.key);
    if(start==false){
        start=true;
        nextSequence();
    }
  
});


var userClickedPattern=[];
var gamePattern =[];

var buttonColours=[];
buttonColours=["red","blue","green","yellow"];
var randomChosenColour;
var currentLevel;

    function nextSequence(){
        userClickedPattern=[];
        level++;
         randomNumber = (Math.random())*4;
        randomNumber=Math.floor(randomNumber);
        $("h1").text("Level "+level);
        randomChosenColour=randomNumber;
switch(randomChosenColour){
    case 0:
        randomChosenColour="red";
        break;
    case 1:
        randomChosenColour="blue";
        break;
    case 2:
        randomChosenColour="green";
        break;
    case 3:
        randomChosenColour="yellow";
        break;
}

gamePattern.push(randomChosenColour);
var s1="#";
var s2=randomChosenColour;
var s3=s1+s2;

setTimeout(function () { 
    $(s3).fadeOut(200) 
    $(s3).fadeIn(600) 
},1500) ;

playSound(randomChosenColour);

    }


    var userChosenColour;
var index;
$("div div div").on('click',function(){
  
     userChosenColour=(this.id);
     userClickedPattern.push(userChosenColour);
         currentColour=(this);
    animatePress();
    playSound(userChosenColour);

    console.log(userChosenColour);

    
    index=userClickedPattern.length-1;
    checkAnswer(index);
});

function animatePress(){
    $(currentColour).addClass("pressed");
    setTimeout(function() {
        $("div div div").removeClass("pressed");
    }, 100);
}
var currentLevel;
function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
    console.log("success");

if(userClickedPattern.length==gamePattern.length){
    setTimeout(nextSequence(),1000);
}

}else{
    playSound("wrong");
    $("body").addClass("game-over");
    console.log("wrong");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },1000);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
}
}
function playSound(userChosenColour){
    var audio = new Audio (userChosenColour + ".mp3");
    audio.play();
}
function startOver(){
    start=false;
    level=0;
    gamePattern = [];
}
    






