import React from "react";
import { Button } from "../ui/button";
import { Bookmark, Expand } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const Pro = () => {
  return (
    <div className="shadow-xl bg-gray-100 flex border-2 border-gray-400 rounded-md">
      <img
        src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
        alt="my name is"
        className="w-[25%] m-3 border-2 border-slate-800 rounded-md"
      />
      <div className="flex-4/5 p-5">
        <div className="flex justify-between">
          <p>2 days ago</p>
          <Button variant="outline" className="rounded-full">
            <Bookmark />
          </Button>
        </div>
        <div>
          <h1 className="font-bold text-lg my-4">Title</h1>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt
            ut totam dolores repellendus . Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quas, vitae veniam illum natus illo
            nisi aperiam blanditiis ab, quidem ut delectus? Repellat, excepturi
            sapiente iure debitis culpa sint quia eveniet nesciunt omnis? Quidem
            consequuntur molestiae dicta sit vero? Aperiam, voluptatum?
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Badge
            className={
              "text-blue-700 font-bold text-md border-2 border-gray-400"
            }
            variant="ghost"
          >
            2 bhk
          </Badge>
          <Badge
            className={
              "text-red-700 font-bold text-md border-2 border-gray-400"
            }
            variant="ghost"
          >
            family
          </Badge>
          <Badge
            className={
              "text-purple-700 font-bold text-md border-2 border-gray-400"
            }
            variant="ghost"
          >
            Available
          </Badge>
        </div>
      </div>
      <div className="flex-1/5 bg-gray-300 content-center">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-2xl flex gap-2">
              $10000
              <Expand size="16" className="my-auto" />
            </span>
            <span className="text-md">Security deposit</span>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Button>Contact Owner</Button>
            <Button>Make Offer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro;
