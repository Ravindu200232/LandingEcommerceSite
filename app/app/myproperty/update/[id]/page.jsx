import { searchProperty } from '@/actions/property';
import React from 'react'
import Update from './update';
import PropertyNavbar from '@/components/navbar5';

export default async function Page({params}) {

  const {id} = params;
  console.log("User ID:", id);

  const result = await searchProperty(id);

  const property = result.data[0];
  return (
    <div>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <PropertyNavbar />
      </div>
      <div className='pt-20'>
        <Update property={property}/>
      </div>
    </div>
  )
}
