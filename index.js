// Your code here
// Initial setup: place the dodger in the initial position
const dodger = document.getElementById('dodger');
dodger.style.left = '0px';

// Function to move the dodger to the left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  const rightLimit = 360; // The right edge of the game area minus the width of the dodger (400px - 40px)

  if (left < rightLimit) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Adding the event listener for keydown events
document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});