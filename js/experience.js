/**
 * Immersive Album Experience
 * Full-screen listening with slow texture slideshow
 */

class AlbumExperience {
  constructor() {
    this.audio = new Audio();
    this.tracks = [
      { number: 1, title: "Shore", file: "01 Alphabets Heaven - Shore.mp3" },
      { number: 2, title: "Torrent", file: "02 Alphabets Heaven - Torrent.mp3" },
      { number: 3, title: "Fathoms", file: "03 Alphabets Heaven - Fathoms.mp3" },
      { number: 4, title: "Submerged", file: "04 Alphabets Heaben - Submerged.mp3" },
      { number: 5, title: "Riverbed", file: "05 Alphabets Heaven - Riverbed.mp3" },
      { number: 6, title: "Clouds", file: "06 Alphabets Heaven - Clouds.mp3" },
      { number: 7, title: "Saragossa", file: "07 Alphabets Heaven - Saragossa.mp3" },
      { number: 8, title: "Ocean", file: "08 Alphabets Heaven - Ocean.mp3" },
      { number: 9, title: "Cenote", file: "09 Alphabets Heaven - Cenote.mp3" },
      { number: 10, title: "Murky", file: "10 Alphabets Heaven - Murk.mp3" },
    ];

    this.textures = [
      "BluePrism.jpg",
      "BlueViolet.jpg",
      "Bubbles.jpg",
      "Bubbles2.jpg",
      "Prism2.jpg",
      "Prism3.jpg",
      "Prism4.jpg",
      "Prism5.jpg",
      "Prism6.jpg",
      "Prism7.jpg",
      "Rain1.jpg",
      "Rain2.jpg",
      "Soil.jpg",
      "SoilBlue.jpg",
      "SoilViolet.jpg",
      "Sunrise.jpg",
      "Sunset.jpg",
      "SurfaceRed.jpg",
      "UFO.jpg",
    ];

    this.currentTrackIndex = 0;
    this.currentTextureIndex = 0;
    this.isPlaying = false;
    this.isStarted = false;
    this.textureInterval = null;
    this.idleTimeout = null;
    this.idleDelay = 3000;
    this.textureChangeInterval = 12000; // 12 seconds per texture

    this.init();
  }

  init() {
    this.shuffleTextures();
    this.cacheElements();
    this.bindEvents();
    this.preloadTextures();
    this.setInitialTexture();
    this.showUI();
  }

