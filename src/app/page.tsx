import Container from "@/components/Container";
import TodoForm from "@/components/TodoForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home | Todo application",
};

const HomePage = () => {
  return (
    <Container>
      <h2 className="text-xl font-semibold underline underline-offset-2 decoration-[1px]">
        HomePage
      </h2>
      <TodoForm />
    </Container>
  );
};

export default HomePage;
