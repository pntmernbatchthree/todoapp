import React from "react";
import Container from "./Container";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-950 text-gray-300 sticky top-0 z-50">
      <Container className="flex items-center justify-between">
        <Link
          href={"/"}
          className="text-lg font-semibold hover:text-white duration-200 uppercase"
        >
          TodoApp
        </Link>
        <div className="flex items-center gap-x-5 font-medium">
          <Link href={"/todo"} className="hover:text-white duration-200">
            Todo
          </Link>
          <Link href={"/settings"} className="hover:text-white duration-200">
            Settings
          </Link>
          <Link href={"/todo"} className="hover:text-white duration-200">
            Contact
          </Link>
          <Link href={"/todo"} className="hover:text-white duration-200">
            Others
          </Link>
        </div>
        <div>Theme</div>
      </Container>
    </div>
  );
};

export default Header;
