import React, { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import html2canvas from "html2canvas";
import { IMAGES } from "../assets/assets";

const imgURL = IMAGES.images;

const Culture = () => {
  const viewport = useScreenSize();
  const [SS, setSS] = useState("");

  function captureSSAndDisplay() {
    const el = document.querySelector("#images_wrapper .images");
    html2canvas(el).then((can) => setSS(can.toDataURL("image/png")));
  }

  useEffect(() => {
    setTimeout(captureSSAndDisplay);
  }, [viewport]);

  return (
    <section className="culture">
      <div className="container">
        <h2>Office Culture</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div id="images_wrapper">
          <img className="before" src={SS} alt="before image" />

          {viewport === "desktop" ? (
            <div className={"images " + viewport}>
              <div className="parts" data-d="50-50">
                <div className="img">
                  <img src={imgURL[0]} />
                </div>
                <div className="img">
                  <img src={imgURL[1]} />
                </div>
              </div>
              <div className="parts" data-d="30-40-30">
                <div className="img">
                  <img src={imgURL[2]} />
                </div>
                <div className="img">
                  <img src={imgURL[3]} />
                </div>
                <div className="img">
                  <img src={imgURL[4]} />
                </div>
              </div>
            </div>
          ) : (
            <div id="images_container" className={"images " + viewport}>
              <div className="parts" data-d="60-40">
                <div className="img">
                  <img src={imgURL[0]} />
                </div>
                <div className="img">
                  <img src={imgURL[1]} />
                </div>
              </div>
              <div className="parts" data-d="40-60">
                <div className="img">
                  <img src={imgURL[2]} />
                </div>
                <div className="img">
                  <img src={imgURL[3]} />
                </div>
              </div>

              <div className="parts" data-d="100">
                <div className="img">
                  <img src={imgURL[4]} />
                </div>
              </div>
            </div>
          )}

          <img className="after" src={SS} alt="before image" />
        </div>

        <button>Explore more</button>
      </div>
    </section>
  );
};

export default Culture;
