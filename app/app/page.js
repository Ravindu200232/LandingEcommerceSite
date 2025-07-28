import { Option } from "@/components/option";
import { Gallery6 } from "@/components/gallery6";
import Hero from "@/components/hero";
import { Navbar5 } from "@/components/navbar5";
import Image from "next/image";
import Feature from "@/components/features";
import { City } from "@/components/city";
import Poster2 from "@/components/poster2";
import Properties from "@/components/Properties";
import HomeReviews from "@/components/homeReviews";
import Blog from "@/components/blog";
import Footer7 from "@/components/footer7";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar5 />
      </div>

      {/* Main content with padding to offset navbar */}
      <div className="pt-20">
        <Hero />
        <Gallery6 />
        <Option />
        <Feature />
        <City />
        <Poster2 />
        <Properties />
        <HomeReviews />
        <Blog />
        <Footer7 />
      </div>
    </div>
  );
}
