import connectToMongoDB from "@/db/connection";
import Todo from "./todo";
import userModel from "@/db/userSchema";

import { deleteTodo, updateTodo } from "./action";

export default async function Page({ params }: { params: { id: string } }) {
  await connectToMongoDB();
  const todo = await userModel.findOne({ _id: params.id }).populate("todos");
  console.log(todo.todos, "This is todo");
  return (
    <div>
      My Post: {params.id}
      <Todo id={params?.id} />
      <div>
        {todo.todos.map((listy: any) => {
          return (
            <div>
              <h1>
                Todo:
                <br />
                {listy.todo}
              </h1>

              <h1>
                Description:
                <br />
                {listy.description}
              </h1>
              <form action={deleteTodo}>
                {" "}
                <input type="hidden" value={listy._id} name="_id" />
                <input type="hidden" value={params.id} name="user" />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
               
               
              </form>
              <form action={updateTodo}>
              <input type="text" name="update" />
              <input type="hidden" value={listy._id} name="_id" />
              <input type="hidden" value={params.id} name="user" />
              <button className="bg-green-700">Update</button>

              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
}
