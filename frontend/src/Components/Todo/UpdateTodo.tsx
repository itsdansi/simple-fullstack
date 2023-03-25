import NavBar from "../Navbar/Navbar";

export default function UpdateToDo() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col w-100 items-center mt-3">
        <h1 className="text-3xl font-bold mb-5">Update Todo</h1>
        <form className="w-full max-w-sm mb-20 ">
          <input
            className="border border-gray-400 rounded-lg p-2 w-full mb-1"
            type="text"
            placeholder="Add a todo title"
            disabled
          />
          <textarea
            className="border border-gray-400 rounded-lg p-2 w-full"
            placeholder="Add todo descriptio"
            disabled
          />
          <select
            defaultValue={"None"}
            className=" border border-gray-400 rounded-lg peer h-full w-full  border-blue-gray-200  bg-transparent px-3 mb-2 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500"
          >
            <option value="not_started">Not Started</option>
            <option value="in_progress">In progress</option>
            <option value="done">Done</option>
          </select>
          <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg">
            Update
          </button>
        </form>
      </div>
    </>
  );
}
