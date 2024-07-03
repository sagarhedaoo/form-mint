import { Button } from "@/components/ui/button";
import React from "react";
import CreateForm from "./_components/CreateForm";
import FormList from "./_components/FormList";
import DashboardFooter from "./_components/DashboardFooter";
import Image from "next/image";

const page = ({ countValue }) => {
  return (
    <div className="p-10 ">
      <div className="font-bold justify-between text-2xl flex items-center gap-3">
        Dashboard
        <CreateForm />
      </div>

      {/* List of Forms */}
      <div className="flex flex-col justify-between items-start w-full">
        {" "}
        <FormList />
        <DashboardFooter />
      </div>
    </div>
  );
};

export default page;
