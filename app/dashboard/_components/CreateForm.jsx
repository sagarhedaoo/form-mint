"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlaceholdersAndVanishInput } from "@/app/_acternityComponents/ui/placeholders-and-vanish-input";

const CreateForm = () => {
  const placeholders = [
    "Create a user registration form that includes fields for name, email, password, and confirm password. Include validation rules for email and password strength",
    "Generate a feedback survey form for a local cafe. Include questions about the quality of food, service speed, cleanliness, and overall experience. Provide options for ratings and a free text area for additional comments",
    "Design an event registration form for a tech conference. Include fields for participant's name, company, job title, email, and choices for workshops. Also, add a section for special dietary requirements",
    "Create a membership renewal form for a sports club. Include personal information fields, membership type selection, payment options, and a section for additional comments or requests",
    "Develop a volunteer signup form for a community clean-up event. Request the volunteer's name, contact information, available dates, and any special skills or equipment they can bring",
  ];

  const [userInput, setUserInput] = useState();

  const onSubmit = (e) => {
    console.log(userInput);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>+ Create Form</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">
              Write prompt for your form
            </DialogTitle>
            <DialogDescription>
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={(e) => setUserInput(e.target.value)}
                onSubmit={() => onSubmit()}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateForm;
