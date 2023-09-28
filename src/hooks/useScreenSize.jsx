import { useState, useEffect } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setScreenSize(getScreenSize());
  }

  function getScreenSize() {
    return window.innerWidth <= 992 ? "mobile" : "desktop";
  }

  return screenSize;
}

export default useScreenSize;
