import { useEffect, useState } from "react";

export function NewTest() {
    const initialData = {
        title: '',
        complete: ''
    };
    const [resu, setResu] = useState(initialData);

    const updateApiState = (json) => {
        const obj = {
            title: json.title,
            complete: json.completed
        };
        setResu(obj);
        console.log(obj);
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => updateApiState(json))

    }, [])
    return <>
        <h1>{resu.title}</h1>
        <p>{resu.complete}</p>
    </>
}