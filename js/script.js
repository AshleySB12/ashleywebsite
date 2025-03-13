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



  
  const sparksImage = document.querySelector('.sparks');
  const twinkleAudio = document.getElementById('twinkle-audio');

  
  sparksImage.addEventListener('mouseenter', () => {
    twinkleAudio.play();  // Start playing the audio
  });

  
  sparksImage.addEventListener('mouseleave', () => {
    twinkleAudio.pause();  
    twinkleAudio.currentTime = 0;
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


function playAudio() {
    var audio = document.getElementById('hoverAudio');
    audio.currentTime = 0; // Restart the audio from the beginning
    audio.volume = 0.1; // Set the volume to 10% for a subtle sound
    audio.play(); // Play the audio on hover
}


