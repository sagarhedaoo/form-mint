"use client";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import FormUI from "../_component/FormUI";
import { toast } from "@/components/ui/use-toast";
import Controller from "../_component/Controller";

const EditForm = ({ params }) => {
  const { user } = useUser();
  const [jsonForm, setJsonForm] = useState([]);
  const router = useRouter();
  const [updateTrigger, setUpdateTrigger] = useState();

  const [record, setRecord] = useState([]);

  const [selectedTheme, setSelectedTheme] = useState("light");

  var datetime = new Date();
  useEffect(() => {
    user && getFormData();
  }, [user]);

  const getFormData = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(
        and(
          eq(JsonForms.id, params.formId),
          eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );

    console.log(JSON.parse(result[0].jsonform));
    setJsonForm(JSON.parse(result[0].jsonform));
    setRecord(result[0]);
  };

  useEffect(() => {
    if (updateTrigger) {
      setJsonForm(jsonForm);
    }
  }, [updateTrigger]);

  const updateJsonFormInDb = async () => {
    const result = await db
      .update(JsonForms)
      .set({
        jsonform: jsonForm,
      })
      .where(
        and(
          eq(JsonForms.id, record.id),
          eq(JsonForms.createdBy, user?.primaryEmailAddress.emailAddress)
        )
      )
      .returning({ id: JsonForms.id });

    toast({
      title: "Updated Form !!",
      description: datetime.toISOString().slice(0, 10),
    });

    console.log(result);
  };

  const deleteField = (indexToRemove) => {
    const result = jsonForm.form.filter(
      (item, index) => index != indexToRemove
    );
    jsonForm.form = result;
    setUpdateTrigger(Date.now());
    updateJsonFormInDb();
  };

  const onFieldUpdate = (value, index) => {
    jsonForm.form[index].formLabel = value.label;
    jsonForm.form[index].placeholderName = value.placeholder;

    console.log(jsonForm);
    setUpdateTrigger(Date.now());
    updateJsonFormInDb();
  };
  return (
    <div className="p-10">
      <h2
        className="flex gap-2 items-center my-5 cursor-pointer hover:font-bold"
        onClick={() => router.back()}
      >
        <ArrowLeft /> Back
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="p-5 border rounded-lg shadow-sm">
          <Controller selectedTheme={(value) => setSelectedTheme(value)} />
        </div>

        <div className="md:col-span-2 border rounded-lg p-5 h-full flex justify-center ">
          <FormUI
            jsonForm={jsonForm}
            selectedTheme={selectedTheme}
            onFieldUpdate={onFieldUpdate}
            deleteField={(index) => deleteField(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
