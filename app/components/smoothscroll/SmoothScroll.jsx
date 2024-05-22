"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }) {
  const options = {
    lerp: 0.09,
    smooth: true,
    direction: "vertical",
  };
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
