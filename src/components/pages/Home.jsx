import { AboutUsSection } from "./AboutUsSection";
import { CounterSection } from "./CounterSection";
import { Gallery } from "./Gallery";
import { HeroSection } from "./HeroSection";
import PartnersSection from "./PartnersSection";
import ProductServices from "./ProductService";
import { Testimonials } from "./Testimonials";
import { WhyToChooseUsSection } from "./WhyToChooseUs";

export const Home = () => {
  return (
    <>
    <HeroSection/>
    <CounterSection/>
    <PartnersSection/>
    <AboutUsSection/>
    <WhyToChooseUsSection/>
    <ProductServices/>
    <Gallery/>
    <Testimonials/>
    
    </>
  )
};
