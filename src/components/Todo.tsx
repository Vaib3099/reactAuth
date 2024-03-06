import { title } from "process";
import { useEffect, useState } from "react";

interface InitialData {
    title: string;
    isDone: boolean;
}
const initialTodo = {
    title: "",
    isDone: false
}
export function Todo() {
    const [id, setId] = useState(null);
    const [todos, setTodos] = useState([] as InitialData[]);
    const [todo, setTodo] = useState(initialTodo as InitialData);

    const handelClick = (e: any) => {
        //console.log(id);
        if (id != null) {
            let val = [...todos];
            val[id]['title'] = todo.title;

            setTodos(val);
            localStorage.setItem("todos", JSON.stringify(todos));
            setId(null);

            setTodo({ ...todo, ['title']: '' });
            //console.log(val);
        } else {
            setTodos([...todos, todo]);
            setTodo({ ...todo, ['title']: '' });
            localStorage.setItem("todos", JSON.stringify([...todos, todo]));
        }

    }
    //setTodos(localtodo);
    const handelChange = (e: any) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value,
        });
        //console.log('todo', todo);
    }
    const handeldelete = (id: any) => {
        console.log(todos[id]);
        //delete(todos[id]);
        let val = todos.filter((item, index) => index !== id);
        setTodos(val);
        localStorage.setItem("todos", JSON.stringify(val));
        //console.log(val);
    }
    const handeledit = (id: any) => {
        let val = todos.filter((item, index) => index == id);
        setTodo(val[0]);
        setId(id);
        console.log(val);
    }
    useEffect(() => {
        let localtodo: InitialData[] | null = JSON.parse(localStorage.getItem("todos") || "[]");
        //console.log(localtodo);
        setTodos(localtodo!);

    }, [])
    return <>
        <h2>Todo</h2>
        <div className="title-entry">
            <input type="text" name="title" value={todo.title} onChange={handelChange} />
            <button onClick={handelClick}>Add</button>
        </div>

        <div className="item-wrap">
            {
                todos.map((ele: any, id: any) => (

                    <div className="items" key={id} style={{ width: '500px' }}>
                        <p className="title">{ele.title}</p>
                        <button onClick={() => handeledit(id)} style={{ marginLeft: 'auto', marginRight: '7px' }}>Edit</button>
                        <button onClick={() => handeldelete(id)}>Delete</button>
                    </div>

                ))
            }
        </div>
    </>
}