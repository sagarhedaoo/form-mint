"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user, isSignedIn } = useUser();

  const imageClick = () => {
    window.location = "/";
  };

  const getStartedClick = () => {
    window.location = "/sign-in";
  };

  return (
    <div className="p-5 border-b shadow-sm sticky top-0 z-50 bg-white ">
      <div className="flex items-center justify-between">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={50}
          height={25}
          onClick={() => imageClick()}
          className="cursor-pointer"
        />
        {isSignedIn ? (
          <div className="flex items-center gap-5">
            <Button variant="outline">Dashboard</Button>
            <UserButton />
          </div>
        ) : (
          <Button className="cursor-pointer" onClick={() => getStartedClick()}>
            Get Started
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
