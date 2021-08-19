import { useState, useCallback, useLayoutEffect } from "react";
import { debounce } from "../utils";

function getDimensionObject(node) {
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
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => setNode(node), []);

  useLayoutEffect(() => {
    if ("undefined" !== typeof window && node) {
      const measure = () =>
        window.requestAnimationFrame(() => {
          setDimensions(getDimensionObject(node));
        });

      measure();

      const listener = debounce(limit ? limit : 100, measure);

      window.addEventListener("resize", listener, {passive: true});
      window.addEventListener("scroll", listener, {passive: true});
      return () => {
        window.removeEventListener("resize", listener, {passive: true});
        window.removeEventListener("scroll", listener, {passive: true});
      };
    }
  }, [node, limit]);

  return [ref, dimensions, node];
}
