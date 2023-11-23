const boxes = document.querySelectorAll('.card');

let isDragging = false;
let currentBox = null;
let offsetX, offsetY;
const myAudio = document.getElementById("dandelions");
var btn1 = document.getElementById("btn1");
var instructions = document.getElementById("instructions");
var lines = document.querySelector(".lines");
var container = document.querySelector(".container")
var lyrics = document.querySelector(".lyrics");

btn1.addEventListener("click", () => {
  container.style.display = "block";
  lines.style.visibility = "visible";
  myAudio.play();
  btn1.style.display = "none";
  instructions.style.display = "block"
  lyrics.style.display = "flex"
  setTimeout(() => {
    lyrics.style.display = "none";
  }, 25200);
}
);

function bringBoxToTop(box) {
  boxes.forEach((box) => {
    box.style.zIndex = '1';
  });
  box.style.zIndex = '2';
}

boxes.forEach(box => {
  box.addEventListener("mousedown", (event) => {
    isDragging = true;
    currentBox = box;
    offsetX = event.clientX - currentBox.getBoundingClientRect().left;
    offsetY = event.clientY - currentBox.getBoundingClientRect().top;
    currentBox.style.cursor = "grabbing";
    bringBoxToTop(currentBox);
  });
  
  document.addEventListener("mousemove", (event) => {
    if (isDragging && currentBox !== null) {
      currentBox.style.left = event.clientX - offsetX + 'px';
      currentBox.style.top = event.clientY - offsetY + 'px';
    }
  });
  
  document.addEventListener("mouseup", () => {
    if (isDragging && currentBox !== null) {
      isDragging = false;
      currentBox.style.cursor = "grab";
      currentBox = null;
    }
  });
});