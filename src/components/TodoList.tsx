"use client";
import { Trash2 } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { resetTodo } from "@/store/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todoArray } = useSelector((state) => state?.todo);

  return (
    <>
      {todoArray?.length > 0 && (
        <div className="border border-black mt-10 p-5 rounded-md">
          {todoArray?.map((item, i) => (
            <p
              key={i}
              className="bg-gray-950 mb-2 text-white py-2 px-4 rounded-md flex items-center justify-between"
            >
              {item?.todo}
              <Trash2
                size={18}
                className="hover:text-red-500 cursor-pointer duration-200"
              />
            </p>
          ))}
          <Button onClick={() => dispatch(resetTodo())} variant="destructive">
            Reset todo
          </Button>
        </div>
      )}
    </>
  );
};

export default TodoList;
