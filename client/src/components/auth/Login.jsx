import { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { RadioGroup } from "../ui/radio-group";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/contains";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    role: "",
    password: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
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
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className=" w-1/3 border border-gray-200 rounded-2xl p-4 my-10 backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold mb-5">Login</h1>
          <div className="my-5">
            <Label className="text-lg">Login as</Label>
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
          {loading ? (
            <Button className="w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              loging in...
            </Button>
          ) : (
            <Button
              type="submit"
              className="cursor-pointer bg-slate-900 hover:bg-slate-600 w-full"
            >
              Submit
            </Button>
          )}

          <span className="mt-5 flex gap-2 justify-center">
            New to DreamHomes?
            <Link className="text-slate-600 hover:text-blue-600" to="/signup">
              Regiser here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
