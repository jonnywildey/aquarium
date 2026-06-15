/**
 * Creators Content Player
 * Audio preview and download for social media creators
 */

class CreatorsPlayer {
  constructor() {
    this.audio = new Audio();
    this.tracks = [
      { title: "Effervescent", file: "Effervescent.mp3", category: "selected" },
      { title: "Ghost3", file: "Ghost3.mp3", category: "selected" },
      { title: "Glacial", file: "Glacial.mp3", category: "selected" },
      { title: "Glory", file: "Glory.mp3", category: "selected" },
      { title: "Obscured", file: "Obscured.mp3", category: "selected" },
      { title: "Premonition", file: "Premonition.mp3", category: "selected" },
      { title: "School", file: "School.mp3", category: "selected" },
      { title: "Swell", file: "Swell.mp3", category: "selected" },
      { title: "Tundra", file: "Tundra.mp3", category: "selected" },
      { title: "Twill", file: "Twill.mp3", category: "selected" },
      { title: "Wave2", file: "Wave2.mp3", category: "selected" },
      { title: "Windswept", file: "Windswept.mp3", category: "selected" },
      // Uplifting - bright, positive, hopeful sounds
      { title: "Beacon", file: "Beacon.mp3", category: "uplifting" },
      { title: "Boon", file: "Boon.mp3", category: "uplifting" },
      { title: "Boon 2", file: "Boon2.mp3", category: "uplifting" },
      { title: "Breeze", file: "Breeze.mp3", category: "uplifting" },
      { title: "Breeze 2", file: "Breeze2.mp3", category: "uplifting" },
      { title: "Breeze 3", file: "Breeze3.mp3", category: "uplifting" },
      { title: "Breeze 4", file: "Breeze4.mp3", category: "uplifting" },
      { title: "Crystal", file: "Crystal.mp3", category: "uplifting" },
      { title: "Dawn", file: "Dawn.mp3", category: "uplifting" },
      {
        title: "Effervescent",
        file: "Effervescent.mp3",
        category: "uplifting",
      },
      { title: "Enlighten", file: "Enlighten.mp3", category: "uplifting" },
      { title: "Enlighten 2", file: "Enlighten2.mp3", category: "uplifting" },
      { title: "Flight", file: "Flight.mp3", category: "uplifting" },
      { title: "Flight 2", file: "Flight2.mp3", category: "uplifting" },
      { title: "Flight 3", file: "Flight3.mp3", category: "uplifting" },
      { title: "Flight 4", file: "Flight4.mp3", category: "uplifting" },
      { title: "Flower", file: "Flower.mp3", category: "uplifting" },
      { title: "Flower 2", file: "Flower2.mp3", category: "uplifting" },
      { title: "Glory", file: "Glory.mp3", category: "uplifting" },
      { title: "Raindrop", file: "Raindrop.mp3", category: "uplifting" },
      { title: "Scintilla", file: "Scintilla.mp3", category: "uplifting" },
      { title: "Snowdrop", file: "Snowdrop.mp3", category: "uplifting" },
      { title: "Snowdrop 2", file: "Snowdrop2.mp3", category: "uplifting" },
      { title: "Warmth", file: "Warmth.mp3", category: "uplifting" },
      {
        title: "Water Under Sun",
        file: "Water Under Sun.mp3",
        category: "uplifting",
      },
      { title: "Wave", file: "Wave.mp3", category: "uplifting" },
      { title: "Wave 2", file: "Wave2.mp3", category: "uplifting" },

      // Ambient - neutral, atmospheric, contemplative
      { title: "Aura", file: "Aura.mp3", category: "ambient" },
      { title: "Cathedral", file: "Cathedral.mp3", category: "ambient" },
      { title: "Cove", file: "Cove.mp3", category: "ambient" },
      { title: "Cove 2", file: "Cove2.mp3", category: "ambient" },
      { title: "Currents", file: "Currents.mp3", category: "ambient" },
      { title: "Currents 2", file: "Currents2.mp3", category: "ambient" },
      { title: "Exhale", file: "Exhale.mp3", category: "ambient" },
      { title: "Exhale 2", file: "Exhale2.mp3", category: "ambient" },
      { title: "Flicker", file: "Flicker.mp3", category: "ambient" },
      { title: "Frieze", file: "Frieze.mp3", category: "ambient" },
      { title: "Glass", file: "Glass.mp3", category: "ambient" },
      { title: "Glass 2", file: "Glass2.mp3", category: "ambient" },
      { title: "Gulf", file: "Gulf.mp3", category: "ambient" },
      { title: "Memory", file: "Memory.mp3", category: "ambient" },
      { title: "Pipe", file: "Pipe.mp3", category: "ambient" },
      { title: "Pipe 2", file: "Pipe2.mp3", category: "ambient" },
      { title: "School", file: "School.mp3", category: "ambient" },
      { title: "Seamount", file: "Seamount.mp3", category: "ambient" },
      { title: "Shell", file: "Shell.mp3", category: "ambient" },
      { title: "Shell 2", file: "Shell2.mp3", category: "ambient" },
      { title: "Shoreline", file: "Shoreline.mp3", category: "ambient" },
      { title: "Shoreline 2", file: "Shoreline2.mp3", category: "ambient" },
      { title: "Spire", file: "Spire.mp3", category: "ambient" },
      { title: "Swell", file: "Swell.mp3", category: "ambient" },
      { title: "Threads", file: "Threads.mp3", category: "ambient" },
      { title: "Twill", file: "Twill.mp3", category: "ambient" },
      { title: "Twill 2", file: "Twill2.mp3", category: "ambient" },
      { title: "Wifi", file: "Wifi.mp3", category: "ambient" },

      // Dark - mysterious, ominous, tense
      { title: "Block", file: "Block.mp3", category: "dark" },
      { title: "Crevasse", file: "Crevasse.mp3", category: "dark" },
      { title: "Dim Glow", file: "Dim Glow.mp3", category: "dark" },
      { title: "Dim Glow 2", file: "Dim Glow2.mp3", category: "dark" },
      { title: "Dim Glow 3", file: "Dim Glow3.mp3", category: "dark" },
      { title: "Eerie", file: "Eerie.mp3", category: "dark" },
      { title: "Eerie 2", file: "Eerie2.mp3", category: "dark" },
      { title: "Eerie 3", file: "Eerie3.mp3", category: "dark" },
      { title: "Erata", file: "Erata.mp3", category: "dark" },
      { title: "Ghost", file: "Ghost.mp3", category: "dark" },
      { title: "Ghost 2", file: "Ghost2.mp3", category: "dark" },
      { title: "Ghost 3", file: "Ghost3.mp3", category: "dark" },
      { title: "Glacial", file: "Glacial.mp3", category: "dark" },
      { title: "Mariana Siren", file: "Mariana Siren.mp3", category: "dark" },
      { title: "Murk", file: "Murk.mp3", category: "dark" },
      { title: "Murk 2", file: "Murk2.mp3", category: "dark" },
      { title: "Nightfall", file: "Nightfall.mp3", category: "dark" },
      { title: "Obscured", file: "Obscured.mp3", category: "dark" },
      { title: "Poltergeist", file: "Poltergeist.mp3", category: "dark" },
      { title: "Premonition", file: "Premonition.mp3", category: "dark" },
      { title: "Premonition 2", file: "Premonition2.mp3", category: "dark" },
      { title: "Pressure", file: "Pressure.mp3", category: "dark" },
      { title: "Pressure 2", file: "Pressure2.mp3", category: "dark" },
      { title: "Shadow", file: "Shadow.mp3", category: "dark" },
      { title: "Shadow 2", file: "Shadow2.mp3", category: "dark" },
      { title: "Shiver", file: "Shiver.mp3", category: "dark" },
      { title: "Smoke", file: "Smoke.mp3", category: "dark" },
      { title: "Sneaky", file: "Sneaky.mp3", category: "dark" },
      { title: "Tundra", file: "Tundra.mp3", category: "dark" },
      { title: "Under Ice", file: "Under Ice.mp3", category: "dark" },
      { title: "Void", file: "Void.mp3", category: "dark" },

      // Energetic - dynamic, intense, powerful
      { title: "Bluster", file: "Bluster.mp3", category: "energetic" },
      {
        title: "Boiling Point",
        file: "Boiling Point.mp3",
        category: "energetic",
      },
      {
        title: "Boiling Point 2",
        file: "Boiling Point2.mp3",
        category: "energetic",
      },
      { title: "Gust", file: "Gust.mp3", category: "energetic" },
      { title: "Ice", file: "Ice.mp3", category: "energetic" },
      {
        title: "Inhale Explosion",
        file: "Inhale Explosion.mp3",
        category: "energetic",
      },
      { title: "Storm Ahead", file: "Storm Ahead.mp3", category: "energetic" },
      { title: "Stormcloud", file: "Stormcloud.mp3", category: "energetic" },
      { title: "Stormcloud 2", file: "Stormcloud2.mp3", category: "energetic" },
      { title: "Swoop", file: "Swoop.mp3", category: "energetic" },
      { title: "Windswept", file: "Windswept.mp3", category: "energetic" },
    ];

    this.currentTrackIndex = -1;
    this.isPlaying = false;
    this.activeFilter = "selected";

    this.init();
  }

