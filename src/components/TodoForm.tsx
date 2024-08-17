"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Trash2, X } from "lucide-react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    if (todo) {
      dispatch(addTodo({ todo: todo }));
      setTodo("");
    }
  };

  return (
    <div className="max-w-xl mt-5">
      <form onClick={handleSubmit} className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Input
            type="text"
            className="w-full pr-8 text-base font-semibold"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {todo && (
            <X
              onClick={() => setTodo("")}
              size={20}
              className="absolute top-3 right-2 hover:text-red-600 cursor-pointer duration-200"
            />
          )}
        </div>
        <Button disabled={!todo} type="submit">
          Submit
        </Button>
      </form>
      <TodoList />
    </div>
  );
};

export default TodoForm;
