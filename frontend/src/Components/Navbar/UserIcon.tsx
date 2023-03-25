import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function UserIcon() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <img
        src="https://randomuser.me/api/portraits/med/men/75.jpg"
        alt="user_image"
        className="cursor-pointer h-12 px-2 pt-2 rounded-3xl"
        onClick={() => setShowDropdown(!showDropdown)}
      />
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded border border-gray-300">
          <div className="flex justify-center flex-col px-4 py-8">
            <span className="text-2xl block px-4 py-1 text-gray-800">John Doe</span>
            <span className="text-sm text-gray-600">(dojoohnnn@gmail.com)</span>
          </div>
          <hr />
          <Link
            to="/reset_password"
            className="block px-4 py-2 text-gray-800 hover:bg-purple-900 hover:text-white"
            onClick={() => setShowDropdown(false)}
          >
            Change Password
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 text-gray-800 hover:bg-purple-900 hover:text-white"
            onClick={() => setShowDropdown(false)}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
