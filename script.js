alert('Happy independence day please scroll and go below');

document.getElementById('startAudio').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    
    // Play the audio and set it to loop
    audio.play();
    
    // Ensure the audio loops
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play();
    });
});



// Video playback control
const video = document.getElementById('video');

video.addEventListener('play', () => {
    console.log('Video playing');
});

video.addEventListener('pause', () => {
    console.log('Video paused');
});

// GIF animation control
const gif = document.querySelector('.gif-section img');

gif.addEventListener('mouseover', () => {
    gif.classList.add('animate');
});

gif.addEventListener('mouseout', () => {
    gif.classList.remove('animate');
});

// Fireworks animation control
const fireworks = document.querySelectorAll('.firework');

fireworks.forEach((firework) => {
    firework.addEventListener('animationend', () => {
        firework.classList.remove('animate');
        setTimeout(() => {
            firework.classList.add('animate');
        }, 1000);
    });
});

// Scroll animation
const scrollElements = document.querySelectorAll('.scroll-animate');

window.addEventListener('scroll', () => {
    scrollElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('animate');
        }
    });
});
const audioSection = document.querySelector('.audio-section');
const audioElement = audioSection.querySelector('audio');

audioElement.controls = false;
