"use client";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ResponseFormList from "./_component/ResponseFormList";

const Responses = () => {
  const { user } = useUser();
  const [formList, setFormList] = useState([]);

  useEffect(() => {
    user && getFormList();
  }, [user]);

  const getFormList = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress));

    setFormList(result);
    console.log(result);
  };
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl flex items-center ">Responses</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-3 gap-5">
        {formList.map((form, index) => (
          <div key={index}>
            <ResponseFormList
              jsonForm={JSON.parse(form?.jsonform)}
              formRecord={form}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Responses;
