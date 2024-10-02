"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Features from "./components/Features";
import Integrations from "./components/Integrations";

export default function Home() {
  return (
    <>
    <ReactLenis root>
      <Hero />
      <Brands />
      <Features />
      <Integrations />
    </ReactLenis>
  </>
  );
}
