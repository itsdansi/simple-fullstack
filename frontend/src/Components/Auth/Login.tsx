import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginUser = async (e: any) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    try {
      const jsonData = JSON.parse(data);
      if (!jsonData) {
        window.alert("Login failed!");
        console.log("Login failed!");
      } else {
        window.alert("Login successfully!");
        console.log("Login successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log("Error parsing JSON response", error);
      window.alert("Error logging user. Please try again later.");
    }
  };

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
            <label className="block mb-2 text-purple-600" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 mb-6 text-purple-800 border-b-2 border-purple-600 outline-none focus:bg-gray-300"
              type="text"
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form-submit cursor-pointer w-full hover:bg-purple-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              onSubmit={LoginUser}
            />
          </div>
        </form>
        <footer>
          <Link
            className="text-purple-900 hover:text-indigo-700 text-sm float-left"
            to="/forget_password"
          >
            Forgot Password?
          </Link>
          <Link
            className="text-purple-900 hover:text-indigo-700 text-sm float-right"
            to="/signup"
          >
            Don't have account?
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Login;
