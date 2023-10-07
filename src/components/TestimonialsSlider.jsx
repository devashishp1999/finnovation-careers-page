import React, { useEffect, useState } from "react";
import { IMAGES } from "../assets/assets";
import Icon from "./Icon";
import { px } from "../utils";
import useScreenSize from "../hooks/useScreenSize";
import TestimonialCard from "./TestimonialCard";

let slidesTemplate = [
  {
    id: 1,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 4,
  },
  {
    id: 2,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 3,
  },
  {
    id: 3,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 4,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 4,
  },
  {
    id: 5,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 6,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 4,
  },
  {
    id: 7,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 8,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 9,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
  {
    id: 10,
    avatar: IMAGES.userImg || "",
    name: "Armando Sallavanti",
    location: "Moscow, Russia",
    text: "The most helpful course I've ever taken. Clears out the noise. Focuses you in on absolute essentials. Priceless.",
    stars: 5,
  },
];

const TestimonialsSlider = () => {
  const viewport = useScreenSize();
  const [slides, setSlides] = useState(slidesTemplate);

  const [counter, setCount] = useState(Math.min(2, slides.length - 1)); // value bw 0 & slides.length
  const dimen = { w: 320, h: 350, sw: 320 * 0.9, g: 20 };

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
          "--sw": px(dimen.sw),
          "--h": px(dimen.h),
          "--gap": px(dimen.g),
          height: viewport === "mobile" ? `${2 * dimen.h + 20}px` : px(dimen.h),
        }}
      >
        {slides.map((slide, i) => {
          const isOff = i - counter < 0 ? "back" : "";
          const active = i - counter === 0 ? "active" : "";
          const ahead = i - counter > 0 ? "ahead" : "";

          const offset =
            (i - counter) * (dimen.sw + dimen.g) + (ahead ? dimen.w * 0.1 : 0);

          return (
            <div
              key={i}
              className={"slide " + (isOff || active || ahead)}
              style={{ "--offset": px(offset), "--at": Math.abs(i - counter) }}
            >
              {Array.isArray(slide) ? (
                <>
                  <TestimonialCard info={slide[0]} clickCard={() => setCount(i)} />
                  <TestimonialCard info={slide[1]} clickCard={() => setCount(i)} />
                </>
              ) : (
                <TestimonialCard info={slide} clickCard={() => setCount(i)} />
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
