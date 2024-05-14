import { useEffect, useState } from "react";

const isClient = typeof window === "object";

const useWindowWidth = () => {
  // Initialize width as undefined to ensure consistency in server and client rendering
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // This ensures that the effect only runs on the client side
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Initial setting of width after the component mounts
    setWidth(window.innerWidth);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]); // Ensure the effect runs only once after the initial render

  return width;
};

export default useWindowWidth;
