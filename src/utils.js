/**
 * @param {Number} value
 * @returns {string} "auto" or "<argument>px"
 */
export function px(value, fallback = "auto") {
  if (value || value === 0) return value + "px";
  return fallback;
}

/**
 * Generic QuerySelector
 * @param { String } str Any valid CSS selector
 * @param { Boolean } bool Does "querySelectorAll()" if true else "querySelector()"
 * @returns DOM Node/ NodeList
 */
export function $(str, bool) {
  return bool ? document.querySelectorAll(str) : document.querySelector(str);
}
export class SwipeCarousel {
  #carousel;
  #sensitivity;

  #touchStartX;
  #touchEndX;
  #swiping = false;
  #swipeDX = 0;

  constructor(carousal, sensitivity) {
    if (!carousal) return;

    this.#carousel = carousal;
    this.#sensitivity = sensitivity;

    this.#touchStartX = 0;
    this.#touchEndX = 0;

    this.#addSwipeListeners();
  }

  #addSwipeListeners() {
    this.#carousel.addEventListener("touchstart", (e) => {
      this.#touchStartX = e.touches[0].clientX;
    });

    this.#carousel.addEventListener("touchmove", (e) => {
      this.#touchEndX = e.touches[0].clientX;

      if (!this.#swiping) {
        this.onSwipeStart();
        this.#swiping = true;
      } else {
        // this.#swipeDX = this.#touchEndX - this.#touchStartX;
        // if (this.#swipeDX > 0) this.onSwipeRight(Math.abs(this.#swipeDX));
        // if (this.#swipeDX < 0) this.onSwipeLeft(Math.abs(this.#swipeDX));
      }
    });

    this.#carousel.addEventListener("touchend", () => {
      this.#swipeDX = this.#touchEndX - this.#touchStartX;

      if (Math.abs(this.#swipeDX) > this.#sensitivity && this.#swiping) {
        if (this.#swipeDX > 0) this.onSwipeRight(Math.abs(this.#swipeDX));
        if (this.#swipeDX < 0) this.onSwipeLeft(Math.abs(this.#swipeDX));
      }

      if (this.#swiping) {
        this.onSwipeEnd(this.#swipeDX);
        this.#swiping = false;
      }
    });
  }

  onSwipeStart() {}
  onSwipeLeft() {}
  onSwipeRight() {}
  onSwipeEnd() {}
}
