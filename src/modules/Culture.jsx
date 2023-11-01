import React, { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import html2canvas from "html2canvas";
import { $ } from "utils-deva";
import { companyCultureImages as images } from "../resources/data.json";

const Culture = () => {
  const viewport = useScreenSize();
  const [SS, setSS] = useState("");

  function captureSSAndDisplay() {
    const el = $("#images_wrapper .images");
    html2canvas(el).then((can) => setSS(can.toDataURL("image/png")));
  }

  useEffect(() => {
    setTimeout(captureSSAndDisplay);
  }, [viewport]);

  return (
    <section className="culture">
      <div className="container">
        <h2>Office Culture</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p> */}
        <div id="images_wrapper">
          <img className="before" src={SS} alt="before image" />

          {viewport === "desktop" ? (
            <div className={"images " + viewport}>
              <div className="parts" data-d="50-50">
                <div className="img">
                  <img src={images[0]} alt="office culture image" loading="lazy" />
                </div>
                <div className="img">
                  <img src={images[1]} alt="office culture image" loading="lazy"/>
                </div>
              </div>
              <div className="parts" data-d="30-40-30">
                <div className="img">
                  <img src={images[2]} alt="office culture image" loading="lazy"/>
                </div>
                <div className="img">
                  <img src={images[3]} alt="office culture image" loading="lazy"/>
                </div>
                <div className="img">
                  <img src={images[4]} alt="office culture image" loading="lazy"/>
                </div>
              </div>
            </div>
          ) : (
            <div id="images_container" className={"images " + viewport}>
              <div className="parts" data-d="60-40">
                <div className="img">
                  <img src={images[0]} alt="office culture image" loading="lazy"/>
                </div>
                <div className="img">
                  <img src={images[1]} alt="office culture image" loading="lazy"/>
                </div>
              </div>
              <div className="parts" data-d="40-60">
                <div className="img">
                  <img src={images[2]} alt="office culture image" loading="lazy"/>
                </div>
                <div className="img">
                  <img src={images[3]} alt="office culture image" loading="lazy"/>
                </div>
              </div>

              <div className="parts" data-d="100">
                <div className="img">
                  <img src={images[4]} alt="office culture image" loading="lazy"/>
                </div>
              </div>
            </div>
          )}

          <img className="after" src={SS} alt="before image" />
        </div>

        <button aria-label="Explore more Images">Explore more</button>
      </div>
    </section>
  );
};

export default Culture;
