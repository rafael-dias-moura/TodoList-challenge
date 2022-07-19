import React, { FC, FormEvent, useState } from "react";

import "./index.css";

interface Props {
  addTodo(todo: string): void;
}

const TodoForm: FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");
  const [select, setSelect ] = useState<string>("active");

  const handleTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="todoForm" onSubmit={handleTodo}>
      <div className="form-group">
        <input
          type="text"
          name="todo"
          placeholder="O que precisa ser feito?"
          autoComplete="off"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Add" />
      </div>
      <div className="selector">
        <button type="button" onClick={() => setSelect("all")}>Todos</button>
        <button type="button" onClick={() => setSelect("active")}>Pendentes</button>
        <button type="button" onClick={() => setSelect("completed")}>Feitos</button>
      </div>
    </form>
  );
};

export default TodoForm;