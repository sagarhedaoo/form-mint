import { Button } from "@/components/ui/button";
import { Edit, Share, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

export const FormListItem = ({ formRecord, jsonForm }) => {
  return (
    <div className="border shadow-sm rounded-lg p-4">
      <div className="flex justify-between">
        <h2></h2>
        <h2>
          <Trash className="h-5 w-5 text-red-600" />
        </h2>
      </div>
      <h2 className="text-black">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-400">{jsonForm?.formSubheading}</h2>
      <hr className="my-4" />
      <div className="flex justify-between">
        <Button variant="outline" size="sm" className="flex gap-2">
          {" "}
          <Share className="h-5 w-5" /> Share
        </Button>
        <Link href={"/edit-form/" + formRecord?.id} target="_blank">
          <Button size="sm" className="flex gap-2">
            {" "}
            <Edit className="h-5 w-5" /> Edit
          </Button>
        </Link>
      </div>
    </div>
  );
};
