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



  // Get the elements
  const sparksImage = document.querySelector('.sparks');
  const twinkleAudio = document.getElementById('twinkle-audio');

  // Play the audio when hovering over the sparks image and trigger the glow
  sparksImage.addEventListener('mouseenter', () => {
    twinkleAudio.play();  // Start playing the audio
  });

  // Stop the audio and reset when the mouse leaves
  sparksImage.addEventListener('mouseleave', () => {
    twinkleAudio.pause();  // Pause the audio
    twinkleAudio.currentTime = 0;  // Reset audio to the beginning
  });

