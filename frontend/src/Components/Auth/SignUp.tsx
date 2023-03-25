import {useState} from "react";
import {Link} from "react-router-dom";

function SignUp() {
  return (
    <div className="flex h-screen bg-purple-900">
      <div className="max-w-xs w-full m-auto bg-purple-200 rounded p-5">
        <header>
          <img
            className="w-20 mx-auto mb-5"
            src="https://img.icons8.com/fluent/344/year-of-tiger.png"
          />
        </header>
        <form method="POST">
          <div>
            <label className="block mb-2 text-purple-600" htmlFor="userName">
              Full Name
            </label>
            <input
              className="w-full p-2 mb-6 text-purple-800 border-b-2 border-purple-600 outline-none focus:bg-gray-300"
              type="text"
              name="userName"
            />
          </div>

          <div>
            <label className="block mb-2 text-purple-600" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-purple-800 border-b-2 border-purple-600 outline-none focus:bg-gray-300"
              type="text"
              name="email"
            />
          </div>

          <div>
            <label className="block mb-2 text-purple-600" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-purple-800 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
            />
          </div>
          <div>
            <input
              className="form-submit cursor-pointer w-full hover:bg-purple-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              // onClick={Register}
            />
          </div>
        </form>
        <footer>
          <Link
            className="text-purple-900 hover:text-indigo-700 text-sm float-right"
            to="/login"
          >
            Already have account?
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default SignUp;
