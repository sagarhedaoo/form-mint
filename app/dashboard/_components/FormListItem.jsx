import { Button } from "@/components/ui/button";
import { Edit, Share, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
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
import { JsonForms } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { toast } from "@/components/ui/use-toast";

export const FormListItem = ({ formRecord, jsonForm, refreshData }) => {
  var datetime = new Date();
  const { user } = useUser();
  const onDeleteForm = async () => {
    const result = await db
      .delete(JsonForms)
      .where(
        and(
          eq(JsonForms.id, formRecord.id),
          eq(JsonForms.createdBy, user?.primaryEmailAddress.emailAddress)
        )
      );

    if (result) {
      toast({
        title: `Form ${formRecord.id} Deleted`,
        description: datetime.toISOString().slice(0, 10),
      });
      refreshData();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };
  return (
    <div>
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-18   bg-white dark:bg-zinc-900">
        <div className="flex justify-between items-center mb-2">
          {/* Uncomment after deployment */}
          {/* <p className="text-base sm:text-xl mt-2 text-black dark:text-neutral-200">
            <LinkPreview url={"/form-preview/" + formRecord?.id}>
              {jsonForm?.formTitle}
            </LinkPreview>
          </p> */}

          <p className="text-base sm:text-xl mt-2 text-black dark:text-neutral-200">
            {jsonForm?.formTitle}
          </p>

          <AlertDialog>
            <AlertDialogTrigger>
              <Trash className="w-5 h-5 text-red-500 cursor-pointer hover:scale-105 transition-all" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => onDeleteForm()}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 ">
          {jsonForm?.formSubheading}
        </p>

        <hr className="my-2" />

        <div className="flex gap-3 justify-end items-center mt-4">
          <Link href={"/edit-form/" + formRecord?.id} target="_blank">
            <ButtonsCard className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]  bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
              Edit
              <Edit className="w-5 h-4" />
            </ButtonsCard>
          </Link>

          <ButtonsCard className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]  bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
            Share
            <Share className="w-5 h-4" />
          </ButtonsCard>
        </div>
      </BackgroundGradient>
    </div>

    // <div className="border shadow-sm rounded-lg p-4">
    //   <div className="flex justify-between">
    //     <h2></h2>
    //     <h2>
    //       <Trash className="h-5 w-5 text-red-600" />
    //     </h2>
    //   </div>
    //   <h2 className="text-black">{jsonForm?.formTitle}</h2>
    //   <h2 className="text-sm text-gray-400">{jsonForm?.formSubheading}</h2>
    //   <hr className="my-4" />
    //   <div className="flex justify-between">
    //     <Button variant="outline" size="sm" className="flex gap-2">
    //       {" "}
    //       <Share className="h-5 w-5" /> Share
    //     </Button>
    //     <Link href={"/edit-form/" + formRecord?.id} target="_blank">
    //       <Button size="sm" className="flex gap-2">
    //         {" "}
    //         <Edit className="h-5 w-5" /> Edit
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
  );
};
