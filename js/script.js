

document.querySelector(".chibi-nini").addEventListener("click", function() {
    this.style.animation = "jump 0.5s ease-out";
    setTimeout(() => { this.style.animation = ""; }, 500);
  });


  const musicIcon = document.querySelector('.homemusic');
  const music = document.getElementById('aboutnini');

  musicIcon.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      musicIcon.classList.add('playing');
    } else {
      music.pause();
      musicIcon.classList.remove('playing');
    }
  });






  
  

  