import { Search } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="text-center pt-10">
      <div className="flex flex-col gap-10 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-slate-100 text-red-600">
          No. 1 Property Rental Management System
        </span>
        <h1 className="text-6xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-purple-600 ">Dream House</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nam
          quas nisi maxime! Ipsum, consectetur?
        </p>
        <div className="flex w-[40%] shadow-2xl border-1 border-slate-700 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your Dream House"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-purple-800">
            <Search className="h-10 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
