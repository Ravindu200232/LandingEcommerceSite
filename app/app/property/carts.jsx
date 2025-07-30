import { getProperties } from "@/actions/property";
import React from "react";
import Cart from "../../components/cart";
import Page3 from "./page";
export default async function Product() {

  const property = await getProperties()


  return (
    <div>
  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10">
      {property.map((property) => (
        <div key={property._id}>
          <Cart property={property} />
        </div>
      ))}
    </div>
    </div>
  );
}
