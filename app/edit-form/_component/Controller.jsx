import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Themes from "@/app/_data/Themes";
import GradientBg from "@/app/_data/GradientBg";
import { Button } from "@/components/ui/button";
import Style from "@/app/_data/Style";
import { Checkbox } from "@/components/ui/checkbox";

const Controller = ({
  selectedTheme,
  selectedBackground,
  selectedBorder,
  setSignInEnable,
}) => {
  const [showMore, setShowMore] = useState(6);
  return (
    <div>
      <h2 className="my-1"> Theme</h2>
      {/* Theme Selection */}
      <Select onValueChange={(value) => selectedTheme(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {Themes.map((theme, index) => (
            <SelectItem value={theme.theme} key={index}>
              <div className="flex gap-3">
                <div className="flex">
                  <div
                    className="h-5 w-5 rounded-l-md"
                    style={{ backgroundColor: theme.primary }}
                  ></div>
                  <div
                    className="h-5 w-5 "
                    style={{ backgroundColor: theme.secondary }}
                  ></div>
                  <div
                    className="h-5 w-5"
                    style={{ backgroundColor: theme.accent }}
                  ></div>
                  <div
                    className="h-5 w-5 rounded-r-md"
                    style={{ backgroundColor: theme.neutral }}
                  ></div>
                </div>
                {theme.theme}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Background Gradient selection */}

      <h2 className="mt-8 my-1">Background</h2>
      <div className="grid grid-cols-3 gap-5">
        {GradientBg.map(
          (bg, index) =>
            index < showMore && (
              <div
                key={index}
                onClick={() => {
                  selectedBackground(bg.gradient);
                }}
                className="w-full h-[60px] rounded-lg hover:border-black hover:border-2 flex items-center justify-center cursor-pointer"
                style={{ background: bg.gradient }}
              >
                {index == 0 && "None"}
              </div>
            )
        )}
      </div>

      <Button
        onClick={() => setShowMore(showMore > 6 ? 6 : 20)}
        variant="ghost"
        className="w-full my-3"
        size="sm"
      >
        {showMore > 6 ? "Show Less" : "Show More"}
      </Button>

      <h2 className="mt-8 my-1">Style</h2>
      <div className="grid grid-cols-2 gap-5">
        {Style.map((item, index) => (
          <div
            key={index}
            className="w-full h-[60px] rounded-lg hover:border-black hover:border-dashed hover:border-2 flex items-center justify-center cursor-pointer"
            onClick={() => selectedBorder(item.value)}
            // style={{ border: item.value }}
          >
            {item.name}
          </div>
        ))}
      </div>
      {/* <div className="flex gap-2 my-4 items-center mt-10">
        <Checkbox onCheckedChange={(e) => setSignInEnable(e)} />
        <h2>Enable authentication</h2>
      </div> */}
    </div>
  );
};

export default Controller;
