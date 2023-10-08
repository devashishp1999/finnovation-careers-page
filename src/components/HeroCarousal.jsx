import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../assets/assets";
import Icon from "./Icon";
import { SwipeCarousel, px } from "../utils";
import useScreenSize from "../hooks/useScreenSize";

const imgArr = IMAGES.cImage;
const slides = [
  { id: 1, img: imgArr[0] },
  { id: 2, img: imgArr[1] },
  { id: 3, img: imgArr[0] },
  { id: 4, img: imgArr[1] },
  { id: 5, img: imgArr[0] },
];

const HeroCarousal = () => {
  const viewport = useScreenSize();
  const [counter, setCount] = useState(1); // 0 to slides.length
  const [dimen] = useState({ w: 320, h: 470, g: 20 });
  const [swiper, setSwiper] = useState(new SwipeCarousel());

  const carousalRef = useRef();

  function nextSlide() {
    setCount(Math.min(counter + 1, slides.length - 1));
  }
  function prevSlide() {
    setCount(Math.max(counter - 1, 0));
  }

  swiper.onSwipeRight = prevSlide;
  swiper.onSwipeLeft = nextSlide;

  useEffect(() => {
    if (carousalRef.current) {
      setSwiper(new SwipeCarousel(carousalRef.current, 80));
    }
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
              <img src={img} alt="slide image" />
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

export default HeroCarousal;
