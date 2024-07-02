import { Button } from "@/components/ui/button";
import { Edit, Loader2, Share, Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BackgroundGradient } from "@/app/_acternityComponents/ui/background-gradient";
import { ButtonsCard } from "@/app/_acternityComponents/ui/tailwindcss-buttons";
import { LinkPreview } from "@/app/_acternityComponents/ui/link-preview";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs";
import { JsonForms, userResponses } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { toast } from "@/components/ui/use-toast";
import { RWebShare } from "react-web-share";
import { writeXLSX } from "xlsx";
// import xlsx from "node-xlsx";
import * as XLSX from "xlsx";

const ResponseFormList = ({ jsonForm, formRecord }) => {
  let jsonData = [];
  const [loading, setLoading] = useState(false);
  const exportData = async () => {
    setLoading(true);
    const result = await db
      .select()
      .from(userResponses)
      .where(eq(userResponses.formRef, formRecord.id));
    if (result) {
      result.forEach((item) => {
        const jsonItem = JSON.parse(item.jsonResponse);
        jsonData.push(jsonItem);
      });
      setLoading(false);
    }
    console.log(jsonData);
    exportToExcel(jsonData);
    // console.log(result);
  };

  return (
    <div className="my-5">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-18 bg-white dark:bg-zinc-900">
        <div className="flex justify-between items-center mb-2">
          {/* Uncomment after deployment */}
          {/* <p className="text-base sm:text-xl mt-2 text-black dark:text-neutral-200">
                <LinkPreview url={"/form-preview/" + formRecord?.id}>
                  {jsonForm?.formTitle}
                </LinkPreview>
              </p> */}

          <p className="text-base  mt-2 text-black dark:text-neutral-200">
            {jsonForm?.formTitle}
          </p>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 ">
          {jsonForm?.formSubheading}
        </p>

        <hr className="my-3" />

        <div className="flex justify-between items-center">
          <h2 className="text-sm">
            <strong>45</strong> Responses
          </h2>
          <ButtonsCard
            onClick={() => exportData()}
            disabled={loading}
            className=" cursor-pointer shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]  bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear"
          >
            <div className="flex justify-center items-center">
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Export to Excel"
              )}
              <Edit className="w-5 h-4" />
            </div>
          </ButtonsCard>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default ResponseFormList;
