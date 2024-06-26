import { Delete, Edit, Trash } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const FieldEdit = ({ defaultValue }) => {
  const [label, setLabel] = useState();
  const [placeholder, setPlaceholder] = useState();

  return (
    <div className="flex gap-2">
      <Popover>
        <PopoverTrigger>
          {" "}
          <Edit className="h-5 w-5 text-gray-500 cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent>
          <h2>Edit Fields</h2>
          <div>
            <label className="text-xs">Label</label>
            <Input
              type="text"
              defaultValue={defaultValue.formLabel}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs">Placeholder</label>
            <Input
              type="text"
              defaultValue={defaultValue.placeholderName}
              onChange={(e) => setPlaceholder(e.target.value)}
            />
          </div>
        </PopoverContent>
      </Popover>

      <Trash className="h-5 w-5 text-red-500 cursor-pointer" />
    </div>
  );
};

export default FieldEdit;
