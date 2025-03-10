import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { RadioGroup } from "../ui/radio-group";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/contains";
import { toast } from "sonner";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/signup`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.status == "success") {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto mt-20">
        <form
          onSubmit={submitHandler}
          className=" w-1/3 border border-gray-300 rounded-2xl p-4 my-10 backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold mb-5">Sign Up</h1>
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
              type="text"
              name="name"
              value={input.name}
              onChange={changeEventHandler}
              placeholder="Full Name"
            />
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
          <div className="my-5">
            <Input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirm"
              value={input.passwordConfirm}
              onChange={changeEventHandler}
            />
          </div>
          <Button
            type="submit"
            className="cursor-pointer bg-slate-900 hover:bg-slate-600 w-full"
          >
            Submit
          </Button>
          <span className="mt-10 flex gap-2 justify-center">
            Already registered?
            <Link className="text-slate-600 hover:text-blue-600" to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
