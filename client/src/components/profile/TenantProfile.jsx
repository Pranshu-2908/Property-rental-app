import React, { useState } from "react";
import { useSelector } from "react-redux";
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

const TenantProfile = () => {
  const { rentedProps } = useSelector((store) => store.property);
  const { user } = useSelector((store) => store.auth) || {};
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [maintenanceRequests, setMaintenanceRequests] = useState(
    user?.maintenanceRequests || [
      {
        _id: "placeholder2",
        issue: "No Maintenance Requests Yet",
        status: "N/A",
      },
    ]
  );

  // Handle submitting a new maintenance request
  const handleSubmit = () => {
    if (description.trim() === "") return;
    const newRequest = {
      _id: Date.now().toString(),
      issue: description,
      status: "Pending", // Default status
    };
    setMaintenanceRequests([...maintenanceRequests, newRequest]);
    setDescription("");
    setOpen(false);
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
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the issue..."
                />
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
            {maintenanceRequests.map((request) => (
              <div
                key={request._id}
                className="border border-gray-300 rounded-lg p-4 shadow-md flex justify-between"
              >
                <h3 className="text-lg font-semibold">{request.issue}</h3>
                <Badge className="bg-yellow-400 text-black">
                  {request.status}
                </Badge>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TenantProfile;
