import { useState, useCallback, useLayoutEffect } from "react";
import { debounce } from "../utils";
import { isClient } from "../constants/index";

function getDimensionObject(node) {
  if (!node || !isClient) {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      right: 0,
      bottom: 0,
    };
  }

  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    x: rect.x,
    y: rect.y,
    right: rect.right,
    bottom: rect.bottom,
  };
}

export default function useBoundingRect(limit) {
  const [dimensions, setDimensions] = useState(getDimensionObject(null));
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => setNode(node), []);

  useLayoutEffect(() => {
    if (!isClient) return;
    const measure = () =>
      window.requestAnimationFrame(() => {
        setDimensions(getDimensionObject(node));
      });

    measure();

    const listener = debounce(limit ? limit : 100, measure);

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [node, limit]);

  return [ref, dimensions, node];
}
