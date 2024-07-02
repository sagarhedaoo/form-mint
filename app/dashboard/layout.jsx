"use client";
import { SignIn } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import SideNav from "./_components/SideNav";

const DashboardLayout = ({ children }) => {
  return (
    <SignedIn>
      <div>
        {/* <div className="md:w-64 fixed">
          <SideNav />
        </div> */}

        <div className="w-screen">{children}</div>
      </div>
    </SignedIn>
  );
};

export default DashboardLayout;
