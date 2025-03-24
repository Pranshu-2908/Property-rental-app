import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../../redux/authSlice";
import axios from "axios";
import { MAINTENANCE_API_END_POINT } from "../../../utils/contains";
import { setNewReq } from "../../../redux/maitenanceSlice";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { RadioGroup } from "../../ui/radio-group";

const MaitenanceRequest = ({ rentedProps }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [inputData, setInputData] = useState({
    property: "",
    description: "",
  });

  const { allReq } = useSelector((store) => store.maintenance);
  const changeEventHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  // Handle submitting a new maintenance request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${MAINTENANCE_API_END_POINT}`, inputData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.status === "success") {
        dispatch(setNewReq(res.data.data.newRequest));
        navigate("/profile");
        toast.success(res.data.message);
      }
      setOpen(false);
      setInputData({
        property: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      {rentedProps.length > 0 ? (
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Maintenance Requests</h2>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-500 text-white">
                  Request Maintenance
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Submit Maintenance Request</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="my-5">
                    <Label className="text-lg">Choose Property</Label>
                    <RadioGroup
                      defaultValue="tenant"
                      className="flex gap-2 justify-start ml-5"
                    >
                      {rentedProps.map((prop) => {
                        return (
                          <div
                            key={prop._id}
                            className="flex items-center space-x-2"
                          >
                            <Input
                              type="radio"
                              name="property"
                              value={prop._id}
                              checked={inputData.property === `${prop._id}`}
                              onChange={changeEventHandler}
                              className="cursor-pointer size-4"
                            />
                            <Label>{prop.title}</Label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                  <Textarea
                    name="description"
                    value={inputData.description}
                    onChange={changeEventHandler}
                    placeholder="Describe the issue..."
                  />
                </form>
                <DialogFooter>
                  <Button
                    onClick={handleSubmit}
                    className="bg-green-500 text-white"
                  >
                    Submit
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col gap-4">
            {allReq.length > 0 ? (
              allReq.map((request) => (
                <div
                  key={request._id}
                  className="border border-gray-300 rounded-lg p-4 shadow-md flex justify-between"
                >
                  <h3 className="text-lg font-semibold">
                    {request.description}
                  </h3>
                  <Badge className="bg-yellow-400 text-black">
                    {request.status}
                  </Badge>
                </div>
              ))
            ) : (
              <div>No maintenance request yet!!</div>
            )}
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MaitenanceRequest;
