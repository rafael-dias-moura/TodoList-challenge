import React, { FC} from "react";
import { ITodo } from "../interfaces";

import "./index.css";

interface Props {
  todo: ITodo;
  key: string;
  completeTodo:(_id: string) => void;
  deleteTodo: (_id: string) => void;
  
}

const TodoList: FC<Props> = ({ todo, key, completeTodo, deleteTodo }: Props) => {
  const todoComplete = (): void => {
    if (!todo.completed) {
      completeTodo(todo._id);
    }
  };

  const todoDelete = (): void => {
    deleteTodo(todo._id);
  };

  return (
    <div key={key} className="todo">
      <h1
        onClick={todoComplete}
        style={
          todo.completed ? { pointerEvents: "none" } : { cursor: "pointer" }
        }
      >
        {todo.completed ? (
          <span style={{ textDecorationLine: "line-through" }}>
            {todo.task}
          </span>
        ) : (
          todo.task
        )}
      </h1>
      {todo.completed ? (
        <button type="button" onClick={todoDelete}>
          Delete
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TodoList;