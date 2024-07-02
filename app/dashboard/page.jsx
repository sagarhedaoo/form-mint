import { Button } from "@/components/ui/button";
import React from "react";
import CreateForm from "./_components/CreateForm";
import FormList from "./_components/FormList";
import DashboardFooter from "./_components/DashboardFooter";

const page = () => {
  return (
    <div className="p-10 ">
      <h2 className="font-bold text-2xl flex items-center justify-between">
        Dashboard
        <CreateForm />
      </h2>
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
