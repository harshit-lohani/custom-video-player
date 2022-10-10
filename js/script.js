

const skipBackwardBtn = document.getElementById("btn-skip-backward")
const pausePlayBtn = document.getElementById("btn-play-pause")
const skipForwardBtn = document.getElementById("btn-skip-forward")

const video = document.getElementById("video")

function togglePlayPause() {
    if(video.paused) { 
        video.play()
        pausePlayBtn.innerHTML = `<i class="fas fa-pause"></i>`
    } else {
        video.pause()
        pausePlayBtn.innerHTML = `<i class="fas fa-play"></i>`
    }
}


pausePlayBtn.addEventListener("click", togglePlayPause)
skipBackwardBtn.addEventListener("click", () => {video.currentTime -= 5})
skipForwardBtn.addEventListener("click", () => {video.currentTime += 5})
