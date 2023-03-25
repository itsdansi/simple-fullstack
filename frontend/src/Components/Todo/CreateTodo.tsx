export default function CreateToDo() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-5">Todo List</h1>
      <form className="w-full max-w-sm mb-20 ">
        <input
          className="border border-gray-400 rounded-lg p-2 w-full mb-1"
          type="text"
          placeholder="Add a todo title"
        />
        <textarea
          className="border border-gray-400 rounded-lg p-2 w-full"
          placeholder="Add todo descriptio"
        />
        <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg">
          Add
        </button>
      </form>
    </>
  );
}
