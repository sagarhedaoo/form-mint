"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../_acternityComponents/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Library } from "lucide-react";

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
          AI Form Builder
          <div>
            <Navbar className="top-2" />
          </div>
          {isSignedIn ? (
            <div className="flex items-center gap-5">
              <Link href={"/dashboard"}>
                <Button className="cursor-pointer" variant="outline">
                  Dashboard
                </Button>
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

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Forms</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Forms">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="My Forms"
              href={process.env.NEXT_PUBLIC_BASE_URL + "dashboard"}
              src="/dashboard.png"
              description="Create amazing forms"
            />
            <ProductItem
              title="Responses"
              href={process.env.NEXT_PUBLIC_BASE_URL + "dashboard/responses"}
              src="/dashboard.png"
              description="View your form responses"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Analytics">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">To-Do</HoveredLink>
            {/* <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Upgrade">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">To-Do</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
