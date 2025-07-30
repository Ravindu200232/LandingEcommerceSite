
import { Contact2 } from '@/components/contact2'
import Footer7 from '@/components/footer7'
import PropertyNavbar from '@/components/navbar5'
import React from 'react'

export default function Page() {
  return (
    <div className="w-full flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <PropertyNavbar />
      </div>

      {/* Main content with padding to offset navbar */}
      <div className="pt-20">
        <Contact2/>
        <Footer7 />
      </div>
    </div>
  )
}
