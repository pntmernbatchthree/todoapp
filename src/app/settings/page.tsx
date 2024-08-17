"use client";

import Container from "@/components/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import { resetTodo } from "@/store/todoSlice";
import { useDispatch } from "react-redux";

const SettingPage = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button variant="destructive" onClick={() => dispatch(resetTodo())}>
        Delete all todo
      </Button>
    </Container>
  );
};

export default SettingPage;
