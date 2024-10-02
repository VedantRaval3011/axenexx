"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
    <ReactLenis root>
      <Hero />
      
    </ReactLenis>
  </>
  );
}