  init() {
    this.cacheElements();
    this.renderTrackList();
    this.bindEvents();
    this.updateTrackCount();
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
    this.filterBtns = document.querySelectorAll(".filter__btn");
    this.trackCountEl = document.getElementById("track-count");
  }

  getFilteredTracks() {
    if (this.activeFilter === "all") {
      return this.tracks;
    }
    return this.tracks.filter((t) => t.category === this.activeFilter);
  }

  renderTrackList() {
    const filtered = this.getFilteredTracks();
    this.trackListEl.innerHTML = filtered
      .map((track) => {
        const originalIndex = this.tracks.indexOf(track);
        return `
          <li class="player__track ${originalIndex === this.currentTrackIndex ? "is-active" : ""}" data-index="${originalIndex}">
              <span class="player__track-play">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <polygon points="5,3 19,12 5,21"/>
                  </svg>
              </span>
              <span class="player__track-title">${track.title}</span>
              <span class="player__track-category">${track.category}</span>
              <a href="../assets/audio/creatorscontent/mp3/${track.file}" download class="player__track-download" title="Download MP3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
              </a>
          </li>
      `;
      })
      .join("");
  }

  updateTrackCount() {
    const filtered = this.getFilteredTracks();
    this.trackCountEl.textContent = `${filtered.length} tracks`;
  }

