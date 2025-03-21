import React from "react";
import { Button } from "../ui/button";
import { Bookmark, Expand } from "lucide-react";
import { Badge } from "../ui/badge";

const Pro = ({ prop }) => {
  return (
    <div className="shadow-xl bg-purple-200 flex flex-col lg:flex lg:flex-row border-2 border-gray-400 rounded-md">
      <img
        src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
        alt="my name is"
        className="m-3 border-2 border-slate-800 rounded-md lg:w-[25%]"
      />
      <div className="flex-4/5 p-5">
        <div className="flex justify-between">
          <p>2 days ago</p>
          <Button variant="outline" className="rounded-full">
            <Bookmark />
          </Button>
        </div>
        <div>
          <h1 className="font-bold text-2xl ">{prop.title}</h1>
          <p className="text-base mb-4 text-gray-600">{prop.location}</p>
          <p className="hidden sm:inline text-sm text-gray-600">
            {prop.description}
          </p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 mt-4 mx-auto">
          <Badge
            className={
              "text-blue-700 font-bold text-xs border-2 border-gray-400 hover:scale-110 transition-all duration-300"
            }
            variant="ghost"
          >
            2 bhk
          </Badge>
          <Badge
            className={
              "text-red-700 font-bold text-xs border-2 border-gray-400 hover:scale-110 transition-all duration-300"
            }
            variant="ghost"
          >
            {prop.tenantsPrefferd}
          </Badge>
          <Badge
            className={
              "text-purple-700 font-bold text-xs border-2 border-gray-400 hover:scale-110 transition-all duration-300"
            }
            variant="ghost"
          >
            {prop.available ? "Available" : "Not Available"}
          </Badge>
        </div>
      </div>
      <div className="flex-1/5 bg-purple-300 content-center p-5 sm:p-10">
        <div className="flex lg:flex-col gap-8 items-center justify-evenly">
          <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center">
            <span className="font-bold text-2xl flex gap-2">
              $10000
              <Expand size="16" className="my-auto" />
            </span>
            <span className="text-md hidden lg:inline">Security deposit</span>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 items-center justify-center">
            <Button className="cursor-pointer">Contact Owner</Button>
            <Button className="cursor-pointer">Make Offer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro;
