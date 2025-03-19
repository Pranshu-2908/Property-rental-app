import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { House, HouseIcon, LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <nav className="container flex items-center justify-between  mx-auto mt-2">
      <div>
        <div className="flex gap-4 lg:gap-6 sm:gap-2">
          <HouseIcon className="w-8 h-8 sm:h-6 sm:w-6 lg:w-12 lg:h-12" />
          <h1 className="text-3xl font-bold sm:text-2xl lg:text-5xl">
            Dream<span className="text-purple-600">Homes</span>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 sm:gap-2 lg:gap-12">
        <ul className="flex text-xl items-center gap-8 sm:gap-4 lg:gap-12 sm:text-lg lg:text-2xl">
          <li>
            <Link to="/" className="hover:text-violet-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/property" className="hover:text-violet-700">
              Explore Properties
            </Link>
          </li>
        </ul>
        {!user ? (
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button
                variant="outline"
                className="text-lg cursor-pointer sm:text-sm lg:text-lg"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-purple-800 hover:bg-slate-900 text-white text-lg cursor-pointer sm:text-sm lg:text-lg">
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quae, maiores.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-slate-600">
                  <div className="flex w-fit items-center cursor-pointer">
                    <User2 />
                    <Button variant="link">
                      <Link to="/profile">View Profile</Link>
                    </Button>
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
    </nav>
  );
};

export default Navbar;
