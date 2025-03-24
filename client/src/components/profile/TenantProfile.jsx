import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { toast } from "sonner";
import { setLoading } from "../../redux/authSlice";
import axios from "axios";
import { MAINTENANCE_API_END_POINT } from "../../utils/contains";
import { setNewReq } from "../../redux/maitenanceSlice";
import { useNavigate } from "react-router-dom";

const TenantProfile = () => {
  const { allReq } = useSelector((store) => store.maintenance);
  const { rentedProps } = useSelector((store) => store.property);
  const [open, setOpen] = useState(false);
  const [inputData, setInputData] = useState({
    property: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="flex flex-col gap-10">
      {/* Rented Properties Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Rented Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentedProps.length > 0 ? (
            rentedProps.map((property) => (
              <Card key={property._id} className="shadow-lg">
                <CardContent className="p-4">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <Badge className="mt-2">₹{property.price} / month</Badge>
                </CardContent>
              </Card>
            ))
          ) : (
            <div>No rented Properties</div>
          )}
        </div>
      </section>

      {/* Maintenance Requests Section */}
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

export default TenantProfile;
