
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
    <div className="w-full h-screen flex flex-col ">
      <div className="mr-3 ml-3">
        <Navbar5 />
      </div>

      <Hero />

      <Gallery6/>

      <Option/>

      <Feature/>

      <City/>

      <Poster2/>

      <Properties/>

      <HomeReviews/>

      <Blog/>

      <Footer7/>

    </div>
  );
}
