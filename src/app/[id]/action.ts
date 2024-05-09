"use server";
import connectToMongoDB from "@/db/connection";
import todomodel from "@/db/todoSchema";
import userModel from "@/db/userSchema";
import { revalidatePath } from "next/cache";
import { todo } from "node:test";

export default async function addTodo(formData: FormData) {

  await connectToMongoDB();
  const task = formData.get("task");
  const desc = formData.get("desc");
  const userId = formData.get("id")||null;
  console.log(userId,"this is the user id")
  const todo = await todomodel.create({ todo: task, description: desc });

    const userUp = await userModel.updateOne(
      { _id: userId },
      { $push: { todos: todo._id } }
    );
    console.log(userUp, "use updated");
  
  revalidatePath("/");
}
export  async function deleteTodo(formData:FormData){
    await connectToMongoDB()
    const id=formData.get('_id')
    const userId = formData.get("user")||null;
    const userUp = await userModel.updateOne(
      { _id: userId },
      { $pull: { todos:id  }}
    );
    await todomodel.deleteOne({_id:id});
    console.log("todo removed")
    revalidatePath("/")
}
export async function updateTodo(formData:FormData){
  await connectToMongoDB()
    const id=formData.get('_id')
    const userId = formData.get("user")||null;
    const task = formData.get("update")||null;
  const todo = await todomodel.updateOne({_id:id},{ todo: task });

  console.log(id)
  console.log(userId)

    const userUp = await userModel.updateOne(
      { _id: userId },
      { $pull: { todos:todo._id}}
    );

    revalidatePath("/");
}