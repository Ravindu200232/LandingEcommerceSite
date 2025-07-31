import { searchProperty } from "@/actions/property";
import Details from "@/components/details";
import Footer7 from "@/components/footer7";
import Gallery from "@/components/galary";
import PropertyNavbar, { Navbar5 } from "@/components/navbar5";
import Similar from "@/components/similar";
import React from "react";


const properties = {
    id: 1,
    owner: "ravindu bandara",
    owner_type : "owner",
    contact : '0789840996',
    email : "ravindu22232@gmail.com",
    whatsapp : "0789840996",
    title: "10 Perches Bare Land for Sale in Kiribathgoda",
    perprice: 250000.0,
    totalPrice: 1200000.0,
    location: "Gonawala, Kiribathgoda",
    city: "Malabe",
    district: "Kiribathgoda",
    type: "Land",
    landShape : "square",
    offerdFor : "",
    size: 20,
    description:
      "This great value property, in a highly residential area, awaits its new owner.",
    features: ["Highly residential area", "Few minutes to town", "Clear deed"],
    images: ["/img/feature1.jpeg", "/img/feature2.jpg"],
    listedDate: "2025-07-25",
    status: "Available",
 
};

export default async function Page({ params }) {
  const { id } = params;
  const property = await searchProperty(id);

  let result = property.data[0]
  console.log("property", result);



  console.log("sdsdf",id);
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 shadow-xl bg-white">
         <PropertyNavbar />
      </div>

      <div className="pt-20">

       
        <Gallery images={result.images} />

        <Details property={result} />
        <Similar property={result}/>
        <Footer7 />
      </div>
    </div>
  );
}
