import { useState, useCallback, useEffect } from "react";
import { debounce } from "../utils";
import { isClient } from "../constants/index";

function getDimensionObject(node) {
  if (!node) return {};

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

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && node) {
      const measure = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimensionObject(node));
        });
      };

      measure(); // Initial measurement

      const debouncedMeasure = debounce(limit || 100, measure);

      window.addEventListener("resize", debouncedMeasure);
      window.addEventListener("scroll", debouncedMeasure);
      return () => {
        window.removeEventListener("resize", debouncedMeasure);
        window.removeEventListener("scroll", debouncedMeasure);
      };
    }
  }, [node, limit]); // Depend on node and limit to re-run when they change

  return [ref, dimensions, node];
}
