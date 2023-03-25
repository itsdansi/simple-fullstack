import {Link} from "react-router-dom";
import UserIcon from "./UserIcon";

export default function NavBar() {
  return (
    <nav className="sticky top-0 w-full flex flex-wrap items-center justify-between p-5 bg-purple-900">
      <Link to="/">
        <span className="text-2xl  text-gray-50 flex items-center mx-3">TaskHub</span>
      </Link>

      <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
        <li>
          <Link
            to={"/"}
            className="text-white hover:text-blue-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/todo"
            className="text-white hover:text-blue-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0"
          >
            ListTodo
          </Link>
        </li>
        <li>
          <Link
            to="/reports"
            className="text-white hover:text-blue-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0"
          >
            Reports
          </Link>
        </li>

        {/* <li>
          <select
            defaultValue={"None"}
            className=" text-white hover:text-blue-500  border-t-transparent bg-transparent font-sans text-sm font-normal text-blue-gray-700 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          >
            <option value="not_started">Not Started</option>
            <option value="in_progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </li> */}
      </ul>
      <UserIcon />
    </nav>
  );
}
