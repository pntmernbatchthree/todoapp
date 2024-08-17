import Container from "@/components/Container";
import TodoList from "@/components/TodoList";
import React from "react";

const TodoPage = () => {
  return (
    <Container className="max-w-xl mx-auto">
      <h2 className="text-xl font-semibold underline underline-offset-2 decoration-[1px]">
        TodoPage
      </h2>
      <TodoList />
    </Container>
  );
};

export default TodoPage;
