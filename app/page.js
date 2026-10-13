
import FullWidthBanner from "./components/FullWidthBanner";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SplitNarrative from "./components/SplitNarrative";
import VisionStatement from './components/VisionStatement'
import Footer from "./components/Footer";
import FocusAreas from "./components/FocusAreas";
import WhatBringsYouHere from "./components/WhatBringsYouHere";
import HowIWork from "./components/HowIWork";
import ApproachSection from "./components/ApproachSection";
import OurOffice from "./components/OurOffice";
import BookASession from "./components/BookASession";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection/>
    <SplitNarrative/>
    <WhatBringsYouHere/>
    <FullWidthBanner/>
    <FocusAreas/>
    <HowIWork/>
    <VisionStatement/>
    <ApproachSection/>
    <OurOffice/>
    <BookASession/>
    <Footer/>
    
    </main>
  );
}