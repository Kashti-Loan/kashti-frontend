"use client";

import { useState, useEffect } from "react";

function useWindowWidth() {
  // Initialize state with the current window width
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    // Function to update the state with the new window width
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener for the resize event
    window.addEventListener("resize", handleResize);

    // Call handleResize to set the initial width
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

export default useWindowWidth;
