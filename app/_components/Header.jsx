"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user, isSignedIn } = useUser();
  const path = usePathname();

  const imageClick = () => {
    window.location = "/";
  };

  const getStartedClick = () => {
    window.location = "/sign-in";
  };

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    !path.includes("form-preview") && (
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
              <Link href={"/dashboard"}>
                <Button variant="outline">Dashboard</Button>
              </Link>
              <UserButton />
            </div>
          ) : (
            <Button
              className="cursor-pointer"
              onClick={() => getStartedClick()}
            >
              Get Started
            </Button>
          )}
        </div>
      </div>
    )
  );
};

export default Header;
