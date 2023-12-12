import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../assets/assets";
import Icon from "./Icon";
import { SwipeCarousel, px } from "utils-deva";
import useScreenSize from "../hooks/useScreenSize";
import TestimonialCard from "./TestimonialCard";
import { testimonials as slidesData } from "../resources/data.json";

const slidesX = new Array(50).fill(slidesData).flat();

const TestimonialsSlider = () => {
  const viewport = useScreenSize();
  const [swiper, setSwiper] = useState(new SwipeCarousel());

  const carousalRef = useRef();

  const [slides, setSlides] = useState(slidesX);

  const [counter, setCount] = useState(Math.floor(slides.length / 2));

  const [autoSlide, setAutoSlide] = useState(null);

  const dimen = { w: 320, h: 350, sw: 320 * 0.9, g: 20 };

  function nextSlide(e) {
    checkEvent(e);

    setCount((prev) => {
      if (prev === slides.length - slidesData.length) return slides.length / 2;
      return Math.min(prev + 1, slides.length - 1);
    });
  }
  function prevSlide(e) {
    checkEvent(e);
    setCount((prev) => {
      if (prev === slidesData.length) return slides.length / 2;
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

  function allClear() {
    var rect = carousalRef.current?.getBoundingClientRect();
    if(!rect) return;
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    const counter = +getComputedStyle(
      document.querySelector(".testimonials .slider").lastChild
    ).getPropertyValue("--at");
    return (
      (rect.bottom < 0 || rect.top - viewHeight >= 0) &&
      (counter < 100 || counter >= slides.length - slidesData.length)
    );
  }

  swiper.onSwipeRight = prevSlide;
  swiper.onSwipeLeft = nextSlide;

  useEffect(() => {
    if (viewport === "mobile") {
      const newSlides = [];
      for (let i = 0; i < slides.length; i += 2) {
        newSlides.push([slides[i], slides[i + 1]]);
      }
      setSlides(newSlides);
      setCount(Math.ceil(counter / 2));
    } //
    else setSlides(slidesX);
    // eslint-disable-next-line
  }, [viewport]);

  useEffect(() => {
    if (carousalRef.current) {
      setSwiper(new SwipeCarousel(carousalRef.current, 80));

      startAutoSlider();

      document.addEventListener("mousemove", () => {
        if (allClear()) setCount(Math.floor(slides.length / 2));
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => {
        if (allClear()) setCount(Math.floor(slides.length / 2));
      });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="carousal" ref={carousalRef}>
      <div
        className="slider"
        style={{
          "--w": px(dimen.w),
          "--sw": px(dimen.sw),
          "--h": px(dimen.h),
          "--gap": px(dimen.g),
          height: viewport === "mobile" ? `${2 * dimen.h + 20}px` : px(dimen.h),
        }}
      >
        {slides.map((slide, i) => {
          const off = i - counter < 0 ? "back" : "";
          const active = i - counter === 0 ? "active" : "";
          const ahead = i - counter > 0 ? "ahead" : "";

          const offset =
            (i - counter) * (dimen.sw + dimen.g) + (ahead ? dimen.w * 0.1 : 0);

          return (
            <div
              key={i}
              className={"slide " + (off || active || ahead)}
              style={{ "--offset": px(offset), "--at": Math.abs(i - counter) }}
            >
              {Array.isArray(slide) ? (
                <>
                  <TestimonialCard
                    info={slide[0]}
                    clickCard={() => setCount(i)}
                  />
                  <TestimonialCard
                    info={slide[1]}
                    clickCard={() => setCount(i)}
                  />
                </>
              ) : (
                <TestimonialCard info={slide} clickCard={() => setCount(i)} />
              )}
            </div>
          );
        })}
      </div>

      <div className="controls">
        <button onClick={prevSlide} aria-label="Previous slide">
          <Icon src={IMAGES.arrowBack} />
        </button>
        <div className="index">
          {slidesData.map((_, i) => (
            <span
              key={i}
              className={i === counter % slidesData.length ? "active" : ""}
            />
          ))}
        </div>
        <button onClick={nextSlide} aria-label="Next Slide">
          <Icon src={IMAGES.arrowNext} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
