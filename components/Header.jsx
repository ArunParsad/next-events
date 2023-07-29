import React from "react";
import Container from "./Container";
import Button from "./Button";
import Link from "next/link";
const Header = () => {
  return (
    <Container>
      <nav className="h-full w-full mt-5 flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/images/logo.png" alt="logo" className="w-[3rem]" />
            <h2 className="text-xl">
              <span className="font-bold">Next</span> Events
            </h2>
          </div>
        </Link>

        <Link href={"/events"}>
          <Button>Events</Button>
        </Link>
      </nav>
    </Container>
  );
};

export default Header;
