import { Input } from "@/components/ui/input";
import React from "react";
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

// formTitle, formSubheading and form having formField, formName, fieldName, placeholderName, and formLabel, fieldType, fieldRequired
const FormUI = ({ jsonForm, onFieldUpdate, deleteField, selectedTheme }) => {
  console.log(jsonForm);
  return (
    <div
      className="border p-5 md:w-[600px] rounded-lg"
      data-theme={selectedTheme}
    >
      {/* Width changes later */}
      {/* data-theme="cyberpunk" */}
      <h2 className="font-bold text-center text-2xl">{jsonForm.formTitle}</h2>
      <h2 className="text-sm text-gray-600 text-center">
        {jsonForm.formSubheading}
      </h2>

      {jsonForm?.form?.map((field, index) => (
        <div key={index} className="flex items-center gap-2">
          {field?.fieldType == "select" ? (
            <div className="my-3 w-full">
              <label className="text-xs">{field?.formLabel}</label>
              <Select>
                <SelectTrigger className="w-full bg-transparent">
                  <SelectValue placeholder={field?.placeholderName} />
                </SelectTrigger>
                <SelectContent>
                  {field?.options.map((item, index) => (
                    <SelectItem key={index} value={item?.value}>
                      {item?.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : field?.fieldType == "radio" ? (
            <div className="my-3 w-full">
              <label className="text-xs">{field?.formLabel}</label>
              <RadioGroup>
                {field?.options.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.label} id={item.label} />
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
                    <Checkbox />
                    <h2>{item?.label}</h2>
                  </div>
                ))
              ) : (
                <div className="my-3 w-full">
                  <h1 className="text-sm">{field?.placeholderName}</h1>
                  <div className="flex gap-2 items-center">
                    <Checkbox />
                    <h2>{field?.formLabel}</h2>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="my-3 w-full">
              <label className="text-xs">{field?.formLabel}</label>
              <Input
                type={field?.fieldType}
                placeholder={field?.placeholderName}
                name={field?.fieldName}
              />
            </div>
          )}
          <div>
            <FieldEdit
              defaultValue={field}
              onUpdate={(value) => onFieldUpdate(value, index)}
              deleteField={() => deleteField(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormUI;
