import addTodo from "./action";

export default function Todo({id}:{id:string}) {
  return (
    <main className="p-10 ">
      <h1>Make a todo list</h1>
      <form className="space-y-4" action={addTodo}>
        <div>
          <label htmlFor="task" className="block mb-1">
            Task:
          </label>
          <input
            type="text"
            id="task"
            name="task"
            className="border-red-300  rounded-md px-4 py-2 w-full"
            required
          />
          <input value={id} type="hidden" name="id"/>

          <label htmlFor="task" className="block mb-1">
            Desc:
          </label>
          <input
            type="text"
            id="task"
            name="desc"
            className="border-red-300 rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Task
        </button>
        
      </form>
    </main>
  );
}
