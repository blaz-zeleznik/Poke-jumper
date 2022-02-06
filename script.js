var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}
var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 550 && blockLeft > 540 && characterTop >= 400) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("OH NOE U loser");
  }
}, 10);
