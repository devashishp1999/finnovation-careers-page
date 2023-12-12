/* eslint-disable eqeqeq */

import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../assets/assets";
import Icon from "./Icon";
import { SwipeCarousel, px } from "utils-deva";
import useScreenSize from "../hooks/useScreenSize";

const slides = IMAGES.cImage.map((el, i) => ({ id: i + 1, img: el }));

const HeroCarousal = () => {
  const viewport = useScreenSize();
  const [counter, setCount] = useState(0); // 0 to slides.length
  const [dimen] = useState({ w: 320, h: 470, g: 20 });
  const [swiper, setSwiper] = useState(new SwipeCarousel());

  const [autoSlide, setAutoSlide] = useState(null);

  const carousalRef = useRef();

  function nextSlide(e) {
    checkEvent(e);

    setCount((prev) => {
      if (prev === slides.length - 1) return 0;
      return Math.min(prev + 1, slides.length - 1);
    });
  }
  function prevSlide(e) {
    checkEvent(e);
    setCount((prev) => {
      if (prev === 0) return slides.length - 1;
      return Math.max(prev - 1, 0);
    });
  }

  function checkEvent(e) {
    if (e?.nativeEvent instanceof PointerEvent) pauseAutoSlider();
  }

  function startAutoSlider() {
    clearInterval(autoSlide);
    setAutoSlide(setInterval(nextSlide, 4000));
  }
  function pauseAutoSlider() {
    if (!autoSlide) return;

    setAutoSlide(clearInterval(autoSlide));
    setTimeout(startAutoSlider, 3000);
  }

  swiper.onSwipeRight = prevSlide;
  swiper.onSwipeLeft = nextSlide;

  useEffect(() => {
    if (carousalRef.current) {
      setSwiper(new SwipeCarousel(carousalRef.current, 80));
      startAutoSlider();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="carousal" ref={carousalRef}>
      <p id="msg"></p>
      <div
        className="slider"
        style={{ "--w": px(dimen.w), "--h": px(dimen.h), "--gap": px(dimen.g) }}
      >
        {slides.map(({ id, img }, i) => {
          const isOff = i - counter < 0;
          const active = i - counter === 0 ? "active" : "";

          const offset =
            (i - counter) * dimen.w +
            1.5 * dimen.g +
            (i - counter) * (!isOff ? dimen.g : -1 * (dimen.g / 2));

          return (
            <div
              key={id}
              id={"slide-" + id}
              className={`slide ${isOff ? "back" : ""} ${active}`}
              style={{
                ...(viewport == "mobile"
                  ? { "--offset": px(offset) }
                  : { "--offset": px(!isOff ? offset : 0) }),
              }}
            >
              <img src={img} alt="slide" loading="lazy" />
            </div>
          );
        })}
      </div>
      <div className="controls">
        <button onClick={prevSlide} aria-label="Previous slide">
          <Icon src={IMAGES.arrowBack} />
        </button>
        <div className="index">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i == counter ? "active" : ""}
              onClick={() => setCount(i)}
            />
          ))}
        </div>
        <button onClick={nextSlide} aria-label="Next slide">
          <Icon src={IMAGES.arrowNext} />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousal;
