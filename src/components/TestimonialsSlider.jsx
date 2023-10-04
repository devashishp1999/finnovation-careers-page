import React, { useEffect, useState } from "react";
import { IMAGES } from "../assets/assets";
import Icon from "./Icon";
import { px } from "../utils";
import useScreenSize from "../hooks/useScreenSize";
import TestimonialCard from "./TestimonialCard";

let slidesTemplate = [
  {
    id: 1,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 4,
  },
  {
    id: 2,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 3,
  },
  {
    id: 3,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 4,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 4,
  },
  {
    id: 5,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 6,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 4,
  },
  {
    id: 7,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 8,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 9,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 10,
    avatar: "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
];

const TestimonialsSlider = () => {
  const viewport = useScreenSize();
  const [slides, setSlides] = useState(slidesTemplate);

  const [counter, setCount] = useState(Math.min(2, slides.length - 1)); // 0 to slides.length
  const dimen = { w: 320, h: 350, g: 20 };

  function nextSlide() {
    setCount(Math.min(counter + 1, slides.length - 1));
    // setCount(counter >= slides.length - 1 ? 0 : counter + 1);
  }
  function prevSlide() {
    setCount(Math.max(counter - 1, 0));
  }

  useEffect(() => {
    if (viewport === "mobile") {
      const newSlides = [];
      for (let i = 0; i < slidesTemplate.length; i += 2) {
        newSlides.push([slidesTemplate[i], slidesTemplate[i + 1]]);
      }
      setSlides(newSlides);
    } //
    else setSlides(slidesTemplate);
  }, [viewport]);

  return (
    <div className="carousal">
      <div
        className="slider"
        style={{
          "--w": px(dimen.w),
          "--h": px(dimen.h),
          "--gap": px(dimen.g),
          height: viewport === "mobile" ? `${2 * dimen.h + 20}px` : px(dimen.h),
        }}
      >
        {slides.map((slide, i) => {
          const isOff = i - counter < 0;
          const active = i - counter === 0 ? "active" : "";

          const offset =
            (i - counter) * dimen.w +
            1.5 * dimen.g +
            (i - counter) * (!isOff ? dimen.g : -1 * (dimen.g / 2));

          return (
            <div
              key={i}
              className={`slide ${isOff ? "back" : ""} ${active}`}
              style={{ "--offset": px(offset) }}
            >
              {Array.isArray(slide) ? (
                <>
                  <TestimonialCard info={slide[0]} />
                  <TestimonialCard info={slide[1]} />
                </>
              ) : (
                <TestimonialCard info={slide} />
              )}
            </div>
          );
        })}
      </div>

      <div className="controls">
        <button onClick={prevSlide}>
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
        <button onClick={nextSlide}>
          <Icon src={IMAGES.arrowNext} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
