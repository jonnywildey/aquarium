/**
 * Lightbox for album artwork
 */

class Lightbox {
  constructor() {
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createLightbox();
    this.bindEvents();
  }

  createLightbox() {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <div class="lightbox__backdrop"></div>
      <div class="lightbox__content">
        <img src="" alt="Album artwork" class="lightbox__image">
      </div>
      <button class="lightbox__close" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
    document.body.appendChild(lightbox);

    this.lightbox = lightbox;
    this.image = lightbox.querySelector(".lightbox__image");
    this.backdrop = lightbox.querySelector(".lightbox__backdrop");
    this.closeBtn = lightbox.querySelector(".lightbox__close");
  }

  bindEvents() {
    // Find all artwork triggers
    const triggers = document.querySelectorAll("[data-lightbox]");
    triggers.forEach((trigger) => {
      trigger.style.cursor = "pointer";
      trigger.addEventListener("click", () => {
        const src = trigger.dataset.lightbox || trigger.src;
        this.open(src);
      });
    });

    // Close events
    this.backdrop.addEventListener("click", () => this.close());
    this.closeBtn.addEventListener("click", () => this.close());

    // Keyboard
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close();
      }
    });
  }

  open(src) {
    this.image.src = src;
    this.lightbox.classList.add("is-open");
    this.isOpen = true;
    document.body.style.overflow = "hidden";
  }

  close() {
    this.lightbox.classList.remove("is-open");
    this.isOpen = false;
    document.body.style.overflow = "";
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new Lightbox();
});
