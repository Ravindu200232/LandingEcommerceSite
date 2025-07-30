


import { authUser } from '@/actions/auth'
import PropertyAddForm from './propertyAdd-form'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export default async function Page() {

const cookieStore = cookies();
  const user = cookieStore.get("user")?.value;

  

    if(!user){
        redirect(`/login`)
        
    }

    const auth = await authUser(user);

    if(!auth){
        redirect(`/login`)
    }

    console.log("bla bla",auth)
  return (
    
    <div>
        <div>
            <PropertyAddForm/>
        </div>
    </div>
  )
}
