import NavBar from "../Navbar/Navbar";
import Accordian from "./Accordian";
import DropDown from "./Dropdown";

export function ListTodo() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col w-100 items-center mt-3">
        <DropDown />
        <div className="my-center-class flex justify-center flex-col items-center mt-3">
          <li className="border border-gray-400 rounded-lg p-2 mb-2 flex justify-between">
            <Accordian />
          </li>
          <li className="border border-gray-400 rounded-lg p-2 mb-2 flex justify-between">
            <Accordian />
          </li>
          <li className="border border-gray-400 rounded-lg p-2 mb-2 flex justify-between">
            <Accordian />
          </li>
        </div>
      </div>
    </>
  );
}
