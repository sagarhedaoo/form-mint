import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="p-5 border-b shadow-sm sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between">
        <Image src={"/logo.svg"} alt="Logo" width={50} height={25} />
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
