import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({userName: "", email: "", password: ""});
  const navigate = useNavigate();
  let name, value;

  const handelInputs = (e: any) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]: value});
  };

  const Register = async (e: any) => {
    e.preventDefault();

    const {userName, email, password} = user;

    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    });

    // const response = await fetch(url, options);
    const data = await response.json();
    try {
      console.log(data);
      const jsonData = JSON.parse(JSON.stringify(data));

      if (data.status === 500 || !jsonData) {
        window.alert("Invalid Registration!");
        console.log("Invalid Registration!");
      } else if (data.status === 409) {
        window.alert("Email already used!");
        console.log("Email already used!");
      } else {
        console.log("-----", data);

        window.alert("User registered successfully!");
        console.log("User registered successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error parsing JSON response", error);
      window.alert("Error registering user. Please try again later.");
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
            <label className="block mb-2 text-purple-600" htmlFor="userName">
              Full Name
            </label>
            <input
              className="w-full p-2 mb-6 text-purple-800 border-b-2 border-purple-600 outline-none focus:bg-gray-300"
              type="text"
              name="userName"
              value={user.userName}
              onChange={handelInputs}
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
              value={user.email}
              onChange={handelInputs}
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
              value={user.password}
              onChange={handelInputs}
            />
          </div>
          <div>
            <input
              className="form-submit cursor-pointer w-full hover:bg-purple-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              onClick={Register}
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
