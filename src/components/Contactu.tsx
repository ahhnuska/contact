import Action from "@/app/contacts/action";

export function Contactu() {
    return (
      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Contact Info</h1>
        <form action={Action} className="space-y-4" >
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input  type="text" id="name" name="name" className="border-gray-300 rounded-md px-4 py-2 w-full" required />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block mb-1">Contact Number:</label>
            <input type="text" id="contactNumber" name="contactNumber" className="border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" className="border-gray-300 rounded-md px-4 py-2 w-full" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Submit</button>
          

        </form>
      </div>
    );
  }
