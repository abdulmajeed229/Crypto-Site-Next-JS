import Image from "next/image";
import Navbar from "./components/navbar";
import HomeContent from "./components/home";
import Price from "./components/price";
import MarketUpdate from "./components/market";
import CryptexSection from "./components/lap";
import HeroSection from "./components/mob";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    
    <Navbar/>
    <HomeContent/>
    <Price/>
    <MarketUpdate/>
    <CryptexSection/>
    <HeroSection/>
    <Footer/>
    </>
     );
}
