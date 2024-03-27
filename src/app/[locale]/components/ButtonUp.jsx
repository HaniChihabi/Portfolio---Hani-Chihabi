"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';

export default function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // Set the width according to your "lg" breakpoint

  // Function to detect scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) { // Adjust the pixel value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isLargeScreen && isVisible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="justify-center fixed bottom-10 right-10 bg-white hover:bg-slate-50 text-black px-4 rounded-full"
      aria-label="Scroll to top"
      style={{ fontSize: "36px" }}
    >
      ↑
    </button>
  ) : null;
}
