const drums = document.querySelectorAll(".drum");
const n = drums.length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //   var buttonInnerHTML = this.innerHTML;
    this.style.color = "white";
    console.log("clicked");
    whichKey(this.innerHTML);
    animate(this.innerHTML);
  });
}

function whichKey(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log();
  }
}

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  whichKey(e.key);
  animate(e.key);
});

function animate(btn) {
  const activeBtn = document.querySelector("." + btn);

  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 500);
}
