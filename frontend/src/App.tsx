import React, { FC, useEffect, useState } from "react";
import { ITodo } from "./components/interfaces";
import axios from "axios";
import TodoForm from "./components/TodoForm";

import "./App.css";
import TodoList from "./components/TodoList";

const App: FC = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    function getList() {
        axios.get('http://localhost:3001/').then((res) => setTodoList(res.data));
    }
    
    const addTodo = async (todo: string): Promise<void> => {
        if (!todo) {
            alert("please write todo!");
            return;
        }
        const data: Omit<ITodo, "_id"> = {
            task: todo,
            completed: false,
        };

        const saveTodo = await axios.post(
            'http://localhost:3001/',
            data
        );
        setTodoList([...todoList, saveTodo.data]);

    };
    const completeTodo = async (_id: string): Promise<void> => {
            await axios.put(
            `http://localhost:3001/${_id}`,{
                completed: true
            });
            setTodoList(
            todoList.map(
                (task: ITodo): ITodo =>
                    task._id === _id
                        ? Object.assign(task, { completed: true }) && task
                        : task
            )
        );
        alert("Nice job!"); 
    };

    const deleteTodo = async (_id: string): Promise<void> => {
        await axios.delete(
            'http://localhost:3001/'+_id
        )
        setTodoList(
            todoList.filter((task: ITodo): ITodo | null =>
                task._id !== _id ? task : null
            )
        );
        alert("Todo deleted successfully!");
    };

    useEffect(() => {
        getList()
    }, [])
    return (
        <div className="app">

            <div className="container">
                <TodoForm addTodo={addTodo} />
                <div className="todoList">
                    {
                        todoList.map((todo) => {
                            return (<TodoList
                                todo={todo}
                                key={todo._id}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                            />);
                        })}
                </div>
            </div>
        </div>
    );
};

export default App; 