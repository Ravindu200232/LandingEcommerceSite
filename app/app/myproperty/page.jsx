import React from 'react'
import MyPro from './myPro'
import { cookies } from 'next/headers';
import { searchMypro } from '@/actions/property';
import Footer7 from '@/components/footer7';
import PropertyNavbar from '@/components/navbar5';
import { redirect } from 'next/navigation';

export default async function Page() {

    const cookieStore = cookies();
      const user = cookieStore.get("user")?.value;

       if(!user){
    redirect(`/login`)
  }

    const id = JSON.parse(user);
  console.log("User ID:", id);

  const property = await searchMypro(id)

 

  console.log("Property Data:", property);

  return (
    <div>
        {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <PropertyNavbar />
      </div>

        <div className='pt-20'>
            <MyPro property={property.data}/>
        </div>

        <div>
            <Footer7/>
        </div>
    </div>
  )
}
