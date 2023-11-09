let answer = "";
let click = 0;
$("div.btn").on("click", function () {
  const name = $(this).attr("id");
  answer += name;
  console.log(answer);
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  $(this).css("background-color", "#008B8B");
  $(this).css("box-shadow", "5px 5px 70px #008B8B");
  let element = $(this);
  setTimeout(function () {
    element.css("background-color", name);
    element.css("box-shadow", "none");
  }, 100);
  click++;
  if (click === level) check();
});
let patternString = "";
function randomPattern() {
  let buttonArray = ["green", "red", "yellow", "blue"];
  let rand = Math.floor(Math.random() * 4);
  let randButton = buttonArray[rand];
  let audio = new Audio("sounds/" + randButton + ".mp3");
  audio.play();
  patternString += randButton;
  console.log(patternString);
  $("." + randButton).css("opacity", 0.2);
  let element = $("." + randButton);
  setTimeout(function () {
    element.css("opacity", 1);
  }, 100);
}

function buildRandomPattern(n) {
  let i = n;
  while (i--) {
    setTimeout(function () {
      randomPattern();
    }, 750 * (n - i));
  }
}
let level = 1;
function play() {
  answer = "";
  patternString = "";
  click = 0;
  $("body").css("background-color", "#011F3F");
  $(".play").html("Play");
  $("#level-title").html("LEVEL " + level);
  buildRandomPattern(level);
}
function gameEnd() {
  $("body").css("background-color", "red");
  $("#level-title").html("Game Over");
  $(".play").html("Reset");
  level = 1;
}
function check() {
  console.log("WORKING CONDITION");
  if (answer === patternString) {
    level++;
    answer = "";
    patternString = "";
    click = 0;
    setTimeout(function () {
      play();
    }, 300);
  } else {
    gameEnd();
  }
}
