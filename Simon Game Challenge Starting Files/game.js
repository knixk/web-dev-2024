const gamePattern = [];
const userClickPattern = [];
let level = 0;
let gameStarted = false;
const buttonColours = ["red", "blue", "green", "yellow"];

$("document").keypress(() => {
  if (!started) {
    $("h1").text("Level: " + level);
  }

  started = true;
  nextSequence();
});

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4);
  var ans = buttonColours[randomNum];
  gamePattern.push(ans);

  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + ans)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("./sounds/" + ans + ".mp3");
  // debugger;
  // audio.play();
}

// nextSequence();

// $('h1').hide()
$("body").click((e) => {
  const { id } = e.target;
  if (id) {
    userClickPattern.push(id);

    $("#" + id)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);

    var audio = new Audio("./sounds/" + id + ".mp3");
    // debugger;
    audio.play();
  }
});

function playAudio() {
  return;
}

function animateAction(id) {
  return;
}

function checkRightMove() {
  return;
}
