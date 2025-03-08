import { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { RadioGroup } from "../ui/radio-group";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    role: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between max-w-7xl mx-auto mt-20">
        <div>
          <h4 className="font-bold text-3xl mb-5">
            Things you can do <br />
            with DreamHouse
          </h4>
          <ul className="ml-5 text-muted-foreground list-disc">
            <li className="text-lg mb-2">Post one Single Property for FREE</li>
            <li className="text-lg mb-2">
              Set property alerts for your requirement
            </li>
            <li className="text-lg mb-2">Get accessed by over 1 Lakh buyers</li>
            <li className="text-lg mb-2">
              Showcase your property as Rental, PG or for Sale
            </li>
            <li className="text-lg mb-2">
              Get instant queries over Phone, Email and SMS
            </li>
            <li className="text-lg mb-2">
              Performance in search & Track responses & views online
            </li>
            <li className="text-lg mb-2">
              Add detailed property information & multiple photos per listing
            </li>
          </ul>
        </div>
        <form
          onSubmit={submitHandler}
          className="bg-slate-200 w-1/2 border border-gray-300 rounded-2xl p-4 my-10 backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold mb-5">Login</h1>
          <div className="my-5">
            <Label className="text-lg mb-5">Signup as</Label>
            <RadioGroup
              defaultValue="tenant"
              className="flex gap-2 justify-start ml-5"
            >
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="tenant"
                  checked={input.role === "tenant"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label>Tenant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="landlord"
                  checked={input.role === "landlord"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label>Landlord</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="my-5">
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="E-mail"
            />
          </div>

          <div className="my-5">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>
          <div className="">
            <Button className="cursor-pointer" variant="link">
              Clear
            </Button>

            <Button
              type="submit"
              className="cursor-pointer bg-slate-600 hover:bg-slate-800"
            >
              Submit
            </Button>
          </div>
          <span className="mt-10 flex gap-2 justify-center">
            New to DreamHomes?
            <Link className="text-slate-800 hover:text-slate-950" to="/signup">
              Regiser here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
