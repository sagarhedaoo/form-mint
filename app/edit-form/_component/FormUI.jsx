"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import FieldEdit from "./FieldEdit";
import ShinyButton from "@/app/_magicuiComponents/shiny-button";
import { userResponses } from "@/configs/schema";
import moment from "moment";
import { db } from "@/configs";
import { toast } from "@/components/ui/use-toast";
import { usePathname } from "next/navigation";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

// formTitle, formSubheading and form having formField, formName, fieldName, placeholderName, and formLabel, fieldType, fieldRequired
const FormUI = ({
  jsonForm,
  onFieldUpdate,
  deleteField,
  selectedTheme,
  selectedBorder,
  editable = true,
  preview = true,
  formId = 0,
  enableSignIn = false,
}) => {
  const path = usePathname();
  var datetime = new Date();
  const [formData, setFormData] = useState({});
  const [displayConfetti, displayedConfetti] = useState(false);
  let formRef = useRef();

  const { user, isSignedIn } = useUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input changed:", name, value); // Debugging line
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (fieldLabel, itemName, value) => {
    console.log(fieldLabel, itemName, value);
    const list = formData?.[fieldLabel] ? formData?.[fieldLabel] : [];
    console.log(list);

    if (value) {
      list.push({
        label: itemName,
        value: value,
      });
      setFormData({
        ...formData,
        [fieldLabel]: list,
      });
    } else {
      const result = list.filter((item) => item.label == itemName);
      setFormData({
        ...formData,
        [fieldLabel]: result,
      });
    }
    // console.log(result);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form data on submit:", formData); // Debugging line

    const result = await db.insert(userResponses).values({
      jsonResponse: formData,
      createdDate: moment().format("DD-MM-YYYY"),
      formRef: formId,
    });

    if (result) {
      toast({
        title: "Response saved successfully !",
        description: datetime.toISOString().slice(0, 10),
      });
      formRef.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <form
      ref={(e) => (formRef = e)}
      onSubmit={onFormSubmit}
      className="border p-5 md:w-[600px] rounded-lg"
      style={{ border: selectedBorder }}
      data-theme={selectedTheme}
    >
      {/* Width changes later */}
      {/* data-theme="cyberpunk" */}
      {path.includes("form-preview") ? (
        <div className="font-bold text-center text-2xl mb-2">
          <ShinyButton text={"PREVIEW ONLY, NOT FOR DISTRIBUTION"} />
        </div>
      ) : (
        <div></div>
      )}

      <h2 className="font-bold text-center text-2xl">{jsonForm.formTitle}</h2>
      <h2 className="text-sm text-gray-600 text-center">
        {jsonForm.formSubheading}
      </h2>
      <div className="h-fit">
        {jsonForm?.form?.map((field, index) => (
          <div key={index} className="flex items-center gap-2">
            {field?.fieldType == "select" ? (
              <div className="my-3 w-full">
                <label className="text-xs">{field?.formLabel}</label>
                <Select required={field?.fieldRequired}>
                  <SelectTrigger className="w-full bg-transparent">
                    <SelectValue placeholder={field?.placeholderName} />
                  </SelectTrigger>
                  <SelectContent>
                    {field?.options.map((item, index) => (
                      <SelectItem
                        key={index}
                        value={item?.value}
                        onValueChange={(v) =>
                          handleSelectChange(field.formLabel, item.value)
                        }
                      >
                        {item?.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ) : field?.fieldType == "radio" ? (
              <div className="my-3 w-full">
                <label className="text-xs">{field?.formLabel}</label>
                <RadioGroup required={field?.fieldRequired}>
                  {field?.options.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={item.label}
                        id={item.label}
                        onClick={() =>
                          handleSelectChange(field.formLabel, item.label)
                        }
                      />
                      <Label htmlFor={item.label}>{item.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ) : field?.fieldType == "checkbox" ? (
              <div className="my-3 w-full ">
                <label className="text-xs">{field?.formLabel}</label>
                {field?.options ? (
                  field?.options?.map((item, index) => (
                    <div className="flex gap-2  items-center" key={index}>
                      <Checkbox
                        onCheckedChange={(v) =>
                          handleCheckboxChange(field.formLabel, item.label, v)
                        }
                      />
                      <h2>{item?.label}</h2>
                    </div>
                  ))
                ) : (
                  <div className="my-3 w-full">
                    <h1 className="text-sm">{field?.placeholderName}</h1>
                    <div className="flex gap-2 items-center">
                      <Checkbox required={field?.fieldRequired} />
                      <h2>{field?.formLabel}</h2>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="my-3 w-full">
                <label className="text-xs">{field?.formLabel}</label>
                <Input
                  // className="input-class"
                  type={field?.fieldType}
                  placeholder={field?.placeholderName}
                  name={field?.formName}
                  required={field?.fieldRequired}
                  onChange={(e) => handleInputChange(e)}
                  className="bg-transparent"
                />
              </div>
            )}
            {editable && (
              <div>
                <FieldEdit
                  defaultValue={field}
                  onUpdate={(value) => onFieldUpdate(value, index)}
                  deleteField={() => deleteField(index)}
                />
              </div>
            )}
          </div>
        ))}

        {isSignedIn && enableSignIn ? (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        ) : (
          <Button>
            <SignInButton mode="modal">Sign in to submit</SignInButton>
          </Button>
        )}
      </div>
    </form>
  );
};

export default FormUI;
