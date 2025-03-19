import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const filterData = [
  {
    filterType: "Location",
    arr: ["Ahmedabad", "Vadodara", "Surat", "Anand"],
  },
  {
    filterType: "BHK",
    arr: ["1bhk", "2bhk", "3bhk", "4bhk", "5bhk+"],
  },
  {
    filterType: "Rent",
    arr: ["0-10K", "10k-20k", "20k-30k", "30k-40k", "40k-50k", "50k+"],
  },
];

const FilterCard = () => {
  return (
    <div className="flex flex-col gap-3 border-2 border-gray-400 rounded-2xl p-2 bg-purple-100 items-center">
      <h1 className="text-lg"> Filter Properties</h1>
      <hr className="my-3 border-black w-full" />

      <div>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-slate-700">Location</SelectLabel>
              <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
              <SelectItem value="Vadodara">Vadodara</SelectItem>
              <SelectItem value="Surat">Surat</SelectItem>
              <SelectItem value="Anand">Anand</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select BHK" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-slate-700">Location</SelectLabel>
              <SelectItem value="1">1 bhk</SelectItem>
              <SelectItem value="2">2 bhk</SelectItem>
              <SelectItem value="3">3 bhk</SelectItem>
              <SelectItem value="4">4 bhk</SelectItem>
              <SelectItem value="5">5 bhk or more</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select rent range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-slate-700">Location</SelectLabel>
              <SelectItem value="10">0-10k</SelectItem>
              <SelectItem value="20">10k-20k</SelectItem>
              <SelectItem value="30">20k-30k</SelectItem>
              <SelectItem value="40">30k-40k</SelectItem>
              <SelectItem value="50">40k-50k</SelectItem>
              <SelectItem value="60">50k Plus</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterCard;
