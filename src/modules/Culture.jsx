import React, { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import html2canvas from "html2canvas";
import { $ } from "utils-deva";
import { cultureImages, sliderCultureImages } from "../resources/data.json";
import ImageSlider from "../components/ImageSlider";

const sliderImages = sliderCultureImages.map((el, i) => ({
  id: i + 1,
  img: el,
}));

const Culture = () => {
  const viewport = useScreenSize();
  const [SS, setSS] = useState("");
  const [showSlider, setShowSlider] = useState(false);

  const [imageOnLoad, setImageOnLoad] = useState("00000"); // each '0' for each images' loaded state

  function captureSSAndDisplay() {
    const el = $("#images_wrapper .images");
    html2canvas(el).then((canvas) => setSS(canvas.toDataURL("image/png")));
  }

  function setImageLoaded(index) {
    setImageOnLoad((prev) => {
      return prev.substring(0, index) + 1 + prev.substring(index + 1);
    });
  }

  useEffect(() => {
    if (!imageOnLoad.includes("0")) {
      setTimeout(captureSSAndDisplay);
    }
  }, [viewport, imageOnLoad]);

  return (
    <section className="culture">
      <div className="container">
        <h2>Office Culture</h2>
        <div id="images_wrapper">
          <img className="before" src={SS} alt="before" />

          {viewport === "desktop" ? (
            <div className={"images " + viewport}>
              <div className="parts" data-d="50-50">
                <div className="img">
                  <img
                    src={cultureImages[0]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(0)}
                  />
                </div>
                <div className="img">
                  <img
                    src={cultureImages[1]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(1)}
                  />
                </div>
              </div>
              <div className="parts" data-d="30-40-30">
                <div className="img">
                  <img
                    src={cultureImages[2]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(2)}
                  />
                </div>
                <div className="img">
                  <img
                    src={cultureImages[3]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(3)}
                  />
                </div>
                <div className="img">
                  <img
                    src={cultureImages[4]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(4)}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div id="images_container" className={"images " + viewport}>
              <div className="parts" data-d="60-40">
                <div className="img">
                  <img
                    src={cultureImages[0]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(0)}
                  />
                </div>
                <div className="img">
                  <img
                    src={cultureImages[1]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(1)}
                  />
                </div>
              </div>
              <div className="parts" data-d="40-60">
                <div className="img">
                  <img
                    src={cultureImages[2]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(2)}
                  />
                </div>
                <div className="img">
                  <img
                    src={cultureImages[3]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(3)}
                  />
                </div>
              </div>

              <div className="parts" data-d="100">
                <div className="img">
                  <img
                    src={cultureImages[4]}
                    alt="office culture"
                    onLoad={() => setImageLoaded(4)}
                  />
                </div>
              </div>
            </div>
          )}

          <img className="after" src={SS} alt="After" />
        </div>

        <button aria-label="Explore more Images" onClick={setShowSlider}>
          Explore more
        </button>
      </div>

      {showSlider && (
        <ImageSlider
          images={sliderImages}
          closeSlider={() => setShowSlider(false)}
        />
      )}
    </section>
  );
};

export default Culture;
