const niniHome = document.querySelector('.nini-home');
const hoverSound = document.querySelector('#hoverSound');


let hasInteracted = false;


window.addEventListener('click', function() {
    hasInteracted = true;
});


niniHome.addEventListener('mouseenter', function() {
    if (hasInteracted) {
        hoverSound.play().catch(function(error) {
            console.log("Error playing sound:", error);
        });
    }
});

niniHome.addEventListener('mouseleave', function() {
    hoverSound.pause();
    hoverSound.currentTime = 0;
});


document.addEventListener("DOMContentLoaded", function () {
    const keychain = document.querySelector(".keychain");
    const nyahAudio = document.getElementById("nyahAudio");

    keychain.addEventListener("mouseenter", function () {
        nyahAudio.currentTime = 0; 
        nyahAudio.play().catch(error => console.log("Playback error:", error)); 
    });
});



  function playAudio() {
    var audio = document.getElementById('surprisedAudio');
    audio.play(); // Play the audio
}

// Function to stop the audio when the hover ends
function stopAudio() {
    var audio = document.getElementById('surprisedAudio');
    audio.pause(); // Pause the audio
    audio.currentTime = 0; // Reset the audio to the beginning
}



function playBark() {
    var audio = document.getElementById('barkAudio');
    audio.play(); // Play the bark audio
}

function stopBark() {
    var audio = document.getElementById('barkAudio');
    audio.pause(); // Pause the bark
    audio.currentTime = 0; // Reset to the start
}

function showText() {
    var text = document.getElementById('churro-text');
    text.classList.add('show'); // Show the churro pun text
    text.style.display = 'block'; // Make sure the text is set to block when hovered
}

function hideText() {
    var text = document.getElementById('churro-text');
    text.classList.remove('show'); // Hide the churro pun text
    text.style.display = 'none'; // Reset text visibility after hover
}

function playAudio() {
    var audio = document.getElementById('hoverAudio');
    if (audio.paused) {
        audio.currentTime = 0;
        audio.volume = 0.7;
        audio.play();
    }
}

document.querySelector(".chibi-nini").addEventListener("click", function() {
    this.style.animation = "jump 0.5s ease-out";
    setTimeout(() => { this.style.animation = ""; }, 500);
  });





  let cat = "🐱";  // The character to move
  let fish = "🐟";  // The goal to reach
  let mazeSize = 200;  // Size of the maze
  let pixelSize = mazeSize / 5;  // Grid size for each cell in the maze
  
  let canvas = document.querySelector(".maze");
  let context = canvas.getContext("2d");
  
  let catX = 0, catY = 30;  // Starting position of the cat
  let fishX = 160, fishY = 190;  // Position of the fish
  
  let submitButton = document.querySelector(".submitButton");
  let captchaCompleted = false;
  
  // Maze drawing function
  function drawMaze() {
    context.fillStyle = "#dbd8d8";  // Background color of the maze
    context.fillRect(0, 0, mazeSize, mazeSize);
    context.fillStyle = "#ffffff";  // Maze path color
  
    // Maze walls drawn in rectangles
    context.fillRect(0, 0, pixelSize, 4 * pixelSize); // Left wall
    context.fillRect(pixelSize, 3 * pixelSize, pixelSize, pixelSize); // Top right corner
    context.fillRect(2 * pixelSize, pixelSize, pixelSize, 4 * pixelSize); // Middle vertical wall
    context.fillRect(3 * pixelSize, 4 * pixelSize, 2 * pixelSize, pixelSize); // Bottom horizontal wall
    context.fillRect(4 * pixelSize, 0, pixelSize, pixelSize); // Right top corner
    context.fillRect(3 * pixelSize, pixelSize, 2 * pixelSize, pixelSize); // Small middle wall
  }
  
  // Draw the cat and fish
  function drawCharacters() {
    context.clearRect(0, 0, mazeSize, mazeSize);
    drawMaze(); // Redraw the maze
    context.font = "32px 'Noto Color Emoji', sans-serif";
    context.fillText(cat, catX, catY);  // Draw the cat
    context.fillText(fish, fishX, fishY);  // Draw the fish
  }
  
  // Check if the cat has reached the fish
  function checkWin() {
    if (catX === fishX && catY === fishY) {
      captchaCompleted = true;
      submitButton.disabled = false;  // Enable submit button once the maze is solved
      context.clearRect(0, 0, mazeSize, mazeSize);
      drawMaze();
      context.fillText("❤️", fishX, fishY);  // Heart emoji at the goal
    }
  }
  
  // Move the cat based on keyboard input
  function moveCat(e) {
    if (!captchaCompleted) {
      switch (e.keyCode) {
        case 37: // Left
          if (catX - pixelSize >= 0) catX -= pixelSize;
          break;
        case 38: // Up
          if (catY - pixelSize >= 0) catY -= pixelSize;
          break;
        case 39: // Right
          if (catX + pixelSize <= mazeSize - pixelSize) catX += pixelSize;
          break;
        case 40: // Down
          if (catY + pixelSize <= mazeSize) catY += pixelSize;
          break;
      }
      drawCharacters();
      checkWin();
    }
  }
  
  // Add event listeners for keyboard controls
  document.addEventListener("keydown", moveCat);
  
  // Add event listeners for on-screen controls
  document.getElementById("up").addEventListener("click", () => moveCat({ keyCode: 38 }));
  document.getElementById("left").addEventListener("click", () => moveCat({ keyCode: 37 }));
  document.getElementById("right").addEventListener("click", () => moveCat({ keyCode: 39 }));
  document.getElementById("down").addEventListener("click", () => moveCat({ keyCode: 40 }));
  
  // Initial game setup
  submitButton.disabled = true;  // Disable submit button until the game is completed
  drawCharacters();

  
  

  