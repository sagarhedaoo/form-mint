import { Button } from "@/components/ui/button";
import { Library, LineChart, MessageSquareMore, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: Library,
      path: "/dashboard",
    },
    {
      id: 1,
      name: "Responses",
      icon: MessageSquareMore,
      path: "/dashboard/responses",
    },
    {
      id: 1,
      name: "Analytics",
      icon: LineChart,
      path: "/dashboard/analytics",
    },
    {
      id: 1,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    // console.log(path);
  }, [path]);
  return (
    <div className="h-screen shadow-md border">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className={`flex items-center gap-3 p-4 hover:bg-primary hover:text-white rounded-lg cursor-pointer mb-3 ${
              path == menu.path && "bg-primary text-white"
            }`}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-5 p-6 w-64">
        <Button className="w-full">+ Create Form</Button>
        <div className="my-7">
          <Progress value={33} />
          <h2 className="text-sm mt-2 text-gray-600">
            <strong>2 </strong>out of <strong>3</strong> File Created
          </h2>
          <h2 className="text-sm mt-3 text-gray-600">
            Upgrade your plan for unlimited AI form builder
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
