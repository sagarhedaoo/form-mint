"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import React, { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { desc, eq } from "drizzle-orm";

const DashboardFooter = () => {
  const { user } = useUser();

  const [formList, setFormList] = useState([]);
  const [percentageFileCreated, setPercentageFileCreated] = useState(0);

  useEffect(() => {
    user && getFormList();
  }, [user]);

  const getFormList = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(JsonForms.id));

    setFormList(result);
    console.log(result);

    const percent = (result.length / 3) * 100;
    console.log(percent);
    setPercentageFileCreated(percent);
  };

  return (
    <div className="sticky bottom-0 flex justify-end items-end w-full">
      <div className="bottom-0 p-6 ">
        <Button className="w-full cursor-pointer">+ Create Form</Button>
        <div className="my-7">
          <Progress value={percentageFileCreated} />
          <h2 className="text-sm mt-2 text-gray-600">
            <strong>{formList?.length} </strong>out of <strong>3</strong> File
            Created
          </h2>
          <h2 className="text-sm mt-3 text-gray-600">
            Upgrade your plan for unlimited AI form builder
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
