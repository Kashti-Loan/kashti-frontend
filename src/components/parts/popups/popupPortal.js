"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const PopupPortal = ({ children, display }) => {
  useEffect(() => {
    // Applying on mount
    document.body.style.overflow = "hidden";
    // Applying on unmount
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return display
    ? createPortal(children, document.querySelector("#popupContainer"))
    : null;
};

export default PopupPortal;
