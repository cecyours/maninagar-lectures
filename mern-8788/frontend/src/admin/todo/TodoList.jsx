import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import { Pen, Trash } from "lucide-react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await axiosInstance.get("/todos");
      setTodos(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/todos", { title });

      fetchTodos();
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await axiosInstance.delete(`/todos/${id}`);
      console.log(res.data);
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            className="border rounded-xl px-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="bg-yellow-300 px-2 py-1 rounded-xl">Create</button>
        </form>
      </div>

      <ul>
        {todos.map((todo, i) => (
          <div
            key={todo._id}
            className="flex items-center gap-3 justify-between border border-gray-300 my-1 p-1 bg-blue-100 "
          >
            <div>
              <li>{todo.title}</li>
            </div>
            <div className="flex gap-2 ">
              <button onClick={() => handleDelete(todo._id)}>
                <Trash className="w-4 h-4" />
              </button>
              <button>
                <Pen className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;