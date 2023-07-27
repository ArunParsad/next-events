import React from "react";
import Container from "./Container";
import Button from "./Button";
const Header = () => {
  return (
    <Container>
      <nav className="h-full w-full mt-5 flex justify-between items-center">
        <div className="flex items-center space-x-2 ml-5 cursor-pointer">
          <img src="/images/logo.png" alt="logo" className="w-[3rem]" />
          <h2 className="text-xl">
            <span className="font-bold">Next</span> Events
          </h2>
        </div>
        <Button>Events</Button>
      </nav>
    </Container>
  );
};

export default Header;
