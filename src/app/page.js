"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import Hero from "./components/Hero";
import Brands from "./components/Brands";

export default function Home() {
  return (
    <>
    <ReactLenis root>
      <Hero />
      <Brands />
      
    </ReactLenis>
  </>
  );
}
