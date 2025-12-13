"use client";

import { useState } from "react";
import HomeHero from "../components/HomeHero";
import StaggeredMenu from "../components/StaggeredMenu";
import HomeStacking from "../components/HomeStacking";
import SplashScreen from "../components/SplashScreen";
import CTA from "../components/CTA";

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Work", link: "/work" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* Splash Screen */}
      <SplashScreen onComplete={() => setSplashComplete(true)} />

      <div className="w-full min-h-screen bg-white">
        {/* Navigation - Now self-contained fixed overlay */}
        <StaggeredMenu
          items={menuItems}
          socialItems={[
            { label: "Instagram", link: "#" },
            { label: "LinkedIn", link: "#" },
            { label: "Twitter", link: "#" }
          ]}
          logoText="ARCHAELIX"
          menuButtonColor="#0F172A"
          openMenuButtonColor="#0F172A"
          accentColor="#f73b20"
        />

        {/* Hero Section */}
        <HomeHero />

        {/* CTA Section */}
        <CTA />

        {/* Stacking Section */}
        <HomeStacking />
      </div>
    </>
  );
}

