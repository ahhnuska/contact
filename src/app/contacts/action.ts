'use server';
import connectToMongoDB from "@/db/connection";
import userSchema from "@/db/userSchema"; 
import { revalidatePath } from "next/cache";

export default async function   addContact(formData:FormData){
     const name=formData.get("name")
     const contactNumber=formData.get("contactNumber")
     const email =formData.get("email")
     // console.log(name,contactNumber,email)
     await connectToMongoDB()
     await userSchema.create({name:name,contactno:contactNumber,email:email})
     revalidatePath("/")
}
export async function getContact(){
     await connectToMongoDB()
     const contactList=await userSchema.find()
     console.log(contactList)
     return contactList
}
export async function deleteContact(formData:FormData){
     await connectToMongoDB()
     const id =formData.get("_id")
     const deletee=await userSchema.deleteOne({_id:id})
     console.log(deletee)
     revalidatePath("/")

}
export async function updateContact(formData:FormData){
     await connectToMongoDB()
     const id =formData.get("_id")
     const name =formData.get("name")
     const contactno =formData.get("contactno")
     const email =formData.get("email")
     const contactList=await userSchema.updateOne({_id:id},{name:name,contactno:contactno,email:email})
     console.log(contactList)
     revalidatePath("")
     return contactList
}