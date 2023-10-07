import React from "react";
import Icon from "./Icon";
import { IMAGES } from "../assets/assets";
import useScreenSize from "../hooks/useScreenSize";

const TestimonialCard = ({ info, clickCard = () => {} }) => {
  const viewport = useScreenSize();

  if (!info) {
    return (
      <div id={"testimonial-x"} className="testimonial_card">
        <strong>
          Keep 'EVEN' number of testimonials, to keep the design as intended.
        </strong>
      </div>
    );
  }

  const { id, avatar, name, location, text, stars } = info;
  const quoteW = viewport == "desktop" ? 48 : 40;

  const starsArr = [
    ...new Array(5).fill(<Icon src={IMAGES.starFilled} w={20} />),
    ...new Array(5).fill(<Icon src={IMAGES.starOutline} w={20} />),
  ];

  return (
    <div
      id={"testimonial-" + id}
      className="testimonial_card"
      onClick={clickCard}
    >
      <Icon src={IMAGES.quote} w={quoteW} h={quoteW} />
      <div className="user">
        <div className="avatar">
          <Icon
            src={
              avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU"
            }
          />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <p>{location}</p>
        </div>
      </div>

      <hr />

      <p>{text}</p>

      <div className="stars">
        {[...starsArr.slice(0, stars), starsArr.slice(5, 10 - stars)]}
      </div>
    </div>
  );
};

export default TestimonialCard;