  shuffleTextures() {
    // Fisher-Yates shuffle for random texture order
    for (let i = this.textures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.textures[i], this.textures[j]] = [this.textures[j], this.textures[i]];
    }
  }

  cacheElements() {
    this.experience = document.querySelector(".experience");
    this.ui = document.getElementById("ui");
    this.bg1 = document.getElementById("bg-1");
    this.bg2 = document.getElementById("bg-2");
    this.startBtn = document.getElementById("start-btn");
    this.playBtn = document.getElementById("play-btn");
    this.prevBtn = document.getElementById("prev-btn");
    this.nextBtn = document.getElementById("next-btn");
    this.progress = document.getElementById("progress");
    this.progressBar = document.getElementById("progress-bar");
    this.currentTimeEl = document.getElementById("current-time");
    this.durationEl = document.getElementById("duration");
    this.trackNumberEl = document.getElementById("track-number");
    this.trackTitleEl = document.getElementById("track-title");
    this.iconPlay = this.playBtn.querySelector(".icon-play");
    this.iconPause = this.playBtn.querySelector(".icon-pause");
  }

  preloadTextures() {
    this.textures.forEach((texture) => {
      const img = new Image();
      img.src = `assets/images/albumart/Texture Pack/${texture}`;
    });
  }

  setInitialTexture() {
    const texturePath = `assets/images/albumart/Texture Pack/${this.textures[0]}`;
    this.bg1.style.backgroundImage = `url('${texturePath}')`;
  }

  bindEvents() {
    // Start button
    this.startBtn.addEventListener("click", () => this.start());

    // Play controls
    this.playBtn.addEventListener("click", () => this.togglePlay());
    this.prevBtn.addEventListener("click", () => this.prevTrack());
    this.nextBtn.addEventListener("click", () => this.nextTrack());

    // Progress bar
    this.progress.addEventListener("click", (e) => this.seek(e));

    // Audio events
    this.audio.addEventListener("timeupdate", () => this.updateProgress());
    this.audio.addEventListener("loadedmetadata", () => this.updateDuration());
    this.audio.addEventListener("ended", () => this.nextTrack());

    // Mouse movement for UI visibility
    document.addEventListener("mousemove", () => this.handleActivity());
    document.addEventListener("click", () => this.handleActivity());
    document.addEventListener("touchstart", () => this.handleActivity());

    // Keyboard controls
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (!this.isStarted) {
          this.start();
        } else {
          this.togglePlay();
        }
      } else if (e.code === "ArrowRight") {
        this.nextTrack();
      } else if (e.code === "ArrowLeft") {
        this.prevTrack();
      } else if (e.code === "Escape") {
        window.location.href = "index.html";
      }
    });
  }

  start() {
    this.isStarted = true;
    this.ui.classList.add("is-started");
    this.loadTrack(0);
    this.play();
    this.startTextureSlideshow();
  }

  startTextureSlideshow() {
    // Change texture periodically
    this.textureInterval = setInterval(() => {
      this.nextTexture();
    }, this.textureChangeInterval);
  }

  nextTexture() {
    this.currentTextureIndex = (this.currentTextureIndex + 1) % this.textures.length;
    const texturePath = `assets/images/albumart/Texture Pack/${this.textures[this.currentTextureIndex]}`;

    // Determine which bg is active and which is inactive
    const activeBg = this.bg1.classList.contains("experience__bg--active") ? this.bg1 : this.bg2;
    const inactiveBg = activeBg === this.bg1 ? this.bg2 : this.bg1;

    // Set new image on inactive bg
    inactiveBg.style.backgroundImage = `url('${texturePath}')`;

    // Cross-fade
    activeBg.classList.remove("experience__bg--active");
    inactiveBg.classList.add("experience__bg--active");
  }

  loadTrack(index) {
    this.currentTrackIndex = index;
    const track = this.tracks[index];
    this.audio.src = `assets/audio/alphabets heaven - aquarium/${track.file}`;

    // Update display
    this.trackNumberEl.textContent = String(track.number).padStart(2, "0");
    this.trackTitleEl.textContent = track.title;

    // Reset progress
    this.progressBar.style.width = "0%";
    this.currentTimeEl.textContent = "0:00";
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
    this.updatePlayButton();
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updatePlayButton();
  }

  updatePlayButton() {
    if (this.isPlaying) {
      this.iconPlay.style.display = "none";
      this.iconPause.style.display = "block";
    } else {
      this.iconPlay.style.display = "block";
      this.iconPause.style.display = "none";
    }
  }

  prevTrack() {
    let newIndex = this.currentTrackIndex - 1;
    if (newIndex < 0) newIndex = this.tracks.length - 1;
    this.loadTrack(newIndex);
    if (this.isPlaying) this.play();
  }

  nextTrack() {
    let newIndex = this.currentTrackIndex + 1;
    if (newIndex >= this.tracks.length) {
      // Album finished - loop back to start
      newIndex = 0;
    }
    this.loadTrack(newIndex);
    if (this.isPlaying) this.play();
  }

  seek(e) {
    const rect = this.progress.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    this.audio.currentTime = percent * this.audio.duration;
  }

  updateProgress() {
    const percent = (this.audio.currentTime / this.audio.duration) * 100;
    this.progressBar.style.width = `${percent}%`;
    this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
  }

  updateDuration() {
    this.durationEl.textContent = this.formatTime(this.audio.duration);
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  handleActivity() {
    this.showUI();
    this.resetIdleTimer();
  }

  showUI() {
    this.experience.classList.remove("is-idle");
    this.ui.classList.add("is-visible");
  }

  hideUI() {
    if (this.isPlaying && this.isStarted) {
      this.experience.classList.add("is-idle");
      this.ui.classList.remove("is-visible");
    }
  }

  resetIdleTimer() {
    clearTimeout(this.idleTimeout);
    this.idleTimeout = setTimeout(() => {
      this.hideUI();
    }, this.idleDelay);
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new AlbumExperience();
});
