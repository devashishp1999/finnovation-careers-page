import React from "react";
import useScreenSize from "../hooks/useScreenSize";

const imgURL = "https://random.imagecdn.app/800/800";

const Culture = () => {
  const viewport = useScreenSize();

  return (
    <section className="culture">
      <div className="container">
        <h2>Office Culture</h2>

        {viewport === "desktop" ? (
          <div className={"images " + viewport}>
            <div className="parts" data-d="50-50">
              <div className="img">
                <img src={imgURL + "?1"} />
              </div>
              <div className="img">
                <img src={imgURL + "?2"} />
              </div>
            </div>

            <div className="parts" data-d="30-40-30">
              <div className="img">
                <img src={imgURL + "?3"} />
              </div>
              <div className="img">
                <img src={imgURL + "?4"} />
              </div>
              <div className="img">
                <img src={imgURL + "?5"} />
              </div>
            </div>
          </div>
        ) : (
          <div className={"images " + viewport}>
            <div className="parts" data-d="60-40">
              <div className="img">
                <img src={imgURL + "?1"} />
              </div>
              <div className="img">
                <img src={imgURL + "?2"} />
              </div>
            </div>
            <div className="parts" data-d="40-60">
              <div className="img">
                <img src={imgURL + "?1"} />
              </div>
              <div className="img">
                <img src={imgURL + "?2"} />
              </div>
            </div>

            <div className="parts" data-d="100">
              <div className="img">
                <img src={imgURL + "?3"} />
              </div>
            </div>
          </div>
        )}

        <button>Explore more</button>
      </div>
    </section>
  );
};

export default Culture;