  bindEvents() {
    // Play/Pause
    this.playBtn.addEventListener("click", () => this.togglePlay());

    // Previous/Next
    this.prevBtn.addEventListener("click", () => this.prevTrack());
    this.nextBtn.addEventListener("click", () => this.nextTrack());

    // Progress bar click
    this.progress.addEventListener("click", (e) => this.seek(e));

    // Track list clicks
    this.trackListEl.addEventListener("click", (e) => {
      // Ignore clicks on download links
      if (e.target.closest(".player__track-download")) return;

      const trackEl = e.target.closest(".player__track");
      if (trackEl) {
        const index = parseInt(trackEl.dataset.index);
        this.loadTrack(index);
        this.play();
      }
    });

    // Filter buttons
    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.activeFilter = btn.dataset.filter;
        this.filterBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        this.renderTrackList();
        this.updateTrackCount();
      });
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
    this.audio.src = `../assets/audio/creatorscontent/mp3/${track.file}`;

    // Update current track display
    this.currentTrackEl.textContent = track.title;

    // Update active state in track list
    document.querySelectorAll(".player__track").forEach((el) => {
      el.classList.toggle("is-active", parseInt(el.dataset.index) === index);
    });

    // Reset progress
    this.progressBar.style.width = "0%";
    this.currentTimeEl.textContent = "0:00";
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      // If no track loaded, load first visible one
      if (this.currentTrackIndex === -1) {
        const filtered = this.getFilteredTracks();
        if (filtered.length > 0) {
          this.loadTrack(this.tracks.indexOf(filtered[0]));
        }
      }
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
    const filtered = this.getFilteredTracks();
    if (filtered.length === 0) return;

    const currentInFiltered = filtered.findIndex(
      (t) => this.tracks.indexOf(t) === this.currentTrackIndex,
    );
    let newFilteredIndex = currentInFiltered - 1;
    if (newFilteredIndex < 0) newFilteredIndex = filtered.length - 1;

    this.loadTrack(this.tracks.indexOf(filtered[newFilteredIndex]));
    if (this.isPlaying) this.play();
  }

  nextTrack() {
    const filtered = this.getFilteredTracks();
    if (filtered.length === 0) return;

    const currentInFiltered = filtered.findIndex(
      (t) => this.tracks.indexOf(t) === this.currentTrackIndex,
    );
    let newFilteredIndex = currentInFiltered + 1;
    if (newFilteredIndex >= filtered.length) newFilteredIndex = 0;

    this.loadTrack(this.tracks.indexOf(filtered[newFilteredIndex]));
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
}

// Initialize player when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new CreatorsPlayer();
});
