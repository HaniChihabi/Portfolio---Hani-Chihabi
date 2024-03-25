"use client";
import { useEffect, useState } from "react";

export default function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);

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

  return isVisible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="justify-center fixed bottom-4 right-4 bg-white hover:bg-slate-50 text-black px-4 rounded-full"
      aria-label="Scroll to top"
      style={{ fontSize: "36px" }}
    >
      ↑
    </button>
  ) : null;
}
