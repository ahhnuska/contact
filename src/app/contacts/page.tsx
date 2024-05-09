import { Contactu } from "@/components/Contactu";
import { deleteContact,getContact, updateContact } from "./action";
import Link from "next/link";

export default async function Contacts(){
  const contactList=await getContact()
  return(
    <div>
    <Contactu/>

{contactList.map((contact)=>{
  return <>
  
  Name:{contact.name}
  <br />
  {
    contact.contactno
  }
  <br />
  <Link href={contact._id}>{contact.email}</Link>


<form action={deleteContact}>
  <input type="hidden" value={contact._id} name="_id" />
<button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">Delete</button>
</form>

<hr/>
<form action={updateContact}>
  <input type="text" name="name"/>Name
  <input type="text" name="contactno" />ContactNumber
  <input type="text" name="email" />Email
<input type="hidden" value={contact._id} name="_id" />
<button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">Update</button>
</form>
  </>
})}
    </div>
)
}