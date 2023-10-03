import React from "react";

const imgURL = "https://random.imagecdn.app/800/800";

const Culture = () => {
  return (
    <section className="culture">
      <div className="container">
        <h2>Office Culture</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <button>Explore more</button>

        <div className="images">
          <div className="img">
            <img src={imgURL+"?1"}/>
          </div>
          <div className="img">
            <img src={imgURL+"?2"}/>
          </div>
          <div className="img">
            <img src={imgURL+"?3"}/>
          </div>
          <div className="img">
            <img src={imgURL+"?4"}/>
          </div>
          <div className="img">
            <img src={imgURL+"?9"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
