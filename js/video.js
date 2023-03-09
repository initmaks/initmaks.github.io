// Get all video elements with the "no-controls-video" class
const videos = document.querySelectorAll('.no-controls-video');

// Loop through each video element and add event listeners
videos.forEach(function(video) {
  // Wait for the video to load
  video.addEventListener('loadedmetadata', function() {
    // Hide the video controls
    video.controls = false;
  });
});


const video_humanconquad = document.querySelector('#humanconquad');
video_humanconquad.playbackRate = 2;

const video_learning_to_swing = document.querySelector('#learning_to_swing');
video_learning_to_swing.playbackRate = 2;

const video_fetchit = document.querySelector('#fetchit');
video_fetchit.playbackRate = 1.5;

const video_car_bc = document.querySelector('#car_bc');
video_car_bc.playbackRate = 0.5;
