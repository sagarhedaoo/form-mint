"use client";
import FormUI from "@/app/edit-form/_component/FormUI";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LivePreview = ({ params }) => {
  const [record, setRecord] = useState();
  const [jsonForm, setJsonForm] = useState([]);

  useEffect(() => {
    params && getFormData();
  }, [params]);

  const getFormData = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(
        eq(JsonForms.id, Number(params.formid))
        // eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
      );
    setRecord(result[0]);
    setJsonForm(JSON.parse(result[0].jsonform));
    console.log(result);
    console.log(JSON.parse(result[0].jsonform));
  };
  return (
    <div
      className="p-10 flex justify-center items-start h-screen w-screen"
      style={{ backgroundImage: record?.background }}
    >
      {record && (
        <FormUI
          jsonForm={jsonForm}
          onFieldUpdate={() => console.log}
          deleteField={() => console.log}
          selectedBorder={record?.style}
          selectedTheme={record?.theme}
          editable={false}
          preview={false}
          formId={record.id}
          // enableSignIn={record?.enableSignIn}
        />
      )}

      <Link
        href={process.env.NEXT_PUBLIC_VERCEL_URL}
        target="_blank"
        className="flex gap-2 items-center px-3 py-1 fixed bottom-5 left-5 cursor-pointer border border-black rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 duration-300 hover:scale-110"
      >
        <Image src={"/logo.svg"} width={50} height={20} alt="Logo" />
        Create your own form
      </Link>
    </div>
  );
};

export default LivePreview;
