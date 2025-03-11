import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  let user = false;
  return (
    <div>
      <div className="flex items-center justify-between ml-30 mr-15 max-w-full h-16 ">
        <div>
          <h1 className="text-5xl font-bold">
            Dream<span className="text-red-600">Homes</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex text-2xl items-center gap-15">
            <li>
              <Link to="/" className="hover:text-violet-700">
                Home
              </Link>
            </li>
            <li>
              <Link>Explore Properties</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="text-lg">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-purple-800 hover:bg-slate-900 text-white text-sm">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer size-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 mr-2">
                <div>
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h2 className="font-medium">Pranshu Patel</h2>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quae, maiores.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-slate-600">
                    <div className="flex w-fit items-center cursor-pointer">
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </div>
                    <div className="flex w-fit items-center cursor-pointer">
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
