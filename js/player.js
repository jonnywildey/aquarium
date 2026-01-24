/**
 * Aquarium Audio Player
 * A minimal, elegant audio player for Alphabets Heaven
 */

class AquariumPlayer {
  constructor() {
    this.audio = new Audio();
    this.tracks = [
      { number: 1, title: "Shore", file: "01 Alphabets Heaven - Shore.mp3" },
      {
        number: 2,
        title: "Torrent",
        file: "02 Alphabets Heaven - Torrent.mp3",
      },
      {
        number: 3,
        title: "Fathoms",
        file: "03 Alphabets Heaven - Fathoms.mp3",
      },
      {
        number: 4,
        title: "Submerged",
        file: "04 Alphabets Heaben - Submerged.mp3",
      },
      {
        number: 5,
        title: "Riverbed",
        file: "05 Alphabets Heaven - Riverbed.mp3",
      },
      { number: 6, title: "Clouds", file: "06 Alphabets Heaven - Clouds.mp3" },
      {
        number: 7,
        title: "Saragossa",
        file: "07 Alphabets Heaven - Saragossa.mp3",
      },
      { number: 8, title: "Ocean", file: "08 Alphabets Heaven - Ocean.mp3" },
      { number: 9, title: "Cenote", file: "09 Alphabets Heaven - Cenote.mp3" },
      { number: 10, title: "Murky", file: "10 Alphabets Heaven - Murk.mp3" },
    ];
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.durations = {};

    this.init();
  }

  init() {
    this.cacheElements();
    this.renderTrackList();
    this.bindEvents();
    this.loadTrack(0);
    this.preloadDurations();
  }

  cacheElements() {
    this.playBtn = document.getElementById("play-btn");
    this.prevBtn = document.getElementById("prev-btn");
    this.nextBtn = document.getElementById("next-btn");
    this.progress = document.getElementById("progress");
    this.progressBar = document.getElementById("progress-bar");
    this.currentTimeEl = document.getElementById("current-time");
    this.durationEl = document.getElementById("duration");
    this.trackListEl = document.getElementById("track-list");
    this.currentTrackEl = document.getElementById("current-track");
    this.volumeSlider = document.getElementById("volume-slider");
    this.volumeBar = document.getElementById("volume-bar");
  }

  renderTrackList() {
    this.trackListEl.innerHTML = this.tracks
      .map(
        (track, index) => `
            <li class="player__track" data-index="${index}">
                <span class="player__track-number">${String(track.number).padStart(2, "0")}</span>
                <span class="player__track-title">${track.title}</span>
                <span class="player__track-duration" data-duration-index="${index}">--:--</span>
            </li>
        `,
      )
      .join("");
  }

  preloadDurations() {
    this.tracks.forEach((track, index) => {
      const tempAudio = new Audio();
      tempAudio.src = `assets/audio/alphabets heaven - aquarium/${track.file}`;
      tempAudio.addEventListener("loadedmetadata", () => {
        this.durations[index] = tempAudio.duration;
        const durationEl = document.querySelector(
          `[data-duration-index="${index}"]`,
        );
        if (durationEl) {
          durationEl.textContent = this.formatTime(tempAudio.duration);
        }
      });
    });
  }

  bindEvents() {
    // Play/Pause
    this.playBtn.addEventListener("click", () => this.togglePlay());

    // Previous/Next
    this.prevBtn.addEventListener("click", () => this.prevTrack());
    this.nextBtn.addEventListener("click", () => this.nextTrack());

    // Progress bar click
    this.progress.addEventListener("click", (e) => this.seek(e));

    // Volume slider click
    if (this.volumeSlider) {
      this.volumeSlider.addEventListener("click", (e) => this.setVolume(e));
    }

    // Track list clicks
    this.trackListEl.addEventListener("click", (e) => {
      const trackEl = e.target.closest(".player__track");
      if (trackEl) {
        const index = parseInt(trackEl.dataset.index);
        this.loadTrack(index);
        this.play();
      }
    });

    // Audio events
    this.audio.addEventListener("timeupdate", () => this.updateProgress());
    this.audio.addEventListener("loadedmetadata", () => this.updateDuration());
    this.audio.addEventListener("ended", () => this.nextTrack());

    // Keyboard controls
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space" && e.target.tagName !== "INPUT") {
        e.preventDefault();
        this.togglePlay();
      } else if (e.code === "ArrowRight") {
        this.nextTrack();
      } else if (e.code === "ArrowLeft") {
        this.prevTrack();
      }
    });
  }

  loadTrack(index) {
    this.currentTrackIndex = index;
    const track = this.tracks[index];
    this.audio.src = `assets/audio/alphabets heaven - aquarium/${track.file}`;

    // Update current track display
    this.currentTrackEl.textContent = track.title;

    // Update active state in track list
    document.querySelectorAll(".player__track").forEach((el, i) => {
      el.classList.toggle("is-active", i === index);
    });

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
    const icon = this.isPlaying
      ? `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
    this.playBtn.innerHTML = icon;
  }

  prevTrack() {
    let newIndex = this.currentTrackIndex - 1;
    if (newIndex < 0) newIndex = this.tracks.length - 1;
    this.loadTrack(newIndex);
    if (this.isPlaying) this.play();
  }

  nextTrack() {
    let newIndex = this.currentTrackIndex + 1;
    if (newIndex >= this.tracks.length) newIndex = 0;
    this.loadTrack(newIndex);
    if (this.isPlaying) this.play();
  }

  seek(e) {
    const rect = this.progress.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    this.audio.currentTime = percent * this.audio.duration;
  }

  setVolume(e) {
    const rect = this.volumeSlider.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    this.audio.volume = Math.max(0, Math.min(1, percent));
    this.volumeBar.style.width = `${this.audio.volume * 100}%`;
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
}

// Initialize player when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new AquariumPlayer();
});
