import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Todo } from "./Todo";
import Login  from "./Auth/Login";
import Register from "./Auth/Register";
import { NewTest } from "./NewTest";


export function AllRoutes(){
    return <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/new" element={<NewTest />}></Route>
        </Routes>
    </>
}