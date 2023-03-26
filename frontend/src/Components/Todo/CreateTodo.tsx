import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function CreateToDo() {
  const [task, setTask] = useState({title: "", summary: "", userId: ""});
  const navigate = useNavigate();
  let name, value;

  const handelInputs = (e: any) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setTask({...task, [name]: value});
  };

  const AddTask = async (e: any) => {
    e.preventDefault();

    const {title, summary, userId} = task;

    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        summary,
        userId,
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
        navigate("/tasks");
      }
    } catch (error) {
      console.log("Error parsing JSON response", error);
      window.alert("Error logging user. Please try again later.");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-5">Todo List</h1>
      <form method="POST" className="w-full max-w-sm mb-20 ">
        <input
          className="border border-gray-400 rounded-lg p-2 w-full mb-1"
          type="text"
          placeholder="Add a todo title"
          name="title"
          value={task.title}
          onChange={handelInputs}
        />
        <textarea
          className="border border-gray-400 rounded-lg p-2 w-full"
          placeholder="Add todo description"
          name="summary"
          value={task.summary}
          onChange={handelInputs}
        />
        <button
          onSubmit={AddTask}
          className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg"
        >
          Add
        </button>
      </form>
    </>
  );
}
