import React from "react";
import window from "window-or-global";
import { isClient } from "../constants/index";

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useLayoutEffect(() => {
    if (!isClient) return;
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
};

export default useWindowWidth;
