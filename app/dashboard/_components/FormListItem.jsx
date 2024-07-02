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
import { RWebShare } from "react-web-share";

export const FormListItem = ({ formRecord, jsonForm }) => {
  var datetime = new Date();
  const { user } = useUser();

  const onDeleteForm = async (e) => {
    console.log(user?.primaryEmailAddress?.emailAddress);
    const result = await db
      .delete(JsonForms)
      // .from(JsonForms)
      .where(
        and(
          eq(JsonForms.id, formRecord.id),
          eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );

    if (result) {
      toast({
        title: `Form ${formRecord.id} Deleted`,
        description: datetime.toISOString().slice(0, 10),
      });
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };
  return (
    <div className="h-screen">
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-18   bg-white dark:bg-zinc-900">
        <div className="flex justify-between items-center gap-4 mb-2">
          {/* Uncomment after deployment */}
          {/* <p className="text-base sm:text-xl mt-2 text-black dark:text-neutral-200">
            <LinkPreview url={"/form-preview/" + formRecord?.id}>
              {jsonForm?.formTitle}
            </LinkPreview>
          </p> */}

          <p className="text-base text-black dark:text-neutral-200">
            {jsonForm?.formTitle}
          </p>
          <div>
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
                  <AlertDialogAction onClick={(e) => onDeleteForm(e)}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 ">
          {jsonForm?.formSubheading}
        </p>

        <hr className="my-2" />

        <div className="flex gap-3 justify-end items-center mt-3">
          <Link href={"/edit-form/" + formRecord?.id} target="_blank">
            <ButtonsCard className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]  bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
              Edit
              <Edit className="w-5 h-4" />
            </ButtonsCard>
          </Link>

          <RWebShare
            data={{
              text: jsonForm?.formSubheading + ", Built with AI Form Builder",
              url:
                process.env.NEXT_PUBLIC_VERCEL_URL +
                "form-final/" +
                formRecord?.id,
              title: jsonForm?.formTitle,
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <ButtonsCard className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]  bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
              Share
              <Share className="w-5 h-4" />
            </ButtonsCard>
          </RWebShare>
          {/* <ButtonsCard className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]  bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
            Share
            <Share className="w-5 h-4" />
          </ButtonsCard> */}
        </div>
      </BackgroundGradient>
    </div>
  );
};
