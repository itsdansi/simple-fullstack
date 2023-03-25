import "./App.css";
import Login from "./Components/Auth/Login";
import {Route, Routes} from "react-router-dom";
import SignUp from "./Components/Auth/SignUp";
import ResetPassword from "./Components/Auth/ResetPassword";
import ForgetPassword from "./Components/Auth/ForgetPassword";

// import UpdateToDo from "./Components/Todo/UpdateTodo";
// import Accordian from "./Components/Todo/Accordian";
import Home from "./Components/Home";
import {ListTodo} from "./Components/Todo/ListTodo";
import NotFoundPage from "./Components/NotFoundPage";
import UpdateToDo from "./Components/Todo/UpdateTodo";
import {Table} from "./Components/Table";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/forget_password" element={<ForgetPassword />} />
        <Route path="/todo" element={<ListTodo />} />
        <Route path="/update_todo" element={<UpdateToDo />} />
        <Route path="/reports" element={<Table />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
